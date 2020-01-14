import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';
import lotto from "./lotto.png";
import snake from "./snake.png";
import chip from "./chip.png";
import plus from "./plus.png";
import pokdeng from "./pokd.png";
import './Home.css';
class Home extends Component {

constructor(props) {
super(props);

this.state = {
data:[],
redirectToReferrer: false,
chips:9999999,
name:'',
};
this.getuserChips=this.getuserChips.bind(this);
this.logout = this.logout.bind(this);
}

componentWillMount() {

if(sessionStorage.getItem("userData")){

this.getuserChips();
}

else{
this.setState({redirectToReferrer: true});
}

}
//---------------------------Add Product----------------------------
feedUpdate1(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed1,price: this.state.price1};
    if (this.state.userFeed1) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});

    });
    }
}



//---------------------------------------------------------

getuserChips() {

    let data = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({name:data.userData.name});
    let postData = { user_id: data.userData.user_id};

    if (data) {
    PostData('chips', postData).then((result) => {
    let responseJson = result;
    this.setState({chips: responseJson.chips});
    });
    }
}


logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({redirectToReferrer: true});
}

render() {
/*if (this.state.redirectToReferrer) {
    return (<Redirect to={'/login'}/>)
}*/

return (
<div className="row" id="Body" >

<div className="medium-12 contenthome ">

<div className="chip">
<i style={{marginRight:"10px"}}><img src={chip} width="30px" height="30px" /></i>
CHIPS:&nbsp;{this.state.chips}

</div>

<hr/>


<br/>

<div className="Game">
<a href="/Pokdeng" >
<img style={{marginLeft:"50px"}} src={pokdeng} width="300px" height="150px" />
</a>
<p style={{marginLeft:"80px"}}>POKDENG</p>
</div>


</div>

</div>
);
}
}

export default Home;
