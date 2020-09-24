import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { TextInputLayout } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Detailinfo extends React.Component {
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
                    backgroundColor: '#BEBEBE'
                }}>
                </View>

                {/* statusbar should apply here*/}

                <Text style={{ fontSize: 27, margin: 25, fontWeight: 'bold' }}>
                    Would you be willing share your blood plasma for antibodies to help save lives once you recover from COVID-19/Corona Virus?
                </Text>

                <View>
                    <View style={styles.saveText}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={styles.YNText}>
                                YES
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={styles.saveText}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}
                       
                        >
                            <Text style={styles.YNText}>
                                NO
                 </Text>
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={{marginTop:150}}>
                    <View style={styles.save2Text}>
                        <TouchableOpacity style={{ flexDirection: 'row', }}
                         onPress = {() => this.props.navigation.navigate("Coviddescription")}
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
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
        height: 58,
        paddingTop: 16,
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