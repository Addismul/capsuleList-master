import React from "react";
import Capsules from "./components/Capsules";

const HomeScreen= props =>{
    return (
       <Capsules navigation={props.navigation} />
    );
};

HomeScreen.navigationOptions = {
    title:'Capsule List'
};

export default HomeScreen;