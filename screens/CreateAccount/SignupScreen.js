import React, {useState} from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    CheckBox
} from 'react-native';
import Button from "../../components/Button";
import {RFValue} from "react-native-responsive-fontsize";
import {Colors} from "../../resources/Colors";


const SignupScreen = (props) => {

    const {navigation} = props
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [isSelected, setSelection] = useState(false)


    return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.mainView}>
                <Text style={styles.title}>
                    Create account on <Text style={styles.brand}>Coinbase</Text>
                </Text>
                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>
                        Name
                    </Text>
                    <TextInput style={styles.inputText} type={"email"} onChangeText={setName}
                               placeholder={"John Doe"}/>
                    <Text style={styles.formLabel}>
                        Email
                    </Text>
                    <TextInput style={styles.inputText} type={"email"} onChangeText={setEmail}
                               placeholder={"johndoe@email.com"}/>
                    <Text style={styles.formLabel}>
                        Password
                    </Text>
                    <TextInput secureTextEntry={true} style={styles.inputText} type={"password"}
                               onChangeText={setPassword}
                               placeholder={"Password"}/>
                    <Text style={styles.formLabel}>
                        Confirm password
                    </Text>
                    <TextInput secureTextEntry={true} style={styles.inputText} type={"password"}
                               onChangeText={setCpassword}
                               placeholder={"Confirm password"}/>

                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}>
                            I certify that I am 18 years of age or older,
                            and I also agree to
                            <TouchableWithoutFeedback>
                                <Text style={styles.helperText}> Privacy Policy </Text>
                            </TouchableWithoutFeedback>
                            and
                            <TouchableWithoutFeedback>
                                <Text
                                    style={styles.helperText}> User Agreement </Text>
                            </TouchableWithoutFeedback>.
                        </Text>
                    </View>


                    <Button
                        text={"Create account"}
                        disabled={true}
                        onPress={() => navigation.navigate("Home")}
                        btnStyle={styles.btnStyle}/>
                </View>
            </ScrollView>
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
        brand: {
            color: Colors.primaryBlue,
            fontSize: RFValue(35)
        },
        formLabel: {
            marginTop:15,
            textAlign:"justify",
            width:"90%",
            fontSize: RFValue(15),
            paddingRight:10

        },
        label: {
            textAlign:"justify",
            width:"90%",
            fontSize: RFValue(15),
            paddingRight:10

        },
        formContainer: {
            alignSelf: "center",
            alignContent: "center",
            justifyContent: "center",
            width: "90%",
            height: "70%",
            marginTop: 15,
            marginBottom: 60

        },
        inputText: {
            height: RFValue(45),
            paddingHorizontal: 20,
            fontSize: RFValue(15),
            marginTop: 5,
            borderWidth: 1,
            borderColor: Colors.mediumGrey,
            borderRadius: 5
        },
        links: {
            color: Colors.linkColor,
        },
        helperText: {
            color: Colors.primaryBlue
        },
        btnStyle: {
            width: "100%",
            marginTop: 30
        },
        checkboxContainer: {
            marginTop: 20,
            width:"100%",
            flexDirection: "row",
            alignItems:"center",
            justifyContent: "center",
        },
        checkbox: {
            alignSelf: "center",
            width:"10%",
            marginRight:5
        },

    })

export default SignupScreen