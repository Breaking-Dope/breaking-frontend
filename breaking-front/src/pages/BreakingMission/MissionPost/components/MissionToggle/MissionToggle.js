import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ShareModal from 'components/ShareModal/ShareModal';
import { PAGE_PATH } from 'constants/path';
import Toggle from 'components/Toggle/Toggle';
import * as Style from 'pages/BreakingMission/MissionPost/components/MissionToggle/MissionToggle.styles';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';

function MissionToggle({ isOpen, missionData, missionId }) {
  const [isOpenShareModal, setIsOpenShareModal] = useState(false);

  const toggleShareModal = () => {
    setIsOpenShareModal((pre) => !pre);
  };

  return (
    <>
      <ShareModal
        isOpen={isOpenShareModal}
        closeClick={toggleShareModal}
        data={missionData}
        path={PAGE_PATH.BREAKING_MISSION_POST(missionId)}
      />
      <Style.ContentToggle onMouseDown={(event) => event.preventDefault()}>
        {isOpen && (
          <Toggle width="100px">
            <Toggle.LabelLink
              icon={<ShareIcon />}
              label="공유"
              labelClick={toggleShareModal}
            />
          </Toggle>
        )}
      </Style.ContentToggle>
    </>
  );
}

MissionToggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  missionData: PropTypes.object.isRequired,
  missionId: PropTypes.string.isRequired,
};

export default MissionToggle;
