import React from "react";
import { Text,ScrollView } from "react-native";

const Capsule = props =>{
    return (
        <ScrollView>
            <Text style={{padding:10}}>
                {props.capsule.name}
            </Text>
        </ScrollView>
    );
};

export default Capsule;