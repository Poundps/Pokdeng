import React, {Component} from 'react';
import './Welcome.css';
class Welcome extends Component {
render() {
return (
<div className="row " id="Body">
<div className="medium-12 columns">
<h2 id="welcomeText">Welcome to....</h2>
<a href="/login" className="button">Loginnnnn</a>
<a href="/signup" className="button success">Signup</a>
<a href="/home" className="button success">Shop</a>
</div>
</div>
);
}
}
export default Welcome;