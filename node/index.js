con=require("./dbConnect");
express=require("express");
bp=require("../node_modules/body-parser");
logger= require("../node_modules/morgan");
var cors= require('../node_modules/cors');
app= express();

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(logger('dev'));
app.use(cors());
app.get("/get/tourslist",(req,res)=>{
    con.query("select t.id,d.city as start,e.city as end,t.departureTime from trips t LEFT JOIN point p on p.tripid=t.id left join destinations d on p.startpostal=d.PostalCode left join destinations e on p.endpostal = e.PostalCode where departureTime>Current_timestamp ",(e,r,f)=>{
        if(e){
            res.send({error:true});
        }else{
            res.send({error:false,res:r});
        } 
    });
    });
    app.get("/login/:cnic",(req,res)=>{
        con.query("SELECT * from users where cnic="+req.params.cnic,(e,r,f)=>{
            res.send(r);
            console.log(r?r:null);
        });
        });
        app.get("/get/destinations",(req,res)=>{
            con.query("select * from destinations ",(e,r,f)=>{
                if(e){
                    res.send({error:true});
                }else{
                    res.send({error:false,res:r});
                } 
            });
            });
            app.get("/get/food/assigned",(req,res)=>{
                con.query("select t.id,f.name from trips t LEFT JOIN food f on t.id=f.tripid where t.departureTime>CURRENT_TIMESTAMP and EXISTS (select * from food f WHERE f.tripid=t.id) ",(e,r,f)=>{
                    if(e){
                        console.log(e);
                        res.send({error:true});
                    }else{
                        res.send({error:false,res:r});
                    } 
                });
                });
                app.get("/get/food",(req,res)=>{
                    con.query("select name from foodname ",(e,r,f)=>{
                        if(e){
                            console.log(e);
                            res.send({error:true});
                        }else{
                            res.send({error:false,res:r});
                        } 
                    });
                    });
                    app.get("/get/trip/:id",(req,res)=>{
                        con.query("SELECT t.id,t.reqPeople,t.noOfdays,t.departureTime,b.ownedbusno,(a.total)/t.reqPeople as exp,f.foodn FROM trips t left join bus b on t.id=b.tripid LEFT join food f on t.id=f.tripid LEFT join accounts a on t.id=a.tripid where t.id="+req.params.id,(e,r,f)=>{
                            if(e){
                                console.log(e);
                                res.send({error:true});
                            }else{
                                res.send({error:false,res:r});
                            } 
                        });
                    });
                    app.get("/get/points/:id",(req,res)=>{
                        con.query("SELECT s.city as start, e.city as end from point p left join destinations s on p.startpostal=s.PostalCode left join destinations e on p.endpostal=e.PostalCode where p.tripid= "+req.params.id,(e,r,f)=>{
                            if(e){
                                console.log(e);
                                res.send({error:true});
                            }else{
                                res.send({error:false,res:r});
                            } 
                        });
                    });
                app.get("/get/food/toassign",(req,res)=>{
                    con.query("select t.id from trips t where t.departureTime>CURRENT_TIMESTAMP and not EXISTS (select * from food f WHERE f.tripid=t.id)  ",(e,r,f)=>{
                        if(e){
                            res.send({error:true});
                        }else{
                            res.send({error:false,res:r});
                        } 
                    });
                    });
                    app.get("/get/totaltours",(req,res)=>{
                        con.query("select count(*) as n from trips",(e,r,f)=>{
                            if(e){
                                res.send({error:true});
                            }else{
                                res.send(r);
                            } 
                        });
                        });
                    app.get("/get/bus",(req,res)=>{
                        con.query("select * from ownedbus ",(e,r,f)=>{
                            if(e){
                                console.log(e);
                                res.send({error:true});
                            }else{
                                res.send({error:false,res:r});
                            } 
                        });
                        });
    app.post("/reg",(req,res)=>{
        con.query('insert into users values('+req.body.cnic+',"'+req.body.name+'")',(e)=>{
            if(e){
                console.log(e);
                res.send({error:true});
            }else{
            res.send({error:false});
            }
        });
    });
    app.post("/reg/trip",(req,res)=>{
        con.query('insert into clients values('+req.body.cnic+','+req.body.tripid+','+req.body.amtPaid+')',(e)=>{
            if(e){
                console.log(e);
                res.send({error:true});
            }else{
            res.send({error:false});
            }
        });
    });
    app.post("/insert/destinations",(req,res)=>{
        con.query('insert into destinations values('+req.body.PostalCode+',"'+req.body.city+'","'+req.body.province+'")',(e)=>{
            if(e){
                console.log(e);
                res.send({error:true});
            }else{
            res.send({error:false});
            }
        });
    });
    app.post("/insert/trip",(req,res)=>{
        x=req.body;
        values=[];
        for(var i=0;i<x.points.length;i++){
            values.push([x.points[i].tripid,x.points[i].startpostal,x.points[i].endpostal])
        }

        console.log(values);
        con.query('insert into trips values(0,'+x.reqPeople+','+x.days+',"'+x.departure+'")',(e)=>{
            if(e){
                console.log(e);
                res.send({error:true});
            }
        });
        con.query('insert into point(tripid,startpostal,endpostal) values ?',[values],(e)=>{
            if(e){
                console.log(e);
                res.send({error:true});
            }
        });
        con.query('insert into food values ('+x.tripid+',"'+x.food+'")',(e)=>{
            if(e){
                console.log(e);
                res.send({error:true});
            }
        });
        con.query('insert into bus values ('+x.bus+','+x.tripid+')',(e)=>{
            if(e){
                console.log(e);
                res.send({error:true});
            }
        });
        con.query('insert into accounts values ('+x.tripid+','+x.foodexp+','+x.fuelexp+','+x.hotelexp+','+(parseInt(x.foodexp,10)+parseInt(x.fuelexp,10)+parseInt(x.hotelexp,10))+')',(e)=>{
            if(e){
                console.log(e);
                res.send({error:true});
            }
        });
        res.send({error:false});
    });
    app.post("/insert/food",(req,res)=>{
        con.query('insert into foodname values(0,"'+req.body.name+'")',(e)=>{
            if(e){
                console.log(e);
                res.send({error:true});
            }else{
                res.send({error:false});
            } 
        });
        });
        app.post("/insert/bus",(req,res)=>{
            con.query('insert into ownedbus values('+req.body.busno+','+req.body.capacity+',"'+req.body.drivername+'")',(e)=>{
                if(e){
                    console.log(e);
                    res.send({error:true});
                }else{
                    res.send({error:false});
                } 
            });
            });
app.listen(8080,()=>{console.log("listening")});
//db.load("insert into trips values(0,2,2,null)",(r)=>{
 //   console.log(r);
//    process.exit(0);
//});