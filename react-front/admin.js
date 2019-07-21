import React from 'react';
import style from './style';
import axios from 'axios';
import Home from './homeform'
import Field from './field';
class Destinations extends React.Component{
    constructor(p){
        super(p);
        this.state={
            list:null ,  
         }
         this.insert={
            PostalCode:"",
            city:"",
            province:""
         }   
    }
    componentDidMount(){
        axios.get("http://localhost:8080/get/destinations").then((r)=>{
            this.setState(
                {
                    list:r.data.res
                }
            )
        });
    }
    field=(e)=>{
        this.insert[e.target.name]=e.target.value;
     }
     delete=(e)=>{
         alert(e.target.name);
     }
    insertdata=()=>{
        if((this.insert.PostalCode.length>0)&&(this.insert.city.length>0)&&(this.insert.province.length>0)){
            axios.post("http://localhost:8080/insert/destinations",this.insert).then((r)=>{
            if(r.data.error){
                alert("some error");
            }else{
                this.setState(
                    {
                        list:this.state.list.concat(this.insert)
                    }
                )
            }
        });
    }else{
        alert("data empty");
    }
    }
    render(){
    if(this.props.page==="destinations"){
        return(
            <div>
            <div style={style.row}>
                <table style={{width:"100%"}}>
                    <tr >
                        <th style={{width:"30%"}}>
                           postal Code
                        </th>
                        <th>
                            city
                        </th>
                        <th  style={{width:"30%"}}>
                            province
                        </th>
                        <th  style={{width:"20%"}}>
                            action
                        </th>
                    </tr>
                </table>
            </div><br></br>
            <div style={style.row}>
                <table style={{width:"100%"}}>
                    <tr >
                    <td style={{paddingLeft:50}}>
                        <Field style={{width:"100%",height:20,fontSize:16}} name="PostalCode" placeholder="postal code"  blur={this.field} />
                    </td>
                    <td style={{paddingLeft:20}}>
                        <Field style={{width:"100%",height:20,fontSize:16}} name="city" placeholder="city"  blur={this.field} />
                    </td>
                    <td style={{paddingLeft:40}}>
                        <Field style={{width:"100%",height:20,fontSize:16}} name="province" placeholder="province"  blur={this.field} />          
                    </td>
                    <td style={{paddingLeft:35,float:"right"}}>
                        <button onClick={this.insertdata}>insert</button>
                    </td>
        </tr>{this.state.list?this.state.list.map((row)=><tr >
                    <td style={{paddingLeft:50}}>
                        {row.PostalCode}
                    </td>
                    <td style={{paddingLeft:20}}>
                       {row.city}
                    </td>
                    <td style={{paddingLeft:40}}>
                        {row.province}         
                    </td>
                    <td style={{paddingLeft:35,float:"right"}}>
                        <button onClick={this.delete} name={row.PostalCode}>delete</button>
                    </td>
        </tr>
        ):null}
    </table>
</div>
            </div>
        );
    }else return null;
}
}
class Food extends React.Component{
    constructor(p){
        super(p);
        this.state={
            list:"" , 
         }
         this.insert={
            name:""
         }   
    }
    componentDidMount(){
        axios.get("http://localhost:8080/get/food").then((r)=>{
            this.setState(
                {
                    list:r.data.res
                }
            )
        });
    }
    
