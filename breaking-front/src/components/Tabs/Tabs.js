import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Tabs/Tabs.styles';

export default function Tabs({ children, ...props }) {
  return <Style.TabsContainer {...props}>{children}</Style.TabsContainer>;
}

function TabItem({ value, isActive, children, ...props }) {
  return (
    <>
      {isActive ? (
        <Style.ActiveTab {...props}>
          <Style.TabLabel>{children}</Style.TabLabel>
        </Style.ActiveTab>
      ) : (
        <Style.Tab {...props}>
          <Style.TabLabel>{children}</Style.TabLabel>
        </Style.Tab>
      )}
    </>
  );
}

function TabPanel({ isActive, children }) {
  return <Style.TabPanel isActive={isActive}>{children}</Style.TabPanel>;
}

Tabs.TabList = Style.TabList;
Tabs.TabItem = TabItem;
Tabs.TabPanel = TabPanel;

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
};

TabItem.propTypes = {
  value: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

TabItem.defaultProps = {
  isActive: false,
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
};

TabPanel.defaultProps = {
  isActive: false,
};
