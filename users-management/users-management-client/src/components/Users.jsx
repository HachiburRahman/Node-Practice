import React, { use, useState } from 'react';

const Users = ({userPromise}) => {
    const initialUsers=use(userPromise);
    // console.log(users)
    const [users,setUsers]=useState(initialUsers)

    const handleUser=(e)=>{
        e.preventDefault()
       const name=e.target.name.value;
       const email=e.target.email.value;
       const newUser={name,email}
    //    console.log(name,email);
    fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newUser)
    }).then(res=>res.json()).then(data=>{
        console.log('After post ' ,data)
        const allUsers=[...users,data]
        setUsers(allUsers)
    })

    }
    return (
        <div>
            <section>
                <form onSubmit={handleUser}>
                    <input type="text" name='name' placeholder='Name' />
                    <br />
                    <input type="email" name="email" id="" placeholder='Email' />
                    <br />
                    <button>Add User</button>
                </form>
            </section>
            {
                users.map(user=><p key={user.id}>Name : {user.name} Email : {user.email}</p>)
            }
        </div>
    );
};

export default Users;