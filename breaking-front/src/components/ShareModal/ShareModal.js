import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import { PAGE_PATH } from 'constants/path';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import facebookImage from 'assets/img/facebook.png';
import twitterImage from 'assets/img/twitter.png';
import * as Style from 'components/ShareModal/ShareModal.styles';

export default function ShareModal({ data, postId, isOpen, closeClick }) {
  const url = window.location.origin + PAGE_PATH.POST(postId);

  const kakaoShareClick = () => {
    if (window.Kakao) {
      const { Kakao } = window;

      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: data.title,
          imageUrl: data?.mediaList
            ? `${ImageUrlConverter(data.mediaList[0])}`
            : `${ImageUrlConverter(data.thumbnailImgURL)}`,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        social: {
          viewCount: data.viewCount,
          likeCount: data.likeCount,
          commentCount: data.commentCount,
        },
      });
    }
  };

  const facebookShareClick = () => {
    const encodeUrl = encodeURIComponent(url);
    window.open(
      `http://www.facebook.com/sharer/sharer.php?u=${encodeUrl}&t=${data.title}`,
      'popup',
      'width=400, height=600'
    );
  };

  const twitterShareClick = () => {
    const encodeUrl = encodeURIComponent(url);
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeUrl}&text=${data.title}`,
      'popup',
      'width=400, height=600'
    );
  };

  const clipboardClick = () => {
    navigator.clipboard.writeText(url);
    alert('링크가 복사되었습니다.');
  };

  return (
    <Modal isOpen={isOpen} closeClick={closeClick} grid={false} title="공유">
      <Style.ShareIcons>
        <Style.KakaoShareButton onClick={kakaoShareClick}>
          <img
            src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
            alt="카카오톡 공유 버튼"
          />
        </Style.KakaoShareButton>
        <Style.FacebookShareButton onClick={facebookShareClick}>
          <img src={facebookImage} alt="페이스북 공유 버튼" />
        </Style.FacebookShareButton>
        <Style.TwitterShareButton onClick={twitterShareClick}>
          <img src={twitterImage} alt="트위터 공유 버튼" />
        </Style.TwitterShareButton>
      </Style.ShareIcons>
      <Style.Clipboard>
        <Style.ClipboardInput value={url} disabled />
        <Style.ClipboardButton onClick={clipboardClick}>
          링크 복사
        </Style.ClipboardButton>
      </Style.Clipboard>
    </Modal>
  );
}

ShareModal.propTypes = {
  data: PropTypes.object,
  postId: PropTypes.number,
  isOpen: PropTypes.bool,
  closeClick: PropTypes.func,
};
