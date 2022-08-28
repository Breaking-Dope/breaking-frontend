const numberFormatter = (number) => {
  let result;
  if (number < 1e3) return number;

  if (number >= 1e3 && number < 1e4) {
    result = (number / 1e3).toFixed(1).replace(/\.0$/, '');
    if (result === '10') return '9.9천';
    else return result + '천';
  }

  if (number >= 1e4 && number < 1e8) {
    result = (number / 1e4).toFixed(1).replace(/\.0$/, '');
    if (result === '10000') return '9999.9만';
    else return result + '만';
  }

  if (number >= 1e8 && number < 1e12) {
    result = (number / 1e8).toFixed(1).replace(/\.0$/, '');
    if (result === '10000') return '9999.9억';
    else return +(number / 1e8).toFixed(1) + '억';
  }
};

export default numberFormatter;
