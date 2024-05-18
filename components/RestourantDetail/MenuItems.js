import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Image, Text } from 'react-native-elements';


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
      <View> 
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            margin:20
        }}>
            <MenuDescription text='heloo'/>
            <MenuImage uri={source[0].image} />
        </View>       
        <Divider />
      </View>
    );
}

const MenuImage = (props) => {
    return(
        <View>
            <Image source={props.uri} style={{
                width:100,
                height: 100,
                borderRadius:20,
            }}/>
        </View>
    )
}

const MenuDescription = (props) => {
    return(
        <View style={{width:240, justifyContent:'space-evenly'}}>
            <Text style={{fontSize:20, fontWeight:'600'}}>{props.text}</Text>
            <Text style={{fontSize:18}}>{props.text}</Text>
            <Text style={{fontSize:12}}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default MenuItems;
