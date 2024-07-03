import React, { useEffect, useState } from 'react';
import './Tabs.css'; 

const Tabs = ({userId}) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userProfile,setUserProfile] = useState({})
  const [userContact,setUserContact] = useState({})
  const id = userId?userId:1

  useEffect(() => {
      const fetchUserProfile = async () => {
          try {
              const response = await fetch(`https://masjidy.myofficejobs.com/api/test/user-detail?id=${id}`);
              const data = await response.json();
              setUserProfile(data.Detail);
          } catch (error) {
              console.error('Error fetching user details:', error);
          }
      };

      const fetchUserContact = async () => {
        try {
            const response = await fetch(`https://masjidy.myofficejobs.com/api/test/user-contact?id=${id}`);
            const data = await response.json();
            setUserContact(data.Detail);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

      if (activeTab == 'profile') {
        fetchUserProfile();
      }else{
        fetchUserContact()
      }
  }, [activeTab,userId])
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => handleTabClick('profile')}
        >
          Profile
        </button>
        <button
          className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => handleTabClick('contact')}
        >
          Contact
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'profile' && <TabContent 
                label1='Name' content1={userProfile.firstName} 
                label2='DOB' content2={userProfile.birthDate}
                label3='Gender' content3={userProfile.gender}
                />}
         {activeTab === 'contact' && <TabContent 
                label1='Email' content1={userContact.email} 
                label2='Phone No' content2={userContact.phone}
                label3='Address' content3={userContact.address}
                />}
      </div>
    </div>
  );
};

const TabContent = ({ label1, content1,label2,content2,label3,content3}) => {
  return <div className='tab-label-content'>
          <div>{label1}: {content1}</div>  
          <div>{label2}: {content2}</div>  
          <div>{label3}: {content3}</div>  
        </div>
};

export default Tabs;
