import React, { useState } from 'react';
import ShareModal from 'components/ShareModal/ShareModal';
import { NORMAL_CONTENT } from 'mocks/dummyData/contents';

export default {
  title: 'components/ShareModal',
  component: ShareModal,
};

function Template(args) {
  const [isOpen, setIsOpen] = useState(false);
  const data = NORMAL_CONTENT;

  return (
    <>
      <button onClick={() => setIsOpen(true)}>공유</button>
      <ShareModal
        data={data}
        postId={data.postId}
        isOpen={isOpen}
        closeClick={() => setIsOpen(false)}
        {...args}
      />
    </>
  );
}

export const DefaultShareModal = Template.bind({});
DefaultShareModal.args = {};
