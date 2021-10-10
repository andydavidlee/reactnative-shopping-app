// Central app component

// import modules
import React, { useState } from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// Modules for fonts
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

// Import Reducer
import productsReducer from './store/reducers/products'
import cartReducer from './store/reducers/cart'
import ordersReducer from './store/reducers/orders'

// Import Navigation
import ShopNavigator from './navigation/ShopNavigator'

// Combining reducers in to a central or 'root' reducer. Another term I have heard in connection is 'state sclices'
const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
	orders: ordersReducer,
})

// root reducer is centralised into the store.
const store = createStore(rootReducer, composeWithDevTools()) //Remember to remove the second argument as the module is only for dev environment

// async function returning a promise
const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	})
}

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false)

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		)
	}
	return (
		<Provider store={store}>
			<ShopNavigator />
		</Provider>
	)
}
