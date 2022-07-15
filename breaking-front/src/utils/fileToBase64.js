const fileToBase64 = (imageFile, setImageSrc) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      setImageSrc(reader.result);
      resolve();
    };
  });

export default fileToBase64;
