import { View, Text, FlatList, } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import WishListItem from "../../components/WishListItem"
import { StatusBar } from 'expo-status-bar'
import { COLORS, FONTS, SIZES,SHADOWS } from '../../constants/theme'

const WishList = ({navigation}) => {
  const { wishlist } = useSelector(state => state.productsReducer);
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <Text style={{fontSize:22,fontFamily : FONTS.bold,color : COLORS.primary,marginLeft:15,marginBottom:10}}>Wishlist</Text>
      <FlatList
        data={wishlist}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <WishListItem item={item} data={wishlist} navigation={navigation} />
        )}
      />
    </View>
  )
}

export default WishList