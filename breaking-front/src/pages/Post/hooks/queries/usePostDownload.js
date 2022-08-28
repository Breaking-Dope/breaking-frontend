import { getPostDownloadAllMedia } from 'api/post';
import FileSaver from 'file-saver';
import { useQuery } from 'react-query';

const usePostDownload = (postId) => {
  return useQuery(['postDownload', postId], getPostDownloadAllMedia, {
    enabled: false,
    onSuccess: (res) => {
      if (res.data) FileSaver.saveAs(new Blob([res.data]), 'download.zip');
    },
  });
};

export default usePostDownload;
