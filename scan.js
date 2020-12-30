var AWS = require('aws-sdk');

AWS.config.update({
    region: "us-west-2",
    endpoint: "https://dynamodb.us-west-2.amazonaws.com",
    accessKeyId: "AKIA5IDC47PMWLKMNFP7",
    secretAccessKey: "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"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "wordTab",
    IndexName: "placeHold-correct-index",
    KeyConditionExpression: "#num = :n and #s < :s",
    ExpressionAttributeNames:{
        "#num": "placeHold",
        "#s": "correct",
    },
    ExpressionAttributeValues:{
        ":n": 0,
        ":s": 4,
    },
    ScanIndexForward: false,
    Limit: 10
}
docClient.query(params, function(err, data){
    if (err){
        console.error(err);
    }
    else{
        console.log("success");
        data.Items.forEach(function(item){
            console.log(item)
        })
    }
});