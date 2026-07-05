import React from 'react';
import { data, useLoaderData } from 'react-router';

const UpdateUser = () => {

    const user=useLoaderData()
    const handleUpdateUser=(e)=>{
       e.preventDefault();
       const name =e.target.name.value;
       const email=e.target.email.value;
       const updaterUser={name,email}
    //    console.log(name,email)
    fetch(`http://localhost:3000/update/${user._id}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updaterUser)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
    }
    return (
        <div>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' placeholder='Name'defaultValue={user.name} />
                <br />
                <input type="email" name='email' placeholder='Email' defaultValue={user.email} />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;