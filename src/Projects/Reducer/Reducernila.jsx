import React, {useReducer} from 'react'
import './Reducer.css'

let initialstate=[

]

const reducer=(states,action)=>{
    switch (action.type){
        case "ADD_TASK":
            return [...states,{id:new Date(),name:action.payload}];
        case "DELETE_TASK":
            return states.filter((state)=>{state.id!==action.payload});
        /* case "UPDATE_TASK":
            return states.map((state)=>(
                state.id===action.payload.id?{...state,newname:}:state
            )); */
        default:
            return;
    }
}
export const Reducernila = () => {
    const [todos,dispatch]=useReducer(reducer,initialstate)



    const namechangeitem=(e)=>{
        dispatch({type:"ADD_TASK",payload:[e.target.name]=[e.target.value]})
    }

    const deleteitem=(id)=>{
        dispatch({type:"DELETE_TASK",payload:id})
    }

  return (
    <div className='container'>
        <h2>personal details</h2>       
        <div className="header">
        <div className="input-container">
            <label htmlFor="name">name</label>
            <input type="text" id='name' name='name'
            placeholder='enter your name'
            onChange={namechangeitem}/>
        </div>
        <div className="input-container">
            <label htmlFor="age">age</label>
            <input type="number" name='age'
            onChange={namechangeitem} id='age' placeholder='enter your age'/>
        </div>
        <div className="input-container">
            <label htmlFor="email">email</label>
            <input type="email" name='gmail'
            onChange={namechangeitem} id='email' placeholder='enter your email'/>
        </div>
        <div className="input-container">
            <label htmlFor="phoneno">phoneNo</label>
            <input type="number" name='phone'
            onChange={namechangeitem} id='phoneno' placeholder='enter your phoneno'/>
        </div>
        <div className="btn">
        <button>add</button>
        </div>
        </div>

        <div className="body">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>PhoneNo</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                  {todos.map((todo)=>(
                    <tr key={todo.id}>
                        <td>{todo.age}</td>
                        <td>{todo.name}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
