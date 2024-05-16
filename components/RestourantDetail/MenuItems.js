import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native-elements';


const source =  [
    {
      image: require("../../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../../assets/images/desserts.png"),
      text: "Desserts",
    },
  ];





const MenuItems = () => {
    return (
        <View style={{
            flexDirection:'row',
            marginTop:20,
            justifyContent:'space-between'
        }}>
            <MenuDescription />
            <MenuImage uri={source[0].image} />
        </View>
        
    );
}

const MenuImage = (props) => {
    return(
        <View style={{
            borderRadius:20,
        }}>
            <Image source={props.uri} style={{
                width:60,
                height: 60
            }}/>
        </View>
    )
}

const MenuDescription = (props) => {
    return(
        <View>
            <Text>Helo</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default MenuItems;
