const bars = require('./examples/bars');
const cars = require('./examples/cars');
const persons = require('./examples/persons');

/**
 * Starts the application
 * @example
 * start()
 * @returns void
 */
const start = () => {
    console.log('Starting validations on bars, cars and persons:');
    validateObjects(true);
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
            return typeof value === 'object' && Array.isArray(value);
            break;
        case 'object':
            // Explicitly check if it is not an array
            return typeof value === 'object' && !Array.isArray(value);
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

/**
 * Validates all objects of its types
 * @example
 * validateObjects()
 * @returns void
 */
const validateObjects = (details = false) => {
    const barsObjIsValid = Object.keys(bars.barSchema).every((key) => {
        return validate(bars.barSchema[key], bars.barObj[key]);
    });

    const carsObjIsValid = Object.keys(cars.carSchema).every((key) => {
        return validate(cars.carSchema[key], cars.carObj[key]);
    });

    const personsObjIsValid = Object.keys(persons.personSchema).every((key) => {
        return validate(persons.personSchema[key], persons.personObj[key]);
    });

    const barsObjFIsValid = Object.keys(bars.barSchema).every((key) => {
        return validate(bars.barSchema[key], bars.barObjF[key]);
    });

    const carsObjFIsValid = Object.keys(cars.carSchema).every((key) => {
        return validate(cars.carSchema[key], cars.carObjF[key]);
    });

    const personsObjFIsValid = Object.keys(persons.personSchema).every((key) => {
        return validate(persons.personSchema[key], persons.personObjF[key]);
    });

    console.log(`is barsObj valid? ${barsObjIsValid}`);
    console.log(`is carsObjIsValid valid? ${carsObjIsValid}`);
    console.log(`is personsObjIsValid valid? ${personsObjIsValid}`);

    console.log(`is barsObjFIsValid valid? ${barsObjFIsValid}`);
    console.log(`is carsObjFIsValid valid? ${carsObjFIsValid}`);
    console.log(`is personsObjFIsValid valid? ${personsObjFIsValid}`);

    if (details) {
        console.log('-------------------------------------')
        Object.keys(bars.barSchema).forEach((key) => {
            console.log(`Validating: ${key} in bars, which should be of type ${bars.barSchema[key]} is: ${validate(bars.barSchema[key], bars.barObj[key])}`);
        });

        // // Check the cars 
        Object.keys(cars.carSchema).forEach((key) => {
            console.log(`Validating: ${key} in cars, which should be of type ${cars.carSchema[key]} is: ${validate(cars.carSchema[key], cars.carObj[key])}`);
        });

        // // Check the persons
        Object.keys(persons.personSchema).forEach((key) => {
            console.log(`Validating: ${key} in persons, which should be of type ${persons.personSchema[key]} is: ${validate(persons.personSchema[key], persons.personObj[key])}`);
        });

        // // Check the bars (incorrect)
        Object.keys(bars.barSchema).forEach((key) => {
            console.log(`Validating: ${key} in bars, which should be of type ${bars.barSchema[key]} is: ${validate(bars.barSchema[key], bars.barObjF[key])}`);
        });

        // Check the cars (incorrect)
        Object.keys(cars.carSchema).forEach((key) => {
            console.log(`Validating: ${key} in cars, which should be of type ${cars.carSchema[key]} is: ${validate(cars.carSchema[key], cars.carObjF[key])}`);
        });

        // Check the persons (incorrect)
        Object.keys(persons.personSchema).forEach((key) => {
            console.log(`Validating: ${key} in persons, which should be of type ${persons.personSchema[key]} is: ${validate(persons.personSchema[key], persons.personObjF[key])}`);
        });
    }

}

start();
