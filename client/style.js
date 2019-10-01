import {StyleSheet, Dimensions} from 'react-native'


const palette = {
    background:'#FFFFFF',
    grey: '#D6D6D6',
    primaryLight:'#7DBDBE',
    primary:'#137DA4',
    primaryDark:'#003DAD'
}

export const HomeStyle = StyleSheet.create({
    safeAreaView:{
        flex:1,
        width: '100%',
        backgroundColor: palette.primary
    },
    background:{
        flex:1,
        width: '100%',
        backgroundColor: palette.background
    }
})

export const BottomBarStyle = StyleSheet.create({
    bottomBar:{
        backgroundColor:palette.primary,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display:'flex',
        flexDirection:'row',
        height:48,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5
    },
    button:{
        width: Dimensions.get('window').width/4,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    text:{
        fontSize:18,
        color:palette.grey,
    }
})