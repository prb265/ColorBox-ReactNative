import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';

const App = () => {
    const [defaultColor, setColor] = useState('white');
    return (
        <View style={{ flex: 1, top: "18%", alignItems: "center"}}>
            <Text style={styles.head}>Enter name of the color below.</Text>
            <View style={[styles.box, { backgroundColor: defaultColor }]}></View>
            <TextInput style={styles.inp} placeholder='Enter Color' onChangeText={(t) => {const c = t.trim().toLowerCase();setColor(c)}}/>
        </View>
    );
}
export default App;

const styles = StyleSheet.create({
    box: {
        width: "50%",
        height: "25%",
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 20,
    },
    inp: {
        textAlignVertical:"center",
        width: "80%",
        height: 40,
        fontSize: 10,
        textAlign: "center",
        borderBlockColor: "black",
        borderWidth: 1,
        borderRadius: 5
    },
    head: {
        fontSize: 20,
        color: "red",
        marginBottom: 20
    }
})
