import {Text, View, TouchableOpacity} from "react-native";
import React from "react";
import {ApplicationActions, ApplicationContext} from "./context/ApplicationProvider";
import {BottomBarStyle} from "./style";
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
// import {faGlobe,faComment} from "@fortawesome/free-solid-svg-icons";


const BottomBar = (props) => {
    const { state, dispatch } = React.useContext(ApplicationContext)

    return React.useMemo(()=>(
        <View style={BottomBarStyle.bottomBar}>
            <TouchableOpacity style={BottomBarStyle.button} onPress={() => dispatch({ type: ApplicationActions.SET_PAGE, payload: {page:'snacks'}})}>
                <Text style={BottomBarStyle.text}>Snack</Text>
            </TouchableOpacity>

            <TouchableOpacity style={BottomBarStyle.button} onPress={() => dispatch({ type: ApplicationActions.SET_PAGE, payload: {page:'accounts'}})}>
                <Text style={BottomBarStyle.text}>Account</Text>
            </TouchableOpacity>
        </View>
    ), [state.page])
}

export default BottomBar