import React from 'react';
import Child from '../../node_modules/react-icons/lib/fa/child';

export const Children=(props)=>{
		return(
		<div class="row">
			<Child className="col-md-4 "size={40}/>
			<h4 className="col-md-4 ">CHILDREN</h4>
			<div className="btn-group">
				<button className="btn btn-danger btn-sm col-md-1" style={{borderRadius:"50%", width:"30%"}} onClick={props.decNumberChildren}>-</button>
				<h4 className="col-md-2 ">{props.numChildren}</h4>
				<button className="btn btn-success btn-sm col-md-1" style={{borderRadius:"50%", width:"30%"}}  onClick={props.incNumberChildren}>+</button>
			</div>
		</div>
		);
}