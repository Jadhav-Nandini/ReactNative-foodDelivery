import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExploreSection from '@components/home/ExploreSection'
import RestaurantList from '@components/home/RestaurantList'


const sectionData = [
    {title: 'Explore', data: [{}], renderItem: ()=><ExploreSection /> },
    {title: 'Restaurants', data: [{}], renderItem: ()=><RestaurantList /> }
]

const MainList = () => {
  return (
    <>
     <SectionList  sections={sectionData}/>
    </>
  )
}

export default MainList

