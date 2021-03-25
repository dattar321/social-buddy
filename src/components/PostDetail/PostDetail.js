/* eslint-disable react-hooks/exhaustive-deps */
import React, {   useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductComment from '../ProductComment/ProductComment';
import './postDetail.css'

const PostDetail = () => {
    const {id} = useParams();
    const [data,setData] = useState();
    const fetchData = ()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(da=>setData(da))
        .catch(
            console.log("not found")
        );
    }
    useEffect(fetchData,[]);
    
    return (
        <div>
            <div className = "post-detail">
                <h2>Detail</h2>
                {
                    (data)?
                        <>
                            <h3>{data.title}</h3>
                        <p>{data.body}</p>
                        </>:
                        <p>Loading</p>
                }
            </div>
            <div className="comment-details">
                <h2>Comments</h2>
                <ProductComment></ProductComment>
            </div>
        </div>

        
    );
};

export default PostDetail;
