import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Tabs/Tabs.styles';

export default function Tabs({ children, ...props }) {
  const [active, setActive] = useState(0);
  let index = -1;
  return (
    <Style.TabsContainer {...props}>
      {children.map((child, key) => {
        if (child.type?.name === 'TabPanel') {
          index++;
          return React.cloneElement(child, {
            active,
            setActive,
            index,
            key: `${key}-TabPanel`,
          });
        } else if (child.type?.name === 'TabList') {
          return React.cloneElement(child, {
            active,
            setActive,
            key: `${key}-TabList`,
          });
        } else {
          return <></>;
        }
      })}
    </Style.TabsContainer>
  );
}

function TabList({ active, setActive, children }) {
  children = React.Children.toArray(children);
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
  return (
    <Style.Tab
      id={`${index}-Tab`}
      isActiveTabItem={active === index}
      onClick={() => setActive(index)}
      {...props}
    >
      <Style.TabLabel>{children}</Style.TabLabel>
    </Style.Tab>
  );
}

function TabPanel({ active, index, children, ...props }) {
  return (
    <Style.TabPanel
      role="tab"
      id={`${index}-TabPanel`}
      isActiveTabPanel={active === index}
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
