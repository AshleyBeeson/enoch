import React from 'react';
import Bug from './Bug';
import PopUp from './PopUp';


export default class BugsList extends React.Component{

 constructor(props){
super(props);

this.state = {
	
	Search: "",
	isActive:'',
	issueId:"",
	dateCreated:"",
	summary:"",
	reporter:"",
	severity:"",
  chosenSearch:'',
 

	
}

 }


 setChosenSearchIssueId(){
 this.setState({isActive: "issueId"})
 }

setChosenSearchDateCreated(){
 this.setState({isActive: "dateCreated"})
 }

 setChosenSearchSummary(){
 this.setState({isActive: "summary"})
 }

 setChosenSearchHighPriority(){
 this.setState({isActive: "highPriority"})
 }

 setChosenSearchSeverity(){
 this.setState({isActive: "severity"})
 }

 setChosenSearchReporter(){
 this.setState({isActive: "reporter"})
 }

 setChosenSearchAssignedUser(){
 this.setState({isActive: "assignedUser"})
 }

 setChosenSearchStatus(){
 this.setState({isActive: "status"})
 }

 onSelect (issueId,dateCreated,summary,reporter,severity){
    this.setState({
    isActive: !this.state.isActive,
    issueId: issueId,
    dateCreated: dateCreated,
    summary: summary,
    reporter: reporter,
    severity: severity
    });

}



	updateSearch (event){
     this.setState({Search :event.target.value})

	}


  



	

   render(){

   let filteredBugs;

   {/* !!!!!switch statement probably better option*/}

  if(this.state.isActive ==="issueId"){

  filteredBugs = this.props.bugsData.filter((bug) =>{
    return bug.issueId.toLowerCase().indexOf(this.state.Search.toLowerCase()) !==-1;
   });

  } else if(this.state.isActive==="dateCreated"){

      filteredBugs = this.props.bugsData.filter((bug) =>{
    return bug.dateCreated.toLowerCase().indexOf(this.state.Search.toLowerCase()) !==-1;
   });

   } else if(this.state.isActive==="summary"){

      filteredBugs = this.props.bugsData.filter((bug) =>{
    return bug.summary.toLowerCase().indexOf(this.state.Search.toLowerCase()) !==-1;
   });


   } else if(this.state.isActive==="highPriority"){

      filteredBugs = this.props.bugsData.filter((bug) =>{
    return bug.highPriority.toLowerCase().indexOf(this.state.Search.toLowerCase()) !==-1;
   });


   } else if(this.state.isActive==="severity"){

      filteredBugs = this.props.bugsData.filter((bug) =>{
    return bug.severity.toLowerCase().indexOf(this.state.Search.toLowerCase()) !==-1;
   });

   } else if(this.state.isActive==="reporter"){

      filteredBugs = this.props.bugsData.filter((bug) =>{
    return bug.reporter.toLowerCase().indexOf(this.state.Search.toLowerCase()) !==-1;
   });

   } else if(this.state.isActive==="assingedUser"){

      filteredBugs = this.props.bugsData.filter((bug) =>{
    return bug.assignedUser.toLowerCase().indexOf(this.state.Search.toLowerCase()) !==-1;
   });

  } else if (this.state.isActive==="status"){

      filteredBugs = this.props.bugsData.filter((bug) =>{
    return bug.status.toLowerCase().indexOf(this.state.Search.toLowerCase()) !==-1;
   });
    




  }

	
	

      return(
        <div className="container">
         <input className="form-control well" id="searchBox" type="text" value={this.state.Search} onChange={this.updateSearch.bind(this)} placeholder="Select filter below and type here" /> <br/>
           
          <bold> <p>Filter by </p> </bold><br />

          <div className="btn-group">

                  <button id="issue"className="btn" onClick={this.setChosenSearchIssueId.bind(this)}>IssueId</button>


                   <button id="date"className="btn" onClick={this.setChosenSearchDateCreated.bind(this)}>Date Created</button>


                    <button id="summary" className="btn" onClick={this.setChosenSearchSummary.bind(this)}>Summary</button>


                     <button className="btn" onClick={this.setChosenSearchHighPriority.bind(this)}>Priority True/False</button>


                      <button className="btn" onClick={this.setChosenSearchSeverity.bind(this)}>Severity</button>


                       <button className="btn" onClick={this.setChosenSearchReporter.bind(this)}>Reporter</button>


                        <button className="btn" onClick={this.setChosenSearchAssignedUser.bind(this)}>Assigned User</button>


                         <button className="btn" onClick={this.setChosenSearchStatus.bind(this)}>Status</button>

           </div>
            <br/>


               <h3> Bugs List</h3><br />
                
          


        {filteredBugs.map((bug,index)=>
        <Bug key={index} bug={bug} onClick={this.onSelect.bind.this}/> )}

     
       
   
       
       </div>
      );   
   }

}