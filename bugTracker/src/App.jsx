import React from 'react';
import BugsList from './BugsList';
import BugsData from './bugs.json';
import Actions from './Actions';


export default class App extends React.Component{



constructor (props){
	
	super(props);

	this.state= {
	bugData: [],
	}
}

 

componentWillMount(){
	this.getBug()
}
	
	getBug(){

    fetch('/api/bugs')
    .then(response => response.json())
    .then(bugs => {
              this.setState({ bugData:bugs});

    })
    .catch(error => {
    console.log('error fetching data',error);
    });

   }

	render(){

console.log(this.state.bugData);
	  return (
       <div className="bugsList">

     
        <BugsList  bugsData={this.state.bugData} />
       
       </div>
        
	  );
	}
}


{/*ComponentDidmount would call this to set the bugdata to the returned data

fetch('/api/bugs').then(function(bugdata){
	return bugdata.json(); )}.then(json =>{

	this.setstate({bugData:json})
	});

});


 */}