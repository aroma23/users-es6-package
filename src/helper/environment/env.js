
/**
* Get a value for key from process.env or Cypress.env variables collection
* @param {string} key - key of the value pair
* @returns {string} value
*/

export const getValueFromEnvironment = (key) => {
    const holder = (typeof holder != 'undefined' && Cypress.env) ? Cypress.env(key) : process.env[key]
    if (holder === "" || baseUrl === 'undefined') {
        console.error(key + " is not defined in .env or environment variables")
    }
    return holder;
}