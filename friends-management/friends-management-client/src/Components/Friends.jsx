/* eslint-disable no-unused-vars */
import React, { use, useState } from 'react';

const Friends = ({friendsPromise}) => {
    const initialFriends=use(friendsPromise)
    // console.log(friends)
    const [friends,setFriends]=useState(initialFriends)

      const handleAddFriends=(e)=>{
            e.preventDefault();
            const name=e.target.name.value;
            const email=e.target.email.value;
            console.log(name,email)
            const newFriend={name,email}

            fetch('http://localhost:5000/friends',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(newFriend)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const totalFriends=[...friends,data]
                setFriends(totalFriends)
                e.target.reset();
            })

        }
    return (
        <div>
            <p>All Friends are Coming...</p>
             
             <form onSubmit={handleAddFriends}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name='email' placeholder='Email' />
                <br />
                <button>Add Friend</button>
             </form>
              
            {
                friends.map(friend=><p key={friend.id}>Name:{friend.name} Email:{friend.email}</p>)
            }
        </div>
    );
};

export default Friends;