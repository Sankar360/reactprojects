import React, { useState } from 'react'
import datas from './Search.json';
import './Search.css';

export const Search = () => {
    const[search,setSearch]=useState("")

    const change=(e)=>{
            setSearch(e.target.value)
    }
    return (
        <div className='container'>
                        <h2>Search Table</h2>
            <input type="text" placeholder='search text'
            onChange={change} />
            <table>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>First_Name</th>
                        <th>Last_Name</th>
                        <th>Email</th>
                        <th>Phone_No</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.filter((data)=>{
                        return search===""?data:
                        data.first_name.toLowerCase().includes(search.toLowerCase()) ||
                        data.last_name.toLowerCase().includes(search.toLowerCase()) ||
                        data.email.toLowerCase().includes(search.toLowerCase()) ||
                        data.phoneno.includes(search)
                    }).map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.first_name}</td>
                            <td>{data.last_name}</td>
                            <td>{data.email}</td>
                            <td>{data.phoneno}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
