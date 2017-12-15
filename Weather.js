import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from 'prop-types';


const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "It's rainy!",
        subtitle: "How about going Cafe with Daji?",
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Super Sunny",
        subtitle: "Hang out with your Daji!",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunder in the house!",
        subtitle: "Actually, outside of the house",
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "Keep calm and Drink",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Let it Snow!",
        subtitle: "Do you want to build a snowman?",
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ["#89F7Fe", "#66A6FF"],
        title: "Drizzle!",
        subtitle: "It's like 'If Only' movie.",
        icon: 'weather-hail'
    },
    Haze: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Haze",
        subtitle: "Drive Slowly!",
        icon: 'weather-fog'
    },
    Mist: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Mist!",
        subtitle: "It's not a cosmetic product.",
        icon: 'weather-hail'
    }
}

function Weather({ weatherName, temp }){
    console.log(weatherName);
    return(
        <LinearGradient 
            colors={weatherCases[weatherName].colors}
            style={styles.container}
        >
            <View style={styles.upper}>
                <MaterialCommunityIcons
                  color="white"
                  size={144}
                  name={weatherCases[weatherName].icon} 
                 />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>
                 {weatherCases[weatherName].subtitle}
                </Text>
            </View>
        </LinearGradient>
    )
}

Weather.protoTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired,
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "transparent",
    },
    temp:{
        fontSize: 48,
        color: "white",
        marginTop: 10,
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 20,
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white", 
        marginBottom: 10,
        fontWeight: "300",
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24,
    },
})