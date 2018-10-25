import React from 'react';
import MdHotel from '../../node_modules/react-icons/lib/md/hotel';

export class Room extends React.Component{
	constructor(props){
		super(props);
		this.state={
			numberRoom:1,
			
		};
	}
	
	decNumberRoom(e){ //decrease number of rooms
			if(this.state.numberRoom>1)  //min 1 room
				this.setState({numberRoom:this.state.numberRoom-1}); //decrease rooms
			this.setState({totalPeople:this.state.numberAdults+this.state.numberChildren}); // set total number of people
		}
		
		incNumberRoom(e){
			this.setState({totalPeople:this.state.numberAdults+this.state.numberChildren}); // set total number of people
			
			if(this.state.numberRoom>this.state.numberAdults){ //if selected rooms are greater than number of adults
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
		
	render(){
		return(
				<div className="row">
						<MdHotel className="col-md-4 "size={40}/>
						<h4 className="col-md-4 ">ROOMS</h4>
						<div className="btn-group">
							<button className="btn btn-danger btn-sm col-md-1" style={{borderRadius:"50%", width:"30%"}} onClick={this.decNumberRoom}>-</button>
							<h4 className="col-md-3 ">{this.state.numberRoom}</h4>
							<button className="btn btn-success btn-sm col-md-1" style={{borderRadius:"50%", width:"30%"}} onClick={this.incNumberRoom}>+</button>
						</div>
				</div>
		);
	}
}

