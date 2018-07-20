/*
 * @Description 文字组件
 * @Author: DongDong
 * @Date: 2018-07-20 13:15:53
 * @Last Modified by:   DongDong
 * @Last Modified time: 2018-07-20 13:15:53
 */

// Examples
// <Styled.H1 style={styles.H1} light type='primaryText' align='center' bold>$1</Styled.H1>
// /title/primaryText/secondaryText/disabled/border/divider/bg/tableHeader

import styled from 'styled-components';
import constants from './constants';

export const Text = styled.Text`
  color: ${(props) => {
    const color = props.light ? 'light' : 'dark';
    const type = props.type || 'title';
    return constants[`${color}`][`${type}`];
  }};
  text-align: ${props => props.align || 'justify'};
  font-weight: ${props => (props.bold ? constants.fw.l : constants.fw.m)};
`;

export const H1 = Text.extend`
  font-size: ${constants.fs.xxl};
`;
export const H2 = Text.extend`
  font-size: ${constants.fs.xl};
`;
export const H3 = Text.extend`
  font-size: ${constants.fs.l};
`;
export const H4 = Text.extend`
  font-size: ${constants.fs.m};
`;
export const Pbody = Text.extend`
  font-size: ${constants.fs.s};
`;
export const Pcaption = Text.extend`
  font-size: ${constants.fs.mini};
`;
