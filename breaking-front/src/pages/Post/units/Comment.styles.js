import ReactLoading from 'react-loading';
import styled from 'styled-components';

export const ETCIconContainer = styled.div`
  display: none;
  height: 24px;
`;

export const Comment = styled.div`
  display: ${({ isEditing }) => (isEditing ? 'none' : 'flex')};
  width: 100%;
  padding: 10px;
  ${ETCIconContainer} {
    display: ${({ isOpenToggle }) => (isOpenToggle ? 'block' : 'none')};
  }
  &:hover {
    ${ETCIconContainer} {
      display: block;
    }
  }
`;

export const ProfileImageContainer = styled.div`
  margin-top: 10px;
`;

export const ContentContainer = styled.div`
  margin: 10px 20px;
  flex-grow: 1;
`;

export const Nickname = styled.h3`
  margin-bottom: 3px;
  font-size: 16px;
`;

export const CreatedTime = styled.p`
  margin-bottom: 10px;
  font-size: 10px;
  color: ${({ theme }) => theme.gray[700]};
`;

export const Content = styled.div`
  padding-right: 30px;
  font-size: 14px;
`;

export const Hashtag = styled.span`
  color: ${({ theme }) => theme.blue[900]};
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

export const CommentToggle = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  right: -70px;
  bottom: 30px;
`;

export const AddComment = styled.div`
  margin-left: auto;
  width: 750px;
`;

export const ReplyCount = styled.div`
  display: inline-block;
  margin-left: 75px;
  color: ${({ theme }) => theme.blue[900]};
  font-size: 14px;
  cursor: pointer;
  svg {
    vertical-align: middle;
  }
`;

export const Loading = styled(ReactLoading)`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
`;

export const Reply = styled.div`
  position: relative;
  margin-left: auto;
  min-height: 100px;
  width: 750px;
`;

export const MoreChowReply = styled(ReplyCount)`
  svg {
    margin-right: 3px;
    vertical-align: bottom;
  }
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
