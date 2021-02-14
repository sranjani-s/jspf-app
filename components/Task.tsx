import * as React from 'react';
import { Text, View } from '../components/Themed';
import {StyleSheet, TouchableOpacity} from "react-native";

const Task = (props: any) => {
    return (
        <View style={styles.items}>
            <View style={styles.itemsLeft}>
                <View style={styles.square}/>
                <Text style={styles.itemsText}> {props.text} </Text>
            </View>
            <View style={styles.circle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    items:{
        backgroundColor:'#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    itemsLeft:{
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    itemsText:{
        maxWidth: '80%'
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity:0.4,
        borderRadius: 5,
        marginRight: 15
    },
    circle:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5
    }
});

export default Task;