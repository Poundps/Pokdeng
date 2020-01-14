import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import './Payment.css';
import chip from "./chip.png";
class Payment extends Component {
  constructor(props) {
  super(props);

  this.state = {
  data:[],
  redirectToReferrer: false,
  redirectToReferrerpay:false,
  chips:'',
  name:'',
  result: 0,
     num1: 0
  };
  this.handlenum1Change = this.handlenum1Change.bind(this);
  this.Payment = this.Payment.bind(this);
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
  Payment(e) {
      e.preventDefault();
      window.alert("Payment Successful :)")
      let data = JSON.parse(sessionStorage.getItem("userData"));
      let postData = { user_id: data.userData.user_id, chips: this.state.num1};
      if (this.state.chips) {
      PostData('chipsupdate', postData).then((result) => {
      let responseJson = result;

      this.setState({data: responseJson.chips});

      });
      }
      this.setState({redirectToReferrerpay: true});
  }



  //---------------------------------------------------------

  handlenum1Change (evt) {
    console.log(evt.target.value);
    this.setState({ num1: Number(evt.target.value) });
   console.log(this.state.num1);

    }
    addAction =(event)=> {
  let x = this.state.num1 * 30
  this.setState({result: x })
}
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

render(){
if (this.state.redirectToReferrer) {
      return (<Redirect to={'/login'}/>)
  }
else if (this.state.redirectToReferrerpay) {
  return (<Redirect to={'/home'}/>)
}
return (

      <div className="row" id="Body" >
      <a style={{marginTop:"-35px",color:"white"}} href="#" onClick={this.logout} className="logout">LOGOUT</a>
        <div className="medium-5 columns left con" style={{fontFamily:"Cambria"}} >
        <center><h4 style={{fontFamily:"Cambria"}}>BUY CHIPS</h4></center>

        <form onSubmit={this.Payment} method="post">
        <label style={{marginRight:"10px"}}><i><img name="chips" src={chip} width="30px" height="30px" /></i> CHIPS:</label>
       <p style={{color:"red"}}>*1 CHIPS = 30 Bahts</p>
        <input style={{float:"left"}} type="number" name="chips" placeholder="chips" onChange={this.handlenum1Change} />
        <p>TOTAL:&nbsp; {this.state.result} &nbsp;Bahts</p>

        <button style={{color:"#1E2F93"}} className="button" value="PAYMENT" type="submit" onClick={this.Payment} >PAYMENT</button>
</form>
  <button style={{color:"#1E2F93"}} className="button" onClick={this.addAction}>CALCULATOR</button>
        </div>
      </div>
    );
}
}
export default Payment;
