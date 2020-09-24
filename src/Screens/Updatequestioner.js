import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { TextInputLayout } from 'react-native';


export default class Updatequestioner extends React.Component {
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
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                    <View style={{ padding: 17 }}>
                        <Text style={{ paddingBottom: 10 }} >07/18/2020</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
                            <Image source={require('../../assets/image1.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/im2.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/im3.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/play.png')} style={{ height: 20, width: 20, position: 'absolute', padding: 20, left: 270, top: 30 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={require('../../assets/im2.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/play.png')} style={{ height: 20, width: 20, position: 'absolute', padding: 20, left: 30, top: 30 }} />
                            <Image source={require('../../assets/im3.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                            <Image source={require('../../assets/image1.png')} style={{ borderRadius: 5, height: 100, width: 100 }} />
                        </View>
                    </View>


                    <View style={{ marginTop: 230 }}>
                        <View style={styles.save2Text}>
                            <TouchableOpacity style={{ flexDirection: 'row', }}>
                                <Text style={styles.add2text}>
                                Update your COVID-19 questionnaire
                             </Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </ScrollView>
                <View style={{ backgroundColor: '#062EF8', position: 'absolute', top: 629, width: 500 }}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}
                    onPress = {() => this.props.navigation.navigate("Covid")}>
                        <Image source={require('../../assets/add2.png')} style={{ left: 135, padding: 10, height: 10, width: 30, marginTop: 20 }} />
                        <Text style={styles.addtext}>
                            Add
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
        fontSize: 20,
        backgroundColor: '#062EF8',
        textAlign: 'center',
        color: '#FFFFFF',
        height: 58,
        padding: 16,
        marginLeft: 100,
        textAlign: 'center'
    },
    addtext:
    {
        fontSize: 23,
        backgroundColor: '#062EF8',
        marginLeft: 130,
        color: '#FFFFFF',
        height: 58,
        padding: 15,

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
    save2Text:
    {
        backgroundColor: '#FFA500',
        textAlign: "center",
        justifyContent: "center",
        marginRight: 15,
        marginLeft: 15,
        borderRadius: 7,
        height: 50
    },
    addtext:
    {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF',
        height: 58,
        paddingTop: 17,
        marginLeft: 140,
        alignItems: "center",
        justifyContent: "center",


    },
    add2text:
    {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF',
        height: 58,
        paddingTop:20,
       margin:35,
     
        alignItems: "center",
        justifyContent: "center",


    },


});