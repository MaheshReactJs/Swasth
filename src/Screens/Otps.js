import React from 'react'
import {StyleSheet,View,Text,Image,TextInput,TouchableOpacity} from 'react-native'
import styles from '../Styles/otpstyle'

export default class Otps extends React.Component
{
    render()
    {
        return(
            <View>  
                 <View style={styles.container}>
                  <Image source={require('../../assets/arrow1.png')} style = {{marginTop:20}} />
                </View>
                <Text style={styles.tex}>Verify Number</Text>
                <Text style={styles.text}>OTP Sent to xxxxxxxx</Text>

                <Text style={styles.text1}>ENTER OTP{'\n'}</Text>

                <View
                style={{
                  flex: 0.6,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                    <TextInput
                    keyboardType = "numeric"
                    style = {styles.st1}
                    />
                    <TextInput
                    keyboardType = "numeric"
                    style = {styles.st1}
                    />
                    <TextInput
                    keyboardType = "numeric"
                    style = {styles.st1}
                    />
                    <TextInput
                    keyboardType = "numeric"
                    style = {styles.st1}
                    />
                    <TextInput
                    keyboardType = "numeric"
                    style = {styles.st1}
                    />
                    <TextInput
                    keyboardType = "numeric"
                    style = {styles.st1}
                    />
                    </View>
                    <View >
                
                  <View>
                  <Text
                style={{
                  marginTop: 50,
                  right: -155,
                  fontFamily: 'roboto',
                  fontSize: 12,
                  color: '#4D4D4D',
                  marginBottom: 190,
                }}>
                Didn't receive the OTP? 
              </Text>
              <Text style = {{color: '#4D4D4D',textDecorationLine: 'underline', marginLeft:280,position:"absolute", fontSize:12,marginTop:50,fontFamily:"roboto"}}>
                Resend OTP
              </Text>
                  </View>
             
              
              {/* <Text style={{ marginTop: 10,
                  right: -150,
                  fontFamily: 'roboto',
                  fontSize: 12,
                  color: '#4D4D4D',
                  marginBottom: 190,justifyContent:"space-between",padding:5}}>Resend otp</Text> */}
             
              <View>
                <TouchableOpacity
                  style={styles.verify}
                  onPress = {() => this.props.navigation.navigate("Pmr")}
                 >
                  <Text style={styles.verify_text}>Verify and Proceed</Text>
                </TouchableOpacity>
              </View>
            </View>
            </View>
        
    );
  }
}

          