import {Route, Switch} from "react-router-dom";
import React from "react";
import Account from "./Components/Account/Account";
import MakeTransaction from "./Components/MakeTransaction/MakeTransaction";
import MineBlock from "./Components/MineBlock/MineBlock";
import SplashScreen from "./Components/SplashScreen/SplashScreen";

const MyRouter = () => (
    <Switch>
        <Route path='/account'><Account/></Route>
        <Route path='/make-transaction'><MakeTransaction/></Route>
        <Route path='/mine-block'><MineBlock/></Route>
        <Route path='/'><SplashScreen/></Route>
    </Switch>
);

export default MyRouter;
