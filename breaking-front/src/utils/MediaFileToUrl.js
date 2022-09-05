const MediaFileToUrl = (file) => {
  const currentFileUrl = window.URL.createObjectURL(file);
  if (file.type.match(/image\//g)) {
    return { url: currentFileUrl, type: 'image' };
  } else if (file.type.match(/video\//g)) {
    return { url: currentFileUrl, type: 'video' };
  } else {
    alert('파일 형식이 올바르지 않습니다.');
  }
};

export default MediaFileToUrl;
