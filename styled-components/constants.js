/*
 * @Description 常用单位
 * @Author: DongDong
 * @Date: 2018-07-20 13:14:18
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-21 20:34:43
 */

import {
  palettes, theme,
} from './colorsGenerator';

const fs = {
  mini: 12, s: 14, m: 16, l: 20, xl: 24, xxl: 30, max: 50,
};
const lh = {
  mini: 20, s: 22, m: 24, l: 28, xl: 32, xxl: 38,
};

const fw = { s: '200', m: '400', l: '700' };

const icon = { s: '16', m: '24', l: '44' };

const padding = {
  mini: 5, s: 10, m: 15, l: 30, xl: 50, xxl: 80,
};

const radius = { mini: 2, s: 4, m: 6 };

export default {
  fs, lh, fw, icon, padding, radius, palettes, theme,
};
