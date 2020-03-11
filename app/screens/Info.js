import React from 'react';
import { ImageBackground, ScrollView, TouchableOpacity, Dimensions, StyleSheet, Image, Text, View } from 'react-native';
import Sound from 'react-native-sound';
import Orientation from 'react-native-orientation-locker';

const { width, height } = Dimensions.get('window');

export default class Landing extends React.Component {
    render() {
        const { data } = this.props.navigation.state.params;
        return (
            <ImageBackground style={styles.container} source={require('../assets/images/covernew.png')}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.pop()}
                    style={{ position: 'absolute', top: 0, left: 0 }}
                >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            margin: 16,
                            borderRadius: 20,
                            tintColor: '#FFFFFF',
                            backgroundColor: 'rgba(0,0,0,0.35)'
                        }}
                        source={require('../assets/images/back.png')}
                    />
                </TouchableOpacity>
                <View style={{ width: '75%', height: '80%', backgroundColor: 'rgb(145,255,250)', borderRadius: 40, borderWidth: 4, borderColor: '#000', padding: 20, paddingHorizontal: 25 }}>
                    <ScrollView>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 20
                        }}>
                            {data.title}
                        </Text>
                        <Text style={{ fontSize: 16, marginBottom: 30 }}>
                            {data.desc}
                        </Text>
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>
                            -----Selamat Bermain-----
                        </Text>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: height,
        height: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '20%',
        height: 50,
        borderRadius: 12,
        marginHorizontal: 20
    },
    image: {
        width: '100%',
        height: '100%'
    }
})