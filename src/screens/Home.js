import { View, Text, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
//import Carousel from 'react-native-snap-carousel'
import BannerSlider from '../components/BannerSlider'
import {sliderData, freeGames, paidGames} from '../model/data'
import {windowWidth} from '../utils/Dimensions'
import CustomSwitch from '../components/CustomSwitch'
import ListItem from '../components/ListItem'
import TabNavigator from '../navigation/TabNavigator'

const Home = (props) => {

    const [gamesTab, setGamesTab] = useState(1);

    const renderBanner =({item,index}) => {
        return <BannerSlider data={item}/>
    };

    const onSelectSwitch = value => {
        setGamesTab(value);
      };

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#FFF',
        }}>
            <ScrollView style={{
                padding: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>
                        Hello User
                    </Text>
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                    <ImageBackground source={require('../assets/images/user-profile.jpg')}
                        style={{
                            width: 35,
                            height: 35,
                        }}
                        imageStyle={{
                            borderRadius: 25,
                        }}
                    />
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: 'row',
                    borderColor: '#C6C6C6',
                    borderRadius: 8,
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                }}>
                    <Feather name='search' size={20} color='#C6C6C6' style={{
                        marginRight: 5,
                    }} />
                    <TextInput placeholder='Search' />
                </View>

                <View style={{
                    flexDirection:'row',
                    marginVertical:15,
                    justifyContent:'space-between',
                }}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'300',
                    }}>
                        Upcoming Games
                        </Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{
                            color:'#0aada8',
                            fontSize:18,
                        }}>
                            See all
                            </Text>
                    </TouchableOpacity>
                </View>

                <ImageBackground source={require('../assets/images/user-profile.jpg')}
                        style={{
                            width: 300,
                            height: 150,
                        }}
                        imageStyle={{
                            borderRadius: 10,
                        }}
                    />
                {/* <Carousel
                ref={(c) => { this._carousel = c; }}
                data={sliderData}
                renderItem={renderBanner}
                sliderWidth={windowWidth - 40}
                itemWidth={300}
                loop={true}
                /> */}

                <View>
                    <CustomSwitch
                    selectionMode={1}
                    option1='Free to play'
                    option2='Paid games'
                    onSelectSwitch={onSelectSwitch}
                    />
                </View>

                {gamesTab == 1 && freeGames.map(item => (<ListItem 
                key={item.id}
                photo={item.poster}
                title={item.title}
                subTitle={item.subtitle}
                isFree={item.isFree}
                //price={item.price}
                />))}

                {gamesTab == 2 && paidGames.map(item => (<ListItem 
                key={item.id}
                photo={item.poster}
                title={item.title}
                subTitle={item.subtitle}
                isFree={item.isFree}
                price={item.price}
                />))}

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home