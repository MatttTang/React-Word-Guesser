var AWS = require('aws-sdk');
const {v4: uuidv4} = require('uuid');

AWS.config.update({
    region: "us-west-2",
    endpoint: "https://dynamodb.us-west-2.amazonaws.com",
    accessKeyId: "AKIA5IDC47PMWLKMNFP7",
    secretAccessKey: "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"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "wordTab";

var params = {
    TableName: table,
    Item:{
        "placeHold": 0,
        "id": uuidv4(),
        "correct": 3,
        "cwords": docClient.createSet(["hello", "teats", "boob"]),
        "swords": docClient.createSet(["poopy"]),
        "name": "Helpp"
    }
}

console.log("Adding Item");
docClient.put(params, function(err,data){
    if (err){
        console.error(err);
    }
    else{
        console.log('Item Added');
    }
})