import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{overflowY: 'scroll', border: '8px solid rgba(0,128,128,1)', height: '700px'}}>
		{props.children}
		</div>
		);
};

export default Scroll;