import React from 'react';
import ReactDOM from 'react-dom';
//import {Rooms} from './components/rooms.js';
import MdHotel from '../node_modules/react-icons/lib/md/hotel';
import People from '../node_modules/react-icons/lib/md/people';
import Adult from '../node_modules/react-icons/lib/md/person';
import Child from '../node_modules/react-icons/lib/fa/child';

class Hotel extends React.Component{
	constructor(props){
		super(props);
		
		this.state={
			numberRoom:1,
			numberAdults:1,
			numberChildren:0,
			totalPeople:1,
		};
		this.decNumberRoom=this.decNumberRoom.bind(this);
		this.incNumberRoom=this.incNumberRoom.bind(this);
		this.decNumberAdult=this.decNumberAdult.bind(this);
		this.incNumberAdult=this.incNumberAdult.bind(this);
		this.decNumberChildren=this.decNumberChildren.bind(this);
		this.incNumberChildren=this.incNumberChildren.bind(this);
	}
		
		
		decNumberRoom(e){ //decrease number of rooms
			if(this.state.numberRoom>1)  //min 1 room
				this.setState({numberRoom:this.state.numberRoom-1}); //decrease rooms
			
			this.setState({totalPeople:this.state.numberAdults+this.state.numberChildren}); // set total number of people
		}
		
		incNumberRoom(e){
			console.log(this.state.numberAdults);
			console.log(this.state.numberRoom);
			
			this.setState({totalPeople:this.state.numberAdults+this.state.numberChildren}); // set total number of people
			console.log(this.state.totalPeople);
			if(this.state.numberRoom>=this.state.numberAdults){ //if selected rooms are greater than number of adults
					alert("Add people for new room"); //display add more people
			}
			else if(this.state.numberRoom<6){ //if selected rooms are less than max rooms
							this.setState({numberRoom:this.state.numberRoom+1}); //increase rooms
							if(this.state.numberRoom>this.state.numberAdults){
								alert("Add more people");
							}
			}
			if(this.state.numberRoom>=5) //if max rooms are reached
				alert("Rooms are not available"); //display rooms are not available
		}
		
		decNumberAdult(e){
			this.setState({totalPeople:this.state.numberAdults+this.state.numberChildren});  //set total number of people
			if(this.state.numberAdults>1){  //if adults are more than 1
				if(this.state.numberRoom<=this.state.numberAdults){ //check if number of rooms are less than number of adults
					alert("Min 1 adult should be there per room");
				}
				else{
					this.setState({numberAdults:--this.state.numberAdults}); // decrease number of adults
				}
				console.log(this.state.numberAdults);
			}
			if(this.state.numberRoom>this.state.numberAdults){ //check if number of rooms are greater than total peoplr
					alert("Add people for new room");
					
				}
			else if(this.state.totalPeople>(this.state.numberRoom*4)){ //check if total people are greater than 4*available room
					alert("Too many people");
				}
			this.setState({totalPeople:this.state.numberAdults+this.state.numberChildren}); //set total people after decreasing number of adults
		}
		
		incNumberAdult(e){
			
			console.log(this.state.numberAdults);
				if(this.state.numberRoom>this.state.numberAdults){ //check if rooms are greater than total people
					
					this.setState({numberAdults:++this.state.numberAdults}); //increase number of adults
					
				}
				else if(this.state.totalPeople<(this.state.numberRoom*4)){
					this.setState({numberAdults:++this.state.numberAdults});
				}
				else if(this.state.totalPeople==(this.state.numberRoom*4)){ //check if total people are greater than 4*available room
									alert("Too many people, pl");
				}				
			this.setState({totalPeople:this.state.numberAdults+this.state.numberChildren});
			console.log(this.state.numberAdults);
		}
		decNumberChildren(e){
			
			if(this.state.numberChildren>0)
				this.setState({numberChildren:--this.state.numberChildren});
			
			else if(this.state.totalPeople>(this.state.numberRoom*4)){ //check if total people are greater than 4*available room
					alert("Too many people");
				}	
			this.setState({totalPeople:this.state.numberAdults+this.state.numberChildren});  //set total number of people				
		}
		
		incNumberChildren(e){
			
			console.log(this.state.totalPeople)
			if(this.state.totalPeople<(this.state.numberRoom*4))
				this.setState({numberChildren:++this.state.numberChildren});
			if(this.state.totalPeople>=(this.state.numberRoom*4)){ //check if total people are greater than 4*available room
					alert("cannot add more children");
				}
			this.setState({totalPeople:this.state.numberAdults+this.state.numberChildren});  //set total number of people	
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
					<div className="row">
						<MdHotel className="col-md-4 "size={40}/>
						<h4 className="col-md-4 ">ROOMS</h4>
						<div className="btn-group">
							<button className="btn btn-danger btn-sm col-md-1" style={{borderRadius:"50%", width:"30%"}} onClick={this.decNumberRoom}>-</button>
							<h4 className="col-md-3 ">{this.state.numberRoom}</h4>
							<button className="btn btn-success btn-sm col-md-1" style={{borderRadius:"50%", width:"30%"}} onClick={this.incNumberRoom}>+</button>
						</div>
					</div>
					<hr/>
					<div className="row">
						<Adult className="col-md-4 "size={40}/>
						<h4 className="col-md-4 ">ADULTS</h4>
						<div className="btn-group">
							<button className="btn btn-danger btn-sm col-md-1" style={{borderRadius:"50%", width:"30%"}} onClick={this.decNumberAdult}>-</button>
							<h4 className="col-md-3 ">{this.state.numberAdults}</h4>
							<button className="btn btn-success btn-sm col-md-1" style={{borderRadius:"50%", width:"30%"}} onClick={this.incNumberAdult}>+</button>
						</div>
					</div>
					<hr/>
					<div class="row">
						<Child className="col-md-4 "size={40}/>
						<h4 className="col-md-4 ">CHILDREN</h4>
						<div className="btn-group">
							<button className="btn btn-danger btn-sm col-md-1" style={{borderRadius:"50%", width:"30%"}} onClick={this.decNumberChildren}>-</button>
							<h4 className="col-md-2 ">{this.state.numberChildren}</h4>
							<button className="btn btn-success btn-sm col-md-1" style={{borderRadius:"50%", width:"30%"}}  onClick={this.incNumberChildren}>+</button>
						</div>
					</div>
				</div>
				</div>
				<div>
					<h2 className="col-sm-3 ">Total people</h2>
					<h3 className="col-sm-3 ">{this.state.totalPeople}</h3>
				</div>
			</div>
		);
	}
}

const render=()=>{
	
	ReactDOM.render(<Hotel/>, document.getElementById('root'));
}
render();