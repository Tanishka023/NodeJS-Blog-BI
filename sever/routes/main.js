const express   = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const app= express();
const router = express.Router();
const Post = require('../modules/Post');
 
//use express-ejs-layouts
app.use(expressEjsLayouts);

//Routes
router.get('/', (req, res) => {
    const locals={
        title: "NodeJS Blog",
        description: "Simple blog created with NodeJS, Express, Mongodb"
    }
    res.render('index.ejs', {locals});
});
 
function insertPostData(){

    Post.insertMany([
        {
            title:"Building a blog with Nodejs and Mongodb",
            body : "This is the body"

        },
    ])
}
insertPostData();


router.get('/main.ejs', (req,res) =>{

router.get('/about',(req,res) => {
    res.render('about');

});
});
module.exports = router;
 