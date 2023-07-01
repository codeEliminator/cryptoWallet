import React from "react";
import { StyleSheet, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../Home/Home";
import Search from "../Search/Search"
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const NavigationBar = () => {
    return(
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
                    color={focused ? '#fff' : '#DCDCDC'} 
                  />
                  <Text style={{color: focused ? '#fff' : '#DCDCDC'}}>Home</Text>
                </View>
              )
          }} name="Home" >
            {() => (
                <View>
                    <Home />
                </View>
            )}
          </Tab.Screen>
          <Tab.Screen options={{
            tabBarIcon:({focused}) => (
              <View style = {{alignItems: 'center'}}>
                <Icon 
                  name={focused ? 'search' : 'search-outline'} 
                  size={20} 
                  color={focused ? '#fff' : '#DCDCDC'} 
                />
                <Text style={{color: focused ? '#fff' : '#DCDCDC'}}>Search</Text>
              </View>
            )}} name="Search" >
                {() => (
                    <View>
                        <Search />
                    </View>
                )}
            </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'hsl(180, 100%, 20%)'
    }
})

export default NavigationBar