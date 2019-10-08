import React, {Component} from 'react';
import {ImageBackground, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Sound from 'react-native-sound';

const audioTests = [
  {
    title: 'dadu 3',
    url: require('./assets/sounds/dadu_3.m4a')
  },
  {
    title: 'dadu 4',
    url: require('./assets/sounds/dadu_4.m4a')
  },
  {
    title: 'dadu 5',
    url: require('./assets/sounds/dadu_5.m4a')
  },
  {
    title: 'dadu 6',
    url: require('./assets/sounds/dadu_6.m4a')
  },
  {
    title: 'dadu 7',
    url: require('./assets/sounds/dadu_7.m4a')
  },
  {
    title: 'dadu 8',
    url: require('./assets/sounds/dadu_8.m4a')
  },
  {
    title: 'dadu 9',
    url: require('./assets/sounds/dadu_9.m4a')
  },
  {
    title: 'dadu 10',
    url: require('./assets/sounds/dadu_10.m4a')
  },
  {
    title: 'double dadu 2',
    url: require('./assets/sounds/double_dadu_2.m4a')
  },
  {
    title: 'double dadu 4',
    url: require('./assets/sounds/double_dadu_4.m4a')
  },
  {
    title: 'double dadu 6',
    url: require('./assets/sounds/double_dadu_6.m4a')
  },
  {
    title: 'double dadu 8',
    url: require('./assets/sounds/double_dadu_8.m4a')
  },
  {
    title: 'double dadu 10',
    url: require('./assets/sounds/double_dadu_10.m4a')
  },
  {
    title: 'double dadu 12',
    url: require('./assets/sounds/double_dadu_12.m4a')
  },
];

const dataImages = [
  { id: 1, name: 'start', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 2, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 3, name: 'studi', uri: {} },
  { id: 4, name: 'taman lumbini', uri: require('./assets/images/taman_lumbini_2.png') },
  { id: 5, name: 'sungai anoma', uri: require('./assets/images/taman_lumbini_2.png') },
  { id: 6, name: 'aksi', uri: {} },
  { id: 7, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 8, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 9, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 10, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 11, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 12, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 13, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 14, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 15, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 16, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 17, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 18, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 19, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 20, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 21, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 22, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 23, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 24, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 25, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 26, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 27, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 28, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 29, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 30, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 31, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
  { id: 32, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png') },
]

export default class App extends Component {
  constructor(props) {
    super(props);
    Sound.setCategory('Playback', true);
    this.state = {
      player1Activated: 0,
      player2Activated: 0,
      player3Activated: 0,
      player4Activated: 0,
      activePlayer: 1,
      randomNumber: 0,
      random1: 0,
      random2: 0,
      run: false,
      tests: {}
    }
  }

  componentDidMount() {
    
  }
  
  playSound(testInfo, component) {  
    setTimeout(() => {
      var sound = new Sound(testInfo.url, '', (error) => {
        console.log('err: ', error)
      });
    
      setTimeout(() => {
        sound.play((success) => {
          console.log('suc: ', success)
        });
      }, 100);
    }, 100);
  }


  boxHorizontal(position) {
    let start = position == 'top' ? 16 : 8;
    let end = position == 'top' ? 24 : 0;
    let boxs = [];
    for (let i = start; position == 'top' ? i <= end : i >= end ; position == 'top' ?  i++ : i--) {
      console.log(i);
      
      let data = dataImages.find(function(item) {
        
        if (item.id == i) {
          console.log('item: ', item.id);
        console.log('i: ', i);
        }
        return item.id == i+1;
      });
      
      let box = (
        <ImageBackground style={[styles.box, { backgroundColor: data.name == 'studi' ? 'yellow' : 'rgb(30,177,237)'}]} source={data.uri}>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.player1, { display: this.state.player1Activated == i ? 'flex' : 'none' }]}/>
            <View style={[styles.player2, { display: this.state.player2Activated == i ? 'flex' : 'none' }]}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.player3, { display: this.state.player3Activated == i ? 'flex' : 'none' }]}/>
            <View style={[styles.player4, { display: this.state.player4Activated == i ? 'flex' : 'none' }]}/>
          </View>
        </ImageBackground>
      )
      boxs.push(box)
    }
    return boxs;
  }

  boxVertical(position) {
    let start = position == 'left' ? 15 : 25;
    let end = position == 'left' ? 9 : 31;
    let boxs = [];
    
    for (let i = start; position == 'left' ? i >= end : i <= end ; position == 'left' ?  i-- : i++) {
      let data = dataImages.find(function(item) {
        return item.id == i+1;
      });

      let box = (
        <ImageBackground style={styles.box} source={data.uri}>
          <View style={{flexDirection: 'row', backgroundColor: 'yellow'}}>
            <View style={[styles.player1, { display: this.state.player1Activated == i ? 'flex' : 'none'}]}/>
            <View style={[styles.player2, { display: this.state.player2Activated == i ? 'flex' : 'none' }]}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.player3, { display: this.state.player3Activated == i ? 'flex' : 'none' }]}/>
            <View style={[styles.player4, { display: this.state.player4Activated == i ? 'flex' : 'none' }]}/>
          </View>
        </ImageBackground>
      )
      boxs.push(box)
    }
    return boxs;
  }

  onPressRoll() {
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;
    let random = random1 + random2;
    let testInfo = audioTests.find(function(element) {
      return element.title == `dadu ${random}`;
    });
    if (random1 == random2) {
      testInfo = audioTests.find(function(element) {
        return element.title == `double dadu ${random/2}`;
      });
    }
    
    this.playSound(testInfo, this);
    this.setState({ random1, random2, randomNumber: random, run: true })
    setTimeout(() => {
      this.moveCircle(random)
    }, 1000)
  }

  moveCircle(random) {
    let { activePlayer, player1Activated, player2Activated, player3Activated, player4Activated } = this.state
    
    if (activePlayer == 1) {
      let interval = setInterval(() => {
        if (this.state.player1Activated == player1Activated + random-1) {
          clearInterval(interval)
          this.setState({ activePlayer: activePlayer == 4 ? 1 : activePlayer + 1, run: false })
        }
        this.setState({ player1Activated: this.state.player1Activated == 39 ? 0 : this.state.player1Activated + 1 })
      }, 500)
    } else if (activePlayer == 2) {
      let interval = setInterval(() => {
        if (this.state.player2Activated == player2Activated + random-1) {
          clearInterval(interval)
          this.setState({ activePlayer: activePlayer == 4 ? 1 : activePlayer + 1, run: false })
        }
        this.setState({ player2Activated: this.state.player2Activated == 39 ? 0 : this.state.player2Activated + 1 })
      }, 500)
    } else if (activePlayer == 3) {
      let interval = setInterval(() => {
        if (this.state.player3Activated == player3Activated + random-1) {
          clearInterval(interval)
          this.setState({ activePlayer: activePlayer == 4 ? 1 : activePlayer + 1, run: false })
        }
        this.setState({ player3Activated: this.state.player3Activated == 39 ? 0 : this.state.player3Activated + 1 })
      }, 500)
    } else {
      let interval = setInterval(() => {
        if (this.state.player4Activated == player4Activated + random-1) {
          clearInterval(interval)
          this.setState({ activePlayer: activePlayer == 4 ? 1 : activePlayer + 1, run: false })
        }
        this.setState({ player4Activated: this.state.player4Activated == 39 ? 0 : this.state.player4Activated + 1 })
      }, 500)
    }
  }

  render() {
    let { random1, random2, randomNumber, activePlayer, run } = this.state
    return (
      <ImageBackground style={styles.container} source={require('./assets/images/background.png')} blurRadius={2}>
        <View style={{ width: 420, height: 335, alignItems: 'center', backgroundColor: '#fff', padding: 10}}>
          <View style={{ flexDirection: 'row' }}>
            {this.boxHorizontal('top')}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              {this.boxVertical('left')}
            </View>
            <View style={{ width: 314, height: 245, backgroundColor: '#f8c291' }}>
              <View style={{ width: 120, height: 50, backgroundColor: 'yellow', transform: [{ rotate: '-50deg' }], position: 'absolute', left: 20, top: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontSize:16, fontWeight: 'bold'}}>STUDI</Text>
              </View>
              <Text style={{ transform: [{ rotate: '-50deg' }], width: 200, fontSize: 40, fontWeight: 'bold', position: 'absolute', left: 60, top: 100 }}>MODH1st</Text>
              <View style={{ width: 120, height: 50, backgroundColor: 'rgb(30,177,237)', transform: [{ rotate: '-50deg' }], position: 'absolute', right: 20, bottom: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontSize:16, fontWeight: 'bold'}}>AKSI</Text>
              </View>
            </View>
            <View>
              {this.boxVertical('right')}
            </View>
          </View>
          <View style={{ flexDirection: 'row'}}>
            {this.boxHorizontal('bottom')}
          </View>
        </View>

        {/* <View style={{alignSelf: 'center', height: 80, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Player {activePlayer} Play</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', display: run ? 'flex' : 'none'}}>
            <Text style={{fontSize: 12, fontWeight: 'bold', margin: 5}}>{random1}</Text>
            <Text>+</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', margin: 5}}>{random2}</Text>
          </View>
          <Text style={{fontSize: 12, fontWeight: 'bold', margin: 5}}>{run ? `${randomNumber} Langkah` : ''}</Text>
          <TouchableOpacity disabled={run} onPress={() => this.onPressRoll()} style={{ width: 100, paddingVertical: 5, backgroundColor: run ? 'grey' : '#3c6382', borderRadius: 5, alignItems : 'center'}}>
            <Text style={{ color: '#fff', fontWeight: 'bold'}}>ROLL</Text>
          </TouchableOpacity>
        </View> */}


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
    padding: 15
  },
  box: {
    width: 45, 
    height: 35, 
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  player1: {
    width: 10, 
    height: 10, 
    backgroundColor: 'red', 
    borderRadius: 5,
    margin: 1
  },
  player2: {
    width: 10, 
    height: 10, 
    backgroundColor: 'green', 
    borderRadius: 5,
    margin: 1
  },
  player3: {
    width: 10, 
    height: 10, 
    backgroundColor: 'blue', 
    borderRadius: 5,
    margin: 1
  },
  player4: {
    width: 10, 
    height: 10, 
    backgroundColor: 'skyblue', 
    borderRadius: 5,
    margin: 1
  },
  playerCircle: {
    width: 20, 
    height: 20, 
    borderRadius: 10,
  },
  playerText: {
    fontSize: 16, 
    marginLeft: 10,
    fontWeight: 'bold',
  }
});
