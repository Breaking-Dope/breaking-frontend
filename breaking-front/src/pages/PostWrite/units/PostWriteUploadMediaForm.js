import React from 'react';
import * as Style from 'pages/PostWrite/units/PostWriteUploadForm.styles';
import { ReactComponent as PlusIcon } from 'assets/svg/Plus.svg';
import { ReactComponent as LeftArrowIcon } from 'assets/svg/left_arrow_line.svg';
import { ReactComponent as RightArrowIcon } from 'assets/svg/right_arrow_line.svg';
import { ReactComponent as XMarkIcon } from 'assets/svg/x_mark.svg';
import { useRef } from 'react';

const PostUploadMediaForm = () => {
  const caruselRef = useRef();
  const LeftCaruselClick = () => {
    caruselRef.current.scrollLeft -= 500;
  };
  const RightCaruselClick = () => {
    caruselRef.current.scrollLeft += 500;
  };
  return (
    <Style.UploadLayout>
      <Style.UploadTitle>사진/동영상 업로드</Style.UploadTitle>
      <Style.UploadForm>
        <Style.UploadFileBox>
          <Style.PlusIconContainer>
            <PlusIcon />
          </Style.PlusIconContainer>
          <Style.UploadCount>0</Style.UploadCount>
        </Style.UploadFileBox>

        <Style.UploadPreviewLayout>
          <Style.ArrowIconContainer>
            <LeftArrowIcon onClick={LeftCaruselClick} />
          </Style.ArrowIconContainer>
          <Style.Carousel ref={caruselRef}>
            <Style.UploadPreviewImage>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImage>

            <Style.UploadPreviewImage>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImage>

            <Style.UploadPreviewImage>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImage>

            <Style.UploadPreviewImage>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImage>

            <Style.UploadPreviewImage>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImage>

            <Style.UploadPreviewImage>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImage>

            <Style.UploadPreviewImage>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImage>
          </Style.Carousel>
          <Style.ArrowIconContainer>
            <RightArrowIcon onClick={RightCaruselClick} />
          </Style.ArrowIconContainer>
        </Style.UploadPreviewLayout>
      </Style.UploadForm>
    </Style.UploadLayout>
  );
};

export default PostUploadMediaForm;
