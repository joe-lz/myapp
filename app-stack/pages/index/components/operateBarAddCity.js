/*
 * @Description 未来每日天气
 * @Author: DongDong
 * @Date: 2018-07-21 16:30:51
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-26 13:43:09
 */

import React, { Component } from 'react';
import {
  StyleSheet, Modal, TouchableHighlight, TextInput, Alert,
} from 'react-native';
import IconMD from 'react-native-vector-icons/MaterialCommunityIcons';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import { GET_WEATHER_DATA_FUNC } from '../../../../redux/actions/weatherData';
import { SET_LOCAL_CITYS_FUNC } from '../../../../redux/actions/localCitys';

import Styled from '../../../../styled-components';
import constants from '../../../../styled-components/constants';
import Allcitys from '../../../files/weather-data/citys';

import func from '../func';

class OperateBarAddCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      cityList: null,
      hotCityList: [],
      inputValue: null,
    };
  }

  componentDidMount() {
    const hotCityList = Allcitys.RECORDS.map((obj) => {
      if (obj.hot) {
        return obj;
      }
      return null;
    }).filter(obj => obj && obj.name);
    this.setState({
      hotCityList,
    });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  searchCity(value) {
    const cityList = Allcitys.RECORDS.map((obj) => {
      if (value && obj.name.match(value)) {
        return obj;
      }
      return null;
    }).filter(obj => obj && obj.name);
    this.setState({
      cityList,
      inputValue: value,
    });
  }

  add2LocalCity(city) {
    const { localCitys, dispatchSET_LOCAL_CITYS_FUNC } = this.props;
    const isIn = Boolean(localCitys.find(obj => obj.city_num === city.city_num));

    if (!isIn) {
      const newLocalCitys = [...localCitys];
      newLocalCitys.push(city);
      func.setLocalCitys(newLocalCitys);
      dispatchSET_LOCAL_CITYS_FUNC(newLocalCitys);
      this.setModalVisible(false);
    } else {
      Alert.alert(
        '提醒',
        '列表已经存在',
        [
          // { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
          // { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: '好的', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
  }

  render() {
    const resultList = () => {
      const { cityList, hotCityList, inputValue } = this.state;
      let getResult = null;
      if (cityList && inputValue) {
        if (cityList.length > 0) {
          getResult = () => cityList.map(obj => (
            <TouchableHighlight
              underlayColor={constants.theme.bgImage}
              onPress={() => { this.add2LocalCity(obj); }}
              style={styles.city_wrapper}
              key={uuidv4()}
            >
              <Styled.ViewFlex>
                <Styled.Pbody style={styles.city_name} bold>
                  {obj.name}
                </Styled.Pbody>
                <IconMD
                  name="plus"
                  size={16}
                  color={constants.theme.primaryText}
                  backgroundColor="white"
                  style={styles.city_add_btn}
                />
              </Styled.ViewFlex>
            </TouchableHighlight>
          ));
        } else {
          getResult = () => (
            <Styled.Pbody style={styles.Pbody} type="primaryText" bold>
              暂无数据
            </Styled.Pbody>
          );
        }

        return (
          <Styled.View style={styles.search_result_wrapper}>
            <Styled.H2 style={styles.section_title} bold>
              搜索结果
            </Styled.H2>
            <Styled.ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
              {getResult()}
            </Styled.ScrollView>
          </Styled.View>
        );
      }
      return (
        <Styled.View style={styles.modal_content}>
          <Styled.H2 style={styles.section_title} bold>
              热门城市
          </Styled.H2>
          {hotCityList.map(obj => (
            <TouchableHighlight
              underlayColor={constants.theme.bgImage}
              onPress={() => { this.add2LocalCity(obj); }}
              style={styles.city_wrapper}
              key={uuidv4()}
            >
              <Styled.ViewFlex>
                <Styled.Pbody style={styles.city_name} bold>
                  {obj.name}
                </Styled.Pbody>
                <IconMD
                  name="plus"
                  size={16}
                  color={constants.theme.primaryText}
                  backgroundColor="white"
                  style={styles.city_add_btn}
                />
              </Styled.ViewFlex>
            </TouchableHighlight>
          ))}
        </Styled.View>
      );
    };
    return (
      <Styled.View style={styles.container}>
        <TouchableHighlight
          underlayColor="white"
          onPress={() => { this.setModalVisible(true); }}
          // style={styles.city_operate_content}
          style={{ width: '50%' }}
        >
          <Styled.ViewFlex style={styles.temp} justifyContent="flex-end">
            <IconMD
              name="plus"
              size={18}
              color={constants.theme.primaryText}
              style={styles.city_add_btn}
            />
            <Styled.Pbody style={styles.city_add_btn_text} type="primaryText" align="center" bold>
              添加城市
            </Styled.Pbody>
          </Styled.ViewFlex>
        </TouchableHighlight>
        <Modal
          style={styles.modal_wrapper}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { }}
        >
          <Styled.SafeArea style={styles.SafeArea}>
            <Styled.Pcaption style={styles.city_operate_wrapper_title} type="primaryText" align="center" bold>
              输入城市名称
            </Styled.Pcaption>
            <Styled.ViewFlex style={styles.city_operate_wrapper}>
              <TextInput
                style={styles.search_input}
                placeholder=""
                placeholderTextColor={constants.theme.primaryText}
                returnKeyType="search"
                maxLength={10}
                onChangeText={(text) => { this.searchCity(text); }}
              />
              <IconMD
                name="close"
                size={16}
                color={constants.theme.primaryText}
                backgroundColor="white"
                underlayColor="white"
                style={styles.city_close_btn}
                onPress={() => {
                  this.setModalVisible(false);
                }}
              />
            </Styled.ViewFlex>
            {resultList()}
          </Styled.SafeArea>
        </Modal>
      </Styled.View>
    );
  }
}
function mapStateToProps(state) {
  return {
    weatherData: state.weatherData,
    localCitys: state.localCitys,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchGET_WEATHER_DATA_FUNC: data => dispatch(GET_WEATHER_DATA_FUNC(data)),
    dispatchSET_LOCAL_CITYS_FUNC: data => dispatch(SET_LOCAL_CITYS_FUNC(data)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperateBarAddCity);

const modalTopBarHeight = 30;
const cityListHeight = 44;
const styles = StyleSheet.create({
  city_operate_wrapper: {
  },
  city_operate_wrapper_title: {
    lineHeight: 60,
  },
  city_edit_btn: {
    flex: 1,
    lineHeight: cityListHeight,
  },
  city_add_btn: {
    width: cityListHeight,
    height: cityListHeight,
    textAlign: 'right',
    lineHeight: cityListHeight,
  },
  city_add_btn_text: {
    height: cityListHeight,
    textAlign: 'right',
    lineHeight: cityListHeight,
  },
  city_close_btn: {
    width: modalTopBarHeight,
    height: modalTopBarHeight,
    textAlign: 'right',
    lineHeight: modalTopBarHeight,
  },
  SafeArea: {
    padding: constants.padding.m,
    flex: 1,
    backgroundColor: constants.theme.bg,
  },
  search_result_wrapper: {
    flex: 1,
  },
  ScrollView: {
    flex: 1,
  },
  search_input: {
    paddingLeft: constants.padding.s,
    paddingRight: constants.padding.s,
    flex: 1,
    lineHeight: modalTopBarHeight,
    height: modalTopBarHeight,
    backgroundColor: constants.theme.bgImage,
    borderRadius: constants.radius.s,
    color: constants.theme.title,
  },
  section_title: {
    paddingTop: constants.padding.l,
    lineHeight: 60,
  },
  city_wrapper: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: constants.theme.border,
  },
  city_name: {
    flex: 1,
    lineHeight: cityListHeight,
  },
});
