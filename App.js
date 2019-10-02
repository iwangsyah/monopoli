import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Activated: 0,
      player2Activated: 0,
      player3Activated: 0,
      player4Activated: 0,
      activePlayer: 1,
      randomNumber: 0,
      run: false
    }
  }

  componentDidMount() {

  }

  boxHorizonatal(position) {
    let start = position == 'top' ? 16 : 8;
    let end = position == 'top' ? 24 : 0;
    let boxs = [];
    for (let i = start; position == 'top' ? i <= end : i >= end ; position == 'top' ?  i++ : i--) {
      let box = (
        <View style={styles.box}>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.player1, { display: this.state.player1Activated == i ? 'flex' : 'none' }]}/>
            <View style={[styles.player2, { display: this.state.player2Activated == i ? 'flex' : 'none' }]}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.player3, { display: this.state.player3Activated == i ? 'flex' : 'none' }]}/>
            <View style={[styles.player4, { display: this.state.player4Activated == i ? 'flex' : 'none' }]}/>
          </View>
        </View>
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
      let box = (
        <View style={styles.box}>
          <View style={{flexDirection: 'row', backgroundColor: 'yellow'}}>
            <View style={[styles.player1, { display: this.state.player1Activated == i ? 'flex' : 'none'}]}/>
            <View style={[styles.player2, { display: this.state.player2Activated == i ? 'flex' : 'none' }]}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.player3, { display: this.state.player3Activated == i ? 'flex' : 'none' }]}/>
            <View style={[styles.player4, { display: this.state.player4Activated == i ? 'flex' : 'none' }]}/>
          </View>
        </View>
      )
      boxs.push(box)
    }
    return boxs;
  }

  onPressRoll() {
    let random =  Math.floor(Math.random() * 12) + 1;
    this.moveCircle(random)
    this.setState({ randomNumber: random, run: true })
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
    let { randomNumber, activePlayer, run } = this.state
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center'}}>
          <View style={{ flexDirection: 'row' }}>
            {this.boxHorizonatal('top')}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              {this.boxVertical('left')}
            </View>
            <View style={{ width: 245, height: 245, backgroundColor: '#f8c291' }}>
            </View>
            <View>
              {this.boxVertical('right')}
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 50 }}>
            {this.boxHorizonatal('bottom')}
          </View>
        </View>

        <View style={{alignSelf: 'center', height: 50, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Player {activePlayer} Play</Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', margin: 5}}>{run ? `${randomNumber} Langkah` : ''}</Text>
          <TouchableOpacity disabled={run} onPress={() => this.onPressRoll()} style={{ width: 100, paddingVertical: 5, backgroundColor: run ? 'grey' : '#3c6382', borderRadius: 5, alignItems : 'center'}}>
            <Text style={{ color: '#fff', fontWeight: 'bold'}}>ROLL</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={[styles.playerCircle, {backgroundColor: 'red'}]}/>
            <Text style={styles.playerText}>Player 1 : </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={[styles.playerCircle, {backgroundColor: 'green'}]}/>
            <Text style={styles.playerText}>Player 2 : </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={[styles.playerCircle, {backgroundColor: 'blue'}]}/>
            <Text style={styles.playerText}>Player 3 : </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={[styles.playerCircle, {backgroundColor: 'skyblue'}]}/>
            <Text style={styles.playerText}>Player 4 : </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F5FCFF',
    padding: 15
  },
  box: {
    width: 35, 
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
