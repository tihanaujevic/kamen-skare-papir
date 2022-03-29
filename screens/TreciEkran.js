import React, { useRef, useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

var pobjede=0;
var porazi=0;
var neodluceni=0;

const TreciEkran = ({ navigation, route }) => {
  let slikaR;
  if (route.params.racunalo === 1) {
    slikaR = require('../assets/rock.png');
  } else if (route.params.racunalo === 2) {
    slikaR = require('../assets/scissors.png');
  } else if (route.params.racunalo === 3) {
    slikaR = require('../assets/paper.png');
  }
  let slikaK;
  if (route.params.korisnik === 1) {
    slikaK = require('../assets/rock.png');
  } else if (route.params.korisnik === 2) {
    slikaK = require('../assets/scissors.png');
  } else if (route.params.korisnik === 3) {
    slikaK = require('../assets/paper.png');
  }
const rezultati1 = (kor, rac) => {
    if (kor === rac) {
      neodluceni+=1;
      return 'Neodluceno';
    } else if (kor === 1 && rac == 2) {
      pobjede+=1;
      return 'Pobjeda';
    } else if (kor === 1 && rac == 3) {
      porazi+=1;
     return 'Poraz';
    } else if (kor === 2 && rac == 1) {
      porazi+=1;
      return 'Poraz';
    } else if (kor === 2 && rac == 3) {
      return 'Pobjeda';
    } else if (kor === 3 && rac == 1) {
      pobjede+=1;
      return 'Pobjeda';
    } else if (kor === 3 && rac == 2) {
      porazi+=1;
      return 'Poraz';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.paragraph}>Racunalo</Text>
        <View style={styles.buttonContainer}>
          <Image source={slikaR} style={styles.slike} />
        </View>
      </View>
      <View style={styles.container1}>
        <Text style={styles.paragraph}>Korisnik</Text>
        <View style={styles.buttonContainer}>
          <Image source={slikaK} style={styles.slike} />
        </View>
      </View>
      <View>
        <Text style={styles.naslov}>Rezultat: {rezultati1(route.params.korisnik, route.params.racunalo)}</Text>
        <View>
          <Text>Povijest:</Text>
          <Text>Pobjede: {pobjede}</Text>
          <Text>Porazi:{porazi} </Text>
          <Text>Neodluceni: {neodluceni}</Text>
        </View>
      </View>
      <Button
        title="nova igra"
        onPress={() => navigation.navigate('Druga')}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    margin: 10,
    justifyContent: 'space-between',
  },
  paragraph: {
    margin: 20,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  slike: {
    padding: 25,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
});

export default TreciEkran;
