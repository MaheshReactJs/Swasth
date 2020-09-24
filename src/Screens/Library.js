import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { TextInputLayout } from 'react-native';
import AddToLabs from './AddToLabs';


export default class Library extends React.Component {
    render() {
        return (
            <View >

                <View style={{ flexDirection: 'row', backgroundColor: '#062EF8', }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/arrow1.png')} style={styles.backward} />
                    </TouchableOpacity>
                    <Text style={styles.labstext}>
                        Library
                 </Text>
                 <TouchableOpacity>
                        <Image source={require('../../assets/cam.png')} style={styles.cam} />
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={{ paddingBottom: 100}}>
                    <View style={{ padding: 10}}>
                        {/* <Text style={{ paddingBottom: 10 }} >07/13/2020</Txt> */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
                            <Image source={require('../../assets/image1.png')} style={{ borderRadius: 5, height: 100, width: 100, opacity:0.5, backgroundColor:'#000000'}} />
                            <Image source={require('../../assets/select.png')} style={{height: 20, width:25, position:'absolute',top:35, left:40}} />
                            <Image source={require('../../assets/im2.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            {/* <Image source={require('../../assets/im3.png')} style={{ borderRadius: 5, height: 100, width: 100  }}  blurRadius={1} /> */}
                            <Image source={require('../../assets/im3.png')} style={{ borderRadius: 5, height: 100, width: 100, opacity:0.5, backgroundColor:'#000000'}}/>
                            <Image source={require('../../assets/select.png')} style={{height: 20, width:25, position:'absolute',top:35, left:280}} />

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between',  paddingBottom: 10 }}>
                            <Image source={require('../../assets/im2.png')} style={{ borderRadius: 5, height: 100, width: 100}} />
                            <Image source={require('../../assets/im3.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/image1.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
                            <Image source={require('../../assets/image1.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/im2.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/im3.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/play.png')} style={{height: 10, width: 10, position:'absolute',padding:15, left:270,top:30}} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,  paddingBottom: 10}}>
                            <Image source={require('../../assets/im2.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/play.png')} style={{height: 20, width: 20, position:'absolute',padding:15, left:30,top:30}} />
                            <Image source={require('../../assets/im3.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/image1.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
                            <Image source={require('../../assets/image1.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/im2.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/im3.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/play.png')} style={{height: 20, width: 20, position:'absolute',padding:15, left:270,top:30}} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between',  paddingBottom: 10 }}>
                            <Image source={require('../../assets/image1.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/play.png')} style={{height: 20, width: 20, position:'absolute',padding:15, left:30,top:30}} />
                            <Image source={require('../../assets/im3.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/im2.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between',  paddingBottom: 10 }}>
                            <Image source={require('../../assets/im2.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/play.png')} style={{height: 20, width: 20, position:'absolute',padding:15, left:30,top:30}} />
                            <Image source={require('../../assets/im3.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/image1.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                        </View>

                    </View>
                    </ScrollView>
                <View style={{ backgroundColor: '#062EF8', position:'absolute',top:590, width:500}}>
                    <TouchableOpacity style={{ flexDirection: 'row'}}
                    onPress = {() => this.props.navigation.navigate("Lab")}
                    >
                        {/* <Image source={require('../../assets/add.png')} style={{ left: 135, padding: 10, height: 10, width: 30, marginTop: 20 }} /> */}
                        <Text style={styles.continuetext}>
                            Continue
                 </Text>
                    </TouchableOpacity>
                </View>
               
            </View>

        );
    }
}

const styles = StyleSheet.create({

    labstext:
    {
        fontSize: 23,
        backgroundColor: '#062EF8',
        textAlign: 'center',
        color: '#FFFFFF',
        height: 58,
        padding: 12,
        marginLeft: 105,
       
    },
    continuetext:
    {
        fontSize: 20,
        backgroundColor: '#062EF8',
        alignItems:'center',
        color: '#FFFFFF',
        height: 58,
        padding: 15,
        marginLeft: 120,
        // marginTop:30

    },
    backward:
    {
        tintColor: '#FFFFFF',
        height: 1,
        width: 1,
        padding: 10,
        marginTop: 18,
        marginLeft: 10
    }
    ,
    cam:
    {
        tintColor: '#FFFFFF',
        height: 25,
        width: 25,
        padding: 10,
        marginTop: 18,
        marginLeft:95
    }

});