import React from 'react';
import createSvgIcon from '../../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 2">
    <path d="M14,0 C13.4,0 13,0.4 13,1 C13,1.6 13.4,2 14,2 L34,2 C34.6,2 35,1.6 35,1 C35,0.4 34.6,0 34,0 L14,0 Z" transform="translate(-13)"/>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Minus');
Icon.Svg = Svg;

export default Icon;
