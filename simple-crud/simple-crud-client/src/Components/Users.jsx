import React, { use, useState } from 'react';




const Users = ({usersPromise}) => {
     const allUsers=use(usersPromise)
    //  console.log(allUsers)

     const [users,setUsers]=useState(allUsers)
    const handleAddUser=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        // console.log(name,email);
        const newUser={name,email}


        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("Data from mongo",data)
            e.target.reset();
            if(data.insertedId){
               newUser._id=data.insertedId;
                const totalUsers=[...users,newUser]
                setUsers(totalUsers)
            }
        })

    }

    const handleDeleteUser=(id)=>{
    //    console.log(id)
    fetch(`http://localhost:5000/users/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
            const remaining=users.filter(user=>user._id!==id)
            setUsers(remaining)
        }
    })

    }
    return (
        <div>
            <p>All Users are here</p>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" placeholder='Name'/>
                <br />
                <input type="email" name="email" id="" placeholder='Email'/>
                <br />
                <input type="submit" value="Add User" />
            </form>
            <p>-----------------------------------</p>
            <div>
                {
                    users.map(user=><p key={user._id}>Name: {user.name} Email: {user.email} 
                    <button onClick={()=>handleDeleteUser(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;