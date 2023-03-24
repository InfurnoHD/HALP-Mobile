import React from 'react';
import { Image, View, TouchableOpacity, useColorScheme } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { Dimensions } from 'react-native';
import Styles from '../styles/styles';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Queue = () => {
  const isDarkMode = useColorScheme() === 'dark';


  const handleEdit = () => {};

  const handleCancel = () => {};

  return (
    <View style={[Styles.lm_background, { flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 0, paddingBottom: 100 }]}>
      <Image source={require('./HALP.png')} style={Styles.logo} />
      <View style={{ justifyContent: 'space-between', alignItems: 'center', ...Styles.lm_boxes, width: '90%', height: screenHeight * 0.75, maxWidth: screenWidth * 0.9, maxHeight: screenHeight * 0.75, marginTop: -25, borderRadius: 20}}>
        <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Text style={[Styles.lm_text, { fontSize: 24 }]}>Hi Charlie</Text>
          <Text style={[Styles.lm_text, { fontSize: 20 }]}>You are number</Text>
          <Text style={[Styles.lm_text, { fontSize: 120 }]}>1</Text>
          <Text style={[Styles.lm_text, { fontSize: 20 }]}>in the queue</Text>
        </View>
        <View style={{ alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
          <Button 
            onPress={handleEdit} 
            textColor={isDarkMode ? "#FFFFFF" : "#201C24"}
            style={[isDarkMode ? Styles.dm_button : Styles.lm_button, {height: "18%", width:"45%"}]}
            contentStyle={{flexDirection: 'row-reverse', height: "100%", width: "100%"}}>
            EDIT TICKET          
            </Button>
            <View style={{height:20}}></View>
            <Button 
            onPress={handleEdit} 
            textColor={isDarkMode ? "#FFFFFF" : "#201C24"}
            style={[isDarkMode ? Styles.dm_button : Styles.lm_button, {height: "18%", width:"45%"}]}
            contentStyle={{flexDirection: 'row-reverse', height: "100%", width: "100%"}}>
            CANCEL          
            </Button>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%', height: 60, backgroundColor: Styles.lm_background.backgroundColor, position: 'absolute', bottom: 0, borderTopWidth: 1, borderTopColor: Styles.lm_outline.color }}>
        <Button mode="text" onPress={() => console.log("Create button pressed")}>Create</Button>
        <Button mode="text" onPress={() => console.log("Settings button pressed")}>Settings</Button>
      </View>
    </View>
  );
};

export default Queue;
