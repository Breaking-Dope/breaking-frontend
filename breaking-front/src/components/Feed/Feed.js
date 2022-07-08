import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Feed/Feed.styles';
import UserImage from 'components/UserImage/UserImage';

import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';

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

export function Location({ children, ...props }) {
  return (
    <Style.Location {...props}>
      <LocationIcon />
      {children}
    </Style.Location>
  );
}

Feed.Location = Location;

Feed.Title = Style.Title;
Feed.Content = Style.Content;
Feed.Cost = Style.Cost;
Feed.Time = Style.Location;
Feed.IconWrapper = Style.IconWrapper;

Feed.propTypes = {
  children: PropTypes.object,
};

FeedImage.propTypes = {
  src: PropTypes.string,
};

ProfileImage.propTypes = {
  src: PropTypes.string,
};

Location.propTypes = {
  children: PropTypes.string,
};
