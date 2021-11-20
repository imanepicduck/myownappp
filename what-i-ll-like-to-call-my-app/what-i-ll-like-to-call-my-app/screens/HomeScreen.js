import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeAreaView} />
        <ImageBackground
          source={require('../assets/finallydone.png')}
          style={styles.backgroundImage}
          blurRadius={7}
          >
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Mitochondria</Text>
          </View>
          <View>
          <TouchableOpacity
          onPress = {()=> this.props.navigation.navigate ("Reference")}
          style={styles.routeCard}
          >
          <Text style={styles.routeText}> 
          What is refrencing
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress = {()=> this.props.navigation.navigate ("Tracing")}
          style={styles.routeCard}
          >
          <Text style={styles.routeText}> 
          What is tracing
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress = {()=> this.props.navigation.navigate ("Tips")}
          style={styles.routeCard}
          >
          <Text style={styles.routeText}> 
          How do I use References
          </Text>
          </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBar: {
    flex: 0.35,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'purple',
    marginLeft: 35,
    textDecoration: 'underline',
  },
  androidSafeAreaView: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 0.85,
    marginLeft: 20,

  },
  routeCard: {
    flex: 0.3,
    marginLeft: 20,
    marginRight: 50,
    marginTop: 80,
    borderRadius: 10,
    //backgroundColor: "white",
    //borderWidth: 2,
  },
  routeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'purple',
    marginTop: 10,
    paddingLeft: 10,
  },
});
