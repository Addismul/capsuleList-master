import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "./home";
import CapsuleScreen from "./capsule";

const StackNavigator =createStackNavigator({
    Home:HomeScreen,
    Capsule:CapsuleScreen
});

export default createAppContainer(StackNavigator);