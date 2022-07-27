import React from 'react';
import * as Style from 'pages/PostWrite/units/PostWriteUploadForm.styles';
import { ReactComponent as Plus } from 'assets/svg/Plus.svg';
import { ReactComponent as LeftArrow } from 'assets/svg/left_arrow_line.svg';
import { ReactComponent as RightArrow } from 'assets/svg/right_arrow_line.svg';
import { ReactComponent as XMark } from 'assets/svg/x_mark.svg';
import { useRef } from 'react';

const PostUploadForm = () => {
  const caruselRef = useRef();
  const onLeftClick = () => {
    caruselRef.current.scrollLeft -= 620;
  };
  const onRightClick = () => {
    caruselRef.current.scrollLeft += 620;
  };
  return (
    <Style.Upload>
      <Style.UploadTitle>사진/동영상 업로드</Style.UploadTitle>
      <Style.UploadForm>
        <Style.UploadFileLayOut>
          <Style.UploadFileBox>
            <Style.PlusIconContainer>
              <Plus />
            </Style.PlusIconContainer>
            <Style.UploadCount>0</Style.UploadCount>
          </Style.UploadFileBox>
        </Style.UploadFileLayOut>

        <Style.UploadPreview>
          <Style.ArrowIconContainer>
            <LeftArrow onClick={onLeftClick} />
          </Style.ArrowIconContainer>
          <Style.Carusel ref={caruselRef}>
            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMark />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMark />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMark />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMark />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMark />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMark />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIconContainer>
                <XMark />
              </Style.XMarkIconContainer>
            </Style.UploadPreviewImg>
          </Style.Carusel>
          <Style.ArrowIconContainer>
            <RightArrow onClick={onRightClick} />
          </Style.ArrowIconContainer>
        </Style.UploadPreview>
      </Style.UploadForm>
    </Style.Upload>
  );
};

export default PostUploadForm;
