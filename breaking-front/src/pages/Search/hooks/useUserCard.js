import useFollow from 'hooks/mutations/useFollow';
import useUnFollow from 'hooks/mutations/useUnFollow';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PAGE_PATH } from 'constants/path';

const useUserCard = (user) => {
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(user.isFollowing);
  const follow = useFollow({
    onSuccess: () => {
      setIsFollowing((pre) => !pre);
    },
  });
  const unFollow = useUnFollow({
    onSuccess: () => {
      setIsFollowing((pre) => !pre);
    },
  });
  const CardClick = () => {
    navigate(PAGE_PATH.PROFILE(user.userId));
  };

  return [isFollowing, follow, unFollow, CardClick];
};

useUserCard.propTypes = {
  user: PropTypes.object,
};

export default useUserCard;
