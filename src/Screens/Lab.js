import React from 'react'
import {StyleSheet,Text,View, Image,TouchableOpacity, ScrollView,TextInput, SafeAreaView,ImageBackground,
    StatusBar,} from 'react-native'



export default class Labs extends React.Component
{
    // constructor(){
    //     super()
    //     this.state =
    // {
    //     text:" Uploading..."
    // }
    
    // }
    
    render()    
    {
       
        return(
            <View >
            <View style={{ flexDirection: 'row', backgroundColor: '#062EF8', }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/arrow1.png')} style={styless.backward} />
                    </TouchableOpacity>
                    <Text style={styless.labstext}>
                        Labs
                 </Text>
                </View>
                <View > 
                    <Text style={styless.text}>Documents Attached</Text>
                </View>
                <ScrollView contentContainerStyle={{ paddingBottom: 100}}
                // horizontal={true}
                >
                <View style={{ padding: 10}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10,marginLeft:10 ,marginRight:10}}>
                            <Image source={require('../../assets/img.png')} style={{ borderRadius: 5, height: 70, width: 70 }} />
                            <Image source={require('../../assets/delete.png')} style={styless.circle} />
                            <Image source={require('../../assets/img2.png')} style={{ borderRadius: 5, height: 70, width: 70}} />
                            <Image source={require('../../assets/delete.png')} style={styless.circle} />
                            <Image source={require('../../assets/img3.png')} style={{ borderRadius: 5, height: 70, width: 70}} />
                            <Image source={require('../../assets/delete.png')} style={styless.circle} />
                            <Image source={require('../../assets/imgg.png')} style={{ borderRadius: 5, height: 70, width: 70 }} />
                            <Image source={require('../../assets/delete.png')} style={styless.circle} />
                            {/* <Image source = {require('../../assets/delete.png')} style={{backgroundColor:"#062EF8"}}/> */}
                        </View>
                        <Text style= {styless.txt}>
                        <Image source={require('../../assets/add1.png')} style={{marginLeft:180,marginRight:180}}/>
                        Add More
                        </Text>
                        <View >
                           

                            
                            {/* <ImageBackground source = {require('../../assets/loader.png')} style={styless.load}>
                                <Text style = {{color:"#FFFFFF",position:"absolute", marginTop:120,fontSize:18,fontFamily:"Roboto",fontWeight:"bold"}}>
                                Uploading...
                                </Text>

                                </ImageBackground> */}
                           

                            
                          
                            {/* <Text style = {styless.texts}>
                            Uploading...
                            </Text> */}

                            {/* <TextInput 
                             style={stylesss.TextInputStyleClass}
                             underlineColorAndroid="transparent"
                             placeholder={"Document note"}
                             placeholderTextColor={"#4D4D4D"}
                             numberOfLines={15}
                             multiline={true}
                            /> */}
                            
                            <TextInput 
                             controlled={true}
                            style ={styless.textInput}
                            placeholder="Document note"
                            placeholderTextColor="#4D4D4D"
                            // backgroundColor =" #BEBEBE"
                            numberOfLines ={20}
                            multiline={true}
                            // onChangeText={(text) => this.setState({ text })}
                            // value = {this.state.text}
                            />
                            
                           
                            {/* </ImageBackground> */}
                           {/* < ImageBackground source ={require('../../assets/loader.png')}/> */}
                        </View>
                        
                        
                    </View>
                </ScrollView>
                <View > 
                <View style={styless.newText}>
                    <TouchableOpacity style={{ flexDirection: 'row',}}
                    onPress = {() => this.props.navigation.navigate("Labs")}
                    >
                        <Text style={styless.addtext}>
                        Save
                 </Text>
                    </TouchableOpacity>
                </View>
                    </View>                

                
            
           </View>
        )
    }
}


const styless = StyleSheet.create({
    backward:
    {
        tintColor: '#FFFFFF',
        height: 18,
        width: 15,
        padding: 10,
        marginTop: 18,
        marginLeft: 10
    },
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
    text:
    {
        color:"#000000",
        fontSize:16,
        marginLeft:10,
        marginBottom:20,
        marginTop:20,
        fontWeight:"bold"
    },
    txt:
    {
        fontFamily:"Roboto",
        fontSize:12,
        textAlign:"right",
        fontWeight:"bold",
        marginLeft:50
        // paddingBottom:400
    },
    textInput:{
        fontFamily:"Roboto",
        paddingBottom:120,
        textAlign: 'left',
        height: 50,
        borderWidth: 1,
        borderColor: '#9E9E9E',
        borderRadius: 8,
        backgroundColor : "#FFFFFF",
        height: 150,
        marginTop:40,
        // marginLeft:8,
        // marginRight:8
    },
    newText:
    {
        marginTop:30,
        backgroundColor: '#062EF8',
        textAlign:"center",
        justifyContent:"center",
        marginRight:10,
        marginLeft:10,
        borderRadius:7,
        height:60
    },
    addtext:
    {
        fontSize: 18,
        backgroundColor: '#062EF8',
        textAlign: 'center',
        color: '#FFFFFF',
        height: 58,
        paddingTop: 12,
         marginLeft: 150,
        alignItems:"center",
        justifyContent:"center",
     
        
    },
circle:
{
    // height: 5,
    //  width: 5,
    //   position:'absolute',
    //   padding:20, 
    //   right:250,
    //   top:-5,
    //   backgroundColor:"#062EF8",
    //   borderRadius:2.
    height:15,
    width:15,
    borderRadius:15/2,
    backgroundColor:"#062EF8",
    right:3,
    bottom:10
},
// load:
// {
//     position:"absolute",
//     height:100,
//     width:100,
//     alignItems:"center",
//     alignSelf:"center"

// },
// texts:
// {
//     color:"#FFFFFF",
//     alignContent:"center",
//     fontFamily:"Roboto",
//     fontSize:16,
//     marginLeft:130,
    
// }
// texts:
// {
//     color:"#FFFFFF",
//     alignItems:"center",
//     alignSelf:"center",
//     // paddingTop:50
// }
})