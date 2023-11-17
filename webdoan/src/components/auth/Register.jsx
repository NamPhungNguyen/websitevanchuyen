import React, { useState } from 'react';
import RegisterBusiness from './RegisterBussiness';
import RegisterUser from './RegisterUser';
import './register.scss'

const RegisterTabs = () => {
  const [activeTab, setActiveTab] = useState('user'); // State để theo dõi tab đang active

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  
  return (
    <div className='container'>
      <div className="tabs">
        <button
          className={activeTab === 'user' ? 'active' : ''}
          onClick={() => handleTabClick('user')}
        >
          Register User
        </button>
        <button
          className={activeTab === 'driver' ? 'active' : ''}
          onClick={() => handleTabClick('driver')}
        >
          Register Driver
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'user' && <RegisterUser />} {/* Hiển thị form registerUser nếu tab user được chọn */}
        {activeTab === 'driver' && <RegisterBusiness />} {/* Hiển thị form registerDriver nếu tab driver được chọn */}
      </div>
    </div>
  );
};

export default RegisterTabs;
