import React from 'react';
import { StyleSheet, View } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Bottom = () => {
    return (
        <View style={{
            flexDirection:'row', 
            margin:10,
            marginHorizontal: 30,
            justifyContent:'space-between'
        }}>
            <icon name="user" text='Account' />
            <icon name="user" text='Account' />
            <icon name="user" text='Account' />
            <icon name="user" text='Account' />
            <icon name="user" text='Account' />
        </View>
    );
}
 
const icon = (props) =>{
    return(
        <View>
            <FontAwesome5 name={props.icon} size={25} style={{
                alignSelf: 'center',
                marginBottom: 10
            }}/> 
            <Text>{props.text}</Text>
        </View>

    )
}

const styles = StyleSheet.create({})

export default Bottom;
