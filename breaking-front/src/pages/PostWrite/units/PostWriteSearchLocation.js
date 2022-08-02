import React, { useEffect, useState } from 'react';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import * as Style from 'pages/PostWrite/units/PostWriteSearchLocation.styles';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import PostWriteModal from './PostWriteModal';
import PropTypes from 'prop-types';

const PostWriteSearchLocation = ({ setForm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [map, setMap] = useState(); //map 객체

  const [searchMarkerInformation, setSearchMarkerInformation] = useState(); // marker 클릭시 보여주는 정보객체
  const [searchResult, setSearchResult] = useState([]);
  const [searchContent, setSearchContent] = useState('');

  const [clickMarkerInformation, setClickMarkerInformation] = useState(); //마우스로 지도를 클릭했을때 마커의 정보
  const { kakao } = window;
  const geocoder = new kakao.maps.services.Geocoder();

  const LocationSubmit = () => {
    // parent의 form state를 받아와 결과값을 추가
    console.log('클릭이당');
  };

  const latitudeLongitudeToAdress = (adresses) => {
    setClickMarkerInformation((pre) => ({
      ...pre,
      road_address: adresses[0].road_address,
      address: adresses[0].address,
    }));
  };

  const toggleModal = () => {
    setIsModalOpen((pre) => !pre);
  };

  const handleSearchInput = (event) => {
    setSearchContent(event.target.value);
  };

  const SearchMap = (event) => {
    event.preventDefault();
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchContent, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        setSearchResult(data);
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
    // modal과 같이 display의 값이 바뀌는 곳에서는  map.relayout() 가 필요
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
            borderRadius: '0px 0px 10px 10px',
          }}
          level={8} // 지도의 확대 레벨
          onCreate={setMap} //map 객체를 받아옴
          onClick={(_t, mouseEvent) => {
            setClickMarkerInformation({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            });
            geocoder.coord2Address(
              mouseEvent.latLng.getLng(),
              mouseEvent.latLng.getLat(),
              latitudeLongitudeToAdress
            );
          }}
        >
          {clickMarkerInformation && (
            <MapMarker
              position={clickMarkerInformation}
              clickable={true}
              onClick={LocationSubmit}
            >
              <Style.SearchMarker>
                <Style.AdressName>
                  지번: {clickMarkerInformation.address?.address_name}
                </Style.AdressName>
              </Style.SearchMarker>
            </MapMarker>
          )}

          {searchResult.map((data) => (
            <MapMarker
              key={`marker-${data.place_name}-${data.y},${data.x}`}
              position={{ lat: data.y, lng: data.x }}
              onMouseOver={() => setSearchMarkerInformation(data)}
              clickable={true}
              onClick={LocationSubmit}
            >
              {searchMarkerInformation &&
                searchMarkerInformation.id === data.id && (
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
              <Style.SearchItem
                key={data.id}
                onMouseOver={() => setSearchMarkerInformation(data)}
                onClick={LocationSubmit}
              >
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

PostWriteSearchLocation.propTypes = {
  setForm: PropTypes.object,
};

export default PostWriteSearchLocation;
