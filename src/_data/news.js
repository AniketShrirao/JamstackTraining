const axios = require('axios');
require('dotenv').config();

module.exports = async function() {
    try {
        url = `http://newsapi.org/v2/everything?q=tesla&from=2021-01-10&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`;
        const article = await axios.get(url);
        console.log(article.data);
        return article.data;
    } catch (error) {
        console.error(error);
    }
};