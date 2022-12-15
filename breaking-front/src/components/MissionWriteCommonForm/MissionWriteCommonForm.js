import React from 'react';
import * as Style from 'components/MissionWriteCommonForm/MissionWriteCommonForm.styles';
import PropTypes from 'prop-types';
import PostWriteSearchLocation from 'components/PostWriteCommonForm/SearchLocation/PostWriteSearchLocation';
import { useTheme } from 'styled-components';

const MissionWriteCommonForm = ({ data, onChangeData, setData }) => {
  return (
    <>
      <Style.OccurTimeLayout>
        <Style.PostWriteTitle>미션 시작 시간</Style.PostWriteTitle>
        <Style.DatePicker
          type="datetime-local"
          name="eventDate"
          value={data.startTime}
          onChange={onChangeData}
        />
      </Style.OccurTimeLayout>
      <Style.OccurTimeLayout>
        <Style.PostWriteTitle>미션 종료 시간</Style.PostWriteTitle>
        <Style.DatePicker
          type="datetime-local"
          name="eventDate"
          value={data.endTime}
          onChange={onChangeData}
        />
      </Style.OccurTimeLayout>

      <Style.LocationLayout>
        <PostWriteSearchLocation location={data.location} setData={setData} />
      </Style.LocationLayout>

      <Style.ContextLayout>
        <Style.ContextTitleInput
          type="text"
          placeholder="제목을 입력하세요"
          value={data.title}
          onChange={onChangeData}
          name="title"
        />
        <Style.ContextBodyTextArea
          placeholder="미션 내용을 최대한 상세하게 기록해 주세요&#13;(미션에 필요한 사진, 중점으로 봐야할 내용 등)&#13;&#10;최대 2000자"
          onChange={onChangeData}
          name="content"
          value={data.content}
        />
      </Style.ContextLayout>
    </>
  );
};

export const MissionSubmitButton = ({ isMutateLoading, children }) => {
  const theme = useTheme();
  return isMutateLoading ? (
    <Style.Loading type="bars" color={theme.blue[900]} />
  ) : (
    <Style.PostSubmitButton type="submit">{children}</Style.PostSubmitButton>
  );
};

MissionWriteCommonForm.propTypes = {
  onChangeData: PropTypes.func,
  data: PropTypes.object,
  setData: PropTypes.func,
};

MissionSubmitButton.propTypes = {
  isMutateLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default MissionWriteCommonForm;
