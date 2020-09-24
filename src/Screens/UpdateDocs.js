import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { TextInputLayout } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class UpdateDocs extends React.Component {
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', backgroundColor: '#062EF8', }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/arrow1.png')} style={styles.backward} />
                    </TouchableOpacity>
                    <Text style={styles.labstext}>
                        COVID-19
                 </Text>
                </View>
                <View style={{ top: 150, alignItems: 'center'}}>
                    <Image source={require('../../assets/others.png')} style={{ height: 90, width: 75, borderRadius: 10 }} />
                    <Text style={{ textAlign: 'center', fontSize: 20, margin: 30 }}>You have not added any documents yet</Text>
                </View>


                <View style={{ marginTop: 300 }}>
                    <View style={styles.save2Text}>
                        <TouchableOpacity style={{ flexDirection: 'row', }}>
                            <Text style={styles.add2text}>
                                Update your COVID-19 questionnaire
                             </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ backgroundColor: '#062EF8', position: 'absolute', top: 629, width: 500 }}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/add2.png')} style={{ left: 135, padding: 8, height: 10, width: 25, marginTop: 20 }} />
                        <Text style={styles.addtext}>
                            Add
                 </Text>
                    </TouchableOpacity>
                </View>

            </View>
            // </View>
        );
    }
}




const styles = StyleSheet.create({
    Accept: {
        //flexDirection:'row',
        borderColor: '#80232A',
        backgroundColor: '#062EF8',
        borderRadius: 5,
        width: 150,
        height: 45,
        marginBottom: 10,

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
    save2Text:
    {
        backgroundColor: '#FFA500',
        textAlign: "center",
        justifyContent: "center",
        marginRight: 15,
        marginLeft: 15,
        borderRadius: 4,
        height: 50
    },
    add2text:
    {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF',
        height: 58,
        paddingTop: 20,
        margin: 35,
        alignItems: "center",
        justifyContent: "center",
    },

    labs:
    {
        fontSize: 25,
        backgroundColor: '#062EF8',
        textAlign: 'center',
        color: '#FFFFFF',
        height: 58,
        padding: 12
    },

    addtext:
    {
        fontSize: 18,
        backgroundColor: '#062EF8',
        marginLeft: 130,
        color: '#FFFFFF',
        height: 58,
        padding: 15,
        paddingTop:17

    },
    buttons:
    {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
        top: 340
    }
});