import React from 'react';
import { View, Image, StyleSheet, Header } from 'react-native';

const ImageHeader = props => (
        <View style={{ brackgroundColor: '#eee'}}>
        <Image  
        source={{ uri: '../assets/img/header.png'}}
        />
        <Header {...props} style={{ backgroundColor: 'transparent'}} />
    </View>
)
    
    


export { ImageHeader };