import {  Image, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS,SIZES,FONTS, SHADOWS } from '../constants/theme'

const SearchBar = ({onSearch}) => {
  return (
    <View style={{
      width: "100%",
      borderRadius: SIZES.font,
      backgroundColor: COLORS.white,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.small - 2,
      ...SHADOWS.dark
    }}>
      <Image
        source={require('../assets/search.png')}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: SIZES.base, tintColor: COLORS.gray }}
      />
      <TextInput
        placeholder='Search Products'
        placeholderTextColor={COLORS.gray}
        style={{ flex: 1 }}
        onChangeText={onSearch}
      />
    </View>
  )
}

export default SearchBar