import React from 'react';
import { View, Text, Button } from 'react-native';

const FirstScreen = () => {
    const openAlert = () => {
        alert('You clicked the button');
    };

    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text style={{
                margin: 16
            }}>
                Hello <Text style={{color:'red'}}> World!</Text>
            </Text>

            <Button title="This is button"
            onPress={openAlert}/>
        </View>
    )
}

const ChallengeScreen = () => {
    const showAlert = () => {
        alert('You Are Awesome!!!');
    }

    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text style={{color:'green', margin: 16}}>Let's Learn React Native Framework</Text>
            <Text style={{color:'black', margin: 16}}>My Name is Vedricco</Text>
            <Text style={{color:'black', margin: 16}}>Now I'm Learning About <Text style={{color:'blue'}}>React Native Components</Text> To Build The User Interface For Android Apps.</Text>
            <Text style={{color:'red', margin: 16}}>I Love Coding</Text>

            <Button title="Click Me"
            onPress={showAlert}/>
        </View>
    )
}

export default ChallengeScreen;
