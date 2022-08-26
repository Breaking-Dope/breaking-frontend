import React from 'react';
import * as Style from 'pages/NotFound/NotFound.styles';

const NotFound = () => {
  return (
    <Style.NotFoundLayout>
      <Style.NotFound>404 Not Found</Style.NotFound>
      <Style.PageNotFound>페이지가 존재하지 않습니다.</Style.PageNotFound>
      <Style.NotFoundContent>
        페이지의 주소가 잘못 입력되었거나, 페이지의 주소가 변경 혹은
        삭제되었습니다. 입력하신 주소가 정확한지 다시 한번 확인해 주시기
        바랍니다.
      </Style.NotFoundContent>
    </Style.NotFoundLayout>
  );
};

export default NotFound;
