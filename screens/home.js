import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import HeaderApp from '../components/header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor:"#eee", flex:1, marginTop:StatusBar.currentHeight}}> 
            <View style={{backgroundColor:'white', padding:15}}> 
             <HeaderApp />
             <SearchBar /> 
            </View>
            <Categories />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({})

export default Home;
