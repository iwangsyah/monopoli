import React from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';

export default class PilihPemain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            active: 1,
            pemain: [
                { id: 1, source: require('./assets/images/pion_jubah_merah.png'), color: 'red' },
                { id: 2, source: require('./assets/images/pion_jubah_coklat_tua.png'), color: 'rgb(112, 60, 29)' },
                { id: 3, source: require('./assets/images/pion_jubah_abu_abu.png'), color: 'rgb(218,212,216)' },
                { id: 4, source: require('./assets/images/pion_jubah_jingga.png'), color: '#FF7F00' },
                { id: 5, source: require('./assets/images/pion_jubah_kuning.png'), color: 'yellow' },
                { id: 6, source: require('./assets/images/pion_jubah_coklat_muda.png'), color: 'rgb(210,130,38)' }
            ],
            players: []
        }
    }

    onPilih() {
        let { jumlah } = this.props.navigation.state.params
        let { pemain, players, count, active } = this.state;
        let pilih = pemain[count];
        let player = { score: 100, location: 0, isPenjara: false, image: pilih }
        players.push(player)

        pemain = pemain.filter(function (obj) {
            return obj.id !== pilih.id;
        });

        if (jumlah == active) {
            this.props.navigation.navigate('App', { players });
        } else {
            this.setState({ pemain, active: active + 1 })
        }
    }

    render() {
        let { active, count, pemain } = this.state;

        return (
            <ImageBackground style={styles.container} source={require('./assets/images/backgroundscreen.jpg')} blurRadius={2}>
                <View style={styles.box}>
                    <Text style={{ fontSize: 18 }}>Pilih Warna</Text>
                    <Text style={{ fontSize: 18 }}>Player {active}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            disabled={count == 0}
                            style={[styles.triangle, {
                                transform: [
                                    { rotate: '-90deg' }
                                ],
                                borderBottomColor: count == 0 ? 'grey' : '#000'
                            }]}
                            onPress={() => this.setState({ count: count - 1 })}
                        />
                        <Image style={styles.imageUser} source={pemain[count].source} />
                        <TouchableOpacity
                            disabled={count == pemain.length - 1}
                            style={[styles.triangle, {
                                transform: [
                                    { rotate: '90deg' }
                                ],
                                borderBottomColor: count == pemain.length - 1 ? 'grey' : '#000'
                            }]}
                            onPress={() => this.setState({ count: count + 1 })}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.lanjut}
                        onPress={() => this.onPilih()}
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
    },
    imageUser: {
        width: 80,
        height: 90,
        bottom: 15
    }
})