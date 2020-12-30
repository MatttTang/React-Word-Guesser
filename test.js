var AWS = require('aws-sdk');

AWS.config.update({
    region: "us-west-2",
    endpoint: "https://dynamodb.us-west-2.amazonaws.com",
    accessKeyId: "AKIA5IDC47PMWLKMNFP7",
    secretAccessKey: "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"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "testT";

var num = 0;
var score = "1";
var id = "1a8965dc-9368-4b9e-a29e-ad99acaae4f7";
var name = "wow";

var params = {
    TableName: table,
    Key:{
        "num": num,
        "id": id
    }
};

docClient.get(params, function(err, data) {
    if (err){
        console.log('yikes');
        console.error(err);
    } 
    else{
        console.log("Item Succeed");
        console.log(JSON.stringify(data));
    }
});