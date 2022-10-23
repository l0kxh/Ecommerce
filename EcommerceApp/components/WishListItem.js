import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { lazy, useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants/theme'
import { addToWishList, removeFromWishList } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

const WishListItem = ({ item, navigation, data }) => {
    const dispatch = useDispatch();
    const { wishlist } = useSelector(state => state.productsReducer);
    const addWishList = product => dispatch(addToWishList(product));
    const removeWishList = (product) => dispatch(removeFromWishList(product.id));
    const temp = wishlist.filter(it => it.id === item.id)
    const flag = temp.length > 0 ? true : false
    const [exists, setExists] = useState(flag);
    const handleAdd = () => {
        addWishList(item);
    }
    const handleRemove = () => {
        removeWishList(item);
    }
    var title = item.title
    if (title.length > 18) {
        title = title.slice(0, 20)
        title = title + "..."
    }
    return (
        <View>
            <View style={{ marginHorizontal: 2, marginVertical: 5, padding: 8, width: 190 }}>
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => {
                        navigation.navigate(
                            "Details",
                            {
                                data: item,
                                exists : exists,
                            }
                        )
                    }}>
                    <Image source={{ uri: item.images[0] != '' ? item.images[0] : 'https://images.pexels.com/photos/13728847/pexels-photo-13728847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} resizeMode="cover" style={{ width: "100%", height: "100%", borderRadius: 8 }} />

                </TouchableOpacity>

                <View style={{ marginHorizontal: 4, marginVertical: 3 }}>
                    <Text style={{ fontFamily: FONTS.medium, marginTop: SIZES.base }}>{title}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontFamily: FONTS.regular, marginTop: 5 }}>${item.price}</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.primary,
                                paddingTop: 9,
                                borderRadius: 8,
                                marginRight: 4,
                                width: 120,
                                paddingHorizontal: 8,
                                height: 40,
                                ...SHADOWS.light
                            }}
                        >
                            <Text style={{ fontSize: SIZES.medium, fontFamily: FONTS.bold, textAlign: "center", color: COLORS.white }}>Add To Bag</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => exists ? [setExists(!exists), handleRemove()] : [setExists(!exists), handleAdd()]}
                            style={{
                                backgroundColor: "white",
                                padding: 7,
                                borderRadius: 8,
                                height: 40,
                                ...SHADOWS.light
                            }}>
                            <Ionicons name='trash-outline' size={24} color={COLORS.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 170,
        height: 200,
        top: 0,
    }
})
export default WishListItem


