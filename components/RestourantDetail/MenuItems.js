import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';


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





const MenuItem = () => {
    return (
        <View style={{
            flexDirection:'row',
            margin:10,
        }}>
            <MenuImage uri='' />
            
        </View>
    );
}

const MenuImage = (props) => {
    return(
        <View style={{
            width:100,
            height:'100%',
            borderRadius:20,
        }}>
            <Image source={{uri:props.uri}} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default MenuItem;
