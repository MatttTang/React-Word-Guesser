var AWS = require('aws-sdk');
//const { DocumentClient } = require('aws-sdk/clients/dynamodb');
const {v4: uuidv4} = require('uuid');

function PostS(name, correct, skip, lowest){
    AWS.config.update({
        region: "us-west-2",
        endpoint: "https://dynamodb.us-west-2.amazonaws.com",
        accessKeyId: process.env.REACT_APP_AK,
        secretAccessKey: process.env.REACT_APP_SAK
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
        let noSkip = ["None"];
        params={
            TableName: "wordTab",
            Item:{
                "placeHold": 0,
                "id": uuidv4(),
                "correct": correct.length,
                "cwords": dClient.createSet(correct),
                "swords": dClient.createSet(noSkip),
                "name": name
            }
        }
    }
    console.log("adding Item");
    console.log(lowest);
    console.log(lowest.placeHold);
    console.log(lowest.id);
    dClient.put(params, function(err, data){
        if (err){
            console.error(err);
        }
        else{
            console.log('Item Added');
        }
    });
    let delParams = {
        TableName: "wordTab",
        Key:{
            "placeHold": 0,
            "id": lowest.id
        }
    };

    console.log("deleting lowest");
    dClient.delete(delParams, function(err, data){
        if (err){
            console.error(err);
        }
        else{
            console.log('Item Deleted');
        }
    });
}

module.exports.PostS = PostS;