import Vue from 'vue';
import {
    ValidationProvider,
    extend
} from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider)

extend('example', {
    validate: value => value === 'example',
    message: 'only example'
})

extend('min', {
    validate: (value, args) => value.length > args.length,
    params: ['length']
})

extend('minmax', {
    validate: (value, {
        min,
        max
    }) => value.length > min && value.length < max,
    params: ['min', 'max']
})

extend('oneOf', {
    validate: (value, args) => args.includes(value),
    message: '{_field_} is must 1,2,3,8, but you is {_value_} => {_rule_}'
})

const timesByChar = (str, char) => str.split('').reduce((a, b) => b === char ? a + 1 : a, 0)
const charTimesToMap = (str) => {
    let [s, t] = [str[0], timesByChar(str, str[0])];
    const strSrt = [...new Set(str.split(''))];
    strSrt.slice(1).forEach(char => {
        const times = timesByChar(str, char)
        if (times > t)[s, t] = [char, times];
    });
    return [s, t];
}