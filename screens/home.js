import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import HeaderApp from '../components/home/header';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestorauntItems, {localRestaurants} from '../components/home/RestorauntItems';
import {YELP_API_KEY} from '@env'
YELP_API_KEY = `${YELP_API_KEY}`
const Home = () => {
    const [restourantData, setRestourantData] = React.useState(localRestaurants)

    const getYelpInfo = () => {
        const yelpturl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpturl, apiOptions)
        .then((res) => res.json())
        .then((json) => setRestourantData(json.businesses));
    }
    const [city, setCity] = useState("SanDiego")
    useEffect(() => {getYelpInfo();}, [city])
    return (
        <SafeAreaView style={{backgroundColor:"#eee", flex:1, marginTop:StatusBar.currentHeight}}> 
            <View style={{backgroundColor:'white', padding:15}}> 
             <HeaderApp />
             <SearchBar cityHandler={setCity}/> 
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}> 
                <Categories />
                <RestorauntItems RestourantsData={restourantData}/>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({})

export default Home;
