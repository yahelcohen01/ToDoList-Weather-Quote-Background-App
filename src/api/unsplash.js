import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID wQRr---1jfLIDCHrBq1iBG0PJ11fAeESZ9nt4XFln-E',
    },
});
