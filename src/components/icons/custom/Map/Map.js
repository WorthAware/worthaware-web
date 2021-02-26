import React from 'react';
import createSvgIcon from '../../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 76">
    <path d="M89.28,1.011 L67.947,10.597 L46.615,1.011 C46.228,0.842 45.74,0.852 45.385,1.011 L24.052,10.597 L2.719,1.011 C1.575,0.498 0.604,1.495 0.604,2.379 L0.604,63.759 C0.604,64.35 0.951,64.885 1.489,65.127 L23.436,74.989 C23.798,75.149 24.303,75.149 24.665,74.989 L46,65.403 L67.332,74.989 C67.628,75.12 68.132,75.179 68.562,74.989 L90.51,65.127 C91.048,64.885 91.3950006,64.35 91.3950006,63.759 L91.3950006,2.379 C91.396,1.195 90.153,0.617 89.28,1.011 Z M88.396,62.788 L69.448,71.303 L69.448,53.335 C69.448,51.292 66.448,51.292 66.448,53.335 L66.448,71.303 L47.5,62.788 L47.5,38 C47.5,36.001 44.5,36.001 44.5,38 L44.5,62.788 L25.552,71.303 L25.552,32.814 C25.552,30.813 22.552,30.813 22.552,32.814 L22.552,71.302 L3.604,62.788 L3.604,4.697 L22.551,13.211 L22.551,19.707 C22.551,21.728 25.551,21.728 25.551,19.707 L25.551,13.211 L44.5,4.697 L44.5,21.89 C44.5,23.873 47.5,23.873 47.5,21.89 L47.5,4.697 L66.447,13.211 L66.447,40.294 C66.447,42.332 69.447,42.332 69.447,40.294 L69.447,13.211 L88.395,4.697 L88.395,62.788 L88.396,62.788 Z"/>
    <path d="M45.534 26.417C44.311 24.964 42.921 23.763 41.401 22.848 39.665 21.806 38.118 24.373 39.853 25.418 41.107 26.173 42.215 27.132 43.239 28.349 44.491 29.838 47.023 28.187 45.534 26.417zM50.523 35.621C49.858 33.725 49.149 32.235 48.448 30.876 47.5 29.043 44.836 30.42 45.782 32.253 46.43 33.508 47.051 34.915 47.718 36.687 48.392 38.475 51.188 37.514 50.523 35.621zM18.828 30.99C18.085 32.428 17.387 34.028 16.752 35.748 16.04 37.679 18.919 38.546 19.566 36.786 20.158 35.182 20.806 33.695 21.492 32.368 22.526 30.369 19.861 28.99 18.828 30.99zM25.606 22.777C24.199 23.729 22.871 24.99 21.659 26.527 20.324 28.222 22.895 29.803 24.015 28.384 25.035 27.09 26.136 26.039 27.286 25.261 29.137 24.01 27.459 21.529 25.606 22.777zM16.978 46.211C17.305 44.561 17.681 42.953 18.094 41.434 18.646 39.403 15.75 38.616 15.199 40.647 14.767 42.234 14.376 43.91 14.035 45.627 13.633 47.655 16.595 48.141 16.978 46.211zM54.031 44.882C53.371 43.481 52.774 41.885 52.233 40.366 51.509 38.348 48.686 39.356 49.407 41.376 49.975 42.966 50.566 44.664 51.32 46.167 52.354 48.229 54.833 46.583 54.031 44.882zM36.316 20.869C34.994 20.587 33.1 20.287 30.791 20.675 28.873 20.997 29.368 23.943 31.288 23.634 33.457 23.27 34.288 23.504 35.69 23.803 37.539 24.205 38.862 21.411 36.316 20.869zM67.346 46.163C66.262 47.443 65.129 48.418 63.98 49.06 61.987 50.175 63.605 52.666 65.445 51.679 66.922 50.886 68.318 49.657 69.635 48.102 71.09 46.382 68.804 44.447 67.346 46.163zM76.782 34.373C77.293 32.971 77.813 31.45 78.422 29.585 79.103 27.497 76.249 26.565 75.57 28.654 74.972 30.486 74.462 31.977 73.964 33.347 73.147 35.59 76.03 36.449 76.782 34.373zM72.616 43.745C73.391 42.378 74.161 40.82 74.903 39.116 75.839 36.97 73.086 35.77 72.153 37.919 71.453 39.526 70.73 40.988 70.007 42.265 68.904 44.208 71.645 45.454 72.616 43.745zM59.988 50.043C58.602 50.019 57.489 49.514 56.481 48.56 54.884 47.048 52.822 49.226 54.418 50.74 55.939 52.179 57.773 52.924 59.862 53.042 61.86 53.154 62.068 50.079 59.988 50.043zM77.986 21.369C77.719 22.086 77.441 22.897 77.149 23.78 76.388 26.076 79.29 26.863 79.997 24.723 80.277 23.877 80.544 23.1 80.799 22.413 81.599 20.257 78.788 19.213 77.986 21.369zM14.407 48.955C11.992 48.955 10.028 50.92 10.028 53.335 10.028 55.749 11.992 57.714 14.407 57.714 16.822 57.714 18.787 55.749 18.787 53.335 18.787 50.92 16.822 48.955 14.407 48.955z"/>
    <path d="M78.406,19.891 L80.444,18.819 L81.516,20.859 C82.422,22.583 85.158,21.338 84.17,19.463 L83.1,17.424 L85.14,16.352 C87.036,15.355 85.64,12.7 83.744,13.696 L81.705,14.768 L80.634,12.73 C79.712,10.976 77.056,12.373 77.979,14.126 L79.05,16.164 L77.012,17.235 C75.17,18.203 76.691,20.728 78.406,19.891 Z"/>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Map');
Icon.Svg = Svg;

export default Icon;
