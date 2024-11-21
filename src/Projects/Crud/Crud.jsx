import React, { useState } from 'react'
import './Crud.css'
import { v4 as uuidv4 } from 'uuid';

export const Crud = () => {
    const [users,setUsers]=useState([])
    const [editMain,setEditMain]=useState("add")
    const [userinfo, setUserinfo] = useState({
        id:uuidv4(),
        name: "",
        age: "",
        email: "",
        phoneno: ""
    })

    const handlechange=(e)=>{
        setUserinfo({...userinfo,[e.target.name]:[e.target.value]})
    }

    const addata=()=>{
        setUsers([...users,userinfo])
        setUserinfo({
            name:"",
            age:"",
            email:"",
            phoneno:""
        })
    }

    const deleteitem=(id)=>{
        setUsers((pre)=>pre.filter((user)=>(
            user.id!==id
        )))
    }

    const start=(user)=>{
        setUserinfo(user)
        setEditMain("edit")
    }

    const cancel=()=>{
        setUserinfo({...userinfo,
            name:"",
            age:"",
            email:"",
            phoneno:""
        })
        setEditMain("add")
    }

    const update=(id)=>{
        setUsers((pre)=>pre.map((user)=>user.id===id?
    userinfo:user))
        setUserinfo({
            name:"",
            age:"",
            email:"",
            phoneno:""
        })
        setEditMain("add")
    }
    return (
        <div className='container'>
            <div className="form">
                <h3>CRUD OPERATION</h3>
                <div className="label">
                    <label>Name :</label>
                    <input type="text"
                    name='name'
                    value={userinfo.name}
                    onChange={handlechange} placeholder='enter your name' />
                </div>
                <div className="label">
                    <label>Age :</label>
                    <input type="number"
                    name='age'
                    value={userinfo.age}
                    onChange={handlechange} placeholder='enter your age' />
                </div>
                <div className="label">
                    <label>Email :</label>
                    <input type="email"
                    name='email'
                    value={userinfo.email}
                    onChange={handlechange} placeholder='enter your email' />
                </div>
                <div className="label">
                    <label>PhoneNo :</label>
                    <input type="number"
                    name='phoneno'
                    value={userinfo.phoneno}
                    onChange={handlechange} placeholder='enter your phoneno' />
                </div>
            
                    {editMain==="add"?
                    (<button className='add'
                        onClick={addata}>Add</button>):
                    (<div className='bt'>
                        <button className='update'
                        onClick={()=>update(userinfo.id)}>Update</button>
                        <button onClick={cancel} className='cancel'>Cancel</button>
                    </div>)}
            </div>
            <div className="datatable">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>PhoneNo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index)=>(
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneno}</td>
                                <td>
                                    <button
                                    onClick={()=>start(user)} className='edit'>Edit</button>
                                    <button
                                    onClick={()=>deleteitem(user.id)} className='delete'>Delete</button>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
