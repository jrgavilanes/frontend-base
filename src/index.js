import Vue from 'vue';
import _ from 'lodash';

import {Person} from './Person';

new Vue({
    el: '#app',
    data: {
        saluda: _.camelCase('hola caracola')
    }
});
