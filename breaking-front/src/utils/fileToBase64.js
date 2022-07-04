const fileToBase64 = (imageFile) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      resolve(reader.result);
    };
  });

export default fileToBase64;
