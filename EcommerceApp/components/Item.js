import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants/theme'
import { addToWishList, removeFromWishList } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

const Item = ({ item, navigation, data }) => {
    const dispatch = useDispatch();
    const { wishlist } = useSelector(state => state.productsReducer);
    const addWishList = product => dispatch(addToWishList(product));
    const removeWishList = (product) => dispatch(removeFromWishList(product.id));
    var flag = 0;
    useEffect(() => {
        const temp = wishlist.filter(it => it.id === item.id)
        var flag = temp.length >0 ? true : false
    })
    const [exists, setExists] = useState(flag);
    const handleAdd = () => {
        setExists(!exists)
        addWishList(item);
    }
    const handleRemove = () => {
        setExists(!exists)
        removeWishList(item);
    }
    var title = item.title
    if (title.length > 18) {
        title = title.slice(0, 20)
        title = title + "..."
    }
    console.log(wishlist)
    return (
        <View>
            <View style={{ marginHorizontal: 2, marginVertical: 5, padding: 8, width: 190 }}>
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => {
                        navigation.navigate(
                            "Details",
                            {
                                data : item,
                                exists : exists,
                            }
                        )
                    }}>
                    <Image source={{ uri: item.images[0] != '' ? item.images[0] : 'https://images.pexels.com/photos/13728847/pexels-photo-13728847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} resizeMode="cover" style={{ width: "100%", height: "100%" ,borderRadius :8}} />

                </TouchableOpacity>

                <View style={{ marginHorizontal: SIZES.base, marginVertical: 3 }}>
                    <Text style={{ fontFamily: FONTS.medium, marginTop: SIZES.base }}>{title}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontFamily: FONTS.regular, marginTop: 5 }}>${item.price}</Text>
                        <TouchableOpacity
                            onPress={() => exists ? handleRemove() : handleAdd()}
                            style={{
                                backgroundColor: "white",
                                padding: 2,
                                borderRadius: 45
                            }}>
                            <Ionicons name={exists ? 'heart' : 'heart-outline'} size={22} color={COLORS.primary} />
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
export default Item


