const express=require("express");
let cors=require("cors");
let app=express();
    let mysql=require("mysql2");
let con = mysql.createConnection({ host: "localhost",user: "theyearly",password: "Arduino1",database:"letterboxd",});
app.use(cors());
app.get("/movies",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        con.query("select * from movies",function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })
});
app.get("/movies/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        console.log(req.params.id)
        con.query("select * from movies where movie_id ="+req.params.id,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});
app.get("/movies/actors/:id",(req,res)=>{
    console.log(req.params.id)
    con.connect(function(Err){
        if(Err) console.log(Err);
        let query="SELECT actors.actor_id,actors.actor_name FROM actors LEFT JOIN movies_actors ON actors.actor_id = movies_actors.actor_id LEFT JOIN movies ON movies_actors.movie_id = movies.movie_id where movies.movie_id="+req.params.id;
        con.query(query,function(err,rows){
            if(err) throw err;
            res.json(rows)
        })
    })
})
app.get("/test",(req,res)=>{
    res.json({message :"Hello World"});
});
app.listen(8000,()=>{
    console.log("Server Is Starting ;)");
});