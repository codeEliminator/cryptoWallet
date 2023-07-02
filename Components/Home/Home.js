import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Ionicons.js';
import buyImage from '../../assets/buyImage.png'
import topUpImage from '../../assets/topUpImage.png'
import withdrawImage from '../../assets/withdrawImage.png'
import profileImage from '../../assets/profileImage.jpg'
import ActionCenter from '../ActionCenter/ActionCenter';

export default function Home() {
  return (
    <View style={{flex: 1}}>
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
            <Icon name='arrow-up-outline' size={25} ></Icon>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>5%</Text>
          </View>
        </View>

        <View style={{paddingHorizontal: wp('10%'), marginTop: 15}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={styles.accActionCenter}>
              <ActionCenter imgSrc={topUpImage} imgTxt={'Top Up'}></ActionCenter>
              <ActionCenter imgSrc={buyImage} imgTxt={'Buy'}></ActionCenter>
              <ActionCenter imgSrc={withdrawImage} imgTxt={'Withdraw'}></ActionCenter>
            </View>
          </View>
        
        </View>
      </View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.28,
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
  },
  accActionCenter: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    height: hp('10%'),
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2, 
    shadowRadius: 7,
  }
});
