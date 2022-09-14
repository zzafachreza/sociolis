import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
export default function Download({ navigation, route }) {

    setTimeout(() => {
        navigation.goBack();
        alert('file is downloaded succesfully');
    }, 100)

    return (
        <View style={{
            flex: 1,
        }}>
            <WebView source={{ uri: 'https://sociolis.zavalabs.com/api/download.php?kelas=' + route.params.kelas }} />
        </View>
    )
}

const styles = StyleSheet.create({})