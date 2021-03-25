import React, { createContext } from 'react';
import { useEffect,useState } from 'react';
import './Post.css';
import { Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const myContext = createContext();

const Post = () => {
    let history = useHistory();
    const [post,setPost] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>{
            setPost(data);
        }).catch(
          console.log("not found!")
        )
    },[]);
    function seeDetails(id){
        history.push(`/postdetail/${id}`);
    }
    
    return (
        <div>
            {
                post.map(d=>
                    <>
                        <div className="post-box">
                        <h3>{d.title}</h3>
                        <p>{d.body}</p>
                        <Button onClick ={()=>seeDetails(d.id)} color={'primary'}>See more</Button>
                        </div>
                        <br></br>
                    </>
                )
            }
            
        </div>
    );
};

export default Post;