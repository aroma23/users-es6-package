//version: 1.0.0
import pactum from 'pactum';

// const baseUrl = process.env.VITE_USERS_API_BASE_URL || '"VITE_USERS_API_BASE_URL" is not set in .env file';
const baseUrl = typeof Cypress != 'undefined' && Cypress.env ? Cypress.env('VITE_SF_API_BASE_URL') : process.env.VITE_SF_API_BASE_URL;
if (baseUrl === "" || baseUrl === 'undefined') {
  console.error("VITE_SF_API_BASE_URL is not defined in .env or environment variables");
}
export class Salesforce {
  /**
  * Read Users
  * @returns {Promise<object>} Successful Response (HTTP 200)
  */

  static Methods = Object.freeze({
    writeSalesforce: 'writeSalesforce',
    readSalesforce: 'readSalesforce'
  });
  static readSalesforce = async (userId, spec) => {
    console.log("readSalesforce method got called");
    // let readUserSpec = pactum.spec();
    // if (typeof spec !== "undefined") {
    //     readUserSpec = spec;
    // }
    // await readUserSpec
    //     .get(baseUrl + '/users/' + userId);
    // return readUserSpec;
  };
  static writeSalesforce = async (body, spec) => {
    console.log("writeSalesforce method got called");
    // let addUserSpec = pactum.spec();
    // if (typeof spec !== "undefined") {
    //     addUserSpec = spec;
    // }
    // await addUserSpec
    //     .post(baseUrl + '/users').withBody(body);
    // return addUserSpec;
  };
}