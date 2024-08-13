import React from "react";
import { View, Text, Image, ScrollView } from 'react-native'

const ThirdScreen = () => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row-reverse',
            backgroundColor: 'mistyrose'
        }}>

            {/* pikachu */}
            <View style={{
                backgroundColor: 'red', flex: 1,}} >
                <Text style={{color: 'white'}}>
                    Pikachu
                </Text>
            </View>

            <View style={{
                backgroundColor: 'orange', flex: 2,}}>
                <Text>
                    Flareon
                </Text>
            </View>

            
            <View style={{
                backgroundColor: 'yellow', flex: 3,}}>
                <Text>
                    Rapidash
                </Text>
            </View>
        </View>
        
    )
}

const AddImage = () => {
    return (
        
        <ScrollView style={{borderColor: 'red'}}>
        <View style={{alignItems: 'center',}}>

            <View style={{
                margin: 8,
                padding: 8,
                
            }}>
                <Image
                style={{
                    
                    width: 150,
                    height: 150,
                    borderRadius: 500,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'aliceblue'
                }} source={{uri: 'https://i.ibb.co/GQBLC7r/bulbasaur.png'}}/>
            </View>

            <View style={{
                margin: 8,
                padding: 8,
                
            }}>
                <Image
                style={{
                    
                    width: 150,
                    height: 150,
                    borderRadius: 500,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'aliceblue'
                }} source={require('../../assets/images/pikachu.png')}/>
            </View>
            
            <View style={{
                margin: 8,
                padding: 8,
                
            }}>
                <Image
                style={{
                    
                    width: 150,
                    height: 150,
                    borderRadius: 500,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'aliceblue'
                }} source={require('../../assets/images/flareon.png')}/>
            </View>

            <View style={{
                margin: 8,
                padding: 8,
                
            }}>
                <Image
                style={{
                    
                    width: 150,
                    height: 150,
                    borderRadius: 500,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'aliceblue'
                }} source={require('../../assets/images/rapidash.png')}/>
            </View>

            <View style={{
                margin: 8,
                padding: 8,
                
            }}>
                <Image
                style={{
                    
                    width: 150,
                    height: 150,
                    borderRadius: 500,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'aliceblue'
                }} source={{uri:'//i.ibb.co/bLz74hj/psyduck.png'}}/>
            </View>

            <View style={{
                margin: 8,
                padding: 8,
                
            }}>
                <Image
                style={{
                    
                    width: 150,
                    height: 150,
                    borderRadius: 500,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'aliceblue'
                }} source={{uri: 'https://i.ibb.co/GQBLC7r/bulbasaur.png'}}/>
            </View>

        </View>
        </ScrollView>
    )
}

const HorizontalImage = () => {
    return( 
        <View style={{
            flexDirection: 'row',
        }}>
            <ScrollView horizontal={true}>
                <View style={{
                    margin: 8,
                    padding: 8,
                }}>
                    <Image style={{
                        width: 150,
                        height: 150,
                        borderWidth: 1,
                        borderRadius: 100,
                        borderColor: 'green',
                        backgroundColor: 'aliceblue',
                    }}
                    source={require('../../assets/images/pikachu.png')}/>
                </View>
                <View style={{
                    margin: 8,
                    padding: 8,
                }}>
                    <Image style={{
                        width: 150,
                        height: 150,
                        borderWidth: 1,
                        borderRadius: 100,
                        borderColor: 'green',
                        backgroundColor: 'aliceblue',
                    }}
                    source={require('../../assets/images/flareon.png')}/>
                </View>
                <View style={{
                    margin: 8,
                    padding: 8,
                }}>
                    <Image style={{
                        width: 150,
                        height: 150,
                        borderWidth: 1,
                        borderRadius: 100,
                        borderColor: 'green',
                        backgroundColor: 'aliceblue',
                    }}
                    source={require('../../assets/images/rapidash.png')}/>
                </View>
                <View style={{
                    margin: 8,
                    padding: 8,
                }}>
                    <Image style={{
                        width: 150,
                        height: 150,
                        borderWidth: 1,
                        borderRadius: 100,
                        borderColor: 'green',
                        backgroundColor: 'aliceblue',
                    }}
                    source={{uri:'https://www.pngkey.com/png/detail/230-2306466_psyduck.png'}}/>
                </View>
                <View style={{
                    margin: 8,
                    padding: 8,
                }}>
                    <Image style={{
                        width: 150,
                        height: 150,
                        borderWidth: 1,
                        borderRadius: 100,
                        borderColor: 'green',
                        backgroundColor: 'aliceblue',
                    }}
                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_J3u3QzvU52rLYkNnSJjFhdvKysA7pJsYQ&s'}}/>
                </View>
            </ScrollView>
        </View>
    )
}

const ChallengeScreen = () => {
    return (
        <View>
            <View style={{alignItems: 'center', margin: 8,}}>
                <Text>Pokemon's Profile</Text>
            </View>

            <ScrollView>
                
                {/* PIKACHU */}
                <View style={{
                    margin: 8,
                    padding: 8,
                    flexDirection: 'row',
                }}>
                    <ScrollView horizontal={true}>
                        <Image style={{
                            width: 150,
                            height: 150,
                        }}
                        source={require('../../assets/images/pikachu.png')}/>

                        <View style={{
                            marginLeft: 5,
                            justifyContent: 'center',
                        }}>
                            <Text>
                                Name: Pikachu
                                {'/n'}
                                Category: Mouse
                                {'/n'}
                                Abilities: Static
                                {'/n'}
                                Weakness: Ground
                            </Text>

                        </View>
                    </ScrollView>
                </View>

                {/* FLAREON */}
                <View style={{
                    margin: 8,
                    padding: 8,
                    flexDirection: 'row',
                }}>
                    <ScrollView horizontal={true}>
                        <Image style={{
                            width: 150,
                            height: 150,
                        }}
                        source={require('../../assets/images/flareon.png')}/>

                        <View style={{
                            marginLeft: 5,
                            justifyContent: 'center',
                        }}>
                            <Text>
                                Name: Flareon
                                {'/n'}
                                Category: Flame
                                {'/n'}
                                Abilities: Flash Fire
                                {'/n'}
                                Weaknesses: Water, Ground, Rock
                            </Text>

                        </View>
                    </ScrollView>
                </View>

                {/* RAPIDASH */}
                <View style={{
                    margin: 8,
                    padding: 8,
                    flexDirection: 'row',
                }}>
                    <ScrollView horizontal={true}>
                        <Image style={{
                            width: 150,
                            height: 150,
                        }}
                        source={require('../../assets/images/rapidash.png')}/>

                        <View style={{
                            marginLeft: 5,
                            justifyContent: 'center',
                        }}>
                            <Text>
                                Name: Rapidash
                                {'/n'}
                                Category: Fire Horse
                                {'/n'}
                                Abilities: Run Away, Flash Fire
                                {'/n'}
                                Weaknesses: Water, Ground, Rock
                            </Text>

                        </View>
                    </ScrollView>
                </View>

                {/* psyduck  */}
                <View style={{
                    margin: 8,
                    padding: 8,
                    flexDirection: 'row',
                }}>
                    <ScrollView horizontal={true}>
                        <Image style={{
                            width: 150,
                            height: 150,
                        }}
                        source={{uri: 'https://www.pngkey.com/png/detail/230-2306466_psyduck.png'}}/>

                        <View style={{
                            marginLeft: 5,
                            justifyContent: 'center',
                        }}>
                            <Text>
                                Name: Psyduck
                                {'/n'}
                                Category: Duck
                                {'/n'}
                                Abilities: Dump, Cloud Nine
                                {'/n'}
                                Weaknesses: Grass, Electric
                            </Text>

                        </View>
                    </ScrollView>
                </View>

                {/* bulbasaur  */}
                <View style={{
                    margin: 8,
                    padding: 8,
                    flexDirection: 'row',
                }}>
                    <ScrollView horizontal={true}>
                        <Image style={{
                            width: 150,
                            height: 150,
                        }}
                        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_J3u3QzvU52rLYkNnSJjFhdvKysA7pJsYQ&s'}}/>

                        <View style={{
                            marginLeft: 5,
                            justifyContent: 'center',
                        }}>
                            <Text>
                                Name: Bulbasaur
                                {`\n`}
                                Category: Seed
                                {`\n`}
                                Abilities: Overgrow
                                {`\n`}
                                Weaknesses: Fire, Psychic, Flying, Ice
                            </Text>

                        </View>
                    </ScrollView>
                </View>

            </ScrollView>
        </View>
        
    )
}

export default ChallengeScreen;