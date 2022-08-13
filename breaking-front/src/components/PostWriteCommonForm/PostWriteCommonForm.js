import React, { useState } from 'react';
import * as Style from 'components/PostWriteCommonForm/PostWriteCommonForm.styles';
import PostWriteSearchLocation from 'components/PostWriteCommonForm/SearchLocation/PostWriteSearchLocation';
import { useTheme } from 'styled-components';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

const PostWriteCommonForm = ({ onChangeData, data, setData }) => {
  const [isShowPriceInput, setIsShowPriceInput] = useState(false);
  const postPrivate = () => {
    setData((pre) => ({ ...pre, isAnonymous: true }));
  };
  const postPublic = () => {
    setData((pre) => ({ ...pre, isAnonymous: false }));
  };

  const handlePrice = (event) => {
    event.preventDefault();
    let price = Number(event.target.value);
    if (Number.isNaN(price)) return;
    setData((pre) => ({
      ...pre,
      price: price,
    }));
  };

  const toggleShowPriceInput = () => {
    setIsShowPriceInput((pre) => !pre);
  };

  const maxLengthCheck = ({ target }) => {
    if (target.value.length > target.maxLength) {
      target.value = target.value.slice(0, target.maxLength);
    }
  };
  return (
    <>
      <Style.OccurTimeLayout>
        <Style.PostWriteTitle>제보 발생 시간</Style.PostWriteTitle>
        <Style.DatePicker
          type="datetime-local"
          name="eventTime"
          value={data.eventTime}
          onChange={onChangeData}
        ></Style.DatePicker>
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
        ></Style.ContextTitleInput>
        <Style.ContextBodyTextArea
          placeholder="상황을 최대한 상세하게 기록해 주세요&#13;(상황, 시간, 사건 전개과정, 경과상태 등)&#13;&#10;최대 2000자"
          onChange={onChangeData}
          name="content"
          value={data.content}
        ></Style.ContextBodyTextArea>
      </Style.ContextLayout>

      <Style.PostTypeLayout>
        <Style.PostWriteTitle>제보 방식</Style.PostWriteTitle>
        <Button
          isSelected={'CHARGED' === data.postType}
          onClick={onChangeData}
          type="button"
          value="CHARGED"
          name="postType"
        >
          유료제보
        </Button>
        <Button
          isSelected={'FREE' === data.postType}
          type="button"
          onClick={onChangeData}
          value="FREE"
          name="postType"
        >
          무료제보
        </Button>
        <Button
          isSelected={'EXCLUSIVE' === data.postType}
          type="button"
          onClick={onChangeData}
          value="EXCLUSIVE"
          name="postType"
        >
          단독제보
        </Button>
      </Style.PostTypeLayout>

      <Style.PriceLayout postType={data.postType}>
        <Style.PostWriteTitle>제보 가격</Style.PostWriteTitle>
        <Style.PostPriceInput
          type="text"
          onInput={maxLengthCheck}
          maxLength="15"
          value={
            isShowPriceInput
              ? data.price
              : data.price.toLocaleString('ko-KR') + '원'
          }
          onChange={handlePrice}
          onBlur={toggleShowPriceInput}
          onFocus={toggleShowPriceInput}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              event.target.blur();
            }
          }}
        ></Style.PostPriceInput>
      </Style.PriceLayout>

      <Style.AnonymousLayout>
        <Style.PostWriteTitle>프로필을 공개하시겠습니까?</Style.PostWriteTitle>
        <Button
          isSelected={data.isAnonymous}
          type="button"
          onClick={postPrivate}
          value={true}
        >
          비공개
        </Button>
        <Button
          isSelected={!data.isAnonymous}
          type="button"
          onClick={postPublic}
          value={false}
        >
          공개
        </Button>
      </Style.AnonymousLayout>
    </>
  );
};

export const PostSubmitButton = ({ isMutateLoading, children }) => {
  const theme = useTheme();
  return isMutateLoading ? (
    <Style.Loading type="bars" color={theme.blue[900]} />
  ) : (
    <Style.PostSubmitButton type="submit">{children}</Style.PostSubmitButton>
  );
};

PostWriteCommonForm.propTypes = {
  onChangeData: PropTypes.func,
  data: PropTypes.object,
  setData: PropTypes.func,
};

PostSubmitButton.propTypes = {
  isMutateLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default PostWriteCommonForm;
