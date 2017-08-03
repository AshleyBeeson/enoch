const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create ninja Schema abd model;



const BugSchema = new Schema({
      
      	issueId:{
      		type:String
      	},

      	dateCreated:{
      		type:String
      	},

      	summary:{
         type: String

      	},

      	description:{
      		type:String
      	},

      	highPriority: {
      		type:String
      	},

      	severity:{
      		type:String
      	},

      	reporter:{
      		type:String
      	},

      	assignedUser:{
      		type:String
      	},

      	actions: [{
      		user:String
      		,

      		dateCreated:String,
      		

      		action:String,
      	

      	}],
		
		status: {
			type:String
		}


	



});


module.exports = mongoose.model('Bug',BugSchema);