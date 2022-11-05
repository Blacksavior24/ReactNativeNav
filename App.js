import "react-native-gesture-handler"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTab";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer>
      {console.log('corriendo app')}
      {/*<NavigationStack />*/}
      {/*<NavigationTab />*/}
      <NavigationDrawer />
      {console.log('segunda parte')}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#58f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