     delete=(e)=>{
         alert(e.target.name);
     }
    insertdata=()=>{
        if((this.insert.name.length>0)){
            axios.post("http://localhost:8080/insert/food",this.insert).then((r)=>{
            if(r.data.error){
                alert("some error");
            }else{
                this.setState(
                    {
                        list:this.state.list.concat(this.insert)
                    }
                )
            }
        });
    }else{
        alert("data empty");
    }
    }
    field=(e)=>{
        this.insert[e.target.name]=e.target.value;
     }
    render(){
    if(this.props.page==="food"){
        return(
            <div>
            <div style={style.row}>
                <table style={{width:"100%",textAlign:"left"}}>
                    <tr >
                        <th >
                        food name
                        </th>
                        <th style={{width:"10%",textAlign:"right",paddingRight:50}}>
                            action
                        </th>
                    </tr>
                </table>
            </div><br></br>
            <div style={style.row}>
                <table style={{width:"100%"}}>
                    <tr >
                    <td style={{paddingLeft:20}}>
                        <Field style={{width:"100%",height:20,fontSize:16}} name="name" placeholder="food name"  blur={this.field} />
                    </td>
                    <td style={{paddingLeft:0,textAlign:"right"}}>
                       <button onClick={this.insertdata}>add</button>
                    </td>
        </tr>{this.state.list?this.state.list.map((row)=><tr >
                    <td style={{paddingLeft:50}}>
                        {row.name}
                    </td>
                    <td style={{paddingLeft:20,textAlign:"right"}}>
                      <button name= {row.name} onClick={this.delete}>delete</button>
                    </td>
                    
        </tr>
        ):null}
    </table>
</div>
            </div>
        );
    }else return null;
}
}
class Bus extends React.Component{
    constructor(p){
        super(p);
        this.state={
            list:"" , 
         }
         this.insert={
            busno:"",
            capacity:"",
            drivername:"",
         }   
    }
    componentDidMount(){
        axios.get("http://localhost:8080/get/bus").then((r)=>{
            this.setState(
                {
                    list:r.data.res
                }
            )
        });
    }
    
     delete=(e)=>{
         alert(e.target.name);
     }
    insertdata=()=>{
        if((this.insert.busno.length>0)&&(this.insert.capacity.length>0)&&(this.insert.drivername.length>0)){
            axios.post("http://localhost:8080/insert/bus",this.insert).then((r)=>{
            if(r.data.error){
                alert("some error");
            }else{
                this.setState(
                    {
                        list:this.state.list.concat(this.insert)
                    }
                )
            }
        });
    }else{
        alert("data empty");
    }
    }
    field=(e)=>{
        this.insert[e.target.name]=e.target.value;
     }
    render(){
    if(this.props.page==="bus"){
        return(
            <div>
            <div style={style.row}>
                <table style={{width:"100%",textAlign:"left"}}>
                    <tr >
                        <th style={{width:"40%"}}>
                        bus no.
                        </th>
                        <th style={{width:"35%"}}>
                        capacity
                        </th>
                        <th style={{width:"100%"}}>
                        driver name
                        </th>
                        <th style={{width:"10%",textAlign:"right",paddingRight:50}}>
                            action
                        </th>
                    </tr>
                </table>
            </div><br></br>
            <div style={style.row}>
                <table style={{width:"100%"}}>
                    <tr >
                    <td style={{paddingLeft:20}}>
                        <Field style={{width:"100%",height:20,fontSize:16}} name="busno" placeholder="bus no."  blur={this.field} />
                    </td>
                    <td style={{paddingLeft:20}}>
                        <Field style={{width:"100%",height:20,fontSize:16}} name="capacity" placeholder="capacity"  blur={this.field} />
                    </td>
                    <td style={{paddingLeft:20}}>
                        <Field style={{width:"100%",height:20,fontSize:16}} name="drivername" placeholder="driver name"  blur={this.field} />
                    </td>
                    <td style={{paddingLeft:0,textAlign:"right"}}>
                       <button onClick={this.insertdata}>add</button>
                    </td>
        </tr>{this.state.list?this.state.list.map((row)=><tr >
            <td style={{paddingLeft:20}}>
                    {row.busno}
                    </td>
                    <td style={{paddingLeft:20}}>
                    {row.capacity}
                    </td>
                    <td style={{paddingLeft:20}}>
                    {row.drivername}
                    </td>
                    <td style={{paddingLeft:0,textAlign:"right"}}>
                       <button onClick={this.delete} name={row.busno}>del</button>
                    </td>
                    
        </tr>
        ):null}
    </table>
</div>
            </div>
        );
    }else return null;
}
}

