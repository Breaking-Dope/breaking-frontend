const LikeCount = (nickname, likeCount) => {
  if (likeCount === undefined) return;
  if (likeCount === 0) return '좋아요를 눌러보세요.';
  else if (nickname === undefined) return likeCount.toLocaleString('ko-KR');
  else if (likeCount === 1) return `${nickname}님이 좋아합니다.`;
  else return `${nickname}님 외 ${(likeCount - 1).toLocaleString('ko-KR')}명`;
};

export default LikeCount;
