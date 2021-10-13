import React from 'react'
import {View, StyleSheet, Dimensions,Text} from 'react-native'

const dimensions=Dimensions.get('screen');
const width=dimensions.width;
const height=dimensions.height;

const App=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Anasayfa</Text>
            </View>
            <View style={styles.campaignsContainer}>
                <Text>Kampanya</Text>
            </View>
            <View style={styles.product}></View>
            <View style={styles.footer}></View>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        backgroundColor:'rgba(0,0,0,0.1)',
        flex:1,
        // borderColor:'black',
        // borderWidth:2,
        // paddingHorizontal:20
    },
    header:{
        backgroundColor:'pink',
        // flex:0.1
        height:width * 0.2
    },
    campaignsContainer:{
        backgroundColor:'yellow',
    //    flex:0.3
    height:width * 0.4

    },
    product:{
        backgroundColor:'orange',
        // flex:0.45
        //flexGrow:1 kalan alanının tamamını alıyo
        height:width*2,
        flexShrink:1 //taşan alanı kesiyor
    },
    footer:{
        backgroundColor:'lightgreen',
        // flex:0.15
        height:width * 0.2

    }
});

export default App