const express = require ('express');
const router = express.Router();
const Bug = require('../models/bug');

router.get('/bugs',function(req,res){
	Bug.find({}).then(function(bug){
		res.send(bug);
	})
});

router.post('/bugs',function(req,res,next){
	Bug.create(req.body).then(function(bug){
	 	res.send(bug);
   }).catch(next);
});

router.put('/bugs/:id',function(req,res){
	Bug.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
		Bug.findOne({_id:req.params.id}).then(function(bug){

           res.send(bug);

			});
		
	});
	
});

router.delete('/bugs/:id',function(req,res){
	Bug.findByIdAndRemove({_id:req.params.id}).then(function(bug){
		res.send(bug);
	});

	res.send({type:'delete'});
});

module.exports=router;