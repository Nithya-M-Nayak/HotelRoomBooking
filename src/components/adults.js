import React from 'react';
import Adult from '../../node_modules/react-icons/lib/md/person';

export const Adults=(props)=>{
		return(
			<div className="row">
				<Adult className="col-md-4 "size={40}/>
				<h4 className="col-md-4 ">ADULTS</h4>
				<div className="btn-group">
					<button className="btn btn-danger btn-sm col-md-1" disabled={props.numAdults==1} style={{borderRadius:"50%", width:"30%"}} onClick={props.decNumberAdult}>-</button>
					<h4 className="col-md-3 ">{props.numAdults}</h4>
					<button className="btn btn-success btn-sm col-md-1" style={{borderRadius:"50%", width:"30%"}} onClick={props.incNumberAdult}>+</button>
				</div>
			</div>
		);	
};