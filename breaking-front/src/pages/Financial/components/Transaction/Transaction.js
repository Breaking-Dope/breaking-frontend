import React from 'react';
import dayjs from 'dayjs';
import * as Style from 'pages/Financial/components/Transaction/Transaction.styles';
import useTransaction from 'hooks/queries/useTransaction';

const Transaction = () => {
  const { data: transactionData } = useTransaction();

  return (
    <Style.Transaction>
      {transactionData?.data.map((item, index) => (
        <Style.TransactionBox key={`transaction-${index}`}>
          <div>
            <Style.Time>
              {dayjs(item.transactionTime).format('YYYY.MM.DD HH:mm:ss')}
            </Style.Time>
          </div>
          <Style.TransactionStatus>
            <Style.Amount type={item.transactionType}>
              {item.transactionType === 'withdraw' && '-'}
              {item.amount}원
            </Style.Amount>
            <Style.Balance>{item.balance}원</Style.Balance>
          </Style.TransactionStatus>
        </Style.TransactionBox>
      ))}
    </Style.Transaction>
  );
};

export default Transaction;
