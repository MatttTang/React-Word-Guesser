//var AWS = require('aws-sdk');

// function FetchScores(client){
//     console.log('test');
//     let params = {
//         TableName: "wordTab",
//         IndexName: "placeHold-correct-index",
//         KeyConditionExpression: "#num = :n and #s < :s",
//         ExpressionAttributeNames:{
//             "#num": "placeHold",
//             "#s": "correct",
//         },
//         ExpressionAttributeValues:{
//             ":n": 0,
//             ":s": 4,
//         },
//         ScanIndexForward: false,
//         Limit: 10
//     }
//     client.docClient.query(params, function(err, data){
//         if (err){
//             console.error(err);
//         }
//         else{
//             console.log("success");
//             data.Items.forEach(function(item){
//                 console.log(item)
//             })
//         }
//     });
// }

function FetchScores(client){
    console.log('test');
    let params = {
        TableName: "wordTab",
        IndexName: "placeHold-correct-index",
        KeyConditionExpression: "#num = :n and #s < :s",
        ExpressionAttributeNames:{
            "#num": "placeHold",
            "#s": "correct",
        },
        ExpressionAttributeValues:{
            ":n": 0,
            ":s": 10,
        },
        ScanIndexForward: false,
        Limit: 10
    }
    return new Promise(function(myResolve, myReject){
        client.docClient.query(params, function(err, data){
            if (err){
                console.error(err);
                myReject();
            }
            else{
                console.log("success");
                // data.Items.forEach(function(item){
                //     console.log(item)
                // })
                myResolve(data);
            }
        });
    });
    // client.docClient.query(params, function(err, data){
    //     if (err){
    //         console.error(err);
    //     }
    //     else{
    //         console.log("success");
    //         data.Items.forEach(function(item){
    //             console.log(item)
    //         })
    //     }
    // });
}


module.exports.FetchScores = FetchScores;