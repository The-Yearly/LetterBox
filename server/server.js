const express=require("express");
const cors=require("cors");
const axios=require("axios")
let app=express();
app.use(express.json())
let mysql=require("mysql2");
/*
const cred={ host: "localhost",user: "theyearly",password: "Arduino1",database:"letterboxd"}*/
const cred = {
    host: "letterboxd-theyearlone-7596.k.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_V64uo1ki7VnX7FsujhQ",
    database: "letterboxd",
    port: 24073,
  };
let con;
function connectMaria(){
    con = mysql.createConnection(cred);
    con.connect(function(Err){
        if(Err){
            setTimeout(connectMaria,5000)
        }else{
            console.log("Connected With Maria ;)")
        }
    })
};
connectMaria()
app.use(cors());
app.get("/movies", async (req,res)=>{
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
app.get("/actorsdets/:id",(req,res)=>{

    con.connect(function(Err){
        if(Err) console.log(Err);
        let query="SELECT * FROM actors where actor_id = "+req.params.id;
        con.query(query,function(err,rows){
            if(err) throw err;
            res.json(rows)
        })
    })
})
app.get("/directordets/:id",(req,res)=>{

    con.connect(function(Err){
        if(Err) console.log(Err);
        let query="SELECT * FROM directors where dir_id = "+req.params.id;
        con.query(query,function(err,rows){
            if(err) throw err;
            res.json(rows)
        })
    })
})
app.get("/cine/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        let query="SELECT * FROM cinematographys where cinematography_id  = "+req.params.id;
        con.query(query,function(err,rows){
            if(err) throw err;
            res.json(rows)
        })
    })
})
app.get("/editordet/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        let query="SELECT * FROM editors where editor_id = "+req.params.id;
        con.query(query,function(err,rows){
            if(err) throw err;
            res.json(rows)
        })
    })
})
app.get("/musicdets/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        let query="SELECT * FROM musics where music_id = "+req.params.id;
        con.query(query,function(err,rows){
            if(err) throw err;
            res.json(rows)
        })
    })
})
app.get("/producerdets/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        let query="SELECT * FROM producers where producer_id = "+req.params.id;
        con.query(query,function(err,rows){
            if(err) throw err;
            res.json(rows)
        })
    })
})
app.get("/proddesdets/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        let query="SELECT * FROM production_designs where production_design_id = "+req.params.id;
        con.query(query,function(err,rows){
            if(err) throw err;
            res.json(rows)
        })
    })
})
app.get("/writersdets/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        let query="SELECT * FROM writers where writer_id = "+req.params.id;
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
    })})


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
        con.query("select * from languages left join movies_languages on movies_languages.language_id=languages.language_id where movie_id="+req.params.id+" limit "+req.params.no,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});
