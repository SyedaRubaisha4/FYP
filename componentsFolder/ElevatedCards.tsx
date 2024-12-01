import { ScrollView, StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React from 'react'
const ElevatedCards=()=> {
    const images = [
 { id: '1',src: require('../Images/Homeimages/m1.jpeg')},
 { id: '2', src: require('./assets/image2.png') },
 { id: '3', src: require('./assets/image3.png') },
 { id: '4', src: require('./assets/image4.png') },
 { id: '5', src: require('./assets/image5.png') },
 { id: '6', src: require('./assets/image6.png') },
 { id: '7', src: require('./assets/image7.png') },
 { id: '8', src: require('./assets/image8.png') },
 { id: '9', src: require('./assets/image9.png') },
 { id: '10', src: require('./assets/image10.png') },
];
  return (
    <View>
        <ScrollView  horizontal={true} 
        style={styles.container} >
            <View >
                <Text style={[styles.card,styles.cardElevated]}>
                    Tap
                </Text>
            </View>
            <View >
                <Text style={[styles.card,styles.cardElevated]}>
                   me
                </Text>
            </View><View >
                <Text style={[styles.card,styles.cardElevated]}>
                    Te
                </Text>
            </View><View >
                <Text style={[styles.card,styles.cardElevated]}>
                    scroll
                </Text>
            </View>
            <View >
                <Text style={[styles.card,styles.cardElevated]}>
                    more...
                </Text>
            </View>
        </ScrollView>
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
        padding:8
    },
    card:{
        width:100,
        height:100,
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:10,
        margin:5,
    
    },

    cardElevated:{
        backgroundColor:'black',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1,

        },
        shadowColor:'#E333',
        shadowOpacity:0.4,
        shadowRadius:3
    }
    ,
})
export default ElevatedCards;