import {Text, View, SafeAreaView} from "react-native";
import React from "react";
import {HomeStyle} from "./style";
import SnackPage from "./pages/Snack";
import {ApplicationContext} from "./context/ApplicationProvider";
import AccountPage from "./pages/Account";

const PageController = (props) => {
    const {state} = React.useContext(ApplicationContext)
    return React.useMemo(()=>(
        <View>
            {state.page==='snacks'&& <SnackPage/>}
            {state.page==='accounts'&& <AccountPage/>}
        </View>
    ), [state])
}

export default PageController