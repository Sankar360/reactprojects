import React from 'react'
import './Profile.css';
import siri from './images/snimg.jpg'

const datas = [
    {
        "id": 1,
        "name": "sankar",
        "city": "chennai",
        "description": "full-stack developer",
        "skills": ["html5", "css3", "bootstrap", "javascript", "jquery", "reactjs", "python", "mysql", "django", "github"],
        "mode":true,
        "pic": siri
    },
    {
        "id": 2,
        "name": "nila",
        "city": "london",
        "description": "frontend developer",
        "skills": ["html5", "css3", "bootstrap", "javascript", "jquery", "reactjs", "github"],
        "mode": false,
        "pic": siri
    },
    {
        "id": 3,
        "name": "kutty",
        "city": "srivi",
        "description": "mern-stack developer",
        "skills": ["mongodb", "expressjs", "reactjs", "nodejs", "github"],
        "mode": true,
        "pic": siri
    },
    {
        "id": 4,
        "name": "siva",
        "city": "srivi",
        "description": "mern-stack developer",
        "skills": ["mongodb", "expressjs", "reactjs", "nodejs", "github"],
        "mode": false,
        "pic": siri
    },
    {
        "id": 5,
        "name": "siva",
        "city": "srivi",
        "description": "mern-stack developer",
        "skills": ["mongodb", "expressjs", "reactjs", "nodejs", "github"],
        "mode": false,
        "pic": siri
    }

]

const Mini = (props) => {
    return (
        
            <div className='container'>
                <div className="img">
                    <span className={props.mode?"span online":"span offline"}>
                        {props.mode?"ONLINE":"OFFLINE"}</span>
                    <img src={props.pic} alt="img" />
                </div>
                <div className="details">
                    <h2>{props.name}</h2>
                    <h3>{props.city}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="button">
                    <button>Message</button>
                    <button>Following</button>
                </div>
                <div className="skills">
                    <h4>skills :</h4>
                    {props.skills.map((skill,index) => (
                        <ul key={index}>
                            <li>{skill}</li>
                        </ul>
                    ))}
                </div>
            </div>
        
    )
}

export const Profile = () => {
    return (
        <>
            {datas.map((data,index) => (
                <Mini key={index} 
                name={data.name}
                city={data.city}
                description={data.description}
                skills={data.skills}
                mode={data.mode}
                pic={data.pic}
                 />))}
        </>
    )
}
