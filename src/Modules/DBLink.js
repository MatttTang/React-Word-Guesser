var AWS = require('aws-sdk');
require('dotenv').config();

export class DBLink {
    docClient = null;
    constructor(){
        console.log('t');
        AWS.config.update({
            region: "us-west-2",
            endpoint: "https://dynamodb.us-west-2.amazonaws.com",
            accessKeyId: process.env.REACT_APP_AK,
            secretAccessKey: process.env.REACT_APP_SAK
        });
        this.docClient = new AWS.DynamoDB.DocumentClient();
    }
}
