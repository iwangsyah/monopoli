import React from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';

export default class PilihPemain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            active: 1,
            isPilih: false,
            pemain: [
                { id: 1, name: 'Sariputta', description: 'Terkemuka dalam kebijaksanaan', source: require('../assets/images/pion_jubah_merah.png'), color: 'red' },
                { id: 2, name: 'Anuruddha', description: 'Terkemuka dalam mata dewa', source: require('../assets/images/pion_jubah_coklat_tua.png'), color: 'rgb(112, 60, 29)' },
                { id: 3, name: 'Ananda', description: 'Pembantu tetap Sang Buddha dan bendahara Dhamma', source: require('../assets/images/pion_jubah_abu_abu.png'), color: 'rgb(218,212,216)' },
                { id: 4, name: 'Moggallana', description: 'Terkemuka dalam kekuatan “gaib”', source: require('../assets/images/pion_jubah_jingga.png'), color: '#FF7F00' },
                { id: 5, name: 'Upali', description: 'Terkemuka dalam menjaga Sila', source: require('../assets/images/pion_jubah_kuning.png'), color: 'yellow' },
                { id: 6, name: 'Maha Kassapa ', description: 'Terkemuka dalam pelaksanaan latihan keras', source: require('../assets/images/pion_jubah_coklat_muda.png'), color: 'rgb(210,130,38)' }
            ],
            players: []
        }
    }

    onPilih() {
        let { jumlah } = this.props.navigation.state.params
        let { pemain, players, count, active } = this.state;
        let pilih = pemain[count];
        let player = { score: 100, location: 0, isPenjara: false, image: pilih, stop: false, karakter: 3, pilihan: 3, teman: 3 }
        players.push(player)

        pemain = pemain.filter(function (obj) {
            return obj.id !== pilih.id;
        });

        if (jumlah == active) {
            this.setState({ isPilih: true })
            this.props.navigation.navigate('App', { players });
        } else {
            this.setState({ isPilih: true })
            setTimeout(() => {
                this.setState({ pemain, isPilih: false, active: active + 1 })
            }, 1200)
        }
    }

    render() {
        let { active, count, pemain, isPilih } = this.state;

        return (
            <ImageBackground style={styles.container} source={require('../assets/images/backgroundscreen.jpg')} blurRadius={2}>
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
                <View style={styles.box}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Pilih Pemain</Text>
                    <Text style={{ fontSize: 18 }}>{pemain[count].name}</Text>

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

                    <Text style={{ fontSize: 15, marginBottom: 15, textAlign: 'center' }}>{pemain[count].description}</Text>

                    <TouchableOpacity
                        disabled={isPilih}
                        style={[styles.lanjut, { backgroundColor: isPilih ? 'grey' : '#304ffe' }]}
                        onPress={() => this.onPilih()}
                    >
                        <Text style={{ color: '#FFF' }}>
                            {`Player ${active}`}
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
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
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