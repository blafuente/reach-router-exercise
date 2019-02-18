import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class BootstrapNavBar extends Component{
  render(){
    return(
			
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">A T L</a>
		    </div>
		    <ul className="nav navbar-nav">
		    	<Link to="/">Home</Link>
		      <Link to="/about">About</Link>
		      <Link to="/Images">Images</Link>
					<Link to="/MayorMessage">Mayor's Message</Link>
					<Link to="/Atlanta">ATL Weather</Link>
		    </ul>
		  </div>


		</nav>   
	)
  }
}

export default BootstrapNavBar