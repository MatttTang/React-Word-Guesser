var AWS = require('aws-sdk');
//const { DocumentClient } = require('aws-sdk/clients/dynamodb');
const {v4: uuidv4} = require('uuid');

function PostS(name, correct, skip){
    AWS.config.update({
        region: "us-west-2",
        endpoint: "https://dynamodb.us-west-2.amazonaws.com",
        accessKeyId: "AKIA5IDC47PMWLKMNFP7",
        secretAccessKey: "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"
    });

    var params = null;

    let dClient = new AWS.DynamoDB.DocumentClient();
    if (skip.length > 0){
        params={
            TableName: "wordTab",
            Item:{
                "placeHold": 0,
                "id": uuidv4(),
                "correct": correct.length,
                "cwords": dClient.createSet(correct),
                "swords": dClient.createSet(skip),
                "name": name
            }
        }
    }
    else{
        params={
            TableName: "wordTab",
            Item:{
                "placeHold": 0,
                "id": uuidv4(),
                "correct": correct.length,
                "cwords": dClient.createSet(correct),
                "swords": "None",
                "name": name
            }
        }
    }
    console.log("adding Item");
    dClient.put(params, function(err, data){
        if (err){
            console.err(err);
        }
        else{
            console.log('Item Added');
        }
    })

}

module.exports.PostS = PostS;