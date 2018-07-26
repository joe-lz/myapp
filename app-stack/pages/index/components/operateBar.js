/*
 * @Description 未来每日天气
 * @Author: DongDong
 * @Date: 2018-07-21 16:30:51
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-26 11:47:56
 */

import React, { Component } from 'react';
import {
  StyleSheet, Modal, TouchableHighlight, Linking, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import { GET_WEATHER_DATA_FUNC } from '../../../../redux/actions/weatherData';
import { SET_CURCITY_FUNC } from '../../../../redux/actions/curCity';
import { SET_LOCAL_CITYS_FUNC } from '../../../../redux/actions/localCitys';


import Styled from '../../../../styled-components';
import constants from '../../../../styled-components/constants';

import OperateBarAddCity from './operateBarAddCity';

import func from '../func';

class OperateBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      isEditing: false,
    };
  }

  componentDidMount() {
  }

  // 接收到prop变化
  // componentWillReceiveProps(next) {
  //   console.log(next);
  // }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  getCityList() {
    let cityList = null;
    const { localCitys, curCity } = this.props;
    const isDefault = (obj) => {
      let dom = null;
      if (obj.city_num === curCity.city_num) {
        dom = (
          <Styled.Pbody style={styles.city_default} type="primaryText">
            默认
          </Styled.Pbody>
        );
      }
      return dom;
    };
    const isEdit1 = (obj) => {
      const { isEditing } = this.state;
      let dom = null;
      if (isEditing) {
        dom = (
          <TouchableHighlight
            underlayColor={constants.theme.bgImage}
            onPress={() => { this.removeCity(obj); }}
            style={styles.city_remove_wrapper}
          >
            <Styled.Pbody style={styles.city_remove} bold>
              删除
            </Styled.Pbody>
          </TouchableHighlight>
        );
      }
      return dom;
    };
    if (localCitys) {
      cityList = localCitys.map(obj => (
        <Styled.ViewFlex style={styles.city_wrapper} key={uuidv4()}>
          <TouchableHighlight
            underlayColor={constants.theme.bgImage}
            onPress={() => { this.chooseCurCity(obj); }}
            style={styles.city_name_wrapper}

          >
            <Styled.Pbody style={styles.city_name} bold>
              {obj.name}
            </Styled.Pbody>
          </TouchableHighlight>
          {isDefault(obj)}
          {isEdit1(obj)}
        </Styled.ViewFlex>
      ));
    }
    return cityList;
  }

  chooseCurCity(curCity) {
    const { dispatchGET_WEATHER_DATA_FUNC } = this.props;
    dispatchGET_WEATHER_DATA_FUNC(curCity);
    this.setModalVisible(false);
    this.setState({
      isEditing: false,
    });
  }

  removeCity(city) {
    const {
      curCity, localCitys, dispatchSET_CURCITY_FUNC, dispatchGET_WEATHER_DATA_FUNC, dispatchSET_LOCAL_CITYS_FUNC,
    } = this.props;
    if (localCitys && localCitys.length > 1) {
      const newLocalCitys = localCitys.filter((obj => obj.city_num !== city.city_num));
      func.setLocalCitys(newLocalCitys);
      dispatchSET_LOCAL_CITYS_FUNC(newLocalCitys);
      // 如果吧默认删除了
      if (city.city_num === curCity.city_num) {
        const newCurCity = newLocalCitys[0];
        func.setCurCity(newCurCity);
        dispatchSET_CURCITY_FUNC(newCurCity);
        dispatchGET_WEATHER_DATA_FUNC(newCurCity);
      }
    } else {
      Alert.alert(
        '提醒',
        '至少存在一个城市',
        [
          // { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
          // { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: '好的', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
  }

  openLink(url) {
    Linking.openURL(url);
  }

  render() {
    const { isEditing } = this.state;
    return (
      <Styled.ViewFlex style={styles.operateBar}>
        <Styled.View style={styles.operateBarFill}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => { this.openLink('http://m.weather.com.cn'); }}
          >
            <Styled.Pcaption style={styles.dataOrigin} type="primaryText">
              中央天气
            </Styled.Pcaption>
          </TouchableHighlight>

        </Styled.View>
        <Icon
          name="bars"
          size={16}
          color={constants.theme.primaryText}
          backgroundColor="white"
          underlayColor="white"
          style={styles.btnAddCity}
          onPress={() => {
            this.setModalVisible(true);
          }}
        />
        <Modal
          style={styles.modal_wrapper}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
        >
          <Styled.SafeArea style={styles.SafeArea}>
            <Styled.H2 style={styles.modal_title} align="center" bold>
              城市列表
            </Styled.H2>
            <Styled.ScrollView style={styles.modal_content}>
              {this.getCityList()}
            </Styled.ScrollView>
            <Styled.ViewFlex style={styles.bottom_operate_bar_wrapper}>
              <TouchableHighlight
                underlayColor="white"
                onPress={() => { this.setState({ isEditing: !isEditing }); }}
                style={styles.city_edit_btn}
              >
                <Styled.Pbody style={styles.city_edit_btn_text} type="primaryText" bold>
                  {isEditing ? '取消编辑' : '编辑'}
                </Styled.Pbody>
              </TouchableHighlight>
              <OperateBarAddCity />
            </Styled.ViewFlex>
            {/* <Styled.View style={styles.modal_content}>
              {this.getCityList()}
            </Styled.View> */}
          </Styled.SafeArea>
        </Modal>
      </Styled.ViewFlex>
    );
  }
}

function mapStateToProps(state) {
  return {
    weatherData: state.weatherData,
    curCity: state.curCity,
    localCitys: state.localCitys,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchGET_WEATHER_DATA_FUNC: data => dispatch(GET_WEATHER_DATA_FUNC(data)),
    dispatchSET_CURCITY_FUNC: data => dispatch(SET_CURCITY_FUNC(data)),
    dispatchSET_LOCAL_CITYS_FUNC: data => dispatch(SET_LOCAL_CITYS_FUNC(data)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperateBar);

const barHeight = 44;
const styles = StyleSheet.create({
  operateBar: {
    paddingLeft: constants.padding.m,
    paddingRight: constants.padding.m,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: constants.theme.border,
  },
  operateBarFill: {
    flex: 1,
  },
  dataOrigin: {
    lineHeight: barHeight,
    textDecorationLine: 'underline',
    textDecorationColor: constants.theme.secondaryText,
  },
  btnAddCity: {
    width: barHeight,
    height: barHeight,
    textAlign: 'right',
    lineHeight: barHeight,
  },
  modal_wrapper: {
  },
  SafeArea: {
    padding: constants.padding.m,
    flex: 1,
    backgroundColor: constants.theme.bg,
  },
  ScrollView: {
  },
  modal_content: {
    // padding: constants.padding.m,
  },
  modal_title: {
    lineHeight: 60,
  },
  city_wrapper: {
    // paddingTop: constants.padding.m,
    // paddingBottom: constants.padding.m,
    height: barHeight,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: constants.theme.border,
  },
  city_name_wrapper: {
    flex: 1,
    height: barHeight,
  },
  city_name: {
    lineHeight: barHeight,
  },
  city_default: {
    lineHeight: barHeight,
  },
  city_remove: {
    marginLeft: constants.padding.s,
    lineHeight: barHeight,
    color: constants.palettes.warning,
  },
  city_set_default: {
    lineHeight: barHeight,
  },
  bottom_operate_bar_wrapper: {
  },
  city_edit_btn: {
    width: '50%',
  },
  city_edit_btn_text: {
    lineHeight: barHeight,
  },
});
