import { View, Text, SafeAreaView, FlatList, StyleSheet, Button, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import HomeHeader from '../../components/HomeHeader'
import { COLORS } from '../../constants/theme'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../../redux/actions"

const Home = ({ navigation }) => {
    const { products, isLoading } = useSelector(state => state.productsReducer);
    const dispatch = useDispatch();
    const fetchProducts = () => dispatch(getProducts());
    useEffect(() => {
        fetchProducts();

    }, [])
    return (
        <SafeAreaView style={styles.HomeContainer}>
            <FocusedStatusBar backgroundColor={COLORS.primary} />
            <View style={{ flex: 1 }}>
                <HomeHeader />
                {isLoading ? (
                    <View style={{ justifyContent: "center", flex: 1 }}>
                        <ActivityIndicator size={40} color={COLORS.primary} />
                    </View>
                ) : (
                    <Button onPress={() => navigation.navigate('Products', {
                        data: products
                    })} title="CLick" />
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    HomeContainer: {
        flex: 1,
    },
})

export default Home
