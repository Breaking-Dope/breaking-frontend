import Input from 'components/Input/Input';
import { ScrollBarY } from 'components/ScrollBar/ScrollBar';
import styled from 'styled-components';

export const PostWriteTitle = styled.h3`
  font-size: 18px;
`;

export const FindLocationLayout = styled.div`
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
  > svg {
    width: 15px;
    height: 15px;
    vertical-align: middle;
    > path {
      stroke: ${({ theme }) => theme.blue[900]};
    }
  }
`;

export const FindLocationMessage = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.blue[900]};
  vertical-align: middle;
`;

export const LocationInput = styled.input`
  width: 410px;
  padding: 10px;
  margin-top: 20px;
  border: solid 1px ${({ theme }) => theme.gray[500]};
  border-radius: 10px;
`;

export const SearchInformationSideBar = styled.div`
  position: absolute;
  top: 80px;
  left: 20px;
  z-index: 10;
  height: 600px;
  width: 185px;
  padding: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.opacityWhite};
`;

export const SearchForm = styled.form`
  display: flex;
  padding: 10px;
`;

export const SearchMarker = styled.div`
  padding: 5px;
  border: solid 2px ${({ theme }) => theme.gray[500]};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
  font-size: 12px;
`;

export const SearchInput = styled(Input)`
  position: sticky;
  background-color: ${({ theme }) => theme.gray[300]};
`;

export const SearchResult = styled(ScrollBarY)`
  height: 520px;
  overflow-y: scroll;
`;

export const SearchItem = styled.div`
  padding: 10px;
`;

export const PlaceName = styled.p`
  font-size: 12px;
`;

export const RoadAddressName = styled.p`
  margin-top: 5px;
  font-size: 10px;
`;

export const AddressName = styled.p`
  font-size: 8px;
  color: ${({ theme }) => theme.gray[600]};
`;
