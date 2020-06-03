const dotenv = require('dotenv-safe');

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 8085,
    MONGODB_URI: process.env.MONGODB_URI,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
}