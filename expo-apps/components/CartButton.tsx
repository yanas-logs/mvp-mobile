import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants';
import { Ionicons } from '@expo/vector-icons';

const CartButton = () => {
    const totalItems = 10;
    return (
        <TouchableOpacity className="cart-btn" onPress={() => { }}>
           <Ionicons name="cart" size={5} color="black" />
            {totalItems > 0 && (
                <View className="cart-badge">
                    <Text className="small-bold text-white ">{totalItems}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default CartButton