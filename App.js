import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import PocetniEkran from './screens/PocetniEkran';
import DrugiEkran from './screens/DrugiEkran';
import TreciEkran from './screens/TreciEkran';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Prva" component={PocetniEkran} />
        <Stack.Screen name="Druga" component={DrugiEkran} />
        <Stack.Screen
          name="Treca"
          component={TreciEkran}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
