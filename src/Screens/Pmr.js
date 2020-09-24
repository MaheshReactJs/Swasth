import React from 'react'
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'
export default class Labs extends React.Component

{
    render()
    {
        return(
            <View>

            
            <View style= {styles.header}>
                <Image source = {require('../../assets/pmr.png')} />
            </View>
            <View>
                <Image source = {require('../../assets/scanner.png')} style= {styles.scan}/>
                {/* <Text style= {{textAlign:"center",flexDirection: "row", justifyContent:"flex-start",justifyContent:"space-between",padding:5}}>
                </Text> */}
                <View style={{flexDirection:'row',marginLeft:60}}>
                <Text style={{ textAlign: 'center',fontSize:17,fontWeight:"bold",marginLeft:17,justifyContent:"space-between",padding:5}} >Medical Keycard</Text>
                <Text style={{fontStyle: 'italic',textDecorationLine: 'underline',marginBottom:4,justifyContent:"space-between",padding:5}}>(learn more) </Text>
                </View>
                
                
                {/* <Text style={myStyle}>This is a </Text><Bold>word</Bold><Text> in a sentence.</Text> */}
                
                
                
            </View>
            <View style={{marginTop:60,marginLeft:15,marginRight:15,}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, }}>
                <TouchableOpacity style={styles.btn}
                onPress = {() => this.props.navigation.navigate("Documents")}
                >
                <Text style={styles.btnText} >Labs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}
                onPress = {() => this.props.navigation.navigate("Documents")}
                >
                <Text style={styles.btnText}>Procedures</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, }}>
                <TouchableOpacity  style={styles.btn}
                 onPress = {() => this.props.navigation.navigate("Documents")}
                 >
                <Text style={styles.btnText} >Visits</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}
                onPress = {() => this.props.navigation.navigate("Documents")}>

                <Text style={styles.btnText} >General Notes</Text>
                </TouchableOpacity>
            </View>
           
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, }}>
                <TouchableOpacity  style={styles.btn} 
                onPress = {() => this.props.navigation.navigate("Documents")}>
                <Text  style={styles.btnText}>Therapy</Text>
                </TouchableOpacity>
                </View>
                </View>
</View>
            

        )
    }
}

const styles = StyleSheet.create({
    header:
    {
        backgroundColor:"#062EF8",
        alignItems: 'center',
        justifyContent:"center",
        paddingTop:10,
        paddingBottom:10,paddingLeft:10,paddingRight:10
    },
    scan:
    {
        marginTop:35,
        marginLeft:90,
        
    },
    btn:
    {
        
        backgroundColor:"#062EF8",
        borderRadius: 5,
        width: 150,
       
        
    },
   
    btnText: {
        padding: 10,
        textAlign: 'center',
        color:"#FFFFFF",
        fontSize: 18,
    
      },

   
})