import pactum from 'pactum';
import { getValueFromEnvironment } from '../helper/environment/env';

// const baseUrl = process.env.VITE_USERS_API_BASE_URL || '"VITE_USERS_API_BASE_URL" is not set in .env file';
// const baseUrl = (typeof Cypress != 'undefined' && Cypress.env) ? Cypress.env('VITE_USERS_API_BASE_URL') : process.env.VITE_USERS_API_BASE_URL 
const baseUrl = getValueFromEnvironment('VITE_USERS_API_BASE_URL')

/**
 * @module Users
 * 
 * This module provides basic arithmetic operations, including addition and subtraction.
 * It can be imported and used in other scripts to perform simple calculations.
 */

export class Users {

    /**
    * Read User
    * @param {string} userId - id of the user
    * @param {Spec} spec - Optional, defaults to undefined
    * @returns {Promise<object>} Successful Response (HTTP 200)
    */

    static readUser = async (userId, spec) => {
        let readUserSpec = pactum.spec();
        if (typeof spec !== "undefined") {
            readUserSpec = spec;
        }
        await readUserSpec
            .get(baseUrl + '/users/' + userId);
        return readUserSpec;
    }

    /**
    * Add Users
    * @param {Object} body - payload as json to add an user
    * @param {Spec} spec - Optional, defaults to undefined
    * @returns {Promise<object>} Successful Response (HTTP 201)
    */
    static addUser = async (body, spec) => {
        let addUserSpec = pactum.spec();
        if (typeof spec !== "undefined") {
            addUserSpec = spec;
        }
        await addUserSpec
            .post(baseUrl + '/users').withBody(body);
        return addUserSpec;
    }
}