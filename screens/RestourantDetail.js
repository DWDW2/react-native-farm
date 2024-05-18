import React from 'react';
import { StyleSheet, View } from 'react-native';
import About from '../components/RestourantDetail/About';
import { Divider } from 'react-native-elements';
import MenuItems from '../components/RestourantDetail/MenuItems';

const RestourantDetail = () => {
    return (
        <View>
            <About />
            <Divider width={2} style={{marginTop:10}}/>
            <MenuItems />
        </View>
    );
}

const styles = StyleSheet.create({})

export default RestourantDetail;
