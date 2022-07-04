# ecommerse-api

This github repository is a rest api designed for an online store with built in authentication, password encrpyion, and product storage. This was built with MongoDB, Express.js, and Node.js to be part of the MERN stack. 

# Features

## Authentication
This back end uses crypto.js to encrypt and decrypt passwords stores in mongoDB. Tokens are stored in the browser so users don't need to login every time they sign into the website.

## Data Storage
This back end connects to MongoDB for data storage of users, products, Shopping Carts, and previous orders. Images would commonly be stored inside of an AWS bucket or simmilar technology but because this is just a display project they are currently inside of a folder in the github repository to be hosted for free. Links to the resources are stored in MongoDB. 


# Improvements

One improvement that needs to be implimented if this were an actual store is password hashing with salt instead of password encryption for extra security. 

This rest api should also have automated testing added to improve reliability and testability of the project. 
