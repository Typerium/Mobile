/* eslint-disable react/destructuring-assignment */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-bitwise */
// @flow
import React, { PureComponent } from 'react';
import {
  Animated, StyleSheet, View, Dimensions, Text, TouchableOpacity, TextInput, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import {
  CloseBlueIcon, GradientLine, SearchIcon, CorrectWhite,
} from '~/assets/image';
import { showPhoneCodes, setPhoneCode } from '~/store/modals/actions';
import { Wrapper } from '~/components';
import styles from './styles';
import countryData from './data';

const windowHeight = Dimensions.get('window').height;
const SNAP_POINTS_FROM_TOP = [50, windowHeight * 0.5, windowHeight];

type Props = {
  open: boolean,
  setCode: ({
    phoneCode: string,
    phoneCodeCountry: string
  }) => {},
  setShow: (any) => {},
}

type StateT = {
  selectCountry: string,
  openSearch: boolean,
  lastSnap: any,
  text: string,
  data: any,
}

class PhoneCodes extends PureComponent<Props, StateT> {
  _lastScrollY: any = null;
  _dragY: any = null;
  _onGestureEvent: any = null;
  _translateYOffset: any = null;
  _translateY: any = null;

  constructor(props: Props) {
    super(props);
    const START = SNAP_POINTS_FROM_TOP[0];
    const END = SNAP_POINTS_FROM_TOP[SNAP_POINTS_FROM_TOP.length - 1];

    this.state = {
      selectCountry: '',
      openSearch: false,
      lastSnap: END,
      text: '',
      data: countryData,
    };

    this._lastScrollY = new Animated.Value(0);

    this._dragY = new Animated.Value(0);
    this._onGestureEvent = Animated.event(
      [{ nativeEvent: { translationY: this._dragY } }],
      { useNativeDriver: true },
    );

    this._translateYOffset = new Animated.Value(END);
    this._translateY = Animated.add(
      this._translateYOffset,
      this._dragY,
    ).interpolate({
      inputRange: [START, END],
      outputRange: [START, END],
      extrapolate: 'clamp',
    });
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.open && !this.props.open) this._showPanel();
  }

  _showPanel = () => {
    this._onHandlerStateChange({
      nativeEvent: {
        oldState: 4,
        state: 5,
        translationY: -SNAP_POINTS_FROM_TOP[1],
        velocityY: -100,
      },
    });
  }

  _hidePanel = () => {
    const { setShow } = this.props;
    this._onHandlerStateChange({
      nativeEvent: {
        oldState: 4,
        state: 5,
        translationY: SNAP_POINTS_FROM_TOP[2],
        velocityY: -100,
      },
    });
    setShow(false);
  }

  _onHandlerStateChange = ({ nativeEvent }) => {
    const { setShow } = this.props;
    const { lastSnap } = this.state;
    if (nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = nativeEvent;
      const { velocityY } = nativeEvent;
      const dragToss = 0.2;
      const endOffsetY = lastSnap + translationY + dragToss * velocityY;

      let destSnapPoint = SNAP_POINTS_FROM_TOP[0];
      for (let i = 0; i < SNAP_POINTS_FROM_TOP.length; i += 1) {
        const snapPoint = SNAP_POINTS_FROM_TOP[i];
        const distFromSnap = Math.abs(snapPoint - endOffsetY);
        if (distFromSnap < Math.abs(destSnapPoint - endOffsetY)) {
          destSnapPoint = snapPoint;
        }
      }

      this.setState({ lastSnap: destSnapPoint });
      this._translateYOffset.extractOffset();
      this._translateYOffset.setValue(translationY);
      this._translateYOffset.flattenOffset();
      this._dragY.setValue(0);

      Animated.spring(this._translateYOffset, {
        velocity: velocityY,
        tension: 68,
        friction: 12,
        toValue: destSnapPoint,
        useNativeDriver: true,
      }).start(() => {
        // if the panel is lowered to close
        if (destSnapPoint === SNAP_POINTS_FROM_TOP[2]) setShow(false);
      });
    }
  };

  onChangeSearchText = (text: string) => {
    const data = countryData.filter(
      ({ name, dial_code }) => ~name.indexOf(text) || ~dial_code.indexOf(text),
    );
    this.setState({ text, data });
  }

  _keyExtractor = ({ name }) => name;

  _handle = (code, dial_code) => {
    const { setCode } = this.props;
    this.setState(
      { selectCountry: code },
      () => {
        setCode({
          phoneCode: dial_code,
          phoneCodeCountry: code,
        });
      },
    );
  }

  _renderItem = ({
    item: {
      dial_code, code, name,
    },
    isSelect,
  }) => {
    const opacity = isSelect ? 1 : 0.5;
    return (
      <TouchableOpacity style={styles.item} onPress={() => this._handle(code, dial_code)}>
        <Text style={[styles.country, { opacity }]}>
          <Text style={styles.code}>{dial_code}</Text>
          {`  |  ${name}`}
        </Text>
        {isSelect && <CorrectWhite style={styles.selectIcon} />}
        <GradientLine />
      </TouchableOpacity>
    );
  };

  render() {
    const {
      text, data, openSearch, selectCountry,
    } = this.state;
    const { open } = this.props;
    if (!open) return null;
    return (
      <Wrapper containerStyle={styles.container}>
        <View style={StyleSheet.absoluteFillObject} pointerEvents="box-none">
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              { transform: [{ translateY: this._translateY }] },
            ]}
          >
            <PanGestureHandler
              shouldCancelWhenOutside={false}
              onGestureEvent={this._onGestureEvent}
              onHandlerStateChange={this._onHandlerStateChange}
            >
              <Animated.View style={styles.header}>

                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#25272E', '#FFFFFF', '#25272E']}
                  style={styles.gradient}
                />
                <View style={styles.dragRect} />
                <View style={styles.searchContainer}>
                  <LinearGradient
                    colors={['#FFFFFF', 'rgba(0,0,0,0)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.borderGradient}
                  >
                    {openSearch
                      ? (
                        <TextInput
                          value={text}
                          onChangeText={this.onChangeSearchText}
                          style={styles.input}
                        />
                      ) : null
                    }
                  </LinearGradient>
                </View>
                <TouchableOpacity
                  style={[
                    styles.search,
                    openSearch ? styles.searchOpen : {},
                  ]}
                  onPress={() => this.setState({ openSearch: true })}
                  disabled={openSearch}
                >
                  <SearchIcon style={styles.searchIcon} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.close}
                  onPress={() => this._hidePanel()}
                >
                  <CloseBlueIcon style={styles.closeIcon} />
                </TouchableOpacity>

              </Animated.View>
            </PanGestureHandler>

            <FlatList
              data={data}
              extraData={this.state.selectCountry}
              keyExtractor={this._keyExtractor}
              renderItem={
                ({ item }) => this._renderItem({ item, isSelect: selectCountry === item.code })
              }
              style={styles.list}
              removeClippedSubviews
            />
          </Animated.View>
        </View>
      </Wrapper>
    );
  }
}

export default connect(state => ({
  open: state.modals.modal_phoneCode,
  phoneCode: state.modals.phoneCode,
  phoneCodeCountry: state.modals.phoneCodeCountry,
}),
{
  setShow: showPhoneCodes,
  setCode: setPhoneCode,
})(PhoneCodes);
