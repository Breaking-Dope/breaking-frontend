import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { PAGE_PATH } from 'constants/path';
import * as Style from 'pages/Financial/components/TransactionBox/TransactionBox.styles';

const TransactionBox = ({ data }) => {
  return (
    <Style.TransactionBox>
      <Style.TransactionInformation>
        <Style.TransactionType>
          {data.transactionType === 'deposit' && '입금'}
          {data.transactionType === 'withdraw' && '출금'}
          {data.transactionType === 'buy_post' && (
            <>
              <Style.ItemLink to={PAGE_PATH.PROFILE(data.targetUser?.userId)}>
                {data.targetUser?.nickname}
              </Style.ItemLink>
              님의&nbsp;
              <Style.ItemLink to={PAGE_PATH.POST(data.postId)}>
                {data.postTitle}
              </Style.ItemLink>
              &nbsp;구매
            </>
          )}
          {data.transactionType === 'sell_post' && (
            <>
              <Style.ItemLink to={PAGE_PATH.PROFILE(data.targetUser?.userId)}>
                {data.targetUser?.nickname}
              </Style.ItemLink>
              님에게&nbsp;
              <Style.ItemLink to={PAGE_PATH.POST(data.postId)}>
                {data.postTitle}
              </Style.ItemLink>
              &nbsp;판매
            </>
          )}
        </Style.TransactionType>
        <Style.TransactionDate>
          {dayjs(data.transactionDate).format('YYYY.MM.DD HH:mm:ss')}
        </Style.TransactionDate>
      </Style.TransactionInformation>
      <Style.TransactionStatus>
        <Style.Amount type={data.transactionType}>
          {(data.transactionType === 'withdraw' ||
            data.transactionType === 'buy_post') &&
            '-'}
          {data.amount.toLocaleString('ko-KR')}원
        </Style.Amount>
        <Style.Balance>{data.balance.toLocaleString('ko-KR')}원</Style.Balance>
      </Style.TransactionStatus>
    </Style.TransactionBox>
  );
};

TransactionBox.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TransactionBox;
