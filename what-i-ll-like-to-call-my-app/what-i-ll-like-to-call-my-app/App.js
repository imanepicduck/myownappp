import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ReferenceScreen from './screens/ReferenceScreen';
import TracingScreen from './screens/TracingScreen';
import TipsToUseReferences from './screens/TipsToUseReferences';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const switchNavigation = createSwitchNavigator({
  Home: HomeScreen,
  Reference: ReferenceScreen,
  Tracing: TracingScreen,
  Tips: TipsToUseReferences,
});
const AppContainer = createAppContainer(switchNavigation);
