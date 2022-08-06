import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import dayjs from 'dayjs';
import { postDeposit, postWithdraw } from 'api/financial';
import useTransaction from 'hooks/queries/useTransaction';
import Line from 'components/Line/Line';
import * as Style from 'pages/Financial/Financial.styles';

const Financial = () => {
  const queryClient = useQueryClient();
  const [depositValue, setDepositValue] = useState('');
  const [withdrawValue, setWithdrawValue] = useState('');

  const { data: transactionData } = useTransaction();
  const { mutate: Deposit } = useMutation(postDeposit);
  const { mutate: Withdraw } = useMutation(postWithdraw);

  const handleDepositChange = (event) => {
    setDepositValue(event.target.value.replace(/[^0-9]/g, ''));
  };

  const handleWithdrawChange = (event) => {
    setWithdrawValue(event.target.value.replace(/[^0-9]/g, ''));
  };

  const handleDepositSubmit = (event) => {
    event.preventDefault();
    let depositConfirm = window.confirm(
      `${depositValue}원을 입금하시겠습니까?`
    );

    depositConfirm &&
      Deposit(depositValue, {
        onSuccess: () => {
          queryClient.invalidateQueries('transaction');
          queryClient.invalidateQueries('initalizeValidUser');
        },
      });
    setDepositValue('');
  };

  const handleWithdrawSubmit = (event) => {
    event.preventDefault();
    let withdrawConfirm = window.confirm(
      `${withdrawValue}원을 출금하시겠습니까?`
    );

    withdrawConfirm &&
      Withdraw(withdrawValue, {
        onSuccess: () => {
          queryClient.resetQueries('transaction');
          queryClient.invalidateQueries('initalizeValidUser');
        },
      });
    setWithdrawValue('');
  };

  return (
    <Style.Financial>
      입출금 내역
      <Line width="100%" />
      <form onSubmit={handleDepositSubmit}>
        <input
          type="text"
          onChange={handleDepositChange}
          value={depositValue}
        />
        <button type="submit">충전</button>
      </form>
      <form onSubmit={handleWithdrawSubmit}>
        <input
          type="text"
          onChange={handleWithdrawChange}
          value={withdrawValue}
        />
        <button type="submit">출금</button>
      </form>
      {transactionData?.data.map((item, index) => (
        <div key={'transaction-' + index}>
          <p>
            시간: {dayjs(item.transactionTime).format('YYYY.MM.DD HH:mm:ss')}
          </p>
          {item.transactionType === 'deposit' ? (
            <>
              <p>입금 {item.amount}원</p>
              <p>잔액 {item.balance}원</p>
            </>
          ) : (
            <>
              <p>출금 {item.amount}원</p>
              <p>잔액 {item.balance}원</p>
            </>
          )}
          <Line width="100%" />
        </div>
      ))}
    </Style.Financial>
  );
};

export default Financial;
