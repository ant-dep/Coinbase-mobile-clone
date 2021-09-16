import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../resources/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import Button from "../../components/Button";

const WelcomeScreen = (props) => {
  const navigation = props.navigation;
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setvisible(true);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.textStyle}>Coinbase</Text>
        {visible && (
          <View style={styles.bottomView}>
            <Button
              btnStyle={styles.btnStyle}
              btnTextStyle={styles.btnTextStyle}
              text={"Get Started"}
              disabled={false}
              onPress={() => navigation.navigate("Signup")}
            />
            <Button
              btnStyle={styles.btnStyle2}
              text={"Sign In"}
              disabled={false}
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBlue,
  },
  mainView: {
    // backgroundColor:"#ff0000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: {
    position: "absolute",
    bottom: 30,
  },
  textStyle: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: RFValue(35),
  },
  btnStyle: {
    backgroundColor: Colors.white,
  },
  btnStyle2: {
    marginTop: 20,
    // backgroundColor:"rgba(0,53,118,0.67)",
  },
  btnTextStyle: {
    color: Colors.primaryBlue,
  },
});

export default WelcomeScreen;
