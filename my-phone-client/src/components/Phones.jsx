import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Phones = () => {
    const phones=useLoaderData()
    console.log(phones)
    return (
        <div>
        {
            phones.map(phone=><li key={phone.id}><Link to={`/phones/${phone.id}`} >{phone.name}</Link></li>)
        }
        </div>
    );
};

export default Phones;