/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postDeposit, postWithdraw } from 'api/financial';
import * as Style from 'pages/Financial/Financial.styles';
import { UserInformationContext } from 'providers/UserInformationProvider';
import Tabs from 'components/Tabs/Tabs';
import TransactionForm from 'pages/Financial/components/TransactionForm/TransactionForm';
import Transaction from 'pages/Financial/components/Transaction/Transaction';

const Financial = () => {
  const queryClient = useQueryClient();
  const { balance } = useContext(UserInformationContext);

  const { mutate: Deposit } = useMutation(postDeposit, {
    onSuccess: () => {
      queryClient.invalidateQueries('transaction');
      queryClient.invalidateQueries('jwtValidate');
    },
  });
  const { mutate: Withdraw } = useMutation(postWithdraw, {
    onSuccess: () => {
      queryClient.invalidateQueries('transaction');
      queryClient.invalidateQueries('jwtValidate');
    },
  });

  const handleDepositSubmit = ({ amount }) => {
    let depositConfirm = window.confirm(`${amount}원을 충전하시겠습니까?`);

    depositConfirm &&
      Deposit(amount, {
        onSuccess: () => {
          alert(`${amount}원이 충전되었습니다.`);
        },
      });
  };

  const handleWithdrawSubmit = ({ amount }) => {
    let withdrawConfirm = window.confirm(`${amount}원을 출금하시겠습니까?`);

    withdrawConfirm &&
      Withdraw(amount, {
        onSuccess: () => {
          alert(`${amount}원이 출금되었습니다.`);
        },
      });
  };

  return (
    <Style.Financial>
      <Style.BalanceBox>
        보유한 금액
        <Style.Balance>{balance.toLocaleString('ko-KR')} 원</Style.Balance>
      </Style.BalanceBox>
      <Tabs>
        <Tabs.TabList>
          <Tabs.TabItem>충전하기</Tabs.TabItem>
          <Tabs.TabItem>출금하기</Tabs.TabItem>
          <Tabs.TabItem>입출금 내역</Tabs.TabItem>
        </Tabs.TabList>

        <Tabs.TabPanel>
          <TransactionForm type="deposit" onSubmit={handleDepositSubmit} />
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <TransactionForm type="withdraw" onSubmit={handleWithdrawSubmit} />
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <Transaction />
        </Tabs.TabPanel>
      </Tabs>
    </Style.Financial>
  );
};

export default Financial;
