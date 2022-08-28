import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import * as Style from 'components/Modal/Modal.styles';

export default {
  title: 'components/Modal',
  component: Modal,
  argTypes: {},
};

function Template(args) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>팔로워</button>
      <Modal isOpen={isOpen} closeClick={() => setIsOpen(false)} {...args} />
    </>
  );
}

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  title: '팔로워',
  children: (
    <>
      <Style.Div />
      <Style.Div />
      <Style.Div />
      <Style.Div />
      <Style.Div />
      <Style.Div />
      <Style.Div />
      <Style.Div />
      <Style.Div />
      <Style.Div />
    </>
  ),
};
