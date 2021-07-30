const axios = require('axios');

const getUser = async( id, token ) => {

    let url = process.env.USER_API_URL + `user?user_id=${id}`;

    const { data } = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return data.user;

}

module.exports = {
    getUser
};