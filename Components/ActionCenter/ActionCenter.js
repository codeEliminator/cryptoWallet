import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ActionCenter = ({imgSrc, imgTxt}) => {
    return (
        <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center'}}>
          <Image style={{width: 50, height: 40}} source={imgSrc}></Image>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#030', marginTop: 5}}>{imgTxt}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})

export default ActionCenter