/*
 * @Description 色板生成
 * @Author: DongDong
 * @Date: 2018-07-20 13:14:53
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-08-01 10:44:34
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
  bg: lighten(0.96, 'black'),
};
// 深色背景
const light = {
  // title: darken(0, 'white'),
  // primaryText: darken(0.15, 'white'),
  // secondaryText: darken(0.35, 'white'),
  // disabled: darken(0.55, 'white'),
  // border: darken(0.75, 'white'),
  // bg: darken(0.91, 'white'),
  title: darken(0.1, 'white'),
  primaryText: darken(0.3, 'white'),
  secondaryText: darken(0.5, 'white'),
  disabled: darken(0.7, 'white'),
  border: darken(0.8, 'white'),
  bg: darken(0.9, 'white'),
};

// 模式
let mode = 'day'; // day,night
const curTime = new Date().getHours();
if (curTime >= 18 || curTime <= 6) {
  mode = 'night';
}
const theme = {
  mode,
  title: mode === 'day' ? dark.title : light.title,
  primaryText: mode === 'day' ? dark.primaryText : light.primaryText,
  secondaryText: mode === 'day' ? dark.secondaryText : light.secondaryText,
  disabled: mode === 'day' ? dark.disabled : light.disabled,
  border: mode === 'day' ? dark.border : light.border,
  bg: mode === 'day' ? 'white' : '#1F2123',
  bgImage: mode === 'day' ? dark.bg : light.bg,
  active: mode === 'day' ? '#2563F6' : '#C0DCFA',
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
  theme,
  // light,
  // dark,
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
// /bg
