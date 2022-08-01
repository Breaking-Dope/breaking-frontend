import React, { useEffect, useState } from 'react';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import * as Style from 'pages/PostWrite/units/PostWriteSearchLocation.styles';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import PostWriteModal from './PostWriteModal';

const PostWriteSearchLocation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [map, setMap] = useState();
  const [info, setInfo] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [searchContent, setSearchContent] = useState('');

  const toggleModal = () => {
    setIsModalOpen((pre) => !pre);
  };

  const handleSearchInput = (event) => {
    setSearchContent(event.target.value);
  };

  const SearchMap = (event) => {
    event.preventDefault();
    const { kakao } = window;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchContent, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        setSearchResult(data);
        // let markers = [];
        for (var i = 0; i < data.length; i++) {
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  };

  useEffect(() => {
    map && map.relayout();
  }, [isModalOpen, map]);

  return (
    <>
      <Style.PostWriteTitle>
        위치
        <Style.FindLocationLayout>
          <LocationIcon />
          <Style.FindLocationMessage>현재 위치 찾기</Style.FindLocationMessage>
        </Style.FindLocationLayout>
      </Style.PostWriteTitle>

      <Style.LocationInput
        type="text"
        placeholder="주소를 입력하세요"
        onClick={toggleModal}
      />
      <PostWriteModal
        title="위치 찾기"
        isOpen={isModalOpen}
        closeClick={toggleModal}
      >
        <Map
          center={{
            // 지도의 중심좌표
            lat: 37.5666805,
            lng: 126.9784147,
          }}
          style={{
            // 지도의 크기
            width: '100%',
            height: '640px',
          }}
          level={8} // 지도의 확대 레벨
          onCreate={setMap} //map 객체를 받아옴
        >
          {searchResult.map((data) => (
            <MapMarker
              key={`marker-${data.place_name}-${data.y},${data.x}`}
              position={{ lat: data.y, lng: data.x }}
              onMouseOver={() => setInfo(data)}
            >
              {info && info.id === data.id && (
                <Style.SearchMarker>
                  <Style.PlaceName>{data.place_name}</Style.PlaceName>
                </Style.SearchMarker>
              )}
            </MapMarker>
          ))}
        </Map>
        <Style.SearchInformationSideBar>
          <Style.SearchForm onSubmit={SearchMap}>
            <Style.SearchInput
              icon={<SearchIcon />}
              onChange={handleSearchInput}
              value={searchContent}
              iconClick={SearchMap}
            />
          </Style.SearchForm>
          <Style.SearchResult>
            {searchResult.map((data, index) => (
              <Style.SearchItem key={data.id} onMouseOver={() => setInfo(data)}>
                <Style.PlaceName>
                  {index + 1 + '. ' + data.place_name}
                </Style.PlaceName>
                <Style.RoadAdressName>
                  {data.road_address_name}
                </Style.RoadAdressName>
                <Style.AdressName>(지번) {data.address_name}</Style.AdressName>
              </Style.SearchItem>
            ))}
          </Style.SearchResult>
        </Style.SearchInformationSideBar>
      </PostWriteModal>
    </>
  );
};

export default PostWriteSearchLocation;
