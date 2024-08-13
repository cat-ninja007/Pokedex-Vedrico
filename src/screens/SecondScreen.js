import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { Button } from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const SecondScreen = () => {
    const openAlert = (game) => {
        if(game === 'mobileLegends') {
            alert('You Chose Mobile Legends!');
        } else if(game === 'pubg') {
            alert('Youc Choose PUBG!')
        }
        
    };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'lavender',
        }}>

            {/* mobile legends title */}
            <View style={{
                backgroundColor: 'skyblue',
                borderWidth: 2,
                borderColor: 'red',
                borderStyle: 'dashed',
                borderRadius: 13,
                padding: 15,
                marginBottom: 20}}>
                <Text style={{
                    textTransform: 'uppercase',
                    textDecorationLine: 'underline',
                    color: 'black'
                }}>
                    Mobile Legends
                </Text>
            </View>

            {/* mobile legends description */}
            <View style={{
                backgroundColor: 'yellow',
                borderWidth: 2,
                margin: 10,

            }}>
                <Text>
                    <Text style={{fontWeight: 'bold'}}>Mobile Legends</Text> is a multiplayer online battle arena (MOBA) game. The<Text style={{color: 'red'}}> two 
                    opposing teams fight</Text> to reach and destroy the enemy's base while defending
                    their own base for control of a path.
                </Text>
            </View>

            {/* mobile legends touch */}
            <View>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    padding: 8,
                    margin: 8,
                    borderRadius: 50,
                    borderWidth: 2,
                }} onPress={ () => openAlert('mobileLegends')}
                >
                    <Text style = {{color: 'lightcoral'}}>
                        Mobile Legends Button
                    </Text>
                </TouchableOpacity>
            </View>

            {/* VS */}
            <View>
                <Text style={{
                    fontWeight: '900',
                    textAlign: 'center',
                    marginBottom: 10
                }}>
                    VS
                </Text>
            </View>

            {/* PUBG title */}
            <View style={{
                    backgroundColor: 'cornflowerblue',
                    borderWidth: 2,
                    borderColor: 'red',
                    borderStyle: 'dotted',
                    borderRadius: 13,
                    padding: 15}}>
                <Text style={{
                    color: 'white',
                    textDecorationLine: 'underline',
                }}>
                    PUBG
                </Text>
            </View>

            {/* PUBG description */}
            <View style={{
                backgroundColor: 'yellow',
                borderWidth: 2,
                margin: 10,

            }}>
                <Text>
                    <Text style={{fontWeight: 'bold'}}>PlayerUnknown's Battlegrounds</Text>, better known as PUBG, is a multiplayer battle royale
                    game in which <Text style={{color: 'green'}}>players drop onto an island</Text> and fight to <Text style={{color: 'blue'}}>be the last one left standing</Text>.
                </Text>
            </View>

            {/* PUBG touch */}
            <View>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    padding: 8,
                    margin: 8,
                    borderRadius: 50,
                    borderWidth: 2,
                }} onPress={ () => openAlert('pubg')}
                >
                    <Text style = {{color: 'lightcoral'}}>
                        PUBG Button
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default SecondScreen