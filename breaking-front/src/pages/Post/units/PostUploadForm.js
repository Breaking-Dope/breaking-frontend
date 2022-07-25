import React from 'react';
import * as Style from 'pages/Post/units/PostUploadForm.styles';
import { ReactComponent as Plus } from 'assets/svg/Plus.svg';

const PostUploadForm = () => {
  return (
    <Style.Upload>
      <Style.UploadTitle>사진/동영상 업로드</Style.UploadTitle>
      <Style.UploadForm>
        <Style.UploadBox>
          <Plus></Plus>
          <Style.UploadCount>0</Style.UploadCount>
        </Style.UploadBox>
        <Style.UploadPreview>
          <Style.Carusel></Style.Carusel>
        </Style.UploadPreview>
      </Style.UploadForm>
    </Style.Upload>
  );
};

export default PostUploadForm;
