import React, { useState, useRef } from 'react';
import * as Style from 'pages/PostWrite/units/PostWriteUploadMediaForm.styles';
import { ReactComponent as PlusIcon } from 'assets/svg/Plus.svg';
import { ReactComponent as LeftArrowIcon } from 'assets/svg/left_arrow_line.svg';
import { ReactComponent as RightArrowIcon } from 'assets/svg/right_arrow_line.svg';
import { ReactComponent as XMarkIcon } from 'assets/svg/x_mark.svg';
import PropTypes from 'prop-types';

const PostUploadMediaForm = ({ setMediaList }) => {
  const caruselRef = useRef();
  const LeftCaruselClick = () => {
    caruselRef.current.scrollTo({
      left: caruselRef.current.scrollLeft - 500,
      behavior: 'smooth',
    });
  };
  const RightCaruselClick = () => {
    caruselRef.current.scrollTo({
      left: caruselRef.current.scrollLeft + 500,
      behavior: 'smooth',
    });
  };

  const [filesThumbnail, setFilesThumbnail] = useState([]);

  const deleteFile = (target) => {
    URL.revokeObjectURL(filesThumbnail[target]);
    setFilesThumbnail((pre) => pre.filter((item, index) => index !== target));
    setMediaList((pre) => pre.filter((item, index) => index !== target));
  };

  const handleAddFiles = (fileLists) => {
    if (filesThumbnail.length + fileLists.length > 20) {
      alert('업로드 개수를 초과하였습니다');
    } else {
      setMediaList((pre) => [...pre, ...fileLists]);
      let fileList = [...filesThumbnail];
      for (let i = 0; i < fileLists.length; i++) {
        const currentFileUrl = URL.createObjectURL(fileLists[i]);
        if (fileLists[i].type.match(/image\//g)) {
          fileList.push({ url: currentFileUrl, type: 'image' });
        } else if (fileLists[i].type.match(/video\//g)) {
          fileList.push({ url: currentFileUrl, type: 'video' });
        } else {
          alert('이미지, 동영상 파일을 업로드해 주세요');
        }
      }
      setFilesThumbnail(fileList);
    }
  };

  const dragDropUpload = (event) => {
    event.preventDefault();
    event.stopPropagation();
    handleAddFiles(event.dataTransfer.files);
  };

  const dragOverHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Style.UploadLayout>
      <Style.UploadTitle>사진/동영상 업로드</Style.UploadTitle>
      <Style.UploadForm onDrop={dragDropUpload} onDragOver={dragOverHandler}>
        <Style.UploadFileBox htmlFor="multiple-file">
          <Style.PlusIconContainer>
            <PlusIcon />
          </Style.PlusIconContainer>
          <Style.UploadCount>{filesThumbnail.length}</Style.UploadCount>
        </Style.UploadFileBox>
        <Style.FileUploadInput
          id="multiple-file"
          type="file"
          onChange={(event) => handleAddFiles(event.target.files)}
          multiple
        />

        <Style.UploadPreviewLayout>
          <Style.ArrowIconContainer>
            <LeftArrowIcon onClick={LeftCaruselClick} />
          </Style.ArrowIconContainer>
          <Style.Carousel ref={caruselRef}>
            {filesThumbnail &&
              filesThumbnail.map((file, index) => (
                <Style.PreviewImageContainer key={`file-${index}`}>
                  {file.type === 'image' ? (
                    <Style.PreviewImage src={file.url} />
                  ) : (
                    <Style.PreviewVideo src={file.url} />
                  )}
                  <Style.XMarkIconContainer onClick={() => deleteFile(index)}>
                    <XMarkIcon />
                  </Style.XMarkIconContainer>
                </Style.PreviewImageContainer>
              ))}
          </Style.Carousel>
          <Style.ArrowIconContainer>
            <RightArrowIcon onClick={RightCaruselClick} />
          </Style.ArrowIconContainer>
        </Style.UploadPreviewLayout>
      </Style.UploadForm>
    </Style.UploadLayout>
  );
};

PostUploadMediaForm.propTypes = {
  setMediaList: PropTypes.func,
};

export default PostUploadMediaForm;
