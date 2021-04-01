import client from './apiClient.js';

client().get(`/file-batch-api`, { params: {ids: ["1", "2"]} }).then(res => {
    console.log(res.data);
}).catch(err => console.log("error", err));