import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'pages/BreakingMission/MissionMap/components/MissionMapMarker.styles';

const MissionMapMarker = ({
  mapInformation,
  selectedMissionId,
  setSelectedMissionId,
}) => {
  return (
    <>
      <MapMarker
        position={{
          lat: mapInformation.latitude,
          lng: mapInformation.longitude,
        }}
        clickable={true}
        onClick={() => setSelectedMissionId(mapInformation.missionId)}
      />
      {selectedMissionId === mapInformation.missionId && (
        <CustomOverlayMap
          position={{
            lat: mapInformation.latitude,
            lng: mapInformation.longitude,
          }}
          yAnchor="2.6"
        >
          <Style.FeedUI>대충 내용</Style.FeedUI>
        </CustomOverlayMap>
      )}
    </>
  );
};

MissionMapMarker.propTypes = {
  mapInformation: PropTypes.object,
  setSelectedMissionId: PropTypes.func,
  selectedMissionId: PropTypes.number,
};

export default MissionMapMarker;
