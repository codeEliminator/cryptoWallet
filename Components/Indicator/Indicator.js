import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons.js';

const Indicator = ({percentage_change,type}) => {
    return (
        <View style={{flexDirection:'row',height:30,width:80,borderRadius:12 , justifyContent:'center',alignItems:'center',backgroundColor:type =="I" ? '#98FB98' : 'red'}}  >
            <Text style={{fontWeight:'bold',color:'#fff'}} >{percentage_change}</Text>
            <Icon name="arrow-up-outline" size={15} color="#fff" />
        </View>
    )
}

export default Indicator

const styles = StyleSheet.create({})