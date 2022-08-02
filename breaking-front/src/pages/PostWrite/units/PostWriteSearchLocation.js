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
  const [mapCenterPosition, setMapCenterPosition] = useState({
    lat: 37.5666805,
    lng: 126.9784147,
  });

  const [markerInformation, setMarkerInformation] = useState(); // marker 클릭시 보여주는 정보객체
  /*
   {
    lat: "number"
    lng: "number"
    id: "number"
    placeName: "str" // 유저가 클릭했을때는 placeName이 없음
    addressName: "str"
    roadAddressName: "str" //없을시에는 빈 문자열
   }
   */
  const [isCustomMarker, setIsCustomMarker] = useState(false); // 유저가 맵을 클릭할시에 true로 변함

  const [searchResult, setSearchResult] = useState([]);
  const [searchContent, setSearchContent] = useState('');

  const { kakao } = window;
  const geocoder = new kakao.maps.services.Geocoder();

  const LocationSubmit = () => {
    // parent의 form state를 받아와 결과값을 추가
    console.log('클릭이당');
  };

  const coord2AdressCallback = (adresses, status) => {
    if (status === 'OK') {
      setMarkerInformation((pre) => ({
        ...pre,
        road_address: adresses[0].road_address?.address_name,
        address: adresses[0].address.address_name,
      }));
      setIsCustomMarker(true);
    }
  };

  const SetCustomMarker = (lat, lng) => {
    // 클릭위치에 마커가 찍어지도록 state를 변경
    setMarkerInformation({
      lat: lat,
      lng: lng,
    });
    geocoder.coord2Address(lng, lat, coord2AdressCallback);
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
          center={mapCenterPosition}
          isPanto={true}
          style={{
            // 지도의 크기
            width: '100%',
            height: '640px',
            borderRadius: '0px 0px 10px 10px',
          }}
          level={8} // 지도의 확대 레벨
          onCreate={setMap} //map 객체를 받아옴
          onClick={(_t, mouseEvent) => {
            // 맵을 클릭시에 실행되는 eventHandler
            SetCustomMarker(
              mouseEvent.latLng.getLat(),
              mouseEvent.latLng.getLng()
            );
          }}
        >
          {/*맵을 클릭했을때 나오는 마커 */}
          {isCustomMarker && (
            <MapMarker
              position={{
                lat: markerInformation.lat,
                lng: markerInformation.lng,
              }}
              clickable={true}
              onClick={LocationSubmit}
            >
              <Style.SearchMarker>
                <Style.PlaceName>{markerInformation?.address}</Style.PlaceName>
              </Style.SearchMarker>
            </MapMarker>
          )}
          {/*검색결과로 나오는 마커 */}
          {searchResult.map((data) => (
            <MapMarker
              key={`marker-${data.place_name}-${data.y},${data.x}`}
              position={{ lat: data.y, lng: data.x }}
              onMouseOver={() => {
                setIsCustomMarker(false);
                setMapCenterPosition({ lat: data.y, lng: data.x });
                setMarkerInformation({
                  lat: data.y,
                  lng: data.x,
                  id: data.id,
                  placeName: data.place_name,
                  addressName: data.address_name,
                  roadAddressName: data.road_address_name,
                });
              }}
              clickable={true}
              onClick={LocationSubmit}
            >
              {markerInformation && markerInformation?.id === data.id && (
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
                onMouseOver={() => {
                  setIsCustomMarker(false);
                  setMapCenterPosition({ lat: data.y, lng: data.x });
                  setMarkerInformation({
                    lat: data.y,
                    lng: data.x,
                    id: data.id,
                    placeName: data.place_name,
                    addressName: data.address_name,
                    roadAddressName: data.road_address_name,
                  });
                }}
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
