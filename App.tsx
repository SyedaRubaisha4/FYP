
import React, { Component, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import{View,Text,Button, StyleSheet, TextInput, FlatList, ScrollView, SectionList, TouchableHighlight, TouchableOpacity, Modal, Pressable, ActivityIndicator, StatusBar,StatusBarStyle, Platform } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Tab from './src/navigation/Tab';

const App=()=>{
  return(
   <NavigationContainer >
    <Tab />
   </NavigationContainer>
     )
}
export default App;
