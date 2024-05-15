import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';

const About = () => {
    return (
        <View style={{
            margin:20,
        }}>
            <RestourantImage image={image} />
            <RestourantTitle text={title} />
            <RestourantDescription description={description} />
        </View>
    );
}

const RestourantImage = (props) => {
    return(
        <View> 
            <Image source={ {uri : props.image}} style={{width:'100%', height:180 }}/>
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
            }}>{props.title}</Text>
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
