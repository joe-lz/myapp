/*
 * @Description view组件
 * @Author: DongDong
 * @Date: 2018-07-20 13:17:25
 * @Last Modified by:   DongDong
 * @Last Modified time: 2018-07-20 13:17:25
 */

// Examples
// <Styled.ViewFlex style={styles.container} bg='green' justifyContent='center' alignItems='center'></Styled.ViewFlex>
import styled from 'styled-components';

export const ScrollView = styled.ScrollView`
  background-color: ${props => props.bg || 'white'};
  width: 100%;
`;
export const View = styled.View`
  background-color: ${props => props.bg || 'white'};
  width: 100%;
`;

export const ViewFlex = View.extend`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
`;
