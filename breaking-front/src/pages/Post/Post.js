import React from 'react';
import Button from 'components/Button/Button';
import Line from 'components/Line/Line';
import * as Style from 'pages/Post/Post.styles';
import PostUploadForm from 'pages/Post/units/PostUploadForm';

const Post = () => {
  return (
    <Style.Container>
      <Style.BackSpace></Style.BackSpace>
      <PostUploadForm />
      <Style.OccurTime>
        <Style.OccurTimeTitle></Style.OccurTimeTitle>
        <Style.OccurTimeForm></Style.OccurTimeForm>
      </Style.OccurTime>
      <Style.Location>
        <Style.LocationTitle>
          <Style.LocationIcon></Style.LocationIcon>
        </Style.LocationTitle>
        <Style.LocationForm></Style.LocationForm>
      </Style.Location>
      <Line />
      <Style.Context>
        <Style.ContextTitle></Style.ContextTitle>
        <Style.ContextBody></Style.ContextBody>
        <Style.HashTag></Style.HashTag>
      </Style.Context>
      <Style.PostType></Style.PostType>
      <Style.Price></Style.Price>
      <Style.Anonymous></Style.Anonymous>
      <Button />
    </Style.Container>
  );
};

export default Post;
