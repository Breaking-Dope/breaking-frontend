import React from 'react';
import { useTheme } from 'styled-components';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import useTransaction from 'pages/Financial/hooks/queries/useTransaction';
import TransactionBox from 'pages/Financial/components/TransactionBox/TransactionBox';
import * as Style from 'pages/Financial/components/Transaction/Transaction.styles';

const Transaction = () => {
  const theme = useTheme();
  const {
    data: transactionData,
    fetchNextPage: FetchNextTransactionData,
    isFetching: isTransactionFetching,
  } = useTransaction();

  const { targetRef } = useInfiniteScroll(
    transactionData,
    FetchNextTransactionData
  );

  return (
    <Style.Transaction>
      {transactionData?.pages.map((page) =>
        page.result.map((item) => (
          <TransactionBox data={item} key={item.cursorId} />
        ))
      )}
      <Style.TargetDiv ref={targetRef}>
        {isTransactionFetching && (
          <Style.Loading type="spin" color={theme.blue[900]} width="40px" />
        )}
      </Style.TargetDiv>
    </Style.Transaction>
  );
};

export default Transaction;
