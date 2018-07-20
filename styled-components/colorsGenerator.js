/*
 * @Description 色板生成
 * @Author: DongDong
 * @Date: 2018-07-20 13:14:53
 * @Last Modified by:   DongDong
 * @Last Modified time: 2018-07-20 13:14:53
 */

import { lighten, darken } from 'polished';
import { generate, presetPrimaryColors } from './ant-design-palettes';
import config from '../config';

const mainColor = config.mainColor ? config.mainColor : presetPrimaryColors.blue;
const colorsArr = generate(mainColor);

// 0 - 9
const colors = {};
colorsArr.map((item, index) => {
  colors[`main${index + 1}`] = item;
  return item;
});

// 中性色
// 浅色背景
const dark = {
  title: lighten(0.15, 'black'),
  primaryText: lighten(0.35, 'black'),
  secondaryText: lighten(0.55, 'black'),
  disabled: lighten(0.75, 'black'),
  border: lighten(0.85, 'black'),
  divider: lighten(0.91, 'black'),
  bg: lighten(0.96, 'black'),
  tableHeader: lighten(0.98, 'black'),
};
// 深色背景
const light = {
  title: darken(0, 'white'),
  primaryText: darken(0.15, 'white'),
  secondaryText: darken(0.35, 'white'),
  disabled: darken(0.55, 'white'),
  border: darken(0.75, 'white'),
  divider: darken(0.85, 'white'),
  bg: darken(0.91, 'white'),
  tableHeader: darken(0.96, 'white'),
};
// 品牌色的应用
const palettes = {
  brand: colors.main6,
  selected: colors.main1,
  hover: colors.main5,
  normal: colors.main6,
  click: colors.main7,

  link: presetPrimaryColors.blue,
  success: presetPrimaryColors.green,
  warning: presetPrimaryColors.gold,
  error: presetPrimaryColors.red,
};
export {
  colors,
  palettes,
  light,
  dark,
};

// palettes: ----------------------
// /brand
// /selected
// /hover
// /normal
// /click
// /link
// /success
// /warning
// /error
// light/dark: ----------------------
// /title
// /primaryText
// /secondaryText
// /disabled
// /border
// /divider
// /bg
// /tableHeader
