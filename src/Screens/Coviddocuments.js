import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import { TextInputLayout } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Coviddocuments extends React.Component {
    render() {
        return (
            <View >

                <View style={{ flexDirection: 'row', backgroundColor: '#062EF8', }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/arrow1.png')} style={styles.backward} />
                    </TouchableOpacity>
                    <Text style={styles.labstext}>
                        COVID-19
                 </Text>
                </View>

                <View style={{
                    marginTop: 30,
                    marginRight: 20,
                    marginLeft: 20,
                    borderRadius: 5,
                    height: 5,
                    backgroundColor: '#062EF8',
                }}>
                </View>
                <View>
                    <Text style={{ margin: 20, fontWeight: 'bold' }}>
                        Documents
                   </Text>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 60 }}>
                        <Image source={require('../../assets/image1.png')} style={{ borderRadius: 5, height: 65, width: 65, }} />
                        <Image source={require('../../assets/im2.png')} style={{ borderRadius: 5, height: 65, width: 65, }} />
                        <Image source={require('../../assets/im3.png')} style={{ borderRadius: 5, height: 65, width: 65, }} />
                        <Image source={require('../../assets/im3.png')} style={{ borderRadius: 5, height: 65, width: 65, }} />
                        {/* <Image source={require('../../assets/play.png')} style={{height: 20, width: 20, position:'absolute',padding:20, left:270,top:30}} /> */}
                    </View>
                    
                    <View style={{marginRight:10, paddingTop:30, paddingBottom:20}}>
                    <Text>
                        Did you test positive for COVID-19/Corona Virus? 
                    </Text>
                    <Text style={{ fontWeight:'bold', paddingTop:10}}>
                        No
                    </Text>
                    </View>

                    <View style={{marginRight:10, paddingTop:10, paddingBottom:20}}>
                    <Text>
                        Did you test positive for COVID-19/Corona Virus antibodies?   
                    </Text>
                    <Text style={{ fontWeight:'bold', paddingTop:10}}>
                        Yes
                    </Text>
                    </View>

                    <View style={{marginRight:10, paddingTop:10, paddingBottom:20}}>
                    <Text>
                        Would you be willing to volounteer to donate plasma to save a life?
                    </Text>
                    <Text style={{ fontWeight:'bold', paddingTop:10}}>
                        Yes
                    </Text>
                    </View>


                    <View style={{marginRight:10, paddingTop:10, paddingBottom:20}}>
                    <Text>
                      Description
                    </Text>
                    <Text style={{ fontWeight:'bold', paddingTop:10}}>
                       Lorem Ipsum Press(LIP) is dedicated to open Access Academic Publishing.
                    </Text>
                    </View>
                </View>



                <View style={{}}>
                    <View style={styles.save2Text}>
                        <TouchableOpacity style={{ flexDirection: 'row', }}
                        onPress = {() => this.props.navigation.navigate("UpdateDocs")}
                        >
                            <Text style={styles.addtext}>
                                Save
                 </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({

    labs:
    {
        fontSize: 25,
        backgroundColor: '#062EF8',
        textAlign: 'center',
        color: '#FFFFFF',
        height: 58,
        padding: 12
    },
    backward:
    {
        tintColor: '#FFFFFF',
        height: 15,
        width: 12,
        padding: 8,
        marginTop: 18,
        marginLeft: 13
    },
    yestext:
    {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF',
        height: 58,
        paddingTop: 15,
        marginLeft: 140,
        alignItems: "center",
        justifyContent: "center",


    },
    newText:
    {
        marginTop: 30,
        backgroundColor: '#062EF8',
        textAlign: "center",
        justifyContent: "center",
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 7,
        height: 60
    },
    saveText:
    {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        textAlign: "center",
        justifyContent: "center",
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 5,
        height: 50,
        borderWidth: 1,
        borderColor: '#BEBEBE'
    },
    save2Text:
    {
        backgroundColor: '#062EF8',
        textAlign: "center",
        justifyContent: "center",
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 7,
        height: 50,
        marginTop:20
    },
    addtext:
    {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF',
        height: 58,
        paddingTop: 16,
        marginLeft: 140,
        alignItems: "center",
        justifyContent: "center",


    },

    YNText:
    {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        height: 58,
        paddingTop: 12,
        marginLeft: 140,
        alignItems: "center",
        justifyContent: "center",



    },
    labstext:
    {
        fontSize: 20,
        backgroundColor: '#062EF8',
        textAlign: 'center',
        color: '#FFFFFF',
        height: 58,
        padding: 16,
        marginLeft: 90,
        textAlign: 'center'
    },
});