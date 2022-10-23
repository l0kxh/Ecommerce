import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants/theme';
import TitleBar from '../components/TitleBar';
import BottomAdd from '../components/BottomAdd';
import { useSelector } from 'react-redux';

const Details = ({ route, navigation }) => {
    const { products } = useSelector(state => state.productsReducer);
    const data = route.params.data;
    const [exists, setExists] = useState(route.params.exists);
    return (
        <View>
            <HeaderBar navigation={navigation} items={products} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImagesList data={data} />
                <TitleBar data={data} />
                <Divider />
                <ColorsBar />
                <Divider />
                <ColorsBar />
                <View style={{ marginTop: 150 }} />
            </ScrollView>
            <BottomAdd navigation={navigation} exists={exists} setExists={setExists} data={data} />
        </View>
    )
}


const ColorsBar = ({ props }) => {
    return (
        <View style={{
            marginTop: 20, height: 140,
            paddingHorizontal: 20,
            ...props
        }}>
            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.medium }}>Color</Text>
            <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Black</Text>
            <View style={{ flexDirection: "row", width: "35%", justifyContent: "space-around" }}>
                <View style={{ width: 50, height: 50, backgroundColor: "black", borderRadius: 50 }}></View>
                <View style={{ width: 50, height: 50, backgroundColor: "black", borderRadius: 50 }}></View>
            </View>
        </View>
    )
}

const Divider = () => {
    return (
        <View style={{ width: "100%", height: 2, backgroundColor: 'rgba(80,80,80,0.2)' }} />
    )
}

const ImagesList = ({ data }) => {
    return (
        <View style={{ paddingVertical: 5, marginLeft: 6 }}>
            <ScrollView horizontal>
                {data.images.map((item, index) => (
                    <Image key={index} source={{ uri: item }} style={{ width: 380, height: 280, resizeMode: "contain" }} />
                ))}
            </ScrollView>
        </View>
    )
}

const HeaderBar = ({ navigation, items }) => {
    return (
        <View style={HeaderStyles.HeaderContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name='arrow-back-outline' style={{ marginHorizontal: 20 }} size={30} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", width: 180, justifyContent: "space-evenly" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Products', {
                        data: items
                    })}
                >
                    <Ionicons name='search-outline' size={25} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('WishList')}
                >
                    <Ionicons name='heart-outline' size={25} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Ionicons name='cart-outline' size={25} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const HeaderStyles = StyleSheet.create({
    HeaderContainer: {
        height: 70,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.gray,
        marginBottom: 10,
    }
})

export default Details