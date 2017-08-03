import React from 'react';


export default class Bug extends React.Component{

actionsList(){

var test = this.props.bug.actions;

if(test.length>0){
for(let i = 0;i < test.length;i++){

{/*Boostrap modal to go here*/}

window.alert("User : " + this.props.bug.actions[i].user + "\n"
 + "Action : " + this.props.bug.actions[i].action + 
 "\n" + "Date : " + this.props.bug.actions[i].dateCreated);



}
} else {

{/*replace with modal */}
   window.alert('No actions performed');
}
    

 };


	
   render(){



     return(
        

        <div className="container">
    <ul className="list-group">
    <li> Issue ID: {this.props.bug.issueId}</li>
      <li>Date created: {this.props.bug.dateCreated}</li>
      <li>Summary: {this.props.bug.summary}</li>
      <li>high Priority: {this.props.bug.highPriority}</li>
      <li>Severity: {this.props.bug.severity}</li>
      <li>Reporter: {this.props.bug.reporter}</li>
      <li>Assigned User: {this.props.bug.assignedUser}</li>
      <li>Status: {this.props.bug.status}</li>
	  
	
	  
     

      <button className="btn" onClick={this.actionsList.bind(this)}>Actions</button>
      
 
    </ul>


  




        
       
      
        </div>

     );

   }

}