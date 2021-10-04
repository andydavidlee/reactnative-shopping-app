import { Platform } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import CartScreen from '../screens/shop/CartScreen'
import Colors from '../constants/Colors'

const ProductsNavigator = createStackNavigator(
	{
		ProductsOverview: ProductsOverviewScreen,
		ProductDetails: ProductDetailsScreen,
		Cart: CartScreen,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primary : ' ',
			},
			headerTitleStyle: {
				fontFamily: 'open-sans-bold',
			},
			headerBackTileStyle: {
				fontFamily: 'open-sans',
			},
			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
		},
	}
)

export default createAppContainer(ProductsNavigator)
