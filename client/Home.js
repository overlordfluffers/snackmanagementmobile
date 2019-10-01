import {Text, View, SafeAreaView} from "react-native";
import React from "react";
import {HomeStyle} from "./style";
import PageController from "./pageController";
import BottomBar from "./BottomBar";

const Home = (props) => {
    return(
        <SafeAreaView style={HomeStyle.safeAreaView}>
            <View style={HomeStyle.background}>
                <PageController/>
                <BottomBar/>
            </View>
        </SafeAreaView>
    )
}

export default Home