import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcards() {
  return (
    <View>
     
      <Text style={styles.headingtext}>Flatcards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>
                red
            </Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>
               blue
            </Text>
        </View>
        <View style={[styles.card,styles.cardtThree]}>
            <Text>
                green
            </Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>
               bluoom
            </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        flex:1,
        flexDirection:'row'
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8
    },
    cardOne:{
        backgroundColor:'#EF5354'
    },
    cardTwo:{
        backgroundColor:'#50DBB4'
    },
    cardtThree:{
        backgroundColor:'#EDA3FA'
    }


})