import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import { TextInputLayout } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Coviddescription extends React.Component {
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
                    backgroundColor: '#BEBEBE',
                }}>
                </View>

                {/* statusbar should apply here*/}
                <Text style={{ fontSize: 27, margin: 20, fontWeight: 'bold' }}>
                    Description
                </Text>
                <View>

                </View>

                <View>
                    <TextInput style={{
                        margin: 20,
                        paddingTop:2,
                        paddingLeft:10,
                        paddingBottom: 130,
                        borderColor: '#BEBEBE',
                        borderWidth: 1,
                        borderRadius: 3}}
                        placeholder='Document Notes'
                    />
                </View>





                <View style={{ marginTop: 250 }}>
                    <View style={styles.save2Text}>
                        <TouchableOpacity style={{ flexDirection: 'row', }}
                            onPress={() => this.props.navigation.navigate("Coviddocuments")}
                        >

                            <Text style={styles.addtext}>
                                Next
                 </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({

  
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
        borderRadius: 5,
        height: 50
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