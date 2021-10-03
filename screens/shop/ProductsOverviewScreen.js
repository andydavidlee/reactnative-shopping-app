import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import ProductItem from '../../components/shop/ProductItem'

import * as cartActions from '../../store/actions/cart'

const ProductsOverviewScreen = (props) => {
	const products = useSelector((state) => state.products.availableProducts)
	const dispatch = useDispatch()

	return (
		<FlatList
			data={products}
			keyExtractor={(item) => item.id}
			renderItem={(itemData) => (
				<ProductItem
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onViewDetail={() => {
						props.navigation.navigate('ProductDetails', {
							productId: itemData.item.id,
							productTitle: itemData.item.title,
						})
					}}
					onAddToCart={() => {
						dispatch(cartActions.addToCart(itemData.item))
					}}
				/>
			)}
		/>
	) //newer versions of react will not need key extractor
}

ProductsOverviewScreen.navigationOptions = {
	headerTitle: 'All Products',
}

export default ProductsOverviewScreen
