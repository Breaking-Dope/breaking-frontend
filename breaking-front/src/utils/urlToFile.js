const getFileFromUrl = async (url) => {
  const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split('.').pop();
  const filename = url.split('/').pop();
  return new File([data], filename, {
    type: data.type || `image/${ext}`,
  });
};

export default getFileFromUrl;
