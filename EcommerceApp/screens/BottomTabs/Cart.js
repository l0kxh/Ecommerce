import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, FONTS, SIZES, STYLES } from '../../constants/theme';
import { useSelector } from 'react-redux';

const Cart = ({ navigation }) => {
  const { cart } = useSelector(state => state.productsReducer);
  return (
    <View>
      {/* <FlatList
        ListHeaderComponent={<HeaderBar />}
        data={cart}
        keyExtractor={item => item.id}
        renderItem={(item) => <CartItem navigation={navigation} item={item} />}
      /> */}
      {/* <View style={{ height : 50,width :"100%"}}></View> */}
    </View>
  )
}

export default Cart

const HeaderBar = ({ navigation }) => {
  return (
    <View style={HeaderStyles.Outline}>
      <View style={HeaderStyles.HeaderContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='close-outline' size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('WishList')} >
          <Ionicons name='heart-outline' size={25} />
        </TouchableOpacity>
      </View>
      <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.large, marginBottom: 10 }}>Bag</Text>
    </View>
  )
}

const HeaderStyles = StyleSheet.create({
  HeaderContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
  },
  Outline: {
    borderBottomWidth: 0.2,
    borderBottomColor: COLORS.gray,
    paddingHorizontal: 20,
  }
})
