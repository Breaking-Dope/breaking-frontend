import ReactLoading from 'react-loading';
import styled from 'styled-components';

export const ETCIconContainer = styled.div`
  display: none;
  height: 16px;
`;

export const Comment = styled.div`
  display: ${({ isEditing }) => (isEditing ? 'none' : 'flex')};
  width: 100%;
  padding: 5px 10px;
  margin-bottom: ${({ isOpenReplyToggle }) =>
    isOpenReplyToggle ? '10px' : '20px'};
  ${ETCIconContainer} {
    display: ${({ isOpenCommentToggle }) =>
      isOpenCommentToggle ? 'block' : 'none'};
  }
  &:hover {
    ${ETCIconContainer} {
      display: block;
    }
  }
`;

export const ContentContainer = styled.div`
  margin-left: 20px;
  flex-grow: 1;
`;

export const Nickname = styled.h3`
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
`;

export const CreatedDate = styled.span`
  margin-bottom: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.gray[700]};
`;

export const Content = styled.div`
  padding-right: 30px;
  font-size: 14px;
`;

export const Status = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  label {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  svg {
    margin-right: 5px;
  }
`;

export const CommentLike = styled.label`
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const CommentFooter = styled.div`
  position: relative;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  svg,
  span {
    cursor: pointer;
  }
`;

export const ReplyCount = styled.div`
  display: inline-flex;
  margin: 10px 0px 0px;
  color: ${({ theme }) => theme.blue[900]};
  font-size: 14px;
  align-items: center;
  cursor: pointer;
`;

export const LoadingContainer = styled.div`
  position: relative;
  height: 100px;
`;

export const Loading = styled(ReactLoading)`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
`;

export const CommentEditForm = styled.div`
  margin: 30px 0px;
  padding: 10px 0px;
`;

export const CancelCommentEdit = styled.div`
  margin-left: 80px;
  color: ${({ theme }) => theme.blue[900]};
  font-size: 14px;
  cursor: pointer;
`;
