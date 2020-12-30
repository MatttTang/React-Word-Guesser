var AWS = require('aws-sdk');

const AK = process.env.AK;
const SAK = process.env.SAK;

export class DBLink {
    docClient = null;
    constructor(){
        console.log('t');
        AWS.config.update({
            region: "us-west-2",
            endpoint: "https://dynamodb.us-west-2.amazonaws.com",
            accessKeyId: process.env.AK,
            secretAccessKey: process.env.SAK
        });
        this.docClient = new AWS.DynamoDB.DocumentClient();
    }
}
