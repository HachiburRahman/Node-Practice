import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user=useLoaderData();
    // console.log(user)
    return (
        <div>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
        </div>
    );
};

export default UserDetails;