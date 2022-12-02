import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GamingImg from '../assets/images/gaming1.png'

const OnboardingScreen = (navigation) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
        }}>
            <View style={{
                marginTop:30
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#20315f',
                }}>
                    GAME ONN
                </Text>
            </View>
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            }}>
             {/* <GamingImg size={300}/> */}
             <ImageBackground source={require('../assets/images/gaming1.png')}
                        style={{
                            width: 300,
                            height: 300,
                            transform:[{rotate: '-15deg'}],
                        }}
                        imageStyle={{
                            borderRadius: 25,
                        }}
                        />
             </View>
            <TouchableOpacity
            //onPress={console.log()}
            onPress={() => navigation.navigate('Home')} 
            style={{
                backgroundColor: '#AD40AF',
                padding: 20,
                width: '90%',
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom:50
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#FFF',
                    //fontFamily:'Roboto-MediumItalic',
                }}>
                    Let's Begin
                </Text>
                <MaterialIcons name='arrow-forward-ios' size={22} color='#FFF' />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default OnboardingScreen