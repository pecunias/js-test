const bars = require('./examples/bars');
const cars = require('./examples/cars');
const persons = require('./examples/persons');

const start = () => {
    console.log('Starting validations on bars, cars and persons');
    console.log(bars.barObj);
    console.log(validate(bars.barSchema.name, bars.barObj.name));

    // Check the bars
    Object.keys(bars.barSchema).forEach((key) => {
        console.log(`Validating: ${key} in bars, which should be of type ${bars.barSchema[key]} is: ${validate(bars.barSchema[key], bars.barObj[key])}`);
    });
}

/**
 * Checks if the given value is of the correct type
 * @example
 * // returns true
 * validate('string', 'test123')
 * @returns {Boolean} Returns the outcome if the value matches the type
 */

const validate = (type, value) => {
    switch (type) {
        case 'string':
            return typeof value === 'string';
            break;
        case 'number':
            return typeof value === 'number';
            break;
        // This uses a custom check, as an array in JS is actually an object
        case 'array':
            return value === 'object' && Array.isArray(value);
            break;
        case 'object':
            return typeof value === 'object';
            break;
        case 'boolean':
            return typeof value === 'boolean';
            break;
        default:
            // Fallback that prints the error to the console 
            // return false as promised to always return a boolean
            console.error(`${type} and ${value} are not supported in this validate function`);
            return false;
            break;
    } 
}


start();
