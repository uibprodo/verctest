import { ReactElement, ReactNode, useState } from 'react';

type Props = {
  children: ReactElement[];
  activeTabStyle: string;
  inactiveTabStyle: string;
  tabContainerStyle: string;
  commonTabStyle?: string;
};

export function Tabs({
  children,
  activeTabStyle,
  inactiveTabStyle,
  tabContainerStyle,
  commonTabStyle,
}: Props) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className={tabContainerStyle}>
        {children.map((item, i) => {
          return (
            <Tab
              key={`tab-${i}`}
              currentTab={i}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              activeTabStyle={activeTabStyle}
              inactiveTabStyle={inactiveTabStyle}
              commonTabStyle={commonTabStyle}
            >
              {item.props.name}
            </Tab>
          );
        })}
      </div>
      <div>
        {children.map((item, i) => {
          return (
            activeTab === i && (
              <div
                key={`tab-${i}`}
                className={` ${i === activeTab ? 'visible' : 'hidden'}`}
              >
                {item.props.component}
              </div>
            )
          );
        })}
      </div>
    </>
  );
}

type TabProps = {
  children: ReactNode;
  activeTab: number;
  currentTab: number;
  setActiveTab: (_currentTab: number) => void;
  activeTabStyle: string;
  inactiveTabStyle: string;
  commonTabStyle?: string;
};

export function Tab({
  children,
  activeTab,
  currentTab,
  setActiveTab,
  activeTabStyle,
  inactiveTabStyle,
  commonTabStyle,
}: TabProps) {
  return (
    <>
      <div
        className={`${commonTabStyle}
      ${activeTab === currentTab ? activeTabStyle : inactiveTabStyle}`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </div>
    </>
  );
}

type TabPlaceHolderProps = {
  component: ReactElement;
  name?: string;
};

export function TabPlaceHolder({ component }: TabPlaceHolderProps) {
  return <>{component}</>;
}
