import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons} from "react-native-vector-icons"

export default function RestorauntItem() {
    return(
        <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
            <View style={{padding:15, marginTop:10, backgroundColor:"white"}}> 
                <RestorauntImage />
                <RestorauntInfo />
            </View>
        </TouchableOpacity>
    );

}

const RestorauntImage = () =>{
    return(
        <View> 
            <Image  source={{
                uri:"https://www.frozenfoodeurope.com/wp-content/uploads/2018/04/farm-frites-n-678x381.jpg?x35408https://world-nan.kz/img/news/b1b46c1fe2ffd838a4615848d0832542.jpghttps://skygarden.london/wp-content/uploads/2023/01/Larch-Tasting-0084-1-3840x2160.jpg"}}
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
                    Some farm
                </Text>
                <Text style={{
                    fontSize:13,
                    color:"gray"
                }}> 
                    30-45 min
                </Text>
            </View>
            <View style={{marginRight:5, borderRadius:15, backgroundColor:"#eee", width:30, height:30, justifyContent:'center', alignItems:"center"}}> 
                <Text> 
                    4.5
                </Text>
            </View>
        </View>
    );

}