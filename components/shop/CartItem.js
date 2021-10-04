import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Platform,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const CartItem = () => {
	return (
		<View style={styles.cartItem}>
			<Text style={styles.itemData}>
				<Text style={styles.quatity}>QTY</Text>
				<Text style={styles.title}> TITLE</Text>
			</Text>
			<View style={styles.itemData}>
				<Text style={styles.amount}>AMOUNT</Text>
				<TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
					<Ionicons
						name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
						size={23}
						color='red'
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({})

export default CartItem
