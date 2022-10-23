import { View, Text, Button, SafeAreaView, StatusBar, Platform, StyleSheet, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import { COLORS } from '../../constants/theme'
import HomeHeader from '../../components/HomeHeader'
import Item from '../../components/Item'
import SearchBar from '../../components/SearchBar'

const Products = ({ navigation, route }) => {
  const data = route.params.data;
  const [items, setItems] = useState(data);

  const handleSearch = (value) => {
    if (!value.length) setItems(data);
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()) || item.category.name.toLowerCase().includes(value.toLowerCase()));
    if (filteredData.length) {
      setItems(filteredData);
    }
    else {
      setItems(data);
    }
  }


  return (
    <SafeAreaView style={styles.HomeContainer}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{padding : 20,borderBottomWidth : 0.2,borderBottomColor : "#d3d3d3",backgroundColor : COLORS.primary}}>
          <SearchBar onSearch={handleSearch} />
        </View>
        <FlatList
          data={items}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-evenly" }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Item item={item} data={items} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
  },
})

export default Products