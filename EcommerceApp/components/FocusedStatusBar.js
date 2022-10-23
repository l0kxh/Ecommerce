import { StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from "@react-navigation/core"

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar animated={true} {...props} /> : <StatusBar animated={true} backgroundColor="#f2f2f2" />;
}

export default FocusedStatusBar