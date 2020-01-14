import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';

import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import Payment from '././components/Payment/Payment';
import Pokdeng from '././components/Pokdeng/Pokdeng';
import NotFound from '././components/NotFound/NotFound';

const Routes = () => (
<BrowserRouter >
<Switch>
<Route exact path="/" component={Home}/>
<Route path="/home" component={Home}/>
<Route path="/Pokdeng" component={Pokdeng}/>
<Route path="/login" component={Login}/>
<Route path="/Signup" component={Signup}/>
<Route path="/Payment" component={Payment}/>
<Route path="*" component={NotFound}/>
</Switch>
</BrowserRouter>
);
export default Routes;
