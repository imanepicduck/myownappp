import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';

export default class TracingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeAreaView} />
        <View style={styles.titleBar}>
          <Text style={styles.titleText}> What is tracing? </Text>
        </View>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate("Home")} style={{marginTop:65}}>
            <Image
              source={require('../assets/leftarrow.png')}
              style={{ width: 60, height: 60 }}
            />
          </TouchableOpacity>
        <Text style={styles.info}>
          Tracing on the other hand is using an image that is NOT your own, and
          copying line for line. Some artists don’t even consider it as “art”,
          especially if you post it on social media and claim it as your own.{' '}
          {'\n'} {'\n'} It’s easy to figure out what is traced and what isn’t by
          taking the image that is traced, lining it up with the stolen work,
          and lowering the opacity on a drawing app. If the images lines up
          perfectly, then it’s traced, as shown in the images below. 
        </Text>
        <View>
        <Text style={{fontSize:20, textDecorationLine: "underline"}}> Original </Text>
        <Image source={require('../assets/original.png')} style={{width:150, height: 110}}/>
        </View>

         <View>
              <Text style={{fontSize:20, textDecorationLine: "underline"}}> Referenced </Text>
        <Image source={require('../assets/referenced.jpeg')} style={{width:180, height: 110}}/>
        </View>

         <View>
              <Text style={{fontSize:20, textDecorationLine: "underline"}}> Traced </Text>
        <Image source={require('../assets/traced.jpeg')} style={{width:200, height: 110}}/>
        </View>
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
    marginLeft: 10,
  },
  androidSafeAreaView: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  info: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});
