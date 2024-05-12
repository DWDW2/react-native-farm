import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Ionicons, AntDesign} from "react-native-vector-icons"
const dotenv = require('dotenv');
dotenv.config()

const SearchBar = ({cityHandler}) => {
    return (
        <View style={{flexDirection:"row", marginTop:15}}>
            <GooglePlacesAutocomplete placeholder='Search' styles={{
                textInput:{
                    backgroundColor:"#eee",
                    borderRadius:20,
                    fontWeight:"800",
                    marginTop:10
                },
                textInputContainer:{
                    backgroundColor: "#eee",
                    borderRadius:50,
                    flexDirection: 'row',
                    alignItems:'center',
                    marginRight: 10
                }
            }}
            renderLeftButton={() =>(
                <View style={{marginLeft:10}}>
                    <Ionicons name='location-sharp' size={24} />
                </View>
            )}
            renderRightButton={() =>(
                <View style={{flexDirection:'row', marginRight:8, backgroundColor:"white", borderRadius:30, padding:10, alignItems:'center', justifyContent: 'space-between'}}>
                    <AntDesign name='clockcircle' size={11} style={{marginRight:6}} />
                    <Text>Search</Text>
                </View>
            )}
            query={{key: 'yourkey'}}
            onPress={(data, details=null) => {
                const city = data.description.split(",")[0]
                cityHandler(city)
            }}
            /> 
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchBar;
