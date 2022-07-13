import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Tabs/Tabs.styles';

export default function Tabs({ children, ...props }) {
  const [active, setActive] = useState(0);
  let index = -1;
  return (
    <Style.TabsContainer {...props}>
      {children.map((child) => {
        if (child.type.name === 'TabPanel') {
          index++;
          return React.cloneElement(child, { active, setActive, index });
        } else {
          return React.cloneElement(child, { active, setActive });
        }
      })}
    </Style.TabsContainer>
  );
}

function TabList({ active, setActive, children }) {
  return (
    <Style.TabList>
      {children.map((child, index) => {
        return React.cloneElement(child, {
          active,
          setActive,
          index,
          key: `${index}-Tab`,
        });
      })}
    </Style.TabList>
  );
}

function TabItem({ active, setActive, index, children, ...props }) {
  const isActive = active === index ? true : false;
  return (
    <Style.Tab
      id={`${index}-Tab`}
      isActiveTabItem={isActive}
      onClick={() => setActive(index)}
      {...props}
    >
      <Style.TabLabel>{children}</Style.TabLabel>
    </Style.Tab>
  );
}

function TabPanel({ active, index, children, ...props }) {
  const isActive = active === index ? true : false;
  return (
    <Style.TabPanel
      role="tab"
      id={`${index}-TabPanel`}
      isActiveTabPanel={isActive}
      {...props}
    >
      {children}
    </Style.TabPanel>
  );
}

Tabs.TabList = TabList;
Tabs.TabItem = TabItem;
Tabs.TabPanel = TabPanel;

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
};

TabList.propTypes = {
  active: PropTypes.number,
  setActive: PropTypes.func,
  children: PropTypes.node.isRequired,
};

TabItem.propTypes = {
  active: PropTypes.number,
  setActive: PropTypes.func,
  index: PropTypes.number,
  children: PropTypes.node.isRequired,
};

TabPanel.propTypes = {
  active: PropTypes.number,
  index: PropTypes.number,
  children: PropTypes.node.isRequired,
};
