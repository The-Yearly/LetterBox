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
app.get("/users/list/:id",(req,res)=>{
    let query="WITH RankedMovies AS (   SELECT      l.list_id,     l.list_title,     m.movie_poster,     ROW_NUMBER() OVER (PARTITION BY l.list_id ORDER BY m.movie_id) AS row_num   FROM lists l   JOIN movies_lists ml ON l.list_id = ml.list_id   JOIN movies m ON ml.movie_id = m.movie_id   WHERE l.list_user_id ="+ req.params.id+" ) SELECT    list_id,   list_title AS list_name,   MAX(CASE WHEN row_num = 1 THEN movie_poster END) AS poster_1,   MAX(CASE WHEN row_num = 2 THEN movie_poster END) AS poster_2,   MAX(CASE WHEN row_num = 3 THEN movie_poster END) AS poster_3,   MAX(CASE WHEN row_num = 4 THEN movie_poster END) AS poster_4,   MAX(CASE WHEN row_num = 5 THEN movie_poster END) AS poster_5 FROM RankedMovies GROUP BY list_id, list_title" 
    con.query(query,function(err,rows){
        if(err) console.log(err)
        res.json(rows)
    })
})
app.get("/list/:id",(req,res)=>{
    con.query("select lists.*,users.user_name from lists left join users on users.user_id=lists.list_user_id where lists.list_id="+req.params.id,function(err,rows){
        if(err) console.log(err)
        res.json(rows)
    })
})

app.get("/list/movies/:id",(req,res)=>{
    con.query("select movie_title,movie_poster,movies.movie_id from movies left join movies_lists on movies_lists.movie_id=movies.movie_id where movies_lists.list_id="+req.params.id+" order by movie_id",function(err,rows){
        if(err) console.log(err)
        res.json(rows)
    })
})

app.get("/movies/directors/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        con.query("select dir_name,movie_id,directors.dir_id from directors left join movies_directors on directors.dir_id=movies_directors.dir_id where movie_id="+req.params.id,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});

app.get("/movies/producers/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        con.query("select * from producers left join movies_producers on movies_producers.producer_id=producers.producer_id where movie_id="+req.params.id,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});

app.get("/movies/writers/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        con.query("select * from writers left join movies_writers on movies_writers.writer_id=writers.writer_id where movie_id="+req.params.id,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});

app.get("/movies/cinematography/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        con.query("select * from cinematographys left join movies_cinematographys on movies_cinematographys.cinematography_id=cinematographys.cinematography_id where movie_id="+req.params.id,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});
app.get("/movies/musics/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        con.query("select * from musics left join movies_musics on movies_musics.music_id=musics.music_id where movie_id="+req.params.id,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});
app.get("/movies/actors/:id",(req,res)=>{

    con.connect(function(Err){
        if(Err) console.log(Err);
        let query="SELECT actors.actor_id,actors.actor_name FROM actors LEFT JOIN movies_actors ON actors.actor_id = movies_actors.actor_id LEFT JOIN movies ON movies_actors.movie_id = movies.movie_id where movies.movie_id="+req.params.id;
        con.query(query,function(err,rows){
            if(err) throw err;
            res.json(rows)
        })
    })
})
app.get("/movies/prodes/:id",(req,res)=>{
    console.log(req.params.id)
    con.connect(function(Err){
        if(Err) console.log(Err);
        let query="SELECT * FROM production_designs LEFT JOIN movies_production_designs ON production_designs.production_design_id = movies_production_designs.production_design_id LEFT JOIN movies ON movies_production_designs.movie_id = movies.movie_id where movies.movie_id="+req.params.id;
        con.query(query,function(err,rows){
            if(err) throw err;
            res.json(rows)
        })
    })
})
app.get("/moviesearch/:name",(req,res)=>{
    con.connect(function(Err){
        if(Err) throw Err;
        console.log(req.params.id)
        let query="select * from movies where movie_title like '%"+req.params.name+"%'";
        con.query(query,function(err,rows){
            if(err) throw err;
            console.log(rows)
            res.json(rows)
        })
       
    })
})
app.get("/movies/editors/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        console.log(req.params.id)
        con.query("select * from editors left join movies_editors on movies_editors.editor_id=editors.editor_id where movie_id="+req.params.id,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});
app.get("/moviestop/:no",(req,res)=>{
    let query="select * from movies order by movie_views desc limit "+req.params.no
    con.query(query,(err,rows)=>{
        if(err) console.log(err)
        res.json(rows)
    })
})

app.get("/movies/studios/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        console.log(req.params.id)
        con.query("select * from productions left join movies_productions on movies_productions.production_id=productions.production_id where movie_id="+req.params.id,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});

app.get("/movies/countrys/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        console.log(req.params.id)
        con.query("select * from countrys left join movies_countrys on movies_countrys.country_id=countrys.country_id where movie_id="+req.params.id,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});

app.get("/movies/languages/:id/:no",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        console.log(req.params.id)
        con.query("select * from languages left join movies_languages on movies_languages.language_id=languages.language_id where movie_id="+req.params.id+" limit "+req.params.no,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});

app.get("/movies/genres/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        console.log(req.params.id)
        con.query("select * from genres left join movies_genres on movies_genres.genre_id=genres.genre_id where movie_id="+req.params.id,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});
app.get("/movies/altitles/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        console.log(req.params.id)
        con.query("select * from alternate_title left join movies_altitles on movies_altitles.title_id=alternate_title.title_id where movie_id="+req.params.id,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});
app.get("/users/:id",(req,res)=>{
    con.query("select * from users where user_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/users/fav/:id",(req,res)=>{
    con.query("select * from movies left join movies_fav_users on movies.movie_id=movies_fav_users.movie_id where movies_fav_users.user_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/users/watchlist/:id",(req,res)=>{
    con.query("select * from movies left join movies_watchlist_users on movies.movie_id=movies_watchlist_users.movie_id where movies_watchlist_users.user_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/users/liked/:id",(req,res)=>{
    con.query("select * from movies left join movies_liked_users on movies.movie_id=movies_liked_users.movie_id where movies_liked_users.user_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/users/movies/:id",(req,res)=>{
    con.query("select * from movies left join movies_watched_users on movies.movie_id=movies_watched_users.movie_id where movies_watched_users.user_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/users/reviews/:id",(req,res)=>{
    con.query("select reviews.*,movies.movie_poster from reviews left join movies_reviews_users on reviews.review_id=movies_reviews_users.review_id left join users on users.user_id=movies_reviews_users.user_id  left join movies on movies.movie_id=movies_reviews_users.movie_id where movies_reviews_users.user_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/movies/reviews/:id",(req,res)=>{
    con.query("select reviews.*, users.name,users.user_userPic from reviews left join movies_reviews_users on reviews.review_id=movies_reviews_users.review_id left join users on users.user_id=movies_reviews_users.user_id  left join movies on movies.movie_id=movies_reviews_users.movie_id where movies.movie_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/users/followers/:id",(req,res)=>{
    con.query("select following_followers.*, users.* from following_followers left join users on users.user_id=following_followers.follower_id where following_followers.following_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/users/following/:id",(req,res)=>{
    con.query("select following_followers.*, users.* from following_followers left join users on  users.user_id=following_followers.following_id where following_followers.follower_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/test",(req,res)=>{
    res.json({message :"Hello World"});
});
app.listen(8000,()=>{
    console.log("Server Is Starting ;)");
});
