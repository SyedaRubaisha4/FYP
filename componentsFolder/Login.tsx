import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
/*states are used to transfer data between two components*/
type RootStackParamList = {
  Home: { name: string; age: number };  // Define expected params here
  Login: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const Login = (props: Props) => {
  const [name,setName] = useState("");
  const age = 21;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      {/* <TextInput 
      style={{fontSize:20,borderColor:'#000',borderWidth:2}}
      onChangeText={(text)=>setName(text)} placeholder='Enter name '
      />
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate("Home", { name, age })}
      /> */}
    </View>
  );
};

export default Login;
