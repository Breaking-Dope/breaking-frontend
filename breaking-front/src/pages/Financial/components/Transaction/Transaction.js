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
          <Style.TransactionInformation>
            <Style.TransactionType>
              {item.transactionType === 'deposit' && '입금'}
              {item.transactionType === 'withdraw' && '출금'}
              {item.transactionType === 'buy_post' && '구매'}
              {item.transactionType === 'sell_post' && '판매'}
            </Style.TransactionType>
            <Style.TransactionTime>
              {dayjs(item.transactionTime).format('YYYY.MM.DD HH:mm:ss')}
            </Style.TransactionTime>
          </Style.TransactionInformation>
          <Style.TransactionStatus>
            <Style.Amount type={item.transactionType}>
              {(item.transactionType === 'withdraw' ||
                item.transactionType === 'buy_post') &&
                '-'}
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
