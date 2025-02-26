import pactum from 'pactum';

// const baseUrl = process.env.VITE_USERS_API_BASE_URL || '"VITE_USERS_API_BASE_URL" is not set in .env file';
const baseUrl = (typeof Cypress != 'undefined' && Cypress.env) ? Cypress.env('VITE_USERS_API_BASE_URL') : process.env.VITE_USERS_API_BASE_URL 

export class Users {
    /**
    * Read Users
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