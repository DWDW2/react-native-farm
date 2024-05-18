import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';


const yelpRestourantInfo = {
  name: 'Kaxakks',
  image: '',
  price: '$$',
  reviews: 1500,
  rating: 4.5,
  categories: [{title: 'cojoajjojjo'}, {title:'comfort foofofoof'}]
}
const {name, image, price, reviews, rating, categories} = yelpRestourantInfo
const formattedCategories = categories.map((cat) => cat.title).join(' | ')
const description = `${formattedCategories} ${price ? ' | ' + price + ' | ' : '|'} ${reviews}`


const About = () => {
    return (
        <View>
            <RestourantImage image={image} />
            <RestourantTitle text={name} />
            <RestourantDescription description= {description} />
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
