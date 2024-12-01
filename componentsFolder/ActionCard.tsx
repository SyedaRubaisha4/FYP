import { Image, Linking, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard()
 {
    function openWebsite(websiteLink :string)
    {
        Linking.openURL(websiteLink);
    }

  return (
    <View>
      <Text  style={styles.headingText}>Bolg Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
            <View style={styles.headingcontainer}>
                <Text style={styles.headerText}>
                    Whats new in the javascript 21- ES12
                </Text>
            </View>
     
      <Image source={require('../Images/w2.jpeg')} style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem ipsum dolor sit amet consec
                tetur adipisicing elit. Distinctio 
                magnam asperiores ducimus, suscipi
                t explicabo fugit optio voluptatem
                 sapiente accusantium consequatur?
                  Culpa harum sequi corrupti eos n
                  ulla dolore 
                voluptatibus consectetur ullam.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity 
            onPress={()=>openWebsite('https://github.com/hiteshchoudhary/React-native-projects?tab=readme-ov-file')}>
                <Text >Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>openWebsite('https://www.figma.com/design/wbhTQ6hwE91FxdyFgkWjJI/Grow?node-id=1-3&t=DqXhptAQk4cguccc-0')}>
                <Text >Follow me</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardImage:{
        height:190,
        width:350
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    SocialLinks:{
        fontSize:16,
        color:'#000000',
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6,
    },

    bodyContainer:{
        padding:10,
        
    },
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
        
    },
    elevatedCard:
    {
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
            height:1,
            width:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.4,

    },
    headingcontainer:{
        height:40,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
    },
    headerText:{
        color:'#000',
        fontSize:16,
        fontWeight:'bold',

    },

})