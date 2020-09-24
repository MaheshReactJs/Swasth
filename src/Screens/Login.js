import React from 'react';
import {StyleSheet,Text, View,Image,TextInput, ImageBackground, Linking} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import styles from '../Styles/LoginStyle'

// import PhoneInput from 'react-native-phone-input'

export default class Login extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
        <View>
            <View style= {styles.container}>
                    
                    <Image source={require("../../assets/Logo.png")}  />
             </View>
                    <Text style={styles.text}>
                        Phone Number
                    </Text>
                <View style = {styles.row} >
                    <View style = {styles.inputWrap}>
                     <TextInput

                    style = {styles.num}
                    placeholder = "+91"
                    placeholderTextColor = "#4D4D4D"
                    />
                    </View>
                   <View style = {styles.inputWrap}>
                   <TextInput
                        style = {styles.texts}
                        placeholder = "XXXXXXXXXX"
                        placeholderTextColor = "#4D4D4D"
                        keyboardType = "number-pad"
                        />
                   </View>
         </View>      

            <View>
                <TouchableOpacity onPress = {()=>this.props.navigation.navigate("Otps")}>
                        <Text style = {styles.textsss}>
                            Continue
                        </Text>
                       <View style = {styles.circle}>
                        <Image  source = {require('../../assets/arr.png')} style = {styles.back}/>
                        </View>
                       
                </TouchableOpacity >
                
                {/* <TouchableOpacity>
                    <Image  source = {require('../../assets/arr.png')}/>
                </TouchableOpacity> */}
            </View>
            <Text style = {styles.or}>or</Text>
            <TouchableOpacity onPress={() => Linking.openURL('http://Gmail.com')}>
                    <Text style  = {styles.google}>
                       
                    Sign in with Google
                    </Text>
                    <Image source = {require('../../assets/google.png')} style = {styles.img} />
                 </TouchableOpacity>
                 
            </View>
                    
        )
    }
}

const styles = StyleSheet.create({
    container:
    {
        marginTop:90,
        //flex:1,
        //height:"100%",
        //backgroundColor:'aqua'
        // justifyContent: 'center',
        alignItems: 'center',
        justifyContent:"center",
        marginBottom:150,
       // marginLeft:30,
       // paddingLeft:40

    },
    // logo:{
    //     backgroundColor:"blue",
    //     flexDirection:"row",
    //     //marginTop:30,
    //     //height:100%
       
    // }
    text:
    {
        marginLeft:20,
        fontFamily:"Roboto",
        fontSize:17,
        color:"#4D4D4D",
        borderColor:"#BEBEBE",
        borderRadius:2,
        marginBottom:10

    },
    row:
    {
        flexDirection:"row",
        flex:0.6
    },
    // inputWrap:
    // {
    //     flex:1,
    //     // borderBottomWidth: 1,
    //     marginBottom:10
    // },
    texts:
    {
    //    textAlign:"center",
        fontSize:16,
        fontFamily:"Roboto",
        // borderRadius:7,
        borderWidth:1 ,
        // marginLeft:10,
        marginRight:20,
        // marginLeft:70,
        marginBottom:-40,
        width:250,
        borderBottomRightRadius:7,
        borderTopRightRadius:7,
        height:50,
        borderColor:"#BEBEBE"
     },
    num:
    {
        borderColor:"#BEBEBE",
        textAlign:"center",
        fontSize:16,
        fontFamily:"Roboto", 
        // borderRadius:7,
        borderWidth:1,
        // marginRight:60,
        marginLeft:20,
        marginBottom: -40,
        // borderBottomRightRadius:7,
        borderBottomLeftRadius:7,
        borderTopLeftRadius:7,
        height:50,
        width:70
},
textsss:
{
    fontFamily:"Roboto",
    marginTop:90,
    fontSize: 16,
    backgroundColor: '#062EF8',
    textAlign: 'center',
    color: '#FFFFFF',
    // height: 58,
    padding: 12,
    marginLeft: 20,
    marginRight:20,
    borderRadius:7
},
circle:
{   position:"absolute",
    marginTop:99,
    height:28,
    width:28,
    borderRadius:28/2,
    backgroundColor:"#0422B8",
    marginLeft:293,
    
},
back:
{
alignSelf:"center",
marginTop:8
},
or:
{
    color:"#676767",
    fontFamily:"Roboto",
    fontSize:18,
    textAlign:"center",
    marginTop:50,
    fontWeight:"bold",
    marginBottom:10
},
img:
{
    position:"absolute",
    marginLeft:40,
    marginTop:45
},
google:
{
    fontWeight:"bold",
    fontFamily:"Roboto",
    fontSize:14,
    color:"#757575",
    paddingTop:15,
    marginTop:30,
    marginLeft:20,
    marginRight:20,
    borderRadius:7,
    borderWidth:1,
    height:50,
    borderColor:"#0000003D",
    textAlign:"center",
    // borderShadowColor:"#BEBEBE"
    shadowColor:"#BEBEBE",
    shadowOpacity:20
    
}
})