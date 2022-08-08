import React, { useState } from 'react';
import * as Style from 'pages/PostWrite/PostWrite.styles';
import PostUploadMediaForm from 'pages/PostWrite/units/PostWriteUploadMediaForm';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import PostWriteSearchLocation from 'pages/PostWrite/units/PostWriteSearchLocation';
import useInputs from 'hooks/useInputs';
import { useMutation } from 'react-query';
import { postPostWrite } from 'api/postWrite';
import MESSAGE from 'constants/message';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import { useTheme } from 'styled-components';

const PostWrite = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isShowPriceInput, setIsShowPriceInput] = useState(false);
  const [mediaList, setMediaList] = useState([]);
  const [postWriteData, onChangePostWriteData, setPostWriteData] = useInputs({
    location: undefined,
    eventTime: dayjs().format('YYYY-MM-DDTHH:mm'),
    title: '',
    content: '',
    price: 0,
    postType: 'charged',
    isAnonymous: false,
    thumbnailIndex: 0,
  });

  const { mutate: PostWriteMutate, isLoading: isPostWriteMutating } =
    useMutation(postPostWrite, {
      onSuccess: () => {
        alert('작성되었습니다.');
        navigate(PAGE_PATH.HOME);
      },
      onError: (error) => {
        console.log(error);
        //에러처리
      },
    });

  const postWriteSubmit = (event) => {
    event.preventDefault();

    if (!postWriteData.location) {
      alert(MESSAGE.POST_WRITE.LOCATION_BLANK);
      return;
    } else if (postWriteData.title === '') {
      alert(MESSAGE.POST_WRITE.TITLE_BLANK);
      return;
    } else if (postWriteData.content === '') {
      alert(MESSAGE.POST_WRITE.CONTENT_BLANK);
      return;
    }

    const formData = new FormData();

    const hashtagList = postWriteData.content
      .match(/#[^\s#]+/g)
      ?.map((hashtag) => hashtag.replace('#', ''));

    for (let i = 0; i < mediaList.length; i++) {
      formData.append('mediaList', mediaList[i]);
    }

    formData.append(
      'data',
      JSON.stringify({
        ...postWriteData,
        hashtagList: hashtagList === undefined ? null : hashtagList,
        price: postWriteData.postType === 'free' ? 0 : postWriteData.price,
        eventTime: dayjs(postWriteData.eventTime).format('YYYY-MM-DD HH:mm:ss'),
      })
    );
    PostWriteMutate(formData);
  };

  const postPrivate = () => {
    setPostWriteData((pre) => ({ ...pre, isAnonymous: true }));
  };
  const postPublic = () => {
    setPostWriteData((pre) => ({ ...pre, isAnonymous: false }));
  };

  const handlePrice = (event) => {
    event.preventDefault();
    let price = Number(event.target.value);
    if (Number.isNaN(price)) return;
    setPostWriteData((pre) => ({
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
    <Style.Container>
      <form onSubmit={postWriteSubmit}>
        <PostUploadMediaForm setMediaList={setMediaList} />
        <Style.OccurTimeLayout>
          <Style.PostWriteTitle>제보 발생 시간</Style.PostWriteTitle>
          <Style.DatePicker
            type="datetime-local"
            name="eventTime"
            value={postWriteData.eventTime}
            onChange={onChangePostWriteData}
          ></Style.DatePicker>
        </Style.OccurTimeLayout>

        <Style.LocationLayout>
          <PostWriteSearchLocation setPostWriteData={setPostWriteData} />
        </Style.LocationLayout>

        <Style.ContextLayout>
          <Style.ContextTitleInput
            type="text"
            placeholder="제목을 입력하세요"
            onChange={onChangePostWriteData}
            name="title"
          ></Style.ContextTitleInput>
          <Style.ContextBodyTextArea
            placeholder="상황을 최대한 상세하게 기록해 주세요&#13;(상황, 시간, 사건 전개과정, 경과상태 등)&#13;&#10;최대 2000자"
            onChange={onChangePostWriteData}
            name="content"
          ></Style.ContextBodyTextArea>
        </Style.ContextLayout>

        <Style.PostTypeLayout>
          <Style.PostWriteTitle>제보 방식</Style.PostWriteTitle>
          <Style.PostRadioButton
            onClick={onChangePostWriteData}
            type="button"
            value="charged"
            name="postType"
            radioControl={postWriteData.postType}
          >
            유료제보
          </Style.PostRadioButton>
          <Style.PostRadioButton
            type="button"
            onClick={onChangePostWriteData}
            value="free"
            name="postType"
            radioControl={postWriteData.postType}
          >
            무료제보
          </Style.PostRadioButton>
          <Style.PostRadioButton
            type="button"
            onClick={onChangePostWriteData}
            value="exclusive"
            name="postType"
            radioControl={postWriteData.postType}
          >
            단독제보
          </Style.PostRadioButton>
        </Style.PostTypeLayout>

        <Style.PriceLayout postType={postWriteData.postType}>
          <Style.PostWriteTitle>제보 가격</Style.PostWriteTitle>
          <Style.PostPriceInput
            type="text"
            onInput={maxLengthCheck}
            maxLength="15"
            value={
              isShowPriceInput
                ? postWriteData.price
                : postWriteData.price.toLocaleString('ko-KR') + '원'
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
          <Style.PostWriteTitle>
            프로필을 공개하시겠습니까?
          </Style.PostWriteTitle>
          <Style.PostRadioButton
            onClick={postPrivate}
            value={true}
            radioControl={postWriteData.isAnonymous}
          >
            비공개
          </Style.PostRadioButton>
          <Style.PostRadioButton
            onClick={postPublic}
            value={false}
            radioControl={postWriteData.isAnonymous}
          >
            공개
          </Style.PostRadioButton>
        </Style.AnonymousLayout>

        {isPostWriteMutating ? (
          <Style.Loading type="bars" color={theme.blue[900]} />
        ) : (
          <Style.PostSubmitButton type="submit">
            제보 하기
          </Style.PostSubmitButton>
        )}
      </form>
    </Style.Container>
  );
};

export default PostWrite;
