import { View, Text,Image } from 'react-native'
import React from 'react'
import { FONTS,SIZES,COLORS } from '../constants/theme'


const TitleBar = ({data}) => {
  return (
      <View style={{ marginHorizontal: 18, marginVertical: 10 }}>
          <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, color: "gray" }}>{data.title}</Text>
          <Text style={{ fontFamily: FONTS.light, color: "gray" }}>{data.description}</Text>
          <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.medium, marginTop: SIZES.font }}>
              ${data.price}
              <Text style={{ fontFamily: FONTS.regular, color: "gray" }}>
                  {" "}MRP
              </Text>
          </Text>
          <Text style={{ fontFamily: FONTS.regular, color: "gray", fontSize: 12 }}>Price inclusive of all taxes.</Text>
          <View style={{ width: "100%", height: 110, borderWidth: 1, borderColor: 'rgba(88,88,88,0.3)', marginTop: 20, paddingHorizontal: 10, flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: "65%", flexDirection: "column", justifyContent: "space-evenly" }} >
                  <View style={{
                      flexDirection: "row", alignItems: "center",
                  }}>
                      <Image source={{ uri: "https://img.icons8.com/metro/104/000000/discount.png" }} style={{ width: 25, height: 25, tintColor: COLORS.primary }} />
                      <Text style={{ marginLeft: SIZES.base, fontFamily: FONTS.medium, color: COLORS.primary }}>Offer Price ${data.price}</Text>
                  </View>
                  <Text style={{
                      fontFamily: FONTS.light, fontSize: 10
                  }}>Shipping on us for Your First Product. Grab this offer.</Text>
              </View>
              <View style={{ padding: 5 }}>
                  <View style={{ height: "96%", width: 115, backgroundColor: "#d3d3d3", borderRadius: 5, padding: 20 }}>
                      <Text style={{ textAlign: "center", fontFamily: FONTS.light, color: COLORS.gray }}>{"Use Code\nFREESHIP\nT&C"}</Text>
                  </View>
              </View>
          </View>
      </View>
  )
}

export default TitleBar