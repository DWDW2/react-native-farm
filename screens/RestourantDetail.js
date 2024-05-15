import React from 'react';
import { StyleSheet, View } from 'react-native';
import About from '../components/RestourantDetail/About';
import { Divider } from 'react-native-elements';

const RestourantDetail = () => {
    return (
        <View>
            <About />
            <Divider />
        </View>
    );
}

const styles = StyleSheet.create({})

export default RestourantDetail;
