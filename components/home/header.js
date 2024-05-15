import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const HeaderApp = () => {
    const [activeTab, setActiveTab] = useState('Find Farm')
    return (
        <View style={{flexDirection:'row', alignSelf:'center'}}>
            <Buttons 
            text='Find Farm' 
            color='black' 
            color_text='white' 
            activeTab={activeTab} setActiveTab={setActiveTab}/>
            <Buttons text='Find Tour' color='white' color_text='black' activeTab={activeTab} setActiveTab={setActiveTab}/>
        </View>
    );
}

const styles = StyleSheet.create({})

const Buttons = (props) => (
    <View>
        <TouchableOpacity style={{
            backgroundColor:props.activeTab == props.text ? 'black' : 'white', 
            borderRadius:30, 
            paddingVertical: 6,
            paddingHorizontal: 16,
            }}
            onPress={() => props.setActiveTab(props.text)}
            > 
            <Text style={{
                color:props.activeTab == props.text ? 'white' : 'black', 
                fontSize:16, 
                fontWeight:"900",}}>{props.text}</Text>
        </TouchableOpacity>
    </View>
);

export default HeaderApp;
