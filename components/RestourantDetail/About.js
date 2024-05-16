import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';


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



const About = () => {
    return (
        <View>
            <RestourantImage image={source[0].image} />
            <RestourantTitle text={source[0].text} />
            <RestourantDescription description="best food in the world you can find here" />
        </View>
    );
}

const RestourantImage = (props) => {
    return(
        <View> 
            <Image source={props.image} style={{width:'100%', height:180 }}/>
        </View>
    );

}
const RestourantTitle = (props) => {
    return(
        <View> 
            <Text style={{
                fontSize:29,
                fontWeight:'600',
                marginTop:10,
                marginHorizontal: 15
            }}>{props.text}</Text>
        </View>
    );
}

const RestourantDescription = (props) => {
    return(
        <View> 
            <Text style={{
                fontSize:16,
                fontWeight:'300',
                marginTop:10,
                marginHorizontal: 15,
            }}>{props.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default About;
