import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons} from "react-native-vector-icons"

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];
  

export default function RestorauntItems(props) {
    return(
        <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
            {props.RestourantsData.map((restoraunt, index) => (
            <View key={index} style={{padding:15, marginTop:10, backgroundColor:"white"}}> 
                <RestorauntImage url={restoraunt.image_url}/>
                <RestorauntInfo  name={restoraunt.name} add_info={restoraunt.price} rating={restoraunt.rating}/>
            </View>))}
        </TouchableOpacity>
    );

}

const RestorauntImage = (props) =>{
    return(
        <View> 
            <Image  source={{
                uri:props.url}}
                style={{width:"100%", height:180}}
                />
            <TouchableOpacity style={{position:'absolute', right: 20, top:20}}>
                <MaterialCommunityIcons name="heart-outline" size={25} />
            </TouchableOpacity>
        </View>
    )
}

const RestorauntInfo = (props) => {
    return(
        <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            marginTop:10,
        }}>
            <View style={{marginLeft:5}}>
                <Text style={{
                    fontSize:16,
                    fontWeight:'900'
                }}> 
                    {props.name}
                </Text>
                <Text style={{
                    fontSize:13,
                    color:"gray"
                }}> 
                    {props.add_info}
                </Text>
            </View>
            <View style={{marginRight:5, borderRadius:15, backgroundColor:"#eee", width:30, height:30, justifyContent:'center', alignItems:"center"}}> 
                <Text> 
                    {props.rating}
                </Text>
            </View>
        </View>
    );

}