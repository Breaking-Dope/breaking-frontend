import React, { useEffect, useState } from 'react';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import * as Style from 'pages/PostWrite/units/PostWriteSearchLocation.styles';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Modal from 'components/Modal/Modal';

const PostWriteSearchLocation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [map, setMap] = useState();
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [searchContent, setSearchContent] = useState('');

  const toggleModal = () => {
    setIsModalOpen((pre) => !pre);
  };

  const handleSearchInput = (event) => {
    setSearchContent(event.target.value);
  };

  const SearchMap = (event) => {
    event.preventDefault();

    console.log(event.target);
  };
  console.log(markers);

  useEffect(() => {
    map && map.relayout();
  }, [isModalOpen, map]);

  useEffect(() => {
    const { kakao } = window;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchContent, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [searchContent]);

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
      <Modal title="위치 찾기" isOpen={isModalOpen} closeClick={toggleModal}>
        <Map
          center={{
            // 지도의 중심좌표
            lat: 37.5666805,
            lng: 126.9784147,
          }}
          style={{
            // 지도의 크기
            width: '100%',
            height: '450px',
          }}
          level={8} // 지도의 확대 레벨
          onCreate={setMap}
        >
          {markers.map((marker) => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={() => setInfo(marker)}
            >
              {info && info.content === marker.content && (
                <div style={{ color: '#000' }}>{marker.content}</div>
              )}
            </MapMarker>
          ))}
        </Map>
        <form onSubmit={SearchMap}>
          <input
            onChange={handleSearchInput}
            value={searchContent}
            type="text"
          ></input>
          <input type="submit"></input>
        </form>
      </Modal>
    </>
  );
};

export default PostWriteSearchLocation;
