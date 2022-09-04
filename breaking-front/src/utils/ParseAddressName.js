const ParseAddressName = (address) => {
  const splitted = address.split(' ');
  return {
    region_1depth_name: splitted[0],
    region_2depth_name: splitted[1],
  };
};

export default ParseAddressName;
