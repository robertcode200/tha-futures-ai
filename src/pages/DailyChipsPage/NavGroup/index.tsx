import { useCallback, useState } from 'react';
import ChipCarryOver from '../tabContents/chipCarryOver/ChipCarryOver';
import ChipOverview from '../tabContents/chipOverview/ChipOverview';

import './navGroup.scss';

const config = {
  navs: [
    {
      key: 'chip-overview',
      label: '籌碼概覽',
      component: <ChipOverview />,
    },
    {
      key: 'chip-carry-over',
      label: '留倉籌碼',
      component: <ChipCarryOver />,
    },
  ],
};

const Nav = ({ 
  navKey, 
  activeTab, 
  handleTabClick, 
  label 
}: { 
  navKey: string, 
  activeTab: string,
  handleTabClick: (tab: string) => void, 
  label: string 
}) => (
  <button
    className={activeTab === navKey ? 'active' : ''}
    onClick={() => handleTabClick(navKey)}
  >
    {label}
  </button>
);

const NavGroup = () => {
  const [activeTab, setActiveTab] = useState(config.navs[0].key);

  const handleTabClick = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  const renderNavs = useCallback(() => config.navs.map((nav) => (
    <Nav 
      key={nav.key} 
      navKey={nav.key} 
      activeTab={activeTab} 
      handleTabClick={handleTabClick} 
      label={nav.label}
    />
  )), [activeTab, handleTabClick]);

  const renderContentComponent = useCallback(
    () => config.navs.find((nav) => (nav.key === activeTab))?.component, 
    [activeTab]
  );

  return (
    <div className='nav-group'>
      <div 
        className='navs-container'>
        {renderNavs()}
      </div>

      {renderContentComponent()}
    </div>
  );
};

export default NavGroup;
