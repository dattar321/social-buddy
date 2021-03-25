import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
    let history = useHistory();
    const myStyle = {
        padding:"10px",
        color:"red",
        textAlign:"center",
        
    };
    function goHome(){
        history.push("/");
    }
    
    return (
        <div style={myStyle} onClick={goHome}>
            <h1>Welcome to Random Posts!</h1>
        </div>
    );
};

export default Header;