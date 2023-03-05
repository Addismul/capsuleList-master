import React, { useEffect, useState } from "react";
import { Text,View } from "react-native";

const CapsuleScreen = props =>{
   const id = props.navigation.getParam('id');
   const [isLoading,setLoading] = useState(false);
   const [capsule,setCapsule] =useState([]);
   const [capsuleDetails, setCapsuleDetails] =useState([]);

   getCapsule = () =>{
    fetch('https://api.spacexdata.com/v5/launches/' + id)
    .then((response) => response.json())
    .then((json) =>{
        setCapsule(json);
        console.log(json);
        setCapsuleSuccess(json.success);
        setCapsuleFailures(json.failures);
        setCapsuleDetails(json.details);
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
}

useEffect(() => {
    console.log(id)
    setLoading(true);
    getCapsule();
}, []);

    return (
        <View style={{flex:1,justifyContent:'center',alignContent:'center'}}> 
            {isLoading ? <Text>Loading ...</Text>:
            (
                <View>
                    <Text style={{alignItems:'center',fontSize:25}}>{capsule.name}</Text>
                    <Text>Details: {capsule.details}</Text>

                </View>    
            )
            }
            </View>
    );
};

CapsuleScreen.navigationOptions = {
    title: 'Capsule Details'
};
export default CapsuleScreen;