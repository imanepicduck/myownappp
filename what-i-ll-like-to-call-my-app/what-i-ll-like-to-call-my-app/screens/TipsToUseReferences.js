import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class TipsToUseReferences extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeAreaView} />
        <View style={styles.titleBar}>
          <Text style={styles.titleText}> Tips to use References </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
          style={{ marginTop: 15 }}>
          <Image
            source={require('../assets/leftarrow.png')}
            style={{ width: 60, height: 60 }}
          />
        </TouchableOpacity>
        <Text style={styles.info}>
          Now that I’ve talked about what referencing and tracing is, it’s time
          that I talk about how to properly use a reference. The first step is
          to find an image or the images. The image you search doesn’t have to
          be the same style as your artwork, especially if you draw manga/anime
          since you can find a lot more images that aren't necessarily in your
          style. Your reference image doesn't even have to be something on
          google either! You can take photos of things you own or yourself to
          use as a reference. It is also perfectly acceptable to use more than 1
          reference. The second step is to observe the image or images and see
          how you can apply them to your drawing. By doing this, you can make
          certain parts of your drawing look slightly more realistic and
          interesting. Finally the third step is to credit the reference image.
          This step is extremely important, and you DON’T want to skip it! By
          crediting the image, you are also respecting the person who made the
          image and also showing an example to younger artists on how to credit.{' '}
          {'\n'} {'\n'}You can credit by simply copying and pasting the
          hyperlink of the image like the way I did here: {'\n'}{' '}
          https://www.google.com/search?q=onion&rlz=1C1SQJL_enUS948US948&tbm=isch&sxsrf=AOaemvJ2eTuqUTRw2t302jdbQnMKN1neyg:1635602668672&source=lnms&sa=X&ved=2ahUKEwjV67zgpvLzAhUDbc0KHRu1ARYQ_AUoAnoECAEQBA&biw=1680&bih=907&dpr=1#imgrc=HlF95gucEMp54M
        </Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
    marginLeft: 10,
  },
  androidSafeAreaView: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  info: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});
