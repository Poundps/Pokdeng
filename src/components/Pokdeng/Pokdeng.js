import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';
import lotto from "./lotto.png";
import snake from "./snake.png";
import chip from "./chip.png";
import plus from "./plus.png";
import suit from "./s.png";
import C12C from "./PNG/2C.png";
import C12D from "./PNG/2D.png";
import C12H from "./PNG/2H.png";
import C12S from "./PNG/2S.png";
import C13C from "./PNG/3C.png";
import C13D from "./PNG/3D.png";
import C13H from "./PNG/3H.png";
import C13S from "./PNG/3S.png";
import C14C from "./PNG/2D.png";
import C14D from "./PNG/4D.png";
import C14H from "./PNG/4H.png";
import C14S from "./PNG/4S.png";
import C15C from "./PNG/5C.png";
import C15D from "./PNG/5D.png";
import C15H from "./PNG/5H.png";
import C15S from "./PNG/5S.png";
import C16C from "./PNG/6C.png";
import C16D from "./PNG/6D.png";
import C16H from "./PNG/6H.png";
import C16S from "./PNG/6S.png";
import C17C from "./PNG/7C.png";
import C17D from "./PNG/7D.png";
import C17H from "./PNG/7H.png";
import C17S from "./PNG/7S.png";
import C18C from "./PNG/8C.png";
import C18D from "./PNG/8D.png";
import C18H from "./PNG/8H.png";
import C18S from "./PNG/8S.png";
import C19C from "./PNG/9C.png";
import C19D from "./PNG/9D.png";
import C19H from "./PNG/9H.png";
import C19S from "./PNG/9S.png";
import C110C from "./PNG/10C.png";
import C110D from "./PNG/10D.png";
import C110H from "./PNG/10H.png";
import C110S from "./PNG/10S.png";
import C1AC from "./PNG/AC.png";
import C1AD from "./PNG/AD.png";
import C1AH from "./PNG/AH.png";
import C1AS from "./PNG/AS.png";
import C1JC from "./PNG/JC.png";
import C1JD from "./PNG/JD.png";
import C1JH from "./PNG/JH.png";
import C1JS from "./PNG/JS.png";
import C1QC from "./PNG/QC.png";
import C1QD from "./PNG/QD.png";
import C1QH from "./PNG/QH.png";
import C1QS from "./PNG/QS.png";
import C1KC from "./PNG/KC.png";
import C1KD from "./PNG/KD.png";
import C1KH from "./PNG/KH.png";
import C1KS from "./PNG/KS.png";
import B from "./PNG/gray_back.png";
import './Pokdeng.css';
class Pokdeng extends Component {

constructor(props) {
super(props);
this.state = {
data:[],
suit:["C","D","H","S"],
suitnum:["A","J","Q","k",2,3,4,5,6,7,8,9,10],
B1:'',
B2:'',
B3:'',
P1:'',
P2:'',
P3:'',
Pt:'',
Bt:'',
Profit:0,
Loss:0,
countcardP:'',
CheckcardB1:'',
CheckcardB2:'',
CheckcardB3:'',
CheckcardP1:'',
CheckcardP2:'',
CheckcardP3:'',
BonusP1:'',
BonusP2:'',
BonusP3:'',
BonusB:'',
BonusP:1,
Display:"none",
suitbo:'',
suitbo2:'',
BonusB:'',
testnumber:10,
checknumber:[],
number:[],
chipsin:'',
mylotto:'',
redirectToReferrer: false,
totalchips:0,
chips:9999999,
name:'',
status:'',
bpt:'',
check:''
};
this.getuserChips=this.getuserChips.bind(this);
this.logout = this.logout.bind(this);
this.getNumber = this.getNumber.bind(this);
this.handlenum1Change = this.handlenum1Change.bind(this);
this.Pokdeng = this.Pokdeng.bind(this);
this.Pokdengmore = this.Pokdengmore.bind(this);
this.Update = this.Update.bind(this);
this.Payment=this.Payment.bind(this);


}


componentWillMount() {

if(sessionStorage.getItem("userData")){

this.getuserChips();
this.getNumber();

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

addlotto(e){
e.preventDefault();
let data = JSON.parse(sessionStorage.getItem("userData"));

let postData = {user_id: data.userData.user_id, number: this.state.number.map};
if (postData) {

PostData('addlotto', postData).then((result) => {

if(result.success){

alert(result.success);
}
else
alert(result.error);

});
}
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
getNumber(evt) {

    let data = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({name:data.userData.name});
    let postData = { user_id: data.userData.user_id};
    if (data) {
    PostData('checknumber', postData).then((result) => {
    let responseJson = result;
    //this.setState({checknumber: responseJson.numberc});
    this.setState({checknumber: [...this.state.checknumber, responseJson.numberc]});
    });

    }
}


//---------------------------------------------------------
Payment() {

    console.log(this.state.chips);
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, chips: this.state.chips};
    if (this.state.chips) {
    PostData('chipsupdateplay', postData).then((result) => {
    let responseJson = result;
    this.setState({redirectToReferrerpay: true});
    this.setState({chips: responseJson.chips});

    });
    }
}


handlenum1Change (evt) {

  this.setState({ chipsin: Number(evt.target.value) });
  }


Pokdeng(){
  if(this.state.chipsin !=""){
    this.setState({status:''})
console.log("GET IN SIDE POKDENG FUNC");
this.setState({Pt:0}, function () {
console.log("SET Bt="+this.state.Pt);

  });
  this.setState({Bt:0}, function () {
        console.log("SET Pt="+this.state.Pt);

    });

var  suit=["C","D","H","S"];
var  suitnum=["A","J","Q","K",2,3,4,5,6,7,8,9,10];
var Balance =this.state.chips;
var chipsin=this.state.chipsin;
if(chipsin<Balance){
  Balance=Balance-chipsin;
  this.setState({chips: Balance});
  this.setState({Bt: ""});
  this.setState({P3: ""});
  this.setState({B1: B});
  this.setState({B2: B});
  this.setState({B3: ''});
/////////////////random_Player/////////////////////
var i=1
var Pt=0;
var Bt=0;
var suit1=[];
var card=[];
///////////////////////////////////////////////////
while (i<=2) {
 var card=[];
  var rand=Math.random();
  var totalsuit=suit.length;
  var totalsuitnum=suitnum.length;
  var randindex=Math.floor(rand*totalsuit);
  var randindex2=Math.floor(rand*totalsuitnum);
  var randomsuit=suit[randindex];
  var randomsuitnum=suitnum[randindex2];
  var cardall=randomsuitnum+randomsuit;
   suit1[i]=randomsuit;
   card[i]=cardall;
   this.setState({CheckcardP1:card[1]})
   this.setState({CheckcardP2:card[2]})
   if(this.state.CheckcardP1==this.state.CheckcardP2){
      rand=Math.random();
      totalsuit=suit.length;
      totalsuitnum=suitnum.length;
      randindex=Math.floor(rand*totalsuit);
      randindex2=Math.floor(rand*totalsuitnum);
      randomsuit=suit[randindex];
      randomsuitnum=suitnum[randindex2];
   }
////////////////////บันทึกเเต้มไผ่เเละดอก//////////////
  if(randomsuitnum=="A"){
    Pt=Pt+1;
  }
  else if (randomsuitnum =="J") {
  Pt=Pt+0;
  }
  else if (randomsuitnum =="Q") {
  Pt=Pt+0;
  }
  else if (randomsuitnum =="K") {
  Pt=Pt+0;
  }
  else if (randomsuitnum == 0) {
  Pt=Pt+0;
  }
  else {
    Pt=Pt+randomsuitnum;
  }
  if(Pt>=10){
    Pt=Pt-10;
  }
/////////////////////เช็คเด้ง//////////
this.setState({BonusP1:suit1[1]})
this.setState({BonusP2:suit1[2]})

  var card="C1"+randomsuitnum+randomsuit;
  var index="P"+i;
  var indexB="B"+i;
if(card=="C12C"){
this.setState({[index]: C12C});
  }
else if (card=="C12D") {
this.setState({[index]: C12D});
  }
else if (card=="C12H") {
  this.setState({[index]: C12H});
    }
else if (card=="C12S") {
    this.setState({[index]: C12S});
}
else if (card=="C13C") {
this.setState({[index]: C13C});
}
else if (card=="C13D") {
this.setState({[index]: C13D});
}
else if (card=="C13H") {
this.setState({[index]: C13H});
}else if (card=="C13S") {
this.setState({[index]: C13S});
}else if (card=="C14C") {
this.setState({[index]: C14C});

}else if (card=="C14D") {
this.setState({[index]: C14D});
}else if (card=="C14H") {
this.setState({[index]: C14H});
}
else if (card=="C14S") {
this.setState({[index]: C14S});
  }
else if (card=="C15C") {
  this.setState({[index]: C15C});
    }
else if (card=="C15D") {
    this.setState({[index]: C15D});
}
else if (card=="C15H") {
this.setState({[index]: C15H});
}
else if (card=="C15S") {
this.setState({[index]: C15S});
}
else if (card=="C16C") {
this.setState({[index]: C16C});
}else if (card=="C16D") {
this.setState({[index]: C16D});
}else if (card=="C16H") {
this.setState({[index]: C16H});
}else if (card=="C16S") {
this.setState({[index]: C16S});
}else if (card=="C17C") {
this.setState({[index]: C17C});
}
else if (card=="C17D") {
this.setState({[index]: C17D});
  }
else if (card=="C17H") {
  this.setState({[index]: C17H});
    }
else if (card=="C17S") {
    this.setState({[index]: C17S});
}
else if (card=="C18C") {
this.setState({[index]: C18C});
}
else if (card=="C18D") {
this.setState({[index]: C18D});
}
else if (card=="C18H") {
this.setState({[index]: C18H});
}else if (card=="C18S") {
this.setState({[index]: C18S});
}else if (card=="C19C") {
this.setState({[index]: C19C});
}else if (card=="C19D") {
this.setState({[index]: C19D});
}else if (card=="C19H") {
this.setState({[index]: C19H});
}
else if (card=="C19S") {
this.setState({[index]: C19S});
  }
else if (card=="C110C") {
  this.setState({[index]: C110C});
    }
else if (card=="C110D") {
    this.setState({[index]: C110D});
}
else if (card=="C110H") {
this.setState({[index]: C110H});
}
else if (card=="C110S") {
this.setState({[index]: C110S});
}
else if (card=="C1AC") {
this.setState({[index]: C1AC});
}else if (card=="C1AD") {
this.setState({[index]: C1AD});
}else if (card=="C1AH") {
this.setState({[index]: C1AH});
}else if (card=="C1AS") {
this.setState({[index]: C1AS});
}else if (card=="C1JC") {
  this.setState({[index]: C1JC});
}
else if (card=="C1JD") {
this.setState({[index]: C1JD});
  }
else if (card=="C1JH") {
  this.setState({[index]: C1JH});

    }
else if (card=="C1JS") {
    this.setState({[index]: C1JS});

}
else if (card=="C1QC") {
this.setState({[index]: C1QC});

}
else if (card=="C1QD") {
this.setState({[index]: C1QD});

}
else if (card=="C1QH") {
this.setState({[index]: C1QH});

}else if (card=="C1QS") {
this.setState({[index]: C1QS});

}else if (card=="C1KC") {
this.setState({[index]: C1KC});

}else if (card=="C1KD") {
this.setState({[index]: C1KD});

}else if (card=="C1KH") {
this.setState({[index]: C1KH});

}
else if (card=="C1KS") {
this.setState({[index]: C1KS});

  }
if(i==2){
  this.setState({Display:"block"})
}
i++;
}
  console.log("////PLAYER////");
  console.log("TOTALSCOREINFIRSTFUNC2CARDS");
this.setState({Pt:Pt}, function () {
      console.log("Pt="+this.state.Pt);

  });

  //////////////////////////////////////////////////
}
else {
alert("You don't have enough chips");
}
}
else {
  alert("You didn't put some chip");
}
}
//////////////////////////////////////////////////////////////////
Pokdengmore(evt){
  evt.preventDefault();
  this.setState({count:3})
  this.setState({Display:"none"});
  if(evt.target.dataset.value=="DRAW"){
    var  suit=["C","D","H","S"];
    var  suitnum=["A","J","Q","K",2,3,4,5,6,7,8,9,10];
    var Pt=0;
    var car='';
    var rand=Math.random();
    var totalsuit=suit.length;
    var totalsuitnum=suitnum.length;
    var randindex=Math.floor(rand*totalsuit);
    var randindex2=Math.floor(rand*totalsuitnum);
    var randomsuit=suit[randindex];
    var randomsuitnum=suitnum[randindex2];
    var cardall=randomsuitnum+randomsuit;
    card=cardall;
    this.setState({CheckcardP3:card})
    if(this.state.CheckcardP1==this.state.CheckcardP3&&this.state.CheckcardP2==this.state.CheckcardP3){
       rand=Math.random();
       totalsuit=suit.length;
       totalsuitnum=suitnum.length;
       randindex=Math.floor(rand*totalsuit);
       randindex2=Math.floor(rand*totalsuitnum);
       randomsuit=suit[randindex];
       randomsuitnum=suitnum[randindex2];
    }
  ////////////////////บันทึกเเต้มไผ่เเละดอก//////////////
    if(randomsuitnum=="A"){
      Pt=Pt+1;
    }
    else if (randomsuitnum =="J") {
    Pt=Pt+0;
    }
    else if (randomsuitnum =="Q") {
    Pt=Pt+0;
    }
    else if (randomsuitnum =="K") {
    Pt=Pt+0;
    }
    else if (randomsuitnum ==10) {
    Pt=Pt+0;
    }
    else {
      Pt=Pt+randomsuitnum;
    }
  console.log("TOTALSCOReSECONDFUNC3CARDS");
  this.setState({Pt:(this.state.Pt+Pt)%10}, function () {
        console.log("Pt="+this.state.Pt);

    });




  /////////////////////เช็คเด้ง//////////เหลือเช็คเเต่player
  setTimeout(()=>{
this.setState({BonusP3:randomsuit})
if(this.state.BonusP1==this.state.BonusP2&&this.state.BonusP1==this.state.BonusP3&&this.state.BonusP2==this.state.BonusP3){
this.setState({BonusP:3})}
else {
  this.setState({BonusP:1})

}
},100)
///////////////////////////////////
    var card="C1"+randomsuitnum+randomsuit;
    var index="P3";

  if(card=="C12C"){
  this.setState({[index]: C12C});
    }
  else if (card=="C12D") {
  this.setState({[index]: C12D});
    }
  else if (card=="C12H") {
    this.setState({[index]: C12H});
      }
  else if (card=="C12S") {
      this.setState({[index]: C12S});
  }
  else if (card=="C13C") {
  this.setState({[index]: C13C});
  }
  else if (card=="C13D") {
  this.setState({[index]: C13D});
  }
  else if (card=="C13H") {
  this.setState({[index]: C13H});
  }else if (card=="C13S") {
  this.setState({[index]: C13S});
  }else if (card=="C14C") {
  this.setState({[index]: C14C});

  }else if (card=="C14D") {
  this.setState({[index]: C14D});
  }else if (card=="C14H") {
  this.setState({[index]: C14H});
  }
  else if (card=="C14S") {
  this.setState({[index]: C14S});
    }
  else if (card=="C15C") {
    this.setState({[index]: C15C});
      }
  else if (card=="C15D") {
      this.setState({[index]: C15D});
  }
  else if (card=="C15H") {
  this.setState({[index]: C15H});
  }
  else if (card=="C15S") {
  this.setState({[index]: C15S});
  }
  else if (card=="C16C") {
  this.setState({[index]: C16C});
  }else if (card=="C16D") {
  this.setState({[index]: C16D});
  }else if (card=="C16H") {
  this.setState({[index]: C16H});
  }else if (card=="C16S") {
  this.setState({[index]: C16S});
  }else if (card=="C17C") {
  this.setState({[index]: C17C});
  }
  else if (card=="C17D") {
  this.setState({[index]: C17D});
    }
  else if (card=="C17H") {
    this.setState({[index]: C17H});
      }
  else if (card=="C17S") {
      this.setState({[index]: C17S});
  }
  else if (card=="C18C") {
  this.setState({[index]: C18C});
  }
  else if (card=="C18D") {
  this.setState({[index]: C18D});
  }
  else if (card=="C18H") {
  this.setState({[index]: C18H});
  }else if (card=="C18S") {
  this.setState({[index]: C18S});
  }else if (card=="C19C") {
  this.setState({[index]: C19C});
  }else if (card=="C19D") {
  this.setState({[index]: C19D});
  }else if (card=="C19H") {
  this.setState({[index]: C19H});
  }
  else if (card=="C19S") {
  this.setState({[index]: C19S});
    }
  else if (card=="C110C") {
    this.setState({[index]: C110C});
      }
  else if (card=="C110D") {
      this.setState({[index]: C110D});
  }
  else if (card=="C110H") {
  this.setState({[index]: C110H});
  }
  else if (card=="C110S") {
  this.setState({[index]: C110S});
  }
  else if (card=="C1AC") {
  this.setState({[index]: C1AC});
  }else if (card=="C1AD") {
  this.setState({[index]: C1AD});
  }else if (card=="C1AH") {
  this.setState({[index]: C1AH});
  }else if (card=="C1AS") {
  this.setState({[index]: C1AS});
  }else if (card=="C1JC") {
    this.setState({[index]: C1JC});
  }
  else if (card=="C1JD") {
  this.setState({[index]: C1JD});
    }
  else if (card=="C1JH") {
    this.setState({[index]: C1JH});

      }
  else if (card=="C1JS") {
      this.setState({[index]: C1JS});

  }
  else if (card=="C1QC") {
  this.setState({[index]: C1QC});

  }
  else if (card=="C1QD") {
  this.setState({[index]: C1QD});

  }
  else if (card=="C1QH") {
  this.setState({[index]: C1QH});

  }else if (card=="C1QS") {
  this.setState({[index]: C1QS});

  }else if (card=="C1KC") {
  this.setState({[index]: C1KC});

  }else if (card=="C1KD") {
  this.setState({[index]: C1KD});

  }else if (card=="C1KH") {
  this.setState({[index]: C1KH});

  }
  else if (card=="C1KS") {
  this.setState({[index]: C1KS});

    }

  }
  else if (evt.target.dataset.value=="NOPE") {

  }
  /////////////////random_Banker/////////////////////
  var i=1
  var Pt=0;
  var Bt=0;
  var suitB1=[];
  var  suit=["C","D","H","S"];
  var  suitnum=["A","J","Q","K",2,3,4,5,6,7,8,9,10];
  ///////////////////////////////////////////////////
  while (i<=2) {
     var card=[];
    var rand=Math.random();
    var totalsuit=suit.length;
    var totalsuitnum=suitnum.length;
    var randindex=Math.floor(rand*totalsuit);
    var randindex2=Math.floor(rand*totalsuitnum);
    var randomsuit=suit[randindex];
    var randomsuitnum=suitnum[randindex2];
    var cardall=randomsuitnum+randomsuit;
     suitB1[i]=randomsuit;
     card[i]=cardall;
     this.setState({CheckcardB1:card[1]})
     this.setState({CheckcardB2:card[2]})
     if(this.state.CheckcardB1==this.state.CheckcardB2){
        rand=Math.random();
        totalsuit=suit.length;
        totalsuitnum=suitnum.length;
        randindex=Math.floor(rand*totalsuit);
        randindex2=Math.floor(rand*totalsuitnum);
        randomsuit=suit[randindex];
        randomsuitnum=suitnum[randindex2];
     }
  ////////////////////บันทึกเเต้มไผ่เเละดอก//////////////
    if(randomsuitnum=="A"){
      Bt=Bt+1;
    }
    else if (randomsuitnum =="J") {
    Bt=Bt+0;
    }
    else if (randomsuitnum =="Q") {
    Bt=Bt+0;
    }
    else if (randomsuitnum =="K") {
    Bt=Bt+0;
    }
    else if (randomsuitnum ==0) {
    Bt=Bt+0;
    }
    else {
      Bt=Bt+randomsuitnum;
    }
    if(Bt>=10){
      Bt=Bt-10;
    }
    console.log("////BANKER////");
    console.log("TOTALSCOREINFIRSTFUNC2CARDS");
    this.setState({Bt:(this.state.Bt+Bt)%10}, function () {
          console.log("Bt="+this.state.Bt);

      });

  /////////////////////เช็คเด้ง//////////
    if(suitB1[1]==suitB1[2]){
  this.setState({BonusB:2})
    }
    else {
    this.setState({BonusB:1})
    }

    var card="C1"+randomsuitnum+randomsuit;
    var index="B"+i;
  if(card=="C12C"){
  this.setState({[index]: C12C});
    }
  else if (card=="C12D") {
  this.setState({[index]: C12D});
    }
  else if (card=="C12H") {
    this.setState({[index]: C12H});
      }
  else if (card=="C12S") {
      this.setState({[index]: C12S});
  }
  else if (card=="C13C") {
  this.setState({[index]: C13C});
  }
  else if (card=="C13D") {
  this.setState({[index]: C13D});
  }
  else if (card=="C13H") {
  this.setState({[index]: C13H});
  }else if (card=="C13S") {
  this.setState({[index]: C13S});
  }else if (card=="C14C") {
  this.setState({[index]: C14C});

  }else if (card=="C14D") {
  this.setState({[index]: C14D});
  }else if (card=="C14H") {
  this.setState({[index]: C14H});
  }
  else if (card=="C14S") {
  this.setState({[index]: C14S});
    }
  else if (card=="C15C") {
    this.setState({[index]: C15C});
      }
  else if (card=="C15D") {
      this.setState({[index]: C15D});
  }
  else if (card=="C15H") {
  this.setState({[index]: C15H});
  }
  else if (card=="C15S") {
  this.setState({[index]: C15S});
  }
  else if (card=="C16C") {
  this.setState({[index]: C16C});
  }else if (card=="C16D") {
  this.setState({[index]: C16D});
  }else if (card=="C16H") {
  this.setState({[index]: C16H});
  }else if (card=="C16S") {
  this.setState({[index]: C16S});
  }else if (card=="C17C") {
  this.setState({[index]: C17C});
  }
  else if (card=="C17D") {
  this.setState({[index]: C17D});
    }
  else if (card=="C17H") {
    this.setState({[index]: C17H});
      }
  else if (card=="C17S") {
      this.setState({[index]: C17S});
  }
  else if (card=="C18C") {
  this.setState({[index]: C18C});
  }
  else if (card=="C18D") {
  this.setState({[index]: C18D});
  }
  else if (card=="C18H") {
  this.setState({[index]: C18H});
  }else if (card=="C18S") {
  this.setState({[index]: C18S});
  }else if (card=="C19C") {
  this.setState({[index]: C19C});
  }else if (card=="C19D") {
  this.setState({[index]: C19D});
  }else if (card=="C19H") {
  this.setState({[index]: C19H});
  }
  else if (card=="C19S") {
  this.setState({[index]: C19S});
    }
  else if (card=="C110C") {
    this.setState({[index]: C110C});
      }
  else if (card=="C110D") {
      this.setState({[index]: C110D});
  }
  else if (card=="C110H") {
  this.setState({[index]: C110H});
  }
  else if (card=="C110S") {
  this.setState({[index]: C110S});
  }
  else if (card=="C1AC") {
  this.setState({[index]: C1AC});
  }else if (card=="C1AD") {
  this.setState({[index]: C1AD});
  }else if (card=="C1AH") {
  this.setState({[index]: C1AH});
  }else if (card=="C1AS") {
  this.setState({[index]: C1AS});
  }else if (card=="C1JC") {
    this.setState({[index]: C1JC});
  }
  else if (card=="C1JD") {
  this.setState({[index]: C1JD});
    }
  else if (card=="C1JH") {
    this.setState({[index]: C1JH});

      }
  else if (card=="C1JS") {
      this.setState({[index]: C1JS});

  }
  else if (card=="C1QC") {
  this.setState({[index]: C1QC});

  }
  else if (card=="C1QD") {
  this.setState({[index]: C1QD});

  }
  else if (card=="C1QH") {
  this.setState({[index]: C1QH});

  }else if (card=="C1QS") {
  this.setState({[index]: C1QS});

  }else if (card=="C1KC") {
  this.setState({[index]: C1KC});

  }else if (card=="C1KD") {
  this.setState({[index]: C1KD});

  }else if (card=="C1KH") {
  this.setState({[index]: C1KH});

  }
  else if (card=="C1KS") {
  this.setState({[index]: C1KS});

    }
  i++;
  }

if(Bt < 5){
  var rand=Math.random();
  var totalsuit=suit.length;
  var totalsuitnum=suitnum.length;
  var randindex=Math.floor(rand*totalsuit);
  var randindex2=Math.floor(rand*totalsuitnum);
  var randomsuit=suit[randindex];
  var randomsuitnum=suitnum[randindex2];
   suitB1[3]=randomsuit;
   var cardall=randomsuitnum+randomsuit;
   card=cardall;
   this.setState({CheckcardB3:card})
   if(this.state.CheckcardB1==this.state.CheckcardB3&&this.state.CheckcardB2==this.state.CheckcardB3){
      rand=Math.random();
      totalsuit=suit.length;
      totalsuitnum=suitnum.length;
      randindex=Math.floor(rand*totalsuit);
      randindex2=Math.floor(rand*totalsuitnum);
      randomsuit=suit[randindex];
      randomsuitnum=suitnum[randindex2];
   }
////////////////////บันทึกเเต้มไผ่เเละดอก//////////////
  if(randomsuitnum=="A"){
    Bt=Bt+1;
  }
  else if (randomsuitnum =="J") {
  Bt=Bt+0;
  }
  else if (randomsuitnum =="Q") {
  Bt=Bt+0;
  }
  else if (randomsuitnum =="K") {
  Bt=Bt+0;
  }
  else if (randomsuitnum ==0) {
  Bt=Bt+0;
  }
  else {
    Bt=Bt+randomsuitnum;
  }
  if(Bt>=10){
    Bt=Bt-10;
  }
/////////////////////เช็คเด้ง///////////////////
  if(suitB1[1]==suitB1[2]&&suitB1[3]){
this.setState({BonusB:3})
  }
  else {
  this.setState({BonusB:1})
  }
  var card="C1"+randomsuitnum+randomsuit;
  var index="B3";
if(card=="C12C"){
this.setState({[index]: C12C});
  }
else if (card=="C12D") {
this.setState({[index]: C12D});
  }
else if (card=="C12H") {
  this.setState({[index]: C12H});
    }
else if (card=="C12S") {
    this.setState({[index]: C12S});
}
else if (card=="C13C") {
this.setState({[index]: C13C});
}
else if (card=="C13D") {
this.setState({[index]: C13D});
}
else if (card=="C13H") {
this.setState({[index]: C13H});
}else if (card=="C13S") {
this.setState({[index]: C13S});
}else if (card=="C14C") {
this.setState({[index]: C14C});

}else if (card=="C14D") {
this.setState({[index]: C14D});
}else if (card=="C14H") {
this.setState({[index]: C14H});
}
else if (card=="C14S") {
this.setState({[index]: C14S});
  }
else if (card=="C15C") {
  this.setState({[index]: C15C});
    }
else if (card=="C15D") {
    this.setState({[index]: C15D});
}
else if (card=="C15H") {
this.setState({[index]: C15H});
}
else if (card=="C15S") {
this.setState({[index]: C15S});
}
else if (card=="C16C") {
this.setState({[index]: C16C});
}else if (card=="C16D") {
this.setState({[index]: C16D});
}else if (card=="C16H") {
this.setState({[index]: C16H});
}else if (card=="C16S") {
this.setState({[index]: C16S});
}else if (card=="C17C") {
this.setState({[index]: C17C});
}
else if (card=="C17D") {
this.setState({[index]: C17D});
  }
else if (card=="C17H") {
  this.setState({[index]: C17H});
    }
else if (card=="C17S") {
    this.setState({[index]: C17S});
}
else if (card=="C18C") {
this.setState({[index]: C18C});
}
else if (card=="C18D") {
this.setState({[index]: C18D});
}
else if (card=="C18H") {
this.setState({[index]: C18H});
}else if (card=="C18S") {
this.setState({[index]: C18S});
}else if (card=="C19C") {
this.setState({[index]: C19C});
}else if (card=="C19D") {
this.setState({[index]: C19D});
}else if (card=="C19H") {
this.setState({[index]: C19H});
}
else if (card=="C19S") {
this.setState({[index]: C19S});
  }
else if (card=="C110C") {
  this.setState({[index]: C110C});
    }
else if (card=="C110D") {
    this.setState({[index]: C110D});
}
else if (card=="C110H") {
this.setState({[index]: C110H});
}
else if (card=="C110S") {
this.setState({[index]: C110S});
}
else if (card=="C1AC") {
this.setState({[index]: C1AC});
}else if (card=="C1AD") {
this.setState({[index]: C1AD});
}else if (card=="C1AH") {
this.setState({[index]: C1AH});
}else if (card=="C1AS") {
this.setState({[index]: C1AS});
}else if (card=="C1JC") {
  this.setState({[index]: C1JC});
}
else if (card=="C1JD") {
this.setState({[index]: C1JD});
  }
else if (card=="C1JH") {
  this.setState({[index]: C1JH});

    }
else if (card=="C1JS") {
    this.setState({[index]: C1JS});

}
else if (card=="C1QC") {
this.setState({[index]: C1QC});

}
else if (card=="C1QD") {
this.setState({[index]: C1QD});

}
else if (card=="C1QH") {
this.setState({[index]: C1QH});

}else if (card=="C1QS") {
this.setState({[index]: C1QS});

}else if (card=="C1KC") {
this.setState({[index]: C1KC});

}else if (card=="C1KD") {
this.setState({[index]: C1KD});

}else if (card=="C1KH") {
this.setState({[index]: C1KH});

}
else if (card=="C1KS") {
this.setState({[index]: C1KS});

  }
  console.log("TOTALSCOReSECONDFUNC3CARDS");
  this.setState({Bt:(this.state.Bt+Bt)%10}, function () {
        console.log("Bt="+this.state.Bt);

    });



}



}

Update(){
setTimeout( () => {
  console.log("****************************************************");
  console.log("BonusP="+this.state.BonusP);
  console.log("Bt="+this.state.Bt);
  console.log("Pt="+this.state.Pt);
  if(this.state.Pt>this.state.Bt){
    var chips =this.state.chips;
    var chipsin=this.state.chipsin;

  console.log("Player");
  this.setState({status:"PLAYER WIN"})
    this.setState({color:"blue"})
  this.setState({chips:chips+(chipsin*2)})
    console.log(this.state.chips);
  }
  else if (this.state.Bt>this.state.Pt) {
    var chips =this.state.chips;
    var chipsin=this.state.chipsin;


  console.log("Banker");
  this.setState({status:"BANKER WIN"})
  this.setState({color:"red"})
  this.setState({chips:this.state.chips})
  console.log(this.state.chips);
  }
  else if (this.state.Bt==this.state.Pt) {
    var chips =this.state.chips;
    var chipsin=this.state.chipsin;

  console.log("Tie");
  this.setState({status:"TIE"})
    this.setState({color:"white"})
  this.setState({chips:chips+chipsin})
  console.log(this.state.chips);
}


},200)
}


logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({redirectToReferrer: true});
}

render() {
/*if (this.state.redirectToReferrer) {
    return (<Redirect to={'/login'}/>)
}
*/
return (

<div className="row" id="Body" >

<div className="medium-12 contentlotto ">

<div className="chip">
<i style={{marginRight:"10px"}}><img src={chip} width="30px" height="30px" /></i>
CHIPS:&nbsp;{this.state.chips}

</div>

<hr/>
<br/>

<center>
<div className="Gamedisplay">
<center><div className="status" style={{color:this.state.color}}>{this.state.status}</div></center>
<div  className="Banker">
<label>BANKER</label>
<div  className="card">
<img src={this.state.B1} className="img" />
</div>
<div  className="card">
<img src={this.state.B2} className="img" />
</div>
<div  className="card">
<img src={this.state.B3} className="img" />
</div>
</div>
<div  className="Player">
<label>PLAYER</label>
<div  className="card">
<img src={this.state.P1} className="img" />
</div>
<div  className="card">
<img src={this.state.P2} className="img" />
</div>
<div  className="card">
<button style={{display:this.state.Display,color:"white",width:"100px",marginTop:"100px",marginLeft:"10px",backgroundColor:"red"}} className="button" data-value="DRAW" onClick={e => { this.Pokdengmore(e); this.Update()  }}>DRAW</button>
<button style={{display:this.state.Display,color:"white",width:"100px",marginLeft:"10px"}} className="button" data-value="NOPE"  onClick={e => { this.Pokdengmore(e); this.Update() }}>NOPE</button>
<img src={this.state.P3} className="img" />
</div>
</div>
</div>
</center>

<div className="Balance">
<table>
<tr>
<td>
Balance:&nbsp;{this.state.chips}&nbsp;Chips
</td>
<td>
<input style={{marginRight:"0px",padding:"0",margin:"0px",width:"100px"}} type="number" name="chips" placeholder="chips" onChange={this.handlenum1Change} require/>
</td>
{/*<td>
Profit:
</td>
<td >
<label style={{color:"Green"}}>{this.state.Profit}</label>
</td>
<td >
Loss:
</td>
<td>
<label style={{color:"red"}}>{this.state.Loss}</label>
</td>*/}
<td>
<button style={{color:"white",width:"100px",margin:"0"}} className="button" onClick={this.Pokdeng}>SUBMIT</button>
</td>
</tr>
</table>
</div>

<div className="score">
<table style={{fontSize:"30px"}}>
<tr>
<th>
BANKER
</th>
<th>
PLAYER
</th>
</tr>
<tr>
<th>
{this.state.Bt}
</th>
<th>
{this.state.Pt}
</th>
</tr>
</table>
</div>

</div>

</div>
);
}
}

export default Pokdeng;
