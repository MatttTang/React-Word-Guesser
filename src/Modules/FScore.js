function FetchScores(client){
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
                myResolve(data);
            }
        });
    });
}


module.exports.FetchScores = FetchScores;