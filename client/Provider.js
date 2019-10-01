import {Text, View, SafeAreaView} from "react-native";
import React, {Fragment} from "react";
import Home from "./Home";
import ApplicationProvider from "./context/ApplicationProvider";

const Provider = (props) => {
    return(
        <Fragment>
            <ApplicationProvider>
                <Home/>
            </ApplicationProvider>
        </Fragment>
    )
}

export default Provider