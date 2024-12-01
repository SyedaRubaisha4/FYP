import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Rubaisha Zaidi',
            status: 'Just an ordinary girl',
            imageUrl: 'https://images.pexels.com/photos/15598032/pexels-photo-15598032.jpeg'
        },
        {
            uid: 2,
            name: 'Darooj Hassan',
            status: 'Just an ordinary girl',
            imageUrl: 'https://images.pexels.com/photos/12392967/pexels-photo-12392967.jpeg'
        },
        {
            uid: 4,
            name: 'Kashaf Khadija',
            status: 'Just an ordinary girl',
            imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
        }
    ];
    
    return (
    <View>
      <Text style={styles.TextHeading}>ContactList</Text>
      <ScrollView style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid,name,status,imageUrl})=>
        (
        <View key={uid} style={styles.usercard}>
            <Image 
            source={{
                uri:imageUrl
            }}
            style={styles.userImage}/>
            <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userstatus}>{status}</Text>
          
            </View>
              </View>))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    TextHeading:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,

    },
    container:{
        paddingHorizontal:16
    },
    usercard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#8D3DAF',
        padding:8,
        borderRadius:10,


    },
    userImage:{
        width:90,
        height:80,
        borderRadius:60,
        marginRight:14,
    },
    userName:{
        fontSize:16,
        fontWeight:'bold',

    },
    userstatus:{},
})