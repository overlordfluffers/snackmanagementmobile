import {Text, View, SafeAreaView} from "react-native";
import React from "react";

const SnackPage = (props) => {
    return React.useMemo(()=>(
        <View>
            <Text>This is a snack page</Text>
        </View>
    ), [])
}

export default SnackPage