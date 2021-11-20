import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class ReferenceScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/dfcdf.PNG')}
          style={styles.bg}
          blurRadius={3}>
          <SafeAreaView style={styles.androidSafeAreaView} />
          <View style={styles.titleBar}>
            <Text style={styles.titleText}> What is a Reference? </Text>
          </View>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate("Home")}>
            <Image
              source={require('../assets/leftarrow.png')}
              style={{ width: 60, height: 60 }}
            />
          </TouchableOpacity>
          <Text style={styles.info}>
            References are pictures that you can use to understand objects
            better, since you can create pictures that look more realistic and
            believable. {'\n'} {'\n'}Even if you are creating cartoon-like
            images it is still a good idea to use references since people
            viewing your art can see your mistakes much more clearly than the
            “better” parts of your art. Image by Norman Rockwell
          </Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    marginLeft: 10,
  },
  androidSafeAreaView: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  info: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20,
    color: 'white',
  },
  bg: {
    flex: 1,
  },
});