app.get("/languages/movies/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        con.query("select * from movies left join movies_languages on movies_languages.movie_id=movies.movie_id where language_id="+req.params.id,function(err,rows){
            if(err) console.log(err)
            res.json(rows)
        })
    })

});
app.get("/languages",(req,res)=>{
    con.connect(function(Err){
        if(Err) console.log(Err);
        con.query("select * from languages",function(err,rows){
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
        console.log(rows)
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
app.get("/movies/reviews/:id/:off",(req,res)=>{
    con.query("select reviews.*, users.name,users.user_userPic from reviews left join movies_reviews_users on reviews.review_id=movies_reviews_users.review_id left join users on users.user_id=movies_reviews_users.user_id  left join movies on movies.movie_id=movies_reviews_users.movie_id where movies.movie_id="+req.params.id+" limit 4 offset "+req.params.off,function(err,rows){
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
app.get("/actors/:id",(req,res)=>{
    con.query("select * from movies left join movies_actors on movies_actors.movie_id=movies.movie_id where movies_actors.actor_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/directors/:id",(req,res)=>{
    con.query("select * from movies left join movies_directors on movies_directors.movie_id=movies.movie_id where movies_directors.dir_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/producers/:id",(req,res)=>{
    con.query("select * from movies left join movies_producers on movies_producers.movie_id=movies.movie_id where movies_producers.producer_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/writers/:id",(req,res)=>{
    con.query("select * from movies left join movies_writers on movies_writers.movie_id=movies.movie_id where movies_writers.writer_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/editors/:id",(req,res)=>{
    con.query("select * from movies left join movies_editors on movies_editors.movie_id=movies.movie_id where movies_editors.editor_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/cinematography/:id",(req,res)=>{
    con.query("select * from movies left join movies_cinematographys on movies_cinematographys.movie_id=movies.movie_id where movies_cinematographys.cinematography_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/music/:id",(req,res)=>{
    con.query("select * from movies left join movies_musics on movies_musics.movie_id=movies.movie_id where movies_musics.music_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/producersdes/:id",(req,res)=>{
    con.query("select * from movies left join movies_producers on movies_producers.movie_id=movies.movie_id where movies_producers.producer_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/genres/:id",(req,res)=>{
    con.query("select * FROM movies LEFT JOIN movies_genres ON movies_genres.movie_id = movies.movie_id left join genres ON genres.genre_id = movies_genres.genre_id WHERE genres.genre_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/allgenres",(req,res)=>{
    con.query("select * from genres",function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})

app.get("/productions/:id",(req,res)=>{
    con.query("select * FROM movies LEFT JOIN movies_productions ON movies_productions.movie_id = movies.movie_id left join productions ON productions.production_id = movies_productions.production_id WHERE productions.production_id="+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})

app.get("/top5users",(req,res)=>{
    con.query(" SELECT u.user_name, u.user_id, u.user_userPic, u.follows_this_week, MAX(CASE WHEN rn = 1 THEN m.movie_id END) AS movie_id_1, MAX(CASE WHEN rn = 1 THEN m.movie_poster END) AS poster_1, MAX(CASE WHEN rn = 2 THEN m.movie_id END) AS movie_id_2, MAX(CASE WHEN rn = 2 THEN m.movie_poster END) AS poster_2, MAX(CASE WHEN rn = 3 THEN m.movie_id END) AS movie_id_3, MAX(CASE WHEN rn = 3 THEN m.movie_poster END) AS poster_3, MAX(CASE WHEN rn = 4 THEN m.movie_id END) AS movie_id_4, MAX(CASE WHEN rn = 4 THEN m.movie_poster END) AS poster_4, MAX(CASE WHEN rn = 5 THEN m.movie_id END) AS movie_id_5, MAX(CASE WHEN rn = 5 THEN m.movie_poster END) AS poster_5, (SELECT COUNT(*) FROM movies_watched_users mw WHERE mw.user_id = u.user_id) AS movies_watched_count, (SELECT COUNT(*) FROM movies_reviews_users mr WHERE mr.user_id = u.user_id) AS reviews_count FROM ( SELECT mf.user_id, mf.movie_id, ROW_NUMBER() OVER (PARTITION BY mf.user_id ORDER BY m.movie_views DESC) AS rn FROM movies_fav_users mf INNER JOIN movies m ON mf.movie_id = m.movie_id ) ranked_movies INNER JOIN users u ON ranked_movies.user_id = u.user_id LEFT JOIN movies m ON ranked_movies.movie_id = m.movie_id WHERE rn <= 5 GROUP BY u.user_id ORDER BY u.followers_no DESC LIMIT 5; ",function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/popUsers",(req,res)=>{
    con.query("SELECT u.user_name, u.user_id, u.user_userPic, u.follows_this_week, MAX(CASE WHEN rn = 1 THEN m.movie_id END) AS movie_id_1, MAX(CASE WHEN rn = 1 THEN m.movie_poster END) AS poster_1, MAX(CASE WHEN rn = 2 THEN m.movie_id END) AS movie_id_2, MAX(CASE WHEN rn = 2 THEN m.movie_poster END) AS poster_2, MAX(CASE WHEN rn = 3 THEN m.movie_id END) AS movie_id_3, MAX(CASE WHEN rn = 3 THEN m.movie_poster END) AS poster_3, MAX(CASE WHEN rn = 4 THEN m.movie_id END) AS movie_id_4, MAX(CASE WHEN rn = 4 THEN m.movie_poster END) AS poster_4, MAX(CASE WHEN rn = 5 THEN m.movie_id END) AS movie_id_5, MAX(CASE WHEN rn = 5 THEN m.movie_poster END) AS poster_5, (SELECT COUNT(*) FROM movies_watched_users mw WHERE mw.user_id = u.user_id) AS movies_watched_count, (SELECT COUNT(*) FROM movies_reviews_users mr WHERE mr.user_id = u.user_id) AS reviews_count FROM ( SELECT mf.user_id, mf.movie_id, ROW_NUMBER() OVER (PARTITION BY mf.user_id ORDER BY m.movie_views DESC) AS rn FROM movies_fav_users mf INNER JOIN movies m ON mf.movie_id = m.movie_id ) ranked_movies INNER JOIN users u ON ranked_movies.user_id = u.user_id LEFT JOIN movies m ON ranked_movies.movie_id = m.movie_id WHERE rn <= 5 GROUP BY u.user_id ORDER BY u.follows_this_week DESC LIMIT 5;",function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/getUsers/:id",(req,res)=>{
    con.query("select user_name,user_id,following,followers_no,user_userPic from users limit 6 offset "+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})

app.get("/toplists",(req,res)=>{
    con.connect(function(Err){
    if(Err) throw Err
    con.query("SELECT l.list_id, l.list_title, l.list_bio, l.list_likes, MAX(CASE WHEN ml.row_num = 1 THEN m.movie_poster END) AS poster_1, MAX(CASE WHEN ml.row_num = 2 THEN m.movie_poster END) AS poster_2, MAX(CASE WHEN ml.row_num = 3 THEN m.movie_poster END) AS poster_3, MAX(CASE WHEN ml.row_num = 4 THEN m.movie_poster END) AS poster_4, MAX(CASE WHEN ml.row_num = 5 THEN m.movie_poster END) AS poster_5 FROM lists l LEFT JOIN (SELECT ml.list_id, ml.movie_id, ROW_NUMBER() OVER (PARTITION BY ml.list_id ORDER BY m.movie_like DESC) AS row_num FROM movies_lists ml JOIN movies m ON ml.movie_id = m.movie_id ) ml ON l.list_id = ml.list_id LEFT JOIN movies m ON ml.movie_id = m.movie_id WHERE ml.row_num <= 5 GROUP BY l.list_id, l.list_title, l.list_bio, l.list_likes ORDER BY l.list_likes DESC limit 3;",function(err,rows){
        if(err) throw err;
        res.json(rows);
    })})})
app.get("/lists/:id",(req,res)=>{
    con.connect(function(Err){
        if(Err) throw Err
    con.query("SELECT l.list_id, l.list_title, l.list_bio, l.list_likes, MAX(CASE WHEN ml.row_num = 1 THEN m.movie_poster END) AS poster_1, MAX(CASE WHEN ml.row_num = 2 THEN m.movie_poster END) AS poster_2, MAX(CASE WHEN ml.row_num = 3 THEN m.movie_poster END) AS poster_3, MAX(CASE WHEN ml.row_num = 4 THEN m.movie_poster END) AS poster_4, MAX(CASE WHEN ml.row_num = 5 THEN m.movie_poster END) AS poster_5 FROM lists l LEFT JOIN (SELECT ml.list_id, ml.movie_id, ROW_NUMBER() OVER (PARTITION BY ml.list_id ORDER BY m.movie_like DESC) AS row_num FROM movies_lists ml JOIN movies m ON ml.movie_id = m.movie_id ) ml ON l.list_id = ml.list_id LEFT JOIN movies m ON ml.movie_id = m.movie_id WHERE ml.row_num <= 5 GROUP BY l.list_id, l.list_title, l.list_bio, l.list_likes limit 6 offset "+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })})
})
app.get("/userPic/:id",(req,res)=>{
    con.query("select user_userPic from users where user_id = "+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.post("/usernames",(req,res)=>{
    let data=req.body;
    if(data.user_name!=undefined){
        con.query("select * from users where user_name ='"+data.user_name+"'",function(err,rows){
            if(err) throw err;
        if(rows.length==0){
            con.query("insert into users(name,user_name,user_passwd,user_bio,user_userPic,follows_this_week,followers_no,following,email) values('','"+data.user_name+"', '"+data.user_passwd+"','','',0,0,0,'"+data.email+"')",function(err,rows){
                if(err) throw err;
            })
            con.query("select user_id from users where user_name ='"+data.user_name+"'",function(err,rows){
                if(err) throw err;
                res.json({message:"Created Succesfully",id:rows})
            })
            
        }
        else{    
            res.json({message:"User Name Taken"})}
    })}
})
app.post("/login",(req,res)=>{
    let data=req.body;
    if(data.user_name!=undefined){
        con.query("select * from users where user_name ='"+data.user_name+"'",function(err,rows){
        if(err) throw err;
        if(rows.length!=0){
            if(data.user_passwd==rows[0].user_passwd){
                con.query("select user_id from users where user_name ='"+data.user_name+"'",function(err,rows){
                    if(err) throw err;
                    res.json({message:"Logged In",id:rows})
                })
            }
            else{
                res.json({message:"Invalid Password"})
            }
        }
        else{
            res.json({message:"User Not Found"})
        }
        })}
})
app.get("/userPic/:id",(req,res)=>{
    let data=req.data
    if(data.following_id!=undefined){
    con.query("select user_userPic from users where user_id = "+req.params.id,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })}
})
app.get("/isFollowing/:flid/:flerid",(req,res)=>{
    con.query("select * from following_followers where following_id = "+req.params.flid+" and follower_id = "+req.params.flerid,function(err,rows){
        if(err) throw err;
        res.json(rows)
    })
})
app.post("/follow",(req,res)=>{
    data=req.body
    if(data.follower_id!=undefined){
        con.query("insert into following_followers values("+data.follower_id+","+data.following_id+")",function(err,rows){
            if(err) throw err;
        })
        con.query("update users set follows_this_week=follows_this_week+1 ,followers_no=followers_no+1 where user_id = "+data.following_id,function(err,rows){
            if(err) throw err;
        })
        con.query("update users set following=following+1 where user_id = "+data.follower_id,function(err,rows){
            if(err) throw err;
            res.json({message:"Following"})
        })
        
}
})
app.post("/unfollow",(req,res)=>{
    data=req.body
    if(data.follower_id!=undefined){
    con.query("delete from following_followers where follower_id = "+data.follower_id+" and following_id ="+data.following_id,function(err,rows){
        if(err) throw err;
    })
    con.query("update users set follows_this_week=follows_this_week-1 ,followers_no=followers_no-1 where user_id = "+data.following_id,function(err,rows){
        if(err) throw err;
    })
    con.query("update users set following=following-1 where user_id = "+data.follower_id,function(err,rows){
        if(err) throw err;
        res.json({message:"UnFollowed"})
    })
    
}
})
app.get("/movies/watched/:mid/:id",(req,res)=>{
    con.connect(function(Err){
    con.query("select * from movies_watched_users where movie_id="+req.params.mid+" and user_id = "+req.params.id,function(err,rows){
        if(err) throw err;
        watch=rows
        con.query("select * from movies_fav_users where movie_id="+req.params.mid+" and user_id = "+req.params.id,function(err,fa){
            if(err) throw err;
            fav=fa
            con.query("select * from movies_watchlist_users where movie_id="+req.params.mid+" and user_id = "+req.params.id,function(err,wl){
                if(err) throw err;
                wat=wl
                console.log(fav)
                res.json({watched:watch,favorite:fav,watchlist:wat})
            })
        })
    })})
})  
app.post("/watchedmovie",(req,res)=>{
    let data=req.body
    console.log(data)
    if(data.user_id!=undefined){
        con.connect(function(Err){
        con.query("insert into movies_watched_users values("+data.movie_id+","+data.user_id+")",function(err,rows){
            if(err) throw err;
            con.query("update movies set movie_views=movie_views+1,movie_views_this_week=movie_views_this_week+1 where movie_id ="+data.movie_id,function(err,rows){
                res.json({message:"Movie Added To Watched"})
            })
            
        })})}
})
app.post("/removewatchedmovie",(req,res)=>{
    let data=req.body
    if(data.user_id!=undefined){
        con.query("delete from movies_watched_users where movie_id="+data.movie_id+" and user_id="+data.user_id,function(err,rows){
            if(err) throw err;
            con.query("update movies set movie_views=movie_views-1,movie_views_this_week=movie_views_this_week-1 where movie_id ="+data.movie_id,function(err,rows){
                res.json({message:"Movie Added To Watched"})
            })
        })}
})
app.post("/favmovie",(req,res)=>{
    let data=req.body
    if(data.user_id!=undefined){
        con.connect(function(Err){
        con.query("insert into movies_fav_users values("+data.movie_id+","+data.user_id+")",function(err,rows){
            if(err) throw err;
            res.json({message:"Movie Added To Favorites"})
        })})}
})
app.post("/removefavmovie",(req,res)=>{
    let data=req.body
    if(data.user_id!=undefined){
        con.query("delete from movies_fav_users where movie_id="+data.movie_id+" and user_id="+data.user_id,function(err,rows){
            if(err) throw err;
            res.json({message:"Movie Removed From Favorites"})
        })}
})
app.post("/updateUser",(req,res)=>{
    let data=req.body
    if(data.user_id!=undefined){
        con.query("update users set name='"+data.name+"', user_bio = '"+data.user_bio+"',user_passwd ='"+data.user_passwd+"',email = '"+data.email+"',user_userPic ='"+data.user_userPic+"' where user_id="+data.user_id,function(err,rows){
            if(err) throw err;
            res.json({message:"Updated"})
        })}
})
app.post("/postReview",(req,res)=>{
    let data=req.body
    if(data.user_id!=undefined){
        con.query("insert into reviews(review_title,review_content,movie_id,user_id,review_rating,review_watchdate,review_likes) values('"+data.review_title+"','"+data.review_content+"',"+data.movie_id+","+data.user_id+",5,'2024/1/3',10)",function(err,rows){
            if(err) throw err;
            con.query("insert into movies_reviews_users(movie_id,user_id) values("+data.movie_id+","+data.user_id+")",function(err,rows){
                if(err) throw err
                res.json({message:"Review Posted"})
            })
        })}
})

app.get("/test",(req,res)=>{ 
    res.json({message :req.body});
});

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log("Server Is Starting ;)");
});

