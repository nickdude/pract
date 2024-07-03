import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import UserDetail from '../UserDetail/UserDetail'
import './SideBar.css'

const SideBar = () => {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(1);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const response = await fetch('https://masjidy.myofficejobs.com/api/test/users');
            const data = await response.json();
            setUsers(data.data); 
        } catch (error) {
            console.error('Error fetching users:', error);
        }
        };

        fetchUsers();
    }, []); 

    const handleUserClick = (userId) => {
        setSelectedUserId(userId); 
    };
   

  return (<>
            <div className='sidebar-container'>
                    <h1>User List</h1>
                    <div className='user-list-container'>
                        {users.map(user => (
                            <div className='sidebar-label' onClick={() => handleUserClick(user.id)}  key={user.id}>
                                {user.firstName}
                            </div>
                    ))}
                    </div>
            </div>
           {selectedUserId && <UserDetail userId={selectedUserId} />}
          </>)
}

export default SideBar