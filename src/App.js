import React from 'react';
import './App.css';
import MyProfil from './profile/MyProfil';
import PropTypes from 'prop-types';


function App(props) {
  
  const handleName = e => {e.preventDefault(); alert('Profile User Name is : HOUSSEM HAFSAOUI');};

  MyProfil.defaultProps = {
    fullName  : "FirstName FamilyName",
    bio       : "Your bio",
    profession: "Your profession"
};
  MyProfil.propTypes = {
    fullName  : PropTypes.string,
    bio       : PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
};
  return (
    <div className="App" style={{display:"grid", placeItems: "center", alignItems:'center', justifySelf:'center',width:"100%", height:"120vh", backgroundColor:"#8cf0f5"}}>
      <MyProfil  fullName={'HOUSSEM HAFSAOUI'} bio={"Hey there ! I am Houssem, I'm an Tunisian man .I love maths, physics, chemistries and programming"} profession={'Full-Stack Developer'} handleName={handleName}>
      <img src={'./img.jpg'} style={{position:"relative", top:'1em' ,width:"8em", height:"auto", borderRadius:"50%", border:"solid 4px #651FFF"}} alt="LOGO" /> 
      </MyProfil>
    </div>
  );
}
 
export default App;