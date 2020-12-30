var AWS = require('aws-sdk');

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
