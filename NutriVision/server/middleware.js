const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// Initialize Express app
const app = express();

// Middleware to parse cookies
app.use(cookieParser());

// Your withAuth middleware
const secret = process.env.KEY;

const withAuth = async (req, res, next) => {
  try {
    
    const token = req.cookies.token;
    if (!token) {
      return res.json('no token');
    }
    const decoded = await jwt.verify(token, secret);
    req.username = decoded.username;
    console.log(req.username+" "+decoded.exp/(60))
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.json('invalid token');
  }
};

// Export withAuth middleware
module.exports = { withAuth };
