import React from 'react'
import {View, StyleSheet, Dimensions,Text, ScrollView, SafeAreaView} from 'react-native'

const dimensions=Dimensions.get('screen');
const width=dimensions.width;
const height=dimensions.height;

const HomeScreen=()=>{
    return(
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Anasayfa</Text>
            </View>
            <ScrollView style={styles.campaignsContainer}>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
            </ScrollView>
            <View style={styles.product}></View>
            <View style={styles.footer}></View>
        </View>
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({
    safeArea:{
        flex:1,
        backgroundColor:'red',
        
    },
    container:{
        backgroundColor:'rgba(0,0,0,0.1)',
        flex:1,
        borderColor:'black',
        borderWidth:2,
        paddingHorizontal:20
    },
    header:{
        backgroundColor:'lightblue',
        height:width * 0.3,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    campaignsContainer:{
        backgroundColor:'yellow',
        height:width *0.5,
        borderColor:'rgba(0,0,0,0.1)',
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:width * 0.05
    },
    product:{
        backgroundColor:'orange',
        height:width * 0.7,
        marginHorizontal:20,
        marginTop:20
    },
    footer:{
        backgroundColor:'lightgreen',
        height:width * 0.3,
        marginTop:20
    }
});

export default HomeScreen;