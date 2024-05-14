import React from 'react';
import { StyleSheet, View } from 'react-native';

const Bottom = () => {
    return (
        <View style={{
            flexDirection:'row', 
            margin:10,
            marginHorizontal: 30,
            justifyContent:'space-between'
        }}>
            <Text>
                Bottom
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Bottom;
