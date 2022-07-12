import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Feed/Feed.styles';
import ProfileImage from 'components/ProfileImage/ProfileImage';

import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as LikedIcon } from 'assets/svg/liked.svg';
import { ReactComponent as BookMarkIcon } from 'assets/svg/bookmark.svg';
import { ReactComponent as BookMarkedIcon } from 'assets/svg/bookmarked.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';

import Button from 'components/Button/Button';

export default function Feed({ children, ...props }) {
  return <Style.Feed {...props}>{children}</Style.Feed>;
}

function FeedImage({ src, ...props }) {
  return src ? (
    <Style.FeedImage src={src} {...props} />
  ) : (
    <Style.FeedDefaultImage {...props} />
  );
}

function WriterProfileImage({ src, ...props }) {
  return src ? (
    <Style.ProfileContainer>
      <ProfileImage src={src} {...props} size="medium" />
    </Style.ProfileContainer>
  ) : (
    <Style.ProfileContainer>
      <ProfileImage {...props} size="medium" />
    </Style.ProfileContainer>
  );
}

function Context({ title, time, location, isSold, postType, price }) {
  return (
    <Style.Context>
      <Style.Title>{title}</Style.Title>
      <Style.Detail>
        <LocationIcon />
        {location}
      </Style.Detail>
      <Style.Detail>{time}</Style.Detail>
      {postType === 'EXCLUSIVE' && (
        <Button color="dark" size="small">
          단독
        </Button>
      )}
      {isSold ? (
        <Button color="danger" size="small">
          판매 완료
        </Button>
      ) : (
        <Button color="primary" size="small">
          판매중
        </Button>
      )}
      <Style.Price>{price.toLocaleString('ko-KR')} 원</Style.Price>
    </Style.Context>
  );
}

function Icons({ likeCount, isLiked, isBookmarked }) {
  const [liked, setLiked] = useState(isLiked);
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const [count, setCount] = useState(likeCount);
  const toogleLiked = () => {
    liked ? setCount((pre) => pre - 1) : setCount((pre) => pre + 1);
    setLiked((pre) => !pre);
  };
  const toogleBookmarked = () => {
    setBookmarked((pre) => !pre);
  };
  return (
    <Style.Icons>
      <Style.IconContainer onClick={toogleLiked}>
        {liked ? <LikedIcon /> : <LikeIcon />}
        <Style.Count>{count}</Style.Count>
      </Style.IconContainer>
      <Style.IconContainer onClick={toogleBookmarked}>
        {bookmarked ? <BookMarkedIcon /> : <BookMarkIcon />}
      </Style.IconContainer>
      <Style.IconContainer>
        <ETCIcon />
      </Style.IconContainer>
    </Style.Icons>
  );
}

Feed.Icons = Icons;
Feed.FeedImage = FeedImage;
Feed.WriterProfileImage = WriterProfileImage;
Feed.Context = Context;
Feed.Content = Style.Content;

Feed.propTypes = {
  children: PropTypes.node,
};

FeedImage.propTypes = {
  src: PropTypes.string,
};

WriterProfileImage.propTypes = {
  src: PropTypes.string,
};

Context.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string, // 타입 확실하지 않음
  location: PropTypes.string,
  isSold: PropTypes.bool.isRequired,
  postType: PropTypes.string.isRequired,
  price: PropTypes.number,
};

Icons.propTypes = {
  likeCount: PropTypes.number,
  isLiked: PropTypes.bool,
  isBookmarked: PropTypes.bool,
};
