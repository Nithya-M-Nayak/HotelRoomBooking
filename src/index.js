import React from 'react';
import ReactDOM from 'react-dom';
import {Room} from './components/rooms';
import People from '../node_modules/react-icons/lib/md/people';

class Hotel extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="container">
				<div>
					<People className="col-md-4 "size={40}/>
					<h3 style={{color:'navy'}}>Choose number of <strong>people</strong></h3>
				</div>
				<div className="panel panel-default">
					<div className="panel-body">
					<Room />
					</div>
				</div>
			</div>
		);
	}
}

const render=()=>{
	ReactDOM.render(<Hotel/>, document.getElementById('root'));
}
render();