import React from 'react'; 

function MyProfil(props) {
    
    const { fullName, bio, profession, children, handleName } = props
    return (
        <div  style={{backgroundColor: "#ffffff", width:"20em", height:'30em', borderRadius:"17px"}}>
            <div>{ children }</div>
            <div style={{position:"relative" , top:"0em" ,margin:'0em'}}>
                <h1 style={{color: "#651FFF"}}> {fullName} </h1>              
                <p style={{color: "#9E9E9E"}}> {bio} </p>
                <h2 style={{color: "#212121", fontSize:"1em"}}> {profession} </h2>
                <button style={{color: "#821113", float:'center', margin: '2em 0', cursor:'pointer'}} onClick={e => handleName(e)}>Click Here</button>
            </div>
        </div>    
    )   
}

export default MyProfil;