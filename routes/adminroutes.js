const express = require(express());

const router = express.Router();


router.get('dashboard',(req,res)=>{

res.sendFile(path.join(__dirname,'..','Views','index.html'));

})






module.exports = router;
