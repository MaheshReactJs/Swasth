import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { TextInputLayout } from 'react-native';


export default class AddToLabs extends React.Component {
    render() {
        return (
            <View>
                
                 
                {/* <View style={{ padding: 10, backgroundColor: 'lightgray', paddingBottom: 250 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                        Previous page
                      </Text>
                </View> */}
                <View style={{ padding: 12, marginTop: 370  , backgroundColor: '#FFFFFF', paddingBottom: 50, borderRadius: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, paddingBottom:30, padding:10}}>
                        Add To Labs
                      </Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginTop:5,paddingLeft:10}}>
                        <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate("Library")}
                        >
                        <Image source={require('../../assets/camera.png')} style={{height:32, width:35}} />
                        <View style={{top:10}}>
                            <Text style={{fontSize:18, right:12}}>Camera</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate("Library")}
                        >
                        <Image source={require('../../assets/video.png')}  style={{height:32, width:33,marginTop:2}} />
                        <View style={{top:10}}>
                            <Text style={{fontSize:18, right:5}}>Video</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row' , justifyContent: 'space-around', marginTop:40,paddingLeft:10}}>
                    <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate("Library")}>
                        <Image source={require('../../assets/voice.png')} style={{height:35, width:26}} />
                        <View style={{top:8}}>
                            <Text style={{fontSize:18, right:7}}>Voice</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate("Library")}>
                        <Image source={require('../../assets/others.png')}  style={{height:35, width:35}} />
                        <View style={{top:10}}>
                            <Text style={{fontSize:18,right:3}}>Other</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

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
        marginLeft: 120,
        textAlign: 'center'
    },

});