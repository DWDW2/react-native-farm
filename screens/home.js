import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import HeaderApp from '../components/header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestorauntItems, {localRestaurants} from '../components/RestorauntItems';
YELP_API_KEY = "n3onJjzTBVHia0rf9ZfDVemOLiErc3VUjI4q9qHk2SdyLat_ajgdUKG7YSwu50QpblvRavX4yKXi0549iisQz46wpstIDCt9hgOhWGkde8NI1MTjhA7Kko_2o3JAZnYx"
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
