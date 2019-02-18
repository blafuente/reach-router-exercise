import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// function Images(props){
// 	// Map through images
// 	return(
// 		<img src="http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg"/>
// 	)
// }

class Images extends Component{
	render(){
		var atlImages = [
			'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
			'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
		  ]
		 
		let imageList = atlImages.map((data)=>{
			console.log(data)
			return(
				<img src={data} />
			)
		})

		return(
			<div className="image-list">
				{imageList}		
			</div>
		)
	}
	
}

export default Images