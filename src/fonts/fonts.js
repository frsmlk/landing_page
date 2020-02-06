import { createGlobalStyle } from 'styled-components';

import couture from './couture-bld.otf'
import coutureit from './couture-bldit.otf'

export default createGlobalStyle`
    @font-face {
        font-family: 'couture';
        src: local('couture'), local('couture'),
        url(${couture}) format('otf'),
        url(${coutureit}) format('otf');
        font-weight: 300;
        font-style: normal;
    }
`;