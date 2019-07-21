import React from 'react';
 const Field=(props)=>{
    return (
        <input type="text" style={props.style} name={props.name} placeholder={props.placeholder} onBlur={props.blur}/>
    );
  };
  export default Field