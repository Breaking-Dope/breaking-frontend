import React, { useEffect, useState } from 'react';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import * as Style from 'pages/PostWrite/units/PostWriteSearchLocation.styles';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import PostWriteModal from 'pages/PostWrite/units/PostWriteModal';
import PropTypes from 'prop-types';
import parseAddressName from 'utils/parseAddressName';

const PostWriteSearchLocation = ({ setPostWriteData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((pre) => !pre);
  };

  const [locationInputValue, setLocationInputValue] = useState('');

  const handleSearchInput = (event) => {
    setSearchContent(event.target.value);
  };

  const [map, setMap] = useState(); //map 객체
  const [mapCenterPosition, setMapCenterPosition] = useState({
    lat: 37.566810689783956,
    lng: 126.97866358173395,
  });

  const [markerInformation, setMarkerInformation] = useState({}); // marker 클릭시 보여주는 정보객체
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

  const SetCustomMarker = (lat, lng) => {
    // 클릭위치에 마커가 찍어지도록 state를 변경
    setMapCenterPosition({
      lat: lat,
      lng: lng,
    });
    geocoder.coord2Address(lng, lat, (addresses, status) => {
      if (status === 'OK') {
        setMarkerInformation({
          lat: lat,
          lng: lng,
          roadAddressName: addresses[0].road_address?.address_name,
          addressName: addresses[0].address.address_name,
        });
        setIsCustomMarker(true);
      }
    });
  };

  const getCurrentPosition = () => {
    //현재 위치를 가져옴
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsModalOpen(true);
        SetCustomMarker(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: false,
      }
    );
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

  const locationSubmit = () => {
    // parent의 form state를 받아와 결과값을 추가
    setLocationInputValue(markerInformation.addressName);
    setIsModalOpen(false);
    setPostWriteData((pre) => ({
      ...pre,
      location: {
        latitude: markerInformation.lat,
        longitude: markerInformation.lng,
        ...parseAddressName(markerInformation.addressName),
        address: markerInformation.addressName,
      },
    }));
  };

  const handleSearchEnterPress = (event) => {
    if (event.key === 'Enter') {
      SearchMap(event);
    }
  };

  useEffect(() => {
    map && map.relayout();
    map &&
      map.setCenter(
        new kakao.maps.LatLng(mapCenterPosition.lat, mapCenterPosition.lng)
      );

    // modal과 같이 display의 값이 바뀌는 곳에서는  map.relayout() 가 필요
  }, [isModalOpen, map]);

  return (
    <>
      <Style.PostWriteTitle>
        위치
        <Style.FindLocationLayout onClick={getCurrentPosition}>
          <LocationIcon />
          <Style.FindLocationMessage>현재 위치 찾기</Style.FindLocationMessage>
        </Style.FindLocationLayout>
      </Style.PostWriteTitle>

      <Style.LocationInput
        type="text"
        placeholder="주소를 입력하세요"
        onClick={toggleModal}
        value={locationInputValue}
        readOnly
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
          level={3} // 지도의 확대 레벨
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
            <>
              <MapMarker
                position={{
                  lat: markerInformation.lat,
                  lng: markerInformation.lng,
                }}
                clickable={true}
                onClick={locationSubmit}
              />
              <CustomOverlayMap
                position={{
                  lat: markerInformation.lat,
                  lng: markerInformation.lng,
                }}
                yAnchor="2.6"
              >
                <Style.SearchMarker>
                  {markerInformation?.addressName}
                </Style.SearchMarker>
              </CustomOverlayMap>
            </>
          )}
          {/*검색결과로 나오는 마커 */}
          {searchResult.map((data) => (
            <>
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
                onClick={locationSubmit}
              />
              {!isCustomMarker && (
                <CustomOverlayMap
                  position={{
                    lat: markerInformation?.lat,
                    lng: markerInformation?.lng,
                  }}
                  yAnchor="2.6"
                >
                  <Style.SearchMarker>
                    {markerInformation?.addressName}
                  </Style.SearchMarker>
                </CustomOverlayMap>
              )}
            </>
          ))}
        </Map>

        <Style.SearchInformationSideBar>
          <Style.SearchForm>
            <Style.SearchInput
              icon={<SearchIcon />}
              onChange={handleSearchInput}
              value={searchContent}
              iconClick={SearchMap}
              onKeyDown={handleSearchEnterPress}
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
                onClick={locationSubmit}
              >
                <Style.PlaceName>
                  {index + 1 + '. ' + data.place_name}
                </Style.PlaceName>
                <Style.RoadAddressName>
                  {data.road_address_name}
                </Style.RoadAddressName>
                <Style.AddressName>
                  (지번) {data.address_name}
                </Style.AddressName>
              </Style.SearchItem>
            ))}
          </Style.SearchResult>
        </Style.SearchInformationSideBar>
      </PostWriteModal>
    </>
  );
};

PostWriteSearchLocation.propTypes = {
  setPostWriteData: PropTypes.func,
};

export default PostWriteSearchLocation;
