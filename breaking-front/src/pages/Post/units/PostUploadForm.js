import React from 'react';
import * as Style from 'pages/Post/units/PostUploadForm.styles';
import { ReactComponent as Plus } from 'assets/svg/Plus.svg';
import { ReactComponent as LeftArrow } from 'assets/svg/left_arrow_line.svg';
import { ReactComponent as RightArrow } from 'assets/svg/right_arrow_line.svg';
import { ReactComponent as XMark } from 'assets/svg/x-mark.svg';
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
            <Style.PlusContainer>
              <Plus />
            </Style.PlusContainer>
            <Style.UploadCount>0</Style.UploadCount>
          </Style.UploadFileBox>
        </Style.UploadFileLayOut>

        <Style.UploadPreview>
          <Style.ArrowIcon>
            <LeftArrow onClick={onLeftClick} />
          </Style.ArrowIcon>
          <Style.Carusel ref={caruselRef}>
            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIcon>
                <XMark />
              </Style.XMarkIcon>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIcon>
                <XMark />
              </Style.XMarkIcon>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIcon>
                <XMark />
              </Style.XMarkIcon>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIcon>
                <XMark />
              </Style.XMarkIcon>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIcon>
                <XMark />
              </Style.XMarkIcon>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIcon>
                <XMark />
              </Style.XMarkIcon>
            </Style.UploadPreviewImg>

            <Style.UploadPreviewImg>
              <Style.UploadBox></Style.UploadBox>
              <Style.XMarkIcon>
                <XMark />
              </Style.XMarkIcon>
            </Style.UploadPreviewImg>
          </Style.Carusel>
          <Style.ArrowIcon>
            <RightArrow onClick={onRightClick} />
          </Style.ArrowIcon>
        </Style.UploadPreview>
      </Style.UploadForm>
    </Style.Upload>
  );
};

export default PostUploadForm;
