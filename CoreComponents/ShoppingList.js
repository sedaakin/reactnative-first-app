import React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const ShoppingList = props => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>ALIŞVERİŞ LİSTESİ</Text>
                </View>
                <View>
                    <TextInput style={styles.textInput}
                    placeholder="Yazmaya başlayın..."/>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>EKLE</Text>
                </TouchableOpacity>
                <Text style={styles.text1}>Alınacaklar</Text>
                <View style={styles.alinacaklarContainer}>
                    {/* Kutucuk */}
                    <View style={styles.alinacaklarKutu} />
                    <Text style={styles.alinacaklatText}>Ekmek</Text>
                    {/* Buton */}
                    <TouchableOpacity style={styles.alinacaklarButon}>
                        <Text>Sil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {

    },
    container: {

    },
    headerContainer: {        
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'black',
        borderWidth:2
    },
    headerText: {
        paddingTop :20,
        color:'orange',
        fontWeight:'bold',
        marginBottom:10,
        marginHorizontal:20,

    },
    textInputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
        
    },
    textInput:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,        
        borderColor:'grey',
        borderWidth:2,
        borderRadius:10
    },
    button :{
        backgroundColor:'orange',
        borderColor:'orange',
        height:50,
        borderWidth:2,
        borderRadius:10,
        marginHorizontal:20,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        
    },
    buttonText:{
        color:'white',
        fontWeight:'bold'
    },
    text1:{
        marginHorizontal:20,
        marginTop:20,
        color:'orange',
        fontWeight:'bold'
    },
    alinacaklarContainer:{
        //flex:1
    },
    alinacaklarKutu:{
        borderColor:'grey',
        borderWidth:2,
        borderRadius:5,
        width:20,
        height:20,
        marginLeft:20,
        marginTop:20,
        
    },
    alinacaklatText:{

    },
    alinacaklarButon:{
    }

});

export default ShoppingList;
