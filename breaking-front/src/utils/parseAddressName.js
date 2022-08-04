const parseAddressName = (address) => {
  const splited = address.split(' ');
  return {
    region_1depth_name: splited[0],
    region_2depth_name: splited[1],
  };
};

export default parseAddressName;
