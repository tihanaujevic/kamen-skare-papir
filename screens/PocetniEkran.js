import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import DrugiEkran from './DrugiEkran';


const PocetniEkran = ({navigation}) => {
  var min = 1;
  var max = 4;
  var rand = Math.floor(min + Math.random() * (max - min));

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Kamen-škare-papir je igra u kojoj dva igrača koriste isključivo ruke.
        Igrači u isto vrijeme bacaju pred određene znakove za jedan od tri
        oblika: kamen, škare ili papir. Kamen pobjeđuje škare, škare pobjeđuju
        papir, a papir pobjeđuje kamen. U slučaju da oba igrača bace isti znak
        ostaje neriješeno.
      </Text>
      <Button title="nova igra" onPress={() => navigation.navigate("Druga")}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PocetniEkran;
