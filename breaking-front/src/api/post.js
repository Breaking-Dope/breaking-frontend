import { API_PATH } from 'constants/path';
import api from 'api/api';

export const getPostData = ({ queryKey }) => {
  const [, postId] = queryKey;
  return api({
    method: 'get',
    url: API_PATH.POST_DATA(postId),
  });
};

export const getPostCommentData = async ({ queryKey, pageParam = 0 }) => {
  const [, postId] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.POST_COMMENT_DATA(postId, pageParam),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.commentId,
  };
};

export const getPostReplyData = async ({ queryKey, pageParam = 0 }) => {
  const [, commentId] = queryKey;
  let hasNextReply = false;

  const { data } = await api({
    method: 'get',
    url: API_PATH.POST_REPLY_DATA(commentId, pageParam),
  });

  if (data.length === 11) {
    data.pop();
    hasNextReply = true;
  }

  return {
    result: data,
    cursor: data[data.length - 1]?.commentId,
    hasNextReply: hasNextReply,
  };
};

export const getPostBoughtList = async ({ queryKey, pageParam = 0 }) => {
  const [, postId] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.POST_BOUGHT_LIST(postId, pageParam),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.cursorId,
  };
};

export const getPostLikeList = async ({ queryKey, pageParam = 0 }) => {
  const [, postId, size = 10] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.POST_LIKE_LIST(postId, pageParam, size),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.cursorId,
  };
};

export const getPostDownloadAllMedia = ({ queryKey }) => {
  const [, postId] = queryKey;
  return api({
    method: 'get',
    'Content-type': 'application/zip',
    'Content-Encoding': 'gzip',
    responseType: 'arraybuffer',
    url: API_PATH.POST_DOWNLOAD_ALL_MEDIA(postId),
  });
};

export const deletePost = (postId) => {
  return api({
    method: 'delete',
    url: API_PATH.POST_DELETE(postId),
  });
};

export const postPostLike = (postId) => {
  return api({
    method: 'post',
    url: API_PATH.POST_LIKE(postId),
  });
};

export const deletePostLike = (postId) => {
  return api({
    method: 'delete',
    url: API_PATH.POST_LIKE_DELETE(postId),
  });
};

export const postPostBookmark = (postId) => {
  return api({
    method: 'post',
    url: API_PATH.POST_BOOKMARK(postId),
  });
};

export const deletePostBookmark = (postId) => {
  return api({
    method: 'delete',
    url: API_PATH.POST_BOOKMARK_DELETE(postId),
  });
};

export const postPostActivatePurchase = (postId) => {
  return api({
    method: 'post',
    url: API_PATH.POST_ACTIVATE_PURCHASE(postId),
  });
};

export const deletePostDeactivatePurchase = (postId) => {
  return api({
    method: 'delete',
    url: API_PATH.POST_DEACTIVATE_PURCHASE(postId),
  });
};

export const postPostHide = (postId) => {
  return api({
    method: 'post',
    url: API_PATH.POST_HIDE(postId),
  });
};

export const deletePostShow = (postId) => {
  return api({
    method: 'delete',
    url: API_PATH.POST_SHOW(postId),
  });
};

export const postPostBuy = (postId) => {
  return api({
    method: 'post',
    url: API_PATH.POST_BUY(postId),
  });
};

export const postPostCommentWrite = ({ postId, content, hashtagList }) => {
  return api({
    method: 'post',
    url: API_PATH.POST_COMMENT_WRITE(postId),
    data: { content: content, hashtagList: hashtagList },
  });
};

export const postPostReplyWrite = ({ commentId, content, hashtagList }) => {
  return api({
    method: 'post',
    url: API_PATH.POST_REPLY_WRITE(commentId),
    data: { content: content, hashtagList: hashtagList },
  });
};

export const postPostCommentLike = (commentId) => {
  return api({
    method: 'post',
    url: API_PATH.POST_COMMENT_LIKE(commentId),
  });
};

export const deletePostCommentLike = (commentId) => {
  return api({
    method: 'delete',
    url: API_PATH.POST_COMMENT_LIKE_DELETE(commentId),
  });
};

export const putPostCommentEdit = ({ commentId, content, hashtagList }) => {
  return api({
    method: 'put',
    url: API_PATH.POST_COMMENT_EDIT(commentId),
    data: { content: content, hashtagList: hashtagList },
  });
};

export const deletePostComment = (commentId) => {
  return api({
    method: 'delete',
    url: API_PATH.POST_COMMENT_DELETE(commentId),
  });
};
