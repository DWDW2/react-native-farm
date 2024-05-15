import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';

const MenuItem = () => {
    return (
        <View style={{
            flexDirection:'row',
            margin:10,
        }}>
            <MenuImage uri='' />
            
        </View>
    );
}

const MenuImage = (props) => {
    return(
        <View style={{
            width:100,
            height:'100%',
            borderRadius:20,
        }}>
            <Image source={{uri:props.uri}} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default MenuItem;
