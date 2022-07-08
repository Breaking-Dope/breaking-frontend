import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Feed/Feed.styles';
import UserImage from 'components/UserImage/UserImage';

import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as LikedIcon } from 'assets/svg/liked.svg';
import { ReactComponent as BookMarkIcon } from 'assets/svg/bookmark.svg';
import { ReactComponent as BookMarkedIcon } from 'assets/svg/bookmarked.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';

import Button from 'components/Button/Button';

export function Feed({ children, ...props }) {
  return <Style.Feed {...props}>{children}</Style.Feed>;
}

export function FeedImage({ src, ...props }) {
  return src ? (
    <Style.FeedImage src={src} {...props} />
  ) : (
    <Style.FeedDefaultImage {...props} />
  );
}

Feed.FeedImage = FeedImage;

export function ProfileImage({ src, ...props }) {
  return src ? (
    <Style.ProfileWrapper>
      <UserImage src={src} {...props} size="medium" />
    </Style.ProfileWrapper>
  ) : (
    <Style.ProfileWrapper>
      <UserImage {...props} size="medium" />
    </Style.ProfileWrapper>
  );
}

Feed.ProfileImage = ProfileImage;

export function Context({ title, time, location, isSold, postType, cost }) {
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
      <Style.Cost>{cost} 원</Style.Cost>
    </Style.Context>
  );
}
Feed.Context = Context;

Feed.Content = Style.Content;

export function Icons({ likeCount, isLiked, isBookmarked }) {
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
      <Style.IconWrapper onClick={toogleLiked}>
        {liked ? <LikedIcon /> : <LikeIcon />}
      </Style.IconWrapper>
      <Style.IconWrapper onClick={toogleLiked}>{count}</Style.IconWrapper>
      <Style.IconWrapper onClick={toogleBookmarked}>
        {bookmarked ? <BookMarkedIcon /> : <BookMarkIcon />}
      </Style.IconWrapper>
      <Style.IconWrapper>
        <ETCIcon />
      </Style.IconWrapper>
    </Style.Icons>
  );
}
Feed.Icons = Icons;

Feed.propTypes = {
  children: PropTypes.object,
};

FeedImage.propTypes = {
  src: PropTypes.string,
};

ProfileImage.propTypes = {
  src: PropTypes.string,
};

Context.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string, // 타입 확실하지 않음
  location: PropTypes.string,
  isSold: PropTypes.bool,
  postType: PropTypes.string,
  cost: PropTypes.number,
};

Icons.propTypes = {
  likeCount: PropTypes.number,
  isLiked: PropTypes.bool,
  isBookmarked: PropTypes.bool,
};
