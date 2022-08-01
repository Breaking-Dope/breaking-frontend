import { PRODUCTION_BASE_URL } from 'constants/path';

const ImageUrlTranslator = (url) => {
  if (url && process.env.NODE_ENV === 'production') {
    return PRODUCTION_BASE_URL + url;
  }
  return url;
};

export default ImageUrlTranslator;
