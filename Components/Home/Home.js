import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Ionicons.js';
import {LinearGradient} from 'expo-linear-gradient';
import profileImage from '../../assets/profileImage.jpg'

export default function Home() {
  return (
    <View style={styles.container}>  
      <View style={styles.accInfo}>
        <View style={styles.accName}>
          <Text style={{color: '#fff', fontSize: 16, marginBottom: 2}}>Welcome Back</Text>
          <Text style={{color: '#fff', fontSize: 22, fontStyle: 'italic'}}>ALEX</Text>    
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name='notifications' style={{marginRight: 10}} size={30} color='#fff'/>
          <Image style={styles.profileImage} source={profileImage}></Image>
        </View>
      </View> 

      <View style={styles.accBudget}>
        <View style={{flexDirection:'column'}}>
          <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>$30 000,87</Text>
          <Text style={{color: 'rgba(255, 255, 255, 0.3)', fontStyle: 'italic'}}>Updated a second ago</Text>  
        </View>

        <View style={styles.accIndication}>
          <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>5%</Text>
          <Icon name='arrow-up-outline' size={25} ></Icon>
        </View>
      </View>
  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.26,
    backgroundColor: 'hsl(180, 100%, 20%)'
  },
  accInfo: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: hp('10%'),
    paddingHorizontal: wp('5%'),
    
  },
  accName: {
    flexDirection: 'column'
  },
  
  profileImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  accBudget: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    marginTop: 20,
  },
  accIndication: {
    flexDirection: 'row',
    height: 40,
    width: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98FB98'
  }
});
