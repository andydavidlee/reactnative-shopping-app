import React from 'react'
import { View, Platform, SafeAreaView, Button } from 'react-native'
import { useDispatch } from 'react-redux'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from '../screens/shop/OrdersScreen'
import UserProductsScreen from '../screens/user/UserProductsScreen'
import EditProductScreen from '../screens/user/EditProductsScreen'
import AuthScreen from '../screens/user/AuthScreen'
import StartUpScreen from '../screens/StartUpScreen'
import * as authActions from '../store/actions/auth'

import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const defaultNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primary : ' ',
	},
	headerTitleStyle: {
		fontFamily: 'open-sans-bold',
	},
	headerBackTitleStyle: {
		fontFamily: 'open-sans',
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
}

const ProductsNavigator = createStackNavigator(
	{
		ProductsOverview: ProductsOverviewScreen,
		ProductDetails: ProductDetailsScreen,
		Cart: CartScreen,
	},
	{
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
					size={23}
					color={drawerConfig.tintColor}
				/>
			),
		},
		defaultNavigationOptions: defaultNavOptions,
	}
)

const OrdersNavigator = createStackNavigator(
	{
		Orders: OrdersScreen,
	},
	{
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
					size={23}
					color={drawerConfig.tintColor}
				/>
			),
		},
		defaultNavigationOptions: defaultNavOptions,
	}
)

const AdminNavigator = createStackNavigator(
	{
		UserProducts: UserProductsScreen,
		EditProduct: EditProductScreen,
	},
	{
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
					size={23}
					color={drawerConfig.tintColor}
				/>
			),
		},
		defaultNavigationOptions: defaultNavOptions,
	}
)

const ShopNavigator = createDrawerNavigator(
	{
		Products: ProductsNavigator,
		Orders: OrdersNavigator,
		Admin: AdminNavigator,
	},
	{
		contentOptions: {
			activeTintColor: Colors.primary,
		},
		contentComponent: (props) => {
			const dispatch = useDispatch()
			return (
				<View style={{ flex: 1, paddingTop: 50 }}>
					<SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
						<DrawerItems {...props} />
						<Button
							title='Logout'
							color={Colors.primary}
							onPress={() => {
								dispatch(authActions.logout())
								// props.navigation.navigate('Auth')
							}}
						/>
					</SafeAreaView>
				</View>
			)
		},
	}
)

const AuthNavigator = createStackNavigator(
	{
		Auth: AuthScreen,
	},
	{ defaultNavigationOptions: defaultNavOptions }
)

const MainNavigator = createSwitchNavigator({
	StartUp: StartUpScreen,
	Auth: AuthNavigator,
	Shop: ShopNavigator,
})

export default createAppContainer(MainNavigator)
