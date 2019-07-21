import React from 'react';
import style from './style';
import axios from 'axios';

class View extends React.Component{
    constructor(p){
        super(p);
        this.state={trip:""};
        this.insert={cnic:parseInt(this.props.cnic,10),tripid:parseInt(this.props.id,10),amtPaid:""};
    }
    componentDidMount(){
            axios.get("http://localhost:8080/get/trip/"+this.props.id).then((r)=>{
            this.setState({trip:r.data.res});
    });
    axios.get("http://localhost:8080/get/points/"+this.props.id).then((r)=>{
        this.setState({points:r.data.res});      
    });
   
    }
 
    reg=()=>{
        this.insert["amtPaid"]=this.state.trip[0].exp;    
        axios.post("http://localhost:8080/reg/trip",this.insert).then((r)=>{
            if(!r.data.error){
                alert("registered");
            }   else{
                alert("somthinf wrong");
            }
        });
    }
render(){
        return(
            <div style={{overflowX:"hidden",height:window.innerHeight/2.2}}>
                     <h2 style={{color:"#fff"}}>Trip</h2> 
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
                                {this.state.trip?this.state.trip.map((row)=>
                                    <tr style={{textAlign:"center"}}>
                                    <td style={{paddingLeft:20}}>
                                        {this.props.id}
                                    </td>
                                    <td>
                                    {row.reqPeople}
                                    </td>
                                    <td>
                                    {row.noOfdays}
                                    </td>
                                    <td>
                                    {row.departureTime}
                                    </td>
                                </tr>
                                ):null}
                                
                             </table>
                        </div>
                        <h2 style={{color:"#fff"}}>Detail</h2> 
                       <div style={style.row}> 
                       <table style={{width:"100%"}}>  
                                <tr>
                                    <th>
                                        Trip no.
                                    </th>
                                    <th>
                                        Food
                                    </th>
                                    <th>
                                        Bus no.
                                    </th>
                                    <th>
                                        Price per person
                                    </th>
                                </tr>
                                {this.state.trip?this.state.trip.map((row)=>
                                    <tr style={{textAlign:"center"}}>
                                    <td style={{paddingLeft:20}}>
                                        {this.props.id}
                                    </td>
                                    <td>
                                    {row.foodn}
                                    </td>
                                    <td>
                                    {row.ownedbusno}
                                    </td>
                                    <td>
                                    {row.exp} Rs
                                    </td>
                                </tr>
                                ):null}
                                
                             </table>
                        </div>
                        <h2 style={{color:"#fff"}}>Points</h2> 
                       <div style={style.row}> 
                       <table style={{width:"100%"}}>  
                                <tr>
                                    <th style={{width:200}}>
                                        Trip no.
                                    </th>
                                    <th>
                                        From
                                    </th>
                                    <th>
                                        To
                                    </th>
                                </tr>
                                {this.state.points?this.state.points.map((row)=>
                                    <tr style={{textAlign:"center"}}>
                                    <td style={{paddingLeft:20}}>
                                        {this.props.id}
                                    </td>
                                    <td>
                                    {row.start}
                                    </td>
                                    <td>
                                    {row.end}
                                    </td>
                                </tr>
                                ):null}
                                
                             </table>
                        </div>
                        <h2 style={{color:"#fff"}}>Action</h2> 
                       <div style={style.row}> 
                                <div style={{textAlign:"center"}}>
                                    <button onClick={this.reg} >register</button>
                                </div>
                        </div>
            </div>
        );
}
}
export default class Main extends React.Component{
constructor(p){
        super(p);
        this.state={page:"home",id:15,list:[]};
}
componentDidMount(){
    axios.get("http://localhost:8080/get/tourslist").then((r)=>{
        this.setState(
            {   
                list:r.data.res
            }
        )
    });
}
date(a){
var d=new Date(a);
var m=["","jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
return (d.getDay()+"-"+m[d.getMonth()]+" | "+(d.getHours()%13+1)+":"+d.getMinutes()+" "+(d.getHours()>=12?"pm":"am"));
}
view=(e)=>{
   this.setState({page:"view",id:parseInt(e.target.name,10)});

}
back=()=>{
    this.setState({page:"home"});

}
render(){
    if(this.props.page==="home"){
        if(this.state.page==="home"){
return (
<div>
    <div style={style.row}>
        <table style={{width:"100%"}}>
            <tr>
                <th>
                    tourno.
                </th>
                <th>
                    pickup location
                </th>
                <th>
                    destination
                </th>
                <th>
                    Departure time
                </th>
                <th>
                    details
                </th>
            </tr>
        </table>
    </div><br></br>
    <div style={style.row}>
    <table style={{width:"100%"}}>
       { this.state.list.map((row)=><tr >
            <td style={{paddingLeft:50}}>
                {row.id}
            </td>
            <td style={{paddingLeft:100}}>
                {row.start}
            </td>
            <td style={{paddingLeft:100}}>
                {row.end}
            </td>
            <td style={{paddingLeft:100}}>
                {this.date(row.departureTime)}
            </td>
            <td style={{paddingLeft:35,float:"right"}}>
                <button name={row.id} onClick={this.view}>view</button>
            </td>
        </tr>
       )}
    </table>
</div>
</div>
    );
       }else {
           return (<div><View cnic={this.props.cnic} id={this.state.id}/>
            <div style={{textAlign:"center"}}><br></br>
            <button onClick={this.back}>back</button>
            </div></div>)
        }
       }else {return null;}
}
}