import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import * as Style from 'components/Tag/Tag.styles';

export default function Tag({ postType, isSold, isPurchasable, isHidden }) {
  return (
    <Style.Tag>
      {postType === 'EXCLUSIVE' && (
        <Button color="dark" size="small" disabled>
          단독
        </Button>
      )}
      {postType === 'EXCLUSIVE' && isSold ? (
        <Button color="danger" size="small" disabled>
          판매 완료
        </Button>
      ) : isPurchasable ? (
        <Button color="primary" size="small" disabled>
          판매중
        </Button>
      ) : (
        <Button color="danger" size="small" disabled>
          판매 중지
        </Button>
      )}
      {isHidden && (
        <Button color="danger" size="small" disabled>
          숨김
        </Button>
      )}
    </Style.Tag>
  );
}

Tag.propTypes = {
  postType: PropTypes.oneOf(['EXCLUSIVE', 'FREE', 'CHARGED']).isRequired,
  isSold: PropTypes.bool.isRequired,
  isPurchasable: PropTypes.bool.isRequired,
  isHidden: PropTypes.bool.isRequired,
};
