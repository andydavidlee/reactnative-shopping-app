import React, { useState } from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

import productsReducer from './store/reducers/products'
import ShopNavigator from './navigation/ShopNavigator'

const rootReducer = combineReducers({
	products: productsReducer,
})

const store = createStore(rootReducer, composeWithDevTools()) //Remember to remove the second argument as the module is only for dev environment

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