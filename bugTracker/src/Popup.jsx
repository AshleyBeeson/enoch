import React from 'react';

export default class PopUp extends React.Component{
	
	constructor(props){

    super(props);

    this.state={
     }


	}
	render (){


      return(

     <div className="popUpInfoBox">
       <div className="Pop-Up-info">
	       <form>
	       <input value={this.props.issueId}></input>
	       <input value={this.props.dateCreated}></input>

	       <button onClick={this.props.onClose}> close </button>

       </form>
       </div>

     </div>

      );

	}
}