import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants/theme"
import SearchBar from './SearchBar'

const HomeHeader = ({ onSearch,navigation }) => {
    return (
        <View style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.font,
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Image source={require('../assets/logo.png')}
                    resizeMode="contain"
                    style={{ width: 90, height: 25 }}
                />
                <View style={{
                    width: 45,
                    height:45,
                }}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Account")}>
                    <Image
                        source={require('../assets/person01.png')}
                        resizeMode="contain"
                        style={{ width: "100%", height: "100%" }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                marginVertical: SIZES.font
            }}>
                <Text style={{
                    fontFamily: FONTS.light,
                    fontSize: SIZES.medium,
                    color: COLORS.white,
                }}>Hello, Vikas 👋</Text>
                <Text style={{
                    fontFamily: FONTS.bold,
                    fontSize: SIZES.large,
                    color: COLORS.white,
                    marginTop: SIZES.base / 2
                }}>
                    Let's find a masterpeice
                </Text>
            </View>
            <View style={{
                fontSize: SIZES.font
            }}>
                <View style={{
                    width: "100%",
                    borderRadius: SIZES.font,
                    backgroundColor: COLORS.white,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: SIZES.font,
                    paddingVertical: SIZES.small - 2
                }}>
                    <Image
                        source={require('../assets/search.png')}
                        resizeMode="contain"
                        style={{ width: 20, height: 20, marginRight: SIZES.base, tintColor : COLORS.gray }}
                    />
                    <TextInput
                        placeholder='Search Products'
                        placeholderTextColor={COLORS.gray}
                        style={{ flex: 1 }}
                        onChangeText={onSearch}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeHeader