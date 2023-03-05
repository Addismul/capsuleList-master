import React, { useEffect, useState } from 'react';
import { View, Text, FlatList,TouchableOpacity } from 'react-native';
import Capsule from './Capsule';

const Capsules = props  => {
    const [isLoading, setLoading] = useState(false);
    const [capsules, setCapsules] = useState([]);

    getCapsules = () =>{
        fetch('https://api.spacexdata.com/v5/launches/')
        .then((response) => response.json())
        .then((json) => setCapsules(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        setLoading(true);
        getCapsules();

    },[]);

    return(
        <View style={{padding:20}}> 
        {isLoading ? <Text>Loading...</Text>:
        (
            <FlatList
            data={capsules}
            keyExtractor={({id}) => 
            id.toString()}
            renderItem={({item}) =>
            <TouchableOpacity onPress={() => props.navigation.navigate('Capsule',{id:item.id})}>
                <View>
                    <Capsule capsule={item} />
                </View>
            </TouchableOpacity>
        }
            />
        )}
        </View>
    );
};

export default Capsules;