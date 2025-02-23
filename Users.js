// useUser.js
import pactum from 'pactum';

export class Users {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    /**
    * Read Users
    * @returns {Promise<object>} Successful Response (HTTP 200)
    */

    readUser = async (userId, spec) => {
        let readUserSpec = pactum.spec();
        if (typeof spec !== "undefined") {
            readUserSpec = spec;
        }
        await readUserSpec
            .get(this.baseUrl + '/users/' + userId)
            .expectStatus(200);
        return readUserSpec;
    }

    // // tranditional way of return object
    // addUser = async (body) => {
    //     return await pactum.spec()
    //         .post(this.baseUrl + '/users').withBody(body)
    //         .expectStatus(201);
    // }

    addUser = async (body, spec) => {
        let addUserSpec = pactum.spec();
        if (typeof spec !== "undefined") {
            addUserSpec = spec;
        }
        await addUserSpec
            .post(this.baseUrl + '/users').withBody(body)
            .expectStatus(201);
        return addUserSpec;
    }
}