import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Ionicons, AntDesign} from "react-native-vector-icons"

const SearchBar = () => {
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
            /> 
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchBar;