class AddTrip extends React.Component{
    constructor(p){
        super(p);
        this.state={
            tripid:"",
            foodlist:"",
            destinationslist:"",
            buslist:"",
            points:[],
    };
    this.points={
        tripid:"",
        startpostal:"",
        endpostal:"",
    }
    this.insert=
        {
            tripid:"",
            reqPeople:"",
            days:"",
            departure:"",
            points:[],
        }
    
    }
    updatepoints = ()=>{
        this.setState({
            points:this.state.points.concat({tripid:this.points.tripid,startpostal:this.points.startpostal,endpostal:this.points.endpostal})
        });
        
    }
    componentDidMount(){
        axios.get("http://localhost:8080/get/totaltours").then((r)=>{
            this.insert["tripid"]=r.data[0].n+1;
            this.points["tripid"]=r.data[0].n+1;
            this.setState({
                tripid:r.data[0].n+1
            })
        });
        axios.get("http://localhost:8080/get/food").then((r)=>{
            this.setState({
                foodlist:r.data
            })
        });
        axios.get("http://localhost:8080/get/destinations").then((r)=>{
            this.setState({
                destinationslist:r.data
            })
        });
        axios.get("http://localhost:8080/get/bus").then((r)=>{
            this.setState({
                buslist:r.data
            })
        });
    }
    submit=()=>{
        this.insert['points']=this.state.points;
        axios.post("http://localhost:8080/insert/trip",this.insert).then((r)=>{
            if(r.data.error){
                alert("something happened");
            }else{
                alert("done");
            }
        })
    }
    field=(e)=>{
        this.insert[e.target.name]=e.target.value;
    }
    setpoints=(e)=>{
            this.points[e.target.name]=parseInt(e.target.value, 10);
    }
    render(){
        if(this.props.page==="addtrip"){
            return(
                <div style={{overflowX:"hidden",height:window.innerHeight/2.2}}>
                       <h2 style={{color:"#fff"}}>Make a new Trip</h2> 
                       <div style={style.row}> 
                       <table style={{width:"100%"}}>  
                                <tr>
                                    <th>
                                        Trip no.
                                    </th>
                                    <th>
                                        required people.
                                    </th>
                                    <th>
                                        no. of days
                                    </th>
                                    <th>
                                        departure time
                                    </th>
                                </tr>
                                <tr>
                                    <td style={{paddingLeft:20}}>
                                       {this.state.tripid}
                                    </td>
                                    <td style={{paddingLeft:20}}>
                                    <Field style={{width:"100%",height:20,fontSize:16}} name="reqPeople" placeholder="required people"  blur={this.field} />
                                    </td>
                                    <td style={{paddingLeft:20}}>
                                    <Field style={{width:"100%",height:20,fontSize:16}} name="days" placeholder="no. of days"  blur={this.field} />

                                    </td>
                                    <td style={{paddingLeft:70}}>
                                       <input type="datetime-local" name="departure" onBlur={this.field} placeholder="2019-06-12T11:20" />
                                    </td>
                                </tr>
                             </table>
                        </div>
                        <h2 style={{color:"#fff"}}>Food for new Trip</h2> 
                       <div style={style.row}> 
                       <table style={{width:"100%"}}>  
                                <tr style={{textAlign:"left"}}>
                                    <th style={{width:300,paddingLeft:10}}>
                                        Trip no.
                                    </th>
                                    <th>
                                       Available food
                                    </th>
                                </tr>
                                <tr>
                                    <td  style={{paddingLeft:30}}>
                                        {this.state.tripid}
                                    </td>
                                    <td>
                                        <select name="food" style={{width:"70%",height:30}} onChange={this.field}>
                                            <option value="">
                                                food    
                                            </option>{this.state.foodlist?this.state.foodlist.res.map((row)=>
                                                <option value={row.name}>
                                                {row.name}   
                                            </option>
                                            ):null}
                                        </select>
                                    </td>
                                </tr>
                             </table>
                        </div>
                        <h2 style={{color:"#fff"}}>Bus for new Trip</h2> 
                       <div style={style.row}> 
                       <table style={{width:"100%"}}>  
                                <tr style={{textAlign:"left"}}>
                                    <th style={{width:300,paddingLeft:10}}>
                                        Trip no.
                                    </th>
                                    <th>
                                       Available Bus
                                    </th>
                                </tr>
                                <tr>
                                    <td  style={{paddingLeft:30}}>
                                        {this.state.tripid}
                                    </td>
                                    <td>
                                        <select name="bus" style={{width:"70%",height:30}} onChange={this.field}>
                                            <option value="">
                                                bus    
                                            </option>{this.state.buslist?this.state.buslist.res.map((row)=>
                                                <option value={row.busno}>
                                                {row.busno}   
                                            </option>
                                            ):null}
                                        </select>
                                    </td>
                                </tr>
                             </table>
                        </div>
                        <h2 style={{color:"#fff"}}>Points  for this trip</h2> 
                       <div style={style.row}> 
                       <table style={{width:"100%"}}>  
                                <tr style={{textAlign:"left"}}>
                                    <th style={{width:100,paddingLeft:10}}>
                                        Trip no.
                                    </th>
                                    <th style={{width:100,paddingLeft:10}}>
                                        From
                                    </th>
                                    <th style={{width:100,paddingLeft:10}}>
                                       To
                                    </th>
                                    <th style={{width:100,paddingLeft:10}}>
                                        action
                                    </th>
                                </tr>
                                <tr>
                                    <td  style={{paddingLeft:30}}>
                                        {this.state.tripid}
                                    </td>
                                    <td>
                                        <select name="startpostal" style={{width:"70%",height:30}} onChange={this.setpoints}>
                                            <option value="">
                                                from    
                                            </option>{this.state.destinationslist?this.state.destinationslist.res.map((row)=>
                                                <option value={row.PostalCode}>
                                                {row.city}   
                                            </option>
                                            ):null}
                                        </select>
                                    </td>
                                    <td>
                                        <select name="endpostal" style={{width:"70%",height:30}} onChange={this.setpoints}>
                                            <option value="">
                                                to    
                                            </option>{this.state.destinationslist?this.state.destinationslist.res.map((row)=>
                                                <option value={row.PostalCode}>
                                                {row.city}   
                                            </option>
                                            ):null}
                                        </select>
                                    </td>
                                    <td>
                                        <button onClick={this.updatepoints}>insert</button>
                                    </td>
                                </tr>
                                {this.state.points?this.state.points.map((row)=><tr>
                                    <td  style={{paddingLeft:30}}>
                                        {this.state.tripid}
                                    </td>
                                    <td>
                                    {row.startpostal}
                                    </td>
                                    <td>
                                    {row.endpostal}
                                    </td>
                                    <td>
                                        <button onClick="">delete</button>
                                    </td>
                                </tr>
                                ):null}
                             </table>
                        </div>
                        <h2 style={{color:"#fff"}}>Expenses for this trip</h2> 
                       <div style={style.row}> 
                       <table style={{width:"100%"}}>  
                                <tr style={{textAlign:"left"}}>
                                    <th style={{width:100,paddingLeft:10}}>
                                        Trip no.
                                    </th>
                                    <th style={{width:100,paddingLeft:10}}>
                                        Food
                                    </th>
                                    <th style={{width:100,paddingLeft:10}}>
                                       Fuel
                                    </th>
                                    <th style={{width:100,paddingLeft:10}}>
                                        Hotel
                                    </th>
                                </tr>
                                <tr>
                                    <td  style={{paddingLeft:30}}>
                                        {this.state.tripid}
                                    </td>
                                    <td>
                                    <Field style={{width:"70%",height:30,fontSize:16}} name="foodexp" placeholder="food"  blur={this.field} />
                                    </td>
                                    <td>
                                    <Field style={{width:"70%",height:30,fontSize:16}} name="fuelexp" placeholder="fuel"  blur={this.field} />
                                    </td>
                                    <td>
                                    <Field style={{width:"70%",height:30,fontSize:16}} name="hotelexp" placeholder="hotel"  blur={this.field} />
                                    </td>
                                </tr>
                             </table>
                        </div><br></br>
                        <div style={style.row}>
                        <table style={{width:"100%"}}>  
                        <tr>
                            <td style={{textAlign:"center"}}>
                                <button onClick={this.submit}>submit</button>
                            </td>
                        </tr>
                        </table>
                        </div>
                 </div>
            );
        }else return null;
    }
}
export default class Admin extends React.Component{
    constructor(p){
        super(p);
        this.state={
            page:"home"
        }
    }
     nav=(e)=>{
        this.setState({page:e.target.value});
    }
render(){
    if(this.props.page==="admin"){
        return (
                <div>
                    <Home page={this.state.page}/><Destinations page={this.state.page}/><Food page={this.state.page}/><Bus page={this.state.page}/><AddTrip page={this.state.page}/>
                    <br></br>
                    <div style={{textAlign:"center"}}>
                        <button value="home" onClick={this.nav}>trips</button>
                        <button value="destinations" onClick={this.nav}>destinations</button>
                        <button value="food" onClick={this.nav}>Food</button>
                        <button value="bus" onClick={this.nav}>bus</button>
                        <button value="addtrip" onClick={this.nav}>add trip</button>
                    </div>
                </div>
        );
    }else return null;
}
}