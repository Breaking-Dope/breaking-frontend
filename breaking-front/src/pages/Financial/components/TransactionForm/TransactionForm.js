import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'pages/Financial/components/TransactionForm/TransactionForm.styles';

const TransactionForm = ({ type, onSubmit }) => {
  const [amount, setAmount] = useState(0);
  const [amountInput, setAmountInput] = useState(false);

  const handleChange = (event) => {
    let value = Number(event.target.value);
    if (Number.isNaN(value)) return;
    setAmount(value);
  };

  const toggleAmountInput = () => {
    setAmountInput((pre) => !pre);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ amount, setAmount });
    setAmount(0);
  };

  return (
    <Style.TransactionForm onSubmit={handleSubmit}>
      <Style.AmountContainer>
        {type === 'deposit' && <p>충전할 금액</p>}
        {type === 'withdraw' && <p>출금할 금액</p>}
        <Style.AmountInput
          type="text"
          maxLength="10"
          onChange={handleChange}
          value={amountInput ? amount : `${amount.toLocaleString('ko-KR')}원`}
          onBlur={toggleAmountInput}
          onFocus={toggleAmountInput}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              event.target.blur();
            }
          }}
        />
      </Style.AmountContainer>
      <Style.SubmitButton type="submit">
        {type === 'deposit' && '충전하기'}
        {type === 'withdraw' && '출금하기'}
      </Style.SubmitButton>
    </Style.TransactionForm>
  );
};

TransactionForm.propTypes = {
  type: PropTypes.oneOf(['deposit', 'withdraw']).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TransactionForm;
