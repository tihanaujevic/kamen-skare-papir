import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
 var min = 1;
  var max = 4;
  var rand = Math.floor(min + Math.random() * (max - min));
const DrugiEkran = ({navigation, route}) => {
  const rac=rand
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Odaberi potez</Text>
      <View style={styles.container1}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Treca",{korisnik:1, racunalo:rac})}>
            <Image
              source={require('../assets/rock.png')}
              style={styles.slike}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Treca",{korisnik:2, racunalo:rac})}>
            <Image
              source={require('../assets/scissors.png')}
              style={styles.slike}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Treca",{korisnik:3, racunalo:rac})}>
            <Image
              source={require('../assets/paper.png')}
              style={styles.slike}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default DrugiEkran;
