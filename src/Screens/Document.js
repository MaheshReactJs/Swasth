import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { TextInputLayout } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Documents extends React.Component {
    render() {
        return (
            <View>

                <View style={{}}>
                    <Text style={styles.labs}>
                        Labs
                 </Text>

                    <View style={{ top: 150, alignItems: 'center' }}>
                        <Image source={require('../../assets/Folder.png')} style={{ height: 110, width: 140, borderRadius:10 }} />
                        <Text style={{ textAlign: 'center', fontSize: 20, margin: 30 }}>Documents Successfully Uploaded</Text>
                    </View>

                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.Accept}
                        onPress = {() => this.props.navigation.navigate("Labsgallery")} >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF', padding: 10 }}>
                                View Notes
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Accept}
                        onPress = {() => this.props.navigation.navigate("Labsgallery")}
                        >
                            <Text style={{ fontSize: 16, color: '#FFFFFF', padding: 10, textAlign: 'center', }}>
                                Upload Another
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
    labs:
    {
        fontSize: 25,
        backgroundColor: '#062EF8',
        textAlign: 'center',
        color: '#FFFFFF',
        height: 58,
        padding: 12
    },
    buttons:
    {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
        top: 300
    }
});