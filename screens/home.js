import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import HeaderApp from '../components/header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestorauntItem from '../components/RestorauntItem';

const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor:"#eee", flex:1, marginTop:StatusBar.currentHeight}}> 
            <View style={{backgroundColor:'white', padding:15}}> 
             <HeaderApp />
             <SearchBar /> 
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}> 
                <Categories />
                <RestorauntItem />
                <RestorauntItem />
                <RestorauntItem />
                <RestorauntItem />
                <RestorauntItem />
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({})

export default Home;
