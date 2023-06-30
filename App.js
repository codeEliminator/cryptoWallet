import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home/Home.js';
import Search from './Components/Search/Search.js';
import Icon from 'react-native-vector-icons/Ionicons.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              position: 'absolute',
              bottom: 0,
              right: 0,              
              height: 100,
              width: "100%",              
              ...styles.tabBarStyle
            },
            tabBarShowLabel: false
          }}
        >
          <Tab.Screen options={{
              tabBarIcon:({focused}) => (
                <View style = {{alignItems: 'center'}}>
                  <Icon 
                    name={focused ? 'home' : 'home-outline'} 
                    size={20} 
                    color={focused ? 'black' : 'grey'} 
                  />
                  <Text style={{color: focused ? 'black' : 'grey'}}>Home</Text>
                </View>
              )
          }} name="Home" component={Home} />
          <Tab.Screen options={{
            tabBarIcon:({focused}) => (
              <View style = {{alignItems: 'center'}}>
                <Icon 
                  name={focused ? 'search' : 'search-outline'} 
                  size={20} 
                  color={focused ? 'black' : 'grey'} 
                />
                <Text style={{color: focused ? 'black' : 'grey'}}>Search</Text>
              </View>
            )}} name="Search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    left: 0,
    bottom: 0,
    right: 0,
    flex:1,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'black'
  },
  tabBarStyle: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'aqua',
  }
});