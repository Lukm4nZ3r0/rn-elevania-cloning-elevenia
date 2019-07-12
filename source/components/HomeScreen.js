import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Home from './Home'
import Profile from './Profile'
import AddAddress from './AddAddress'
import Cart from './Cart'
import CheckOut from './CheckOut'
import DetailProduct from './DetailProduct'
import DrawerCustom from './DrawerCustom'
import EditProfile from './EditProfile'
import EditAddress from './EditAddress'
import Notifications from './Notifications'
import ProductCategory from './ProductCategory'
import ChangePassword from './ChangePassword'
import ChangeBio from './ChangeBio'
import SplashScreen from './SplashScreen'
import Wishlist from './Wishlist'

import {
    createDrawerNavigator,
    createAppContainer,
    createStackNavigator
  } from 'react-navigation';


const homeStack = createStackNavigator({
    Home:{
        screen: Home
    },
    Wishlist: {
        screen: Wishlist
    },
    Profile:{
        screen: Profile
    },
    SplashScreen:{
        screen:SplashScreen
    },
    EditAddress:{
        screen:EditAddress
    },
    Profile:{
        screen: Profile
    },
    Notifications:{
        screen: Notifications
    },
    DetailProduct:{
        screen: DetailProduct
    },
    Cart:{
        screen: Cart
    },
    CheckOut:{
        screen: CheckOut
    },
    EditProfile:{
        screen: EditProfile
    },
    AddAddress:{
        screen: AddAddress
    },
    ProductCategory:{
        screen: ProductCategory
    },
    ChangePassword:{
        screen: ChangePassword
    },
    ChangeBio:{
        screen: ChangeBio
    },
})

const homeNavigator = createDrawerNavigator(
    {
        Home:{
            screen: homeStack
        }
    },
    {
        contentComponent: DrawerCustom
    }
)

const HomeScreen = createAppContainer(homeNavigator)

export default HomeScreen