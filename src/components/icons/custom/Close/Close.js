import React from 'react';
import createSvgIcon from '../../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 72">
    <path d="M57.624,35.993 L84.312,9.303 C86.279,7.333 86.279,4.143 84.312,2.173 C82.339,0.203 79.147,0.203 77.18,2.173 L50.492,28.861 L23.804,2.173 C21.832,0.203 18.645,0.203 16.672,2.173 C14.705,4.143 14.705,7.333 16.672,9.303 L43.36,35.993 L16.672,62.682 C14.705,64.649 14.705,67.841 16.672,69.814 C17.661,70.797 18.949,71.29 20.238,71.29 C21.531,71.29 22.82,70.798 23.803,69.814 L50.491,43.126 L77.179,69.814 C78.162,70.797 79.456,71.29 80.744,71.29 C82.033,71.29 83.321,70.798 84.31,69.814 C86.277,67.841 86.277,64.649 84.31,62.682 L57.624,35.993 Z" transform="translate(-15)"/>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Close');
Icon.Svg = Svg;

export default Icon;
