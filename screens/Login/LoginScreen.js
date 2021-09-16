import React, {useEffect, useState} from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Button from "../../components/Button";
import {RFValue} from "react-native-responsive-fontsize";
import {Colors} from "../../resources/Colors";


const LoginScreen = (props) => {

    const {navigation} = props
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // useEffect(() => {
    //     console.log(email, password)
    // }, [email, password])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <Text style={styles.title}>
                    Login to <Text style={styles.brand}>Coinbase</Text>
                </Text>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>
                        Email
                    </Text>
                    <TextInput style={styles.inputText} type={"email"} onChangeText={setEmail}
                               placeholder={"johndoe@email.com"}/>
                    <Text style={styles.label}>
                        Password
                    </Text>
                    <TextInput  secureTextEntry={true}  style={styles.inputText} type={"password"} onChangeText={setPassword}
                               placeholder={"Password"}/>
                <View style={styles.helperView}>
                    <TouchableOpacity >
                        <Text style={styles.links}>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.links}>Privacy Policy</Text>
                    </TouchableOpacity>
                </View>
                <Button
                    text={"Sign in"}
                    disabled={true}
                    onPress={() => navigation.navigate("Home")}
                    btnStyle={styles.btnStyle}/>
                </View>
            </View>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
        mainView: {
            flexGrow: 1,
            paddingTop: RFValue(60),
            paddingHorizontal: 20,

        },
        title: {
            fontSize: RFValue(30),
            fontWeight: "bold",
            marginBottom: 20
        },
        brand:{
            color: Colors.primaryBlue,
            fontSize:RFValue(35)
        },
        label: {
            fontSize: RFValue(15),
            marginTop:20
        },
        formContainer: {
            alignSelf: "center",
            alignContent: "center",
            justifyContent: "center",
            width: "90%",
            height: "70%",

        },
        inputText: {
            height: RFValue(45),
            paddingHorizontal: 20,
            fontSize:RFValue(15),
            marginTop: 5,
            borderWidth:1,
            borderColor:Colors.mediumGrey,
            borderRadius:5
        },
        helperView: {
            marginTop:20,
            alignSelf: "center",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        links:{
            color:Colors.linkColor,
        },
        btnStyle: {
            width: "100%",
            marginTop:20
        }
    })

export default LoginScreen