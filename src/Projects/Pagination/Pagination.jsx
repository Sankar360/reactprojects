import React, { useEffect, useState } from 'react'
import './Pagination.css';

export const Pagination = () => {
    const [datas,setDatas]=useState([]);
    const [loading,setLoading]=useState(false);
    const[first,setFirst]=useState(1);
    const[last,setLast]=useState(10);

    useEffect(()=>{
        const fetchdata= async()=>{
            setLoading(true)
            try{
                let url=await fetch("https://jsonplaceholder.typicode.com/posts")
                let res=await url.json()
                setDatas(res)
                setLoading(false)
            }catch(error){
                console.log("please check valid api",error)
            }
        }
        fetchdata()
    },[])

    const lastnum=first*last
    const firstnum=lastnum-last
    const curent=datas.slice(firstnum,lastnum)

    const total=Math.ceil(datas.length/last)

    const paginate=(pass)=>{
        setFirst(pass)
    }

  return (
    <div className='container'>
        <h2>pagination</h2>
        {loading && <p>loading...</p>}
        <ul>
        {curent.map((data)=>(
            <li key={data.id}>{data.id}.{data.title}</li>
        ))}
        </ul>
        <div className="pagination">
            <button className='one'
            onClick={()=>paginate(1)}>first</button>
            <button
            onClick={()=>paginate(first-1)}
            disabled={first==1}
            className={first==1?"disabled":"two"}>previous</button>
            {new Array(total).fill(0).map((_,index)=>(
                <button key={index}
                onClick={()=>paginate(index+1)}
                className={first==index+1?"active":""}>{index+1}</button>
            ))}
            <button
            onClick={()=>paginate(first+1)}
            disabled={first==total}
            className={first==total?"disabled":"two"}>next</button>
            <button className='four'
            onClick={()=>paginate(total)}>last</button>
        </div>
    </div>
  )
}
