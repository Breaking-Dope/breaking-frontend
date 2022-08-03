const dateFormatter = (date) => {
  console.log(typeof date);
  return date.toISOString().replace('T', ' ').substring(0, 19);
};

export default dateFormatter;
