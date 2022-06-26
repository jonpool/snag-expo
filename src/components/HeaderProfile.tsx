import React,{useContext} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import  authContext  from '../contexts/authContext';
import ProductsMap from '../pages/ProductsMap'

interface HeaderProps {
    title: string,
    showCancel?: boolean
}

export default function Header({ title, showCancel = true }: HeaderProps) {
    const { signedOut,signOut } = useContext(authContext);
    const navigation = useNavigation();

    function handleGoBackToAppHomepage() {
        signOut();
        navigation.navigate("ProductsMap");
        alert("You signed out!");
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack} >
                <Feather name="arrow-left" size={24} color="#15b6d6" />
            </BorderlessButton>

            <Text style={styles.title}> {title} </Text>

            { showCancel ? (
                <BorderlessButton onPress={handleGoBackToAppHomepage} >
                    <Feather name="log-out" size={24} color="#ff669d" />
                </BorderlessButton>
            ) : (
                <View/>
            ) }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 110,
    },
    title: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#15b6d6',
        fontSize: 15
    }
})