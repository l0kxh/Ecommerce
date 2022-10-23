import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants/theme'
import Ionicons from "react-native-vector-icons/Ionicons"
import { addToCart, addToWishList, removeFromCart, removeFromWishList } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

const BottomAdd = ({ navigation, exists, setExists, data }) => {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.productsReducer);
    const addWishList = product => dispatch(addToWishList(product));
    const removeWishList = (product) => dispatch(removeFromWishList(product.id));
    const addCart = product => dispatch(addToCart(product));
    const temp = cart.filter(it => it.id === data.id)
    const flag = temp.length > 0 ? true : false
    const [isThereCart, setIsThereCart] = useState(flag);
    const handleAdd = () => {
        setExists(!exists)
        addWishList(data);
    }
    const handleRemove = () => {
        setExists(!exists)
        removeWishList(data);
    }
    const handleAddCart = () => {
        setIsThereCart(!isThereCart);
        addCart(data);
    }
    return (
        <View style={{
            position: 'absolute',
            width: "100%",
            height: 80,
            bottom: 80,
            backgroundColor: COLORS.white,
            ...SHADOWS.dark,
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            <TouchableOpacity style={{
                backgroundColor: 'rgba(211,211,211,0.5)',
                padding: 18,
                borderRadius: 5
            }}>
                <Ionicons name='share-social-outline' size={22} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => exists ? handleRemove() : handleAdd()}
                style={{
                    backgroundColor: 'rgba(211,211,211,0.5)',
                    padding: 18,
                    borderRadius: 5
                }}>
                <Ionicons name={exists ? 'heart' : 'heart-outline'} size={26} color={COLORS.primary} />
            </TouchableOpacity>
            {isThereCart ? (
                 <TouchableOpacity
                    onPress={() => navigation.navigate('Cart')}
                    style={{
                        backgroundColor: COLORS.primary,
                        padding: 18,
                        borderRadius: 5,
                        width: 180
                    }}>
                    <Text
                        style={{
                            fontFamily: FONTS.bold,
                            textAlign: "center",
                            color: COLORS.white,
                            fontSize: SIZES.medium
                        }}>
                        Go To Bag
                    </Text>
                </TouchableOpacity>
                
            ) : (
                    <TouchableOpacity
                        onPress={() => handleAddCart()}
                        style={{
                            backgroundColor: COLORS.primary,
                            padding: 18,
                            borderRadius: 5,
                            width: 180
                        }}>
                        <Text
                            style={{
                                fontFamily: FONTS.bold,
                                textAlign: "center",
                                color: COLORS.white,
                                fontSize: SIZES.medium
                            }}>
                            Add To Bag
                        </Text>
                    </TouchableOpacity>
            )}
        </View>
    )
}

export default BottomAdd