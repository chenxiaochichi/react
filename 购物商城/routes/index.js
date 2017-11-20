let express = require('express');

module.exports = function(db){
  let router = express.Router();
  
  router.get('/',(req,res)=>{
  //console.log(db);
  	//兜库
  	let sql = `select * from home`;
  	db.query(sql,(err,data)=>{
  		if(err){
  			res.send("数据库错误");
  		}else{
  			res.send(data);
  		}
  	})
  });
  
  return router;
};