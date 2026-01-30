import { NativeScrollEvent, NativeSyntheticEvent, SectionList, StyleSheet, Text, View, ViewToken } from 'react-native'
import  { useRef, useState } from 'react'
import ExploreList from '@components/list/ExploreList'
import RestaurantList from '@components/list/RestaurantList'
import { useSharedState } from '@features/tabs/SharedContext'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
// import { homeStyles } from '@unistyles/homeStyles'
import { restaurantStyles } from '@unistyles/restuarantStyles'
import BackToTopButton from '@components/ui/BackToTopButton'
import SortingAndFilters from '@components/home/SortingAndFilter'
import { filtersOption } from '@utils/dummyData'


const sectionData = [
    {title: 'Explore', data: [{}], renderItem: ()=><ExploreList /> },
    {title: 'Restaurants', data: [{}], renderItem: ()=><RestaurantList /> }
]

const MainList = () => {
  const { scrollY, scrollToTop, scrollYGlobal } = useSharedState()
  const previousScrollYTopButton = useRef<number>(0)
  const prevScrollY = useRef(0)
  const sectionListRef = useRef<SectionList>(null)

  const [isRestaurantVisible, setIsRestaurantsVisible] = useState(false)
  const [isNearEnd, setIsNearEnd] = useState(false)

  const handleScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollY = event?.nativeEvent?.contentOffset?.y;
    const isScrollingDown = currentScrollY > prevScrollY?.current

    scrollY.value = isScrollingDown 
    ? withTiming(1, {duration: 300})
    : withTiming(1, {duration: 300})



    scrollYGlobal.value = currentScrollY;
    prevScrollY.current = currentScrollY;

    const containerHeight = event.nativeEvent.contentSize.height;
    const layoutHeight = event?.nativeEvent?.layoutMeasurement?.height;
    const offset = event?.nativeEvent?.contentOffset?.y;

    setIsNearEnd(offset + layoutHeight >= containerHeight - 500 );
  };

  const handleScrollToTop = async () => {
    scrollToTop()
    sectionListRef.current?.scrollToLocation({
      sectionIndex: 0,
      itemIndex: 0,
      animated: true,
      viewPosition: 0,
    })
  };

  const backToTopStyle = useAnimatedStyle(()=>{
    const isScrollingUp = scrollYGlobal?.value < previousScrollYTopButton.current && scrollYGlobal.value > 180;
    const opacity = withTiming(
      isScrollingUp && (isRestaurantVisible || isNearEnd) ? 1: 0,
      {duration: 300},
    );

    const translateY = withTiming(
      isScrollingUp && (isRestaurantVisible || isNearEnd ) ? 0:10, {duration: 300}
    );

    previousScrollYTopButton.current = scrollYGlobal.value;


    return{
      opacity,
      transform: [{translateY}],
    }
  });

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 80
  }

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: Array<ViewToken>;
  }) => {
    const restaurantVisible = viewableItems.some(
      item => item?.section?.title === 'Restaurants' && item?.isViewable,
    );
    setIsRestaurantsVisible(restaurantVisible)
  }
  
  

  return (
    <>
    <Animated.View style={[restaurantStyles.backToTopButton , backToTopStyle]}>
      <BackToTopButton onPress={handleScrollToTop} />
     <SectionList 
     overScrollMode='always'
     onScroll={handleScroll}
     ref={sectionListRef}
     scrollEventThrottle={16}
     sections={sectionData}
     bounces={false}
     nestedScrollEnabled
     showsVerticalScrollIndicator={false}
     keyExtractor={(item, index) => index.toString()}
     contentContainerStyle={restaurantStyles.listContainer}
     stickySectionHeadersEnabled={true}
     viewabilityConfig={viewabilityConfig}
     onViewableItemsChanged={onViewableItemsChanged}
     renderSectionHeader={({section}) => {
      if(section.title !== 'Restaurants') {
        return null;
      }
      return(
        <Animated.View style={[isRestaurantVisible || isNearEnd ? restaurantStyles.shadowBottom : null]}>
          <SortingAndFilters  menuTitle='Sort' options={filtersOption}/>
        </Animated.View>
      )
     }}
      />
    </Animated.View>
    </>
  )
}

export default MainList

