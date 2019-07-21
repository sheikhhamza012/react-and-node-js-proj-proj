import React from 'react';
import style from './style';
import Home from './homeform'
import Admin from './admin'
import Field from './field'
import Axios from 'axios';

const Login =(props)=>{
    if(props.page==="login"){
      return(
        <div>
        <Field style={style.cnic} name="cnic" placeholder="cnic"  blur={props.field}/><br/><br></br>
        <button style={style.cnic} onClick={props.button} >login</button>
        </div>
      );
    }else return null;
  }

 class App extends React.Component{
   constructor(p){
     super(p);
     this.state={
       page:"login",
       title:"Login",
       cnic:""
     };
   }
  login=()=>{
    if(this.state.cnic!=="admin"){
    Axios.get("http://localhost:8080/login/"+this.state.cnic).then((r)=>{
    if(r.data.length<1){
        var n=prompt("please enter your name to register");
        if(n.length>0){
          Axios.post("http://localhost:8080/reg",{cnic:this.state.cnic,name: n}).then((r)=>{
          if(!r.data.error){
            this.setState({page:"home",title:"Available tours"})
          }
        });
      }else{
        alert("name is needed for registration");
      }
      }else{
        this.setState({page:"home",title:"Available tours"})
      }
    });
  }else{
    this.setState({page:"admin",title:"Admin Panel"})
  }
   }
  change=(e)=>{
    this.setState({cnic:e.target.value});
  }
   render(){
      return (
      <div>
        <div style={style.head}>
         {this.state.title}
        </div>
        <div style={style.container}>
          <Home page={this.state.page} cnic={this.state.cnic}/><Login page={this.state.page} field={this.change} button={this.login}/><Admin page={this.state.page} />
        </div>
      </div>
      );
    }
  } 
export default App;
