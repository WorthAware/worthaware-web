import React from 'react';
import createSvgIcon from '../../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336 336">
    <path d="M168 102C139 102 115 126 115 155L115 160C115 190 139 213 168 213 197 213 221 190 221 160L221 155C221 126 197 102 168 102zM267 304C252 264 213 235 168 235 123 235 84 264 69 304 97 324 131 336 168 336 205 336 239 324 267 304z"/>
    <path d="M54,291 C69,258 97,233 133,222 C111,210 97,187 97,160 L97,155 C97,116 129,84 168,84 C207,84 239,116 239,155 L239,160 C239,187 225,210 203,222 C239,233 267,258 282,291 C315,261 336,217 336,168 C336,75 261,0 168,0 C75,0 0,75 0,168 C0,217 21,261 54,291 Z"/>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'ProfileFilled');
Icon.Svg = Svg;

export default Icon;
