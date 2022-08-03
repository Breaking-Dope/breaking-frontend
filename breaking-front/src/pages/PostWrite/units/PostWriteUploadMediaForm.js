import React, { useState } from 'react';
import * as Style from 'pages/PostWrite/units/PostWriteUploadMediaForm.styles';
import { ReactComponent as PlusIcon } from 'assets/svg/Plus.svg';
import { ReactComponent as LeftArrowIcon } from 'assets/svg/left_arrow_line.svg';
import { ReactComponent as RightArrowIcon } from 'assets/svg/right_arrow_line.svg';
import { ReactComponent as XMarkIcon } from 'assets/svg/x_mark.svg';
import { useRef } from 'react';

const PostUploadMediaForm = () => {
  const caruselRef = useRef();
  const [filesThumbnail, setFilesThumbnail] = useState([]);
  const LeftCaruselClick = () => {
    caruselRef.current.scrollLeft -= 500;
  };
  const RightCaruselClick = () => {
    caruselRef.current.scrollLeft += 500;
  };

  const deleteFile = (target) => {
    setFilesThumbnail((pre) => pre.filter((item, index) => index !== target));
  };

  const handleAddFiles = (event) => {
    const fileLists = event.target.files;
    let fileList = [...filesThumbnail];

    for (let i = 0; i < fileLists.length; i++) {
      const currentFileUrl = URL.createObjectURL(fileLists[i]);
      if (fileLists[i].type.match(/image\//g)) {
        fileList.push({ url: currentFileUrl, type: 'image' });
      } else if (fileLists[i].type.match(/video\//g)) {
        fileList.push({ url: currentFileUrl, type: 'video' });
      } else {
        console.log('타입오류');
      }
    }

    fileList.length > 20 && (fileList = fileList.slice(0, 20));
    setFilesThumbnail(fileList);
  };

  return (
    <Style.UploadLayout>
      <Style.UploadTitle>사진/동영상 업로드</Style.UploadTitle>
      <Style.UploadForm>
        <Style.UploadFileBox htmlFor="multiple-file">
          <Style.PlusIconContainer>
            <PlusIcon />
          </Style.PlusIconContainer>
          <Style.UploadCount>0</Style.UploadCount>
        </Style.UploadFileBox>
        <Style.FileUploadInput
          id="multiple-file"
          type="file"
          onChange={handleAddFiles}
          multiple
        ></Style.FileUploadInput>

        <Style.UploadPreviewLayout>
          <Style.ArrowIconContainer>
            <LeftArrowIcon onClick={LeftCaruselClick} />
          </Style.ArrowIconContainer>
          <Style.Carousel ref={caruselRef}>
            {filesThumbnail &&
              filesThumbnail.map((file, index) => {
                if (file.type === 'image') {
                  return (
                    <Style.PreviewImageContainer key={index}>
                      <Style.PreviewImage src={file.url}></Style.PreviewImage>
                      <Style.XMarkIconContainer
                        onClick={() => deleteFile(index)}
                      >
                        <XMarkIcon />
                      </Style.XMarkIconContainer>
                    </Style.PreviewImageContainer>
                  );
                } else if (file.type === 'video') {
                  return (
                    <Style.PreviewImageContainer key={index}>
                      <Style.PreviewVedio src={file.url}></Style.PreviewVedio>
                      <Style.XMarkIconContainer
                        onClick={() => deleteFile(index)}
                      >
                        <XMarkIcon />
                      </Style.XMarkIconContainer>
                    </Style.PreviewImageContainer>
                  );
                }
              })}
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
