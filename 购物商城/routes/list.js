let express = require('express');

module.exports = function(db){
  let router = express.Router();
  
  router.get('/',(req,res)=>{
  	let sql = `select * from list`;
  	db.query(sql,(err,data)=>{
  		if(err){
  			res.send("数据库错误");
  		}else{
  			//console.log(data);
  			res.send(data);
  		}
  	})
  });
  
  return router;
};