import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {Colors} from "../../resources/Colors";


const Button = (props) => {


    const {text, icon, disabled, btnStyle, btnTextStyle, onPress} = props
    // const onPressHandler = () => {
    //     console.warn("nav to login")
    //     navigation.navigate(componentTo)
    // }
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, btnStyle]}
            activeOpacity={0.5}
            onPress={onPress}
            disabled={disabled}
        >
            {text &&
            <Text style={[styles.buttonText, btnTextStyle, {marginRight: icon ? 10 : 0}]}>{text}</Text>
            }

            {icon &&
            <Image style={[styles.buttonIcon]} source={icon} resizeMode="contain"/>
            }
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    buttonContainer: {
        width: Dimensions.get('window').width - (Dimensions.get('window').width*0.1),
        height: RFValue(50),
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: Colors.primaryBlue
    },
    buttonText: {
        fontSize: RFValue(15),
        color: Colors.white,
        fontWeight: "bold",
    },
    buttonIcon: {
        height: RFValue(20),
        width: RFValue(25),
        tintColor: Colors.white
    }
})

export default Button;