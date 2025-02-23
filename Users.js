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
    readUser = async (userId) => {
        const readUserSpec = pactum.spec();
        await readUserSpec
            .get(this.baseUrl + '/users/' + userId)
            .expectStatus(200);
        return readUserSpec;
    }

    addUser = async (body) => {
        const addUserSpec = await pactum.spec();
        await addUserSpec
            .post(this.baseUrl + '/users').withBody(body)
            .expectStatus(201);
        return addUserSpec;
    }
}