const REGEXP = {
  NICKNAME: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,10}$/,
  PHONENUMBER: /^[0-9]{11}$/,
  EMAIL:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
};

export default REGEXP;
