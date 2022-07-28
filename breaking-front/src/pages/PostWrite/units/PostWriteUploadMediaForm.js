import React from 'react';
import * as Style from 'pages/PostWrite/units/PostWriteUploadForm.styles';
import { ReactComponent as PlusIcon } from 'assets/svg/Plus.svg';
import { ReactComponent as LeftArrowIcon } from 'assets/svg/left_arrow_line.svg';
import { ReactComponent as RightArrowIcon } from 'assets/svg/right_arrow_line.svg';
import { ReactComponent as XMarkIcon } from 'assets/svg/x_mark.svg';
import { useRef } from 'react';

const PostUploadMediaForm = () => {
  const caruselRef = useRef();
  const onLeftClick = () => {
    caruselRef.current.scrollLeft -= 620;
  };
  const onRightClick = () => {
    caruselRef.current.scrollLeft += 620;
  };
  return (
    <Style.UploadLayout>
      <Style.UploadTitle>사진/동영상 업로드</Style.UploadTitle>
      <Style.UploadForm>
        <Style.UploadFileLayout>
          <Style.UploadFileBox>
            <Style.PlusIconContainer>
              <PlusIcon />
            </Style.PlusIconContainer>
            <Style.UploadCount>0</Style.UploadCount>
          </Style.UploadFileBox>
        </Style.UploadFileLayout>

        <Style.UploadPreviewLayout>
          <Style.ArrowIconContainer>
            <LeftArrowIcon onClick={onLeftClick} />
          </Style.ArrowIconContainer>
          <Style.Carusel ref={caruselRef}>
            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMarkIcon />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>
          </Style.Carusel>
          <Style.ArrowIconContainer>
            <RightArrowIcon onClick={onRightClick} />
          </Style.ArrowIconContainer>
        </Style.UploadPreviewLayout>
      </Style.UploadForm>
    </Style.UploadLayout>
  );
};

export default PostUploadMediaForm;
