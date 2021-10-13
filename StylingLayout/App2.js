import React from 'react'
import {View, StyleSheet} from 'react-native'

const App=()=>{
    const yellowBoxStyles=[styles.square,{backgroundColor:'yellow'}]
    const whiteBoxStyles=[styles.square,{backgroundColor:'white'}]
    const  greenBoxStyles=[styles.square,{backgroundColor:'green'}]

    return(
        <View style={styles.container}>
            <View style={styles.square}></View>
            <View style={yellowBoxStyles}></View>
            <View style={whiteBoxStyles}></View>
            <View style={greenBoxStyles}></View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'pink',
        // width:100,
        // height:200,
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    square:{
        backgroundColor:'lightblue',
        width:20,
        height:20,
        borderColor:'grey',
        borderWidth:2,
        borderRadius:5
    }
});


export default App;