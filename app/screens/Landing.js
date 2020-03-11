import React from 'react';
import { ImageBackground, StatusBar, TouchableOpacity, Dimensions, StyleSheet, Image, View } from 'react-native';
import RNExitApp from 'react-native-exit-app';
import Sound from 'react-native-sound';
import Orientation from 'react-native-orientation-locker';

const { width, height } = Dimensions.get('window');

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            petunjuk: {
                title: 'Petunjuk Permainan :',
                desc: '1.	Permainan ini dapat dimainkan oleh 2-4 pemain.\n\n2.	Setiap pemain diberikan modal sebanyak 100 koin.\n\n3.	Permainan dilengkapi dengan dua buah dadu.\n\n4.	Permainan dimulai dari kotak START.\n\n5.	Jika pemain berhenti di suatu tempat, maka pemain akan memperoleh pertanyaan yang berkaitan dengan tempat tersebut.\n\n6.	Jika pemain berhasil menjawab pertanyaan, maka pemain berhak memperoleh 100 koin tambahan. Jika pemain gagal menjawab pertanyaan, maka pemain akan mengalami pengurangan 50 koin.\n\n7.	Pemain dapat menggunakan fasilitas bantuan jika mengalami kesulitan dalam menjawab pertanyaan (Bantuan Pilihan, Bantuan Karakter, dan Tanya Teman).\n\n8.	Permainan akan berakhir jika salah satu pemain kehabisan koin atau ketika pertanyaan sudah habis.'
            }
        }
    }

    componentDidMount() {
        Orientation.lockToLandscape()
        let url = require('../assets/sounds/background_music_02.mp3')
        window.sounds = new Sound(url, '', (error) => {
            console.log('err: ', error)
        });
        setTimeout(() => {
            window.sounds.play((success) => {
                console.log('suc: ', success)
            });
            window.sounds.setVolume(0.5);
        }, 1000);
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../assets/images/covernew.png')} resizeMode="stretch">
                <StatusBar hidden />
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', bottom: 20, paddingHorizontal: 50 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('PilihJumlah')}
                    >
                        <Image
                            style={styles.image}
                            source={require('../assets/images/tmbl_mulai.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Tentang')}
                    >
                        <Image
                            style={styles.image}
                            source={require('../assets/images/tmbl_tentang.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Info', { data: this.state.petunjuk })}
                    >
                        <Image
                            style={styles.image}
                            source={require('../assets/images/tmbl_petunjuk.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => RNExitApp.exitApp()}
                    >
                        <Image
                            style={styles.image}
                            source={require('../assets/images/tmbl_keluar.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: height,
        height: width
    },
    button: {
        width: '20%',
        height: 50,
        borderRadius: 12
    },
    image: {
        width: '100%',
        height: '100%'
    }
})