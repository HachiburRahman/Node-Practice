/* eslint-disable no-unused-vars */
import React, { use, useState } from 'react';

const Users = ({userPromise}) => {
     const initialUsers=use(userPromise)
     const [users,setUsers]=useState(initialUsers)
    //  console.log(users)
    const handleAddUser=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        // console.log(name,email);
         const newUser={name,email}
        fetch('http://localhost:3000/users',{
            method:'POST',
            headers :{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
            alert('User Inserted Successfully')
            // console.log(data)
            newUser._id=data.insertedId
            // console.log(newUser)
            const totalUsers=[...users,newUser]
            setUsers(totalUsers)
        })
    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name='email' placeholder='Email' />
                <br />
                <input type="submit" value="Add User" />
            </form>
            <p>--------------------------</p>
            {
                users.map(user=><p key={user._id}>Name: {user.name} Email: {user.email}</p>)
            }
        </div>
    );
};

export default Users;