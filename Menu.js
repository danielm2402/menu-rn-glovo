import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableHighlight, Animated, Image } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPropiedades } from '../../../store/actions/propiedadActions'
import { NavigationActions } from 'react-navigation';
import { SearchBar } from 'react-native-elements';
var { height } = Dimensions.get('window')
var content_height = height * 0.75;
var circle = (Dimensions.get('window').width * 0.90) - 98

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      spinValue: new Animated.Value(0)
    }
  }
  componentDidMount() {
    this.props.handlePropiedades()
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 10000,

      }).start()
  }


  render() {
    let spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <View style={styles.container}>

        <View style={[styles.box, styles.box1]}>
          <SearchBar
            lightTheme
            round
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={this.state.search}
          />
        </View>
        <View style={[styles.box, styles.box2]}>
          <View style={styles.containerBox2}>
            <Animated.View style={{ ...styles.centerCircle }}>
              <TouchableHighlight style={styles.deg0} onPress={() => this.props.goToVisita()} underlayColor="white">
                <View >
                  <Image
                    source={require('../../public/logos/korii.png')}
                    style={styles.logo}
                  />
                </View>
              </TouchableHighlight>

              <TouchableHighlight style={styles.deg60}>
                <View >
                  <Image
                    source={require('../../public/logos/korii.png')}
                    style={styles.logo}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={styles.deg120}>
                <View >
                  <Image
                    source={require('../../public/logos/korii.png')}
                    style={styles.logo}
                  />

                </View>
              </TouchableHighlight>
              <TouchableHighlight style={styles.deg180}>
                <View >
                  <Image
                    source={require('../../public/logos/korii.png')}
                    style={styles.logo}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={styles.deg240}>
                <View >
                  <Image
                    source={require('../../public/logos/korii.png')}
                    style={styles.logo}
                  />
                  <Text style={{ textAlign: 'center', flexWrap: 'wrap' }}></Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={styles.deg300}>
                <View >
                  <Image
                    source={require('../../public/logos/korii.png')}
                    style={styles.logo}
                  />
                </View>
              </TouchableHighlight>
              <View style={styles.iconCenter} >
                <Image
                  source={require('../../public/logos/korii.png')}
                  style={styles.logo}
                />
              </View>

            </Animated.View>
          </View>
        </View>
        <View style={[styles.box, styles.box3]}>
        </View>

      </View>
    )
  }
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
  goToVisita: () => {
    dispatch(NavigationActions.navigate({ routeName: 'Visita' }));
  },
  handlePropiedades: bindActionCreators(getPropiedades, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {

  },
  box1: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  box2: {
    height: content_height,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'

  },
  box3: {
    height: height * 0.1,
    backgroundColor: '#ffffff'
  },
  containerBox2: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'

  },
  centerCircle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width * 0.90,
    height: Dimensions.get('window').width * 0.90,
    justifyContent: 'center',
    alignItems: 'center',
    // transform: [{ rotate: this.animateInterpolate }]
  },

  deg0: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 98,
    height: 98,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: '#000000',
    transform: [
      { translateY: (circle / 2) * (Math.sin(0)) },
      { translateX: (circle / 2) * (Math.cos(0)) }
    ],
  },
  deg60: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 98,
    height: 98,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: '#000000',
    transform: [
      { translateY: (circle / 2) * (Math.sin(1.0472)) },
      { translateX: (circle / 2) * (Math.cos(1.0472)) },
    ],
  },
  deg120: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 98,
    height: 98,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: '#000000',
    transform: [
      { translateY: (circle / 2) * (Math.sin(2.0944)) },
      { translateX: (circle / 2) * Math.cos(2.0944) },

    ],
  },
  deg180: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 98,
    height: 98,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: '#000000',
    transform: [
      { translateY: (circle / 2) * (Math.sin(3.14159)) },
      { translateX: (circle / 2) * (Math.cos(3.14159)) },

    ],
  },
  deg240: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 98,
    height: 98,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: '#000000',
    transform: [
      { translateY: (circle / 2) * (Math.sin(4.18879)) },
      { translateX: (circle / 2) * (Math.cos(4.18879)) },

    ],
  },
  deg300: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 98,
    height: 98,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: '#000000',
    transform: [
      { translateY: (circle / 2) * (Math.sin(5.23599)) },
      { translateX: (circle / 2) * (Math.cos(5.23599)) },

    ],
  },
  deg360: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 98,
    height: 98,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: '#000000',
    transform: [
      { translateY: (circle / 2) * (Math.sin(360)) },
      { translateX: (circle / 2) * (Math.cos(360)) },

    ],
  },
  iconCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: '#000000'
  },
  logo: {
    width: 110,
    height: 110,
  },



})