import React from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 2
        }
    }
    render() {
        let { count } = this.state;
        return (
            <ImageBackground style={styles.container} source={require('./assets/images/backgroundscreen.jpg')} blurRadius={2}>
                <View style={styles.box}>
                    <Text style={{ fontSize: 18 }}>Pilih Jumlah Pemain</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            disabled={count == 2}
                            style={[styles.triangle, {
                                transform: [
                                    { rotate: '-90deg' }
                                ],
                                borderBottomColor: count == 2 ? 'grey' : '#000'
                            }]}
                            onPress={() => this.setState({ count: count - 1 })}
                        />
                        <Text
                            style={{
                                fontSize: 22, marginHorizontal: 25
                            }}
                        >
                            {count}
                        </Text>
                        <TouchableOpacity
                            disabled={count == 4}
                            style={[styles.triangle, {
                                transform: [
                                    { rotate: '90deg' }
                                ],
                                borderBottomColor: count == 4 ? 'grey' : '#000'
                            }]}
                            onPress={() => this.setState({ count: count + 1 })}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.lanjut}
                        onPress={() => this.props.navigation.navigate('PilihPemain', { jumlah: count })}
                    >
                        <Text style={{ color: '#FFF' }}>
                            LANJUT
                            </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    box: {
        backgroundColor: '#FFF',
        width: 300,
        height: 200,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 6,
        borderColor: '#000',
        borderWidth: 3,
        paddingVertical: 20
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderBottomWidth: 40,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent'
    },
    lanjut: {
        backgroundColor: '#304ffe',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    }
})