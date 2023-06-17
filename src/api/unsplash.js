import axios from 'axios'; //HTTP Client for node.js and the browser. Make http requests from node.js

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID wQRr---1jfLIDCHrBq1iBG0PJ11fAeESZ9nt4XFln-E', //my API key
    },
});
