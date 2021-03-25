import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './productComment.css'

const ProductComment = () => {
    const [comment,setComment] =useState();
    let addComment = [];
    const {id} = useParams();
    const fetchdata= ()=>{
        const url = `https://jsonplaceholder.typicode.com/comments`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setComment(data);
        });
    }
    
    useEffect(fetchdata,[]);
    //console.log("id "+id);
    if(comment !== undefined)
        if(comment.length){
            addComment.push(comment.filter(k=>k.postId.toString()===id.toString()));
        }
    
    //console.log(comment);
    function getImg(){
        let num = Math.floor((Math.random() * 80) + 1);
        const imgUrl = `https://randomuser.me/api/portraits/thumb/men/${num}.jpg`;
        return imgUrl;
    }
    
    //https://randomuser.me/api/portraits/men/15.jpg
    return (
        <div>
            {
                (addComment[0]!==undefined)?
                    addComment[0].map(i=>
                        <div key ={i.id}>
                            <img   src= {getImg()} alt=""/>
                            <h4>{i.email}</h4>
                            <p>{i.body}</p>
                        </div>
                    )
                :
                <p>Loading</p>
            }
        </div>
    );
};

export default ProductComment;