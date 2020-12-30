var AWS = require('aws-sdk');

export class DBLink {
    docClient = null;
    constructor(){
        console.log('t');
        AWS.config.update({
            region: "us-west-2",
            endpoint: "https://dynamodb.us-west-2.amazonaws.com",
            accessKeyId: "AKIA5IDC47PMWLKMNFP7",
            secretAccessKey: "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"
        });
        this.docClient = new AWS.DynamoDB.DocumentClient();
    }
}
