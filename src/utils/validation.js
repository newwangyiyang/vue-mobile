import Vue from 'vue';
import {
    ValidationObserver,
    ValidationProvider,
    extend
} from 'vee-validate';

import * as rules from 'vee-validate/dist/rules';

import {
    messages
} from 'vee-validate/dist/locale/zh_CN.json';

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule],
        message: messages[rule]
    })
});