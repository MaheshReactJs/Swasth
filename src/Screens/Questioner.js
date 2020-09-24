import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { TextInputLayout } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Questioner extends React.Component {
    render() {
        return (
            <View >

                <View style={{ flexDirection: 'row', backgroundColor: '#062EF8', }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/arrow1.png')} style={styles.backward} />
                    </TouchableOpacity>
                    <Text style={styles.labstext}>
                        Labs
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
                    Are these documents related to COVID-19/Corona Virus?
                </Text>

                <View>
                    <View style={styles.saveText}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={styles.YNText1}>
                                YES
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    <View style={styles.saveText}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={styles.YNText2}>
                                NO
                 </Text>
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={{marginTop:220}}>
                    <View style={styles.save2Text}>
                        <TouchableOpacity style={{ flexDirection: 'row', }}
                        onPress = {() => this.props.navigation.navigate("Updatequestioner")}
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
        marginLeft: 10
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
        marginTop: 30,
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
        height: 52,
        paddingTop: 12,
        marginLeft: 140,
        alignItems: "center",
        justifyContent: "center",


    },

    YNText1:
    {
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
        height: 50,
        paddingTop: 15,
        marginLeft: 140,
        alignItems: "center",
        justifyContent: "center",



    },
    YNText2:
    {
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
        height: 50,
        paddingTop: 16,
        marginLeft: 143,
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
        padding: 12,
        marginLeft: 110,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
    },
});