import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fancycards() {
  return (
    <View>
      <Text style={styles.headingtext}>Fancycards</Text>
        <View  style={[styles.card,styles.cardElevated]}>
        <Image 
            source={require('../Images/w2.jpeg')} style={styles.cardImage}/>
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa mahal</Text>
                <Text style={styles.cardLabel}>Lahore,pakistan</Text>
                <Text style={styles.cardDescription}>Hawa mahal
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorum, repudiandae 
                    nihil ab quaerat pariatur voluptatibus
                    accusamus culpa similique, ullam quis
                    mollitia dicta maxime asperiores et,
                    commodinecessitatibus doloribus placeat ratione!
                </Text>
                <Text style={styles.cardFooter}>12 mins away</Text>
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
    card:{
        width:350,
        height:350,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardImage:{
        height:180,
        width:400,
        marginBottom:8,
        borderTopRightRadius:6,
        borderTopLeftRadius:6,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:2
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
    },
    cardLabel:{
        color:'#000000',
        fontSize:14,
       marginBottom:6,
    },
    cardDescription:{ 
        color:'#242B2E',
        marginBottom:12,
        marginTop:6,
        flexShrink:1,
        fontSize:12,
    },
    
    cardFooter:{

        color:'#000000',
        fontSize:14,
    },


})