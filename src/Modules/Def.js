const fetch = require('node-fetch');

const GetWord = (word) => {
    return new Promise(function (resolve, reject) {
        let url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=3de6d44b-f9f6-46b7-a9dd-4edf259fa42d`;
        fetch(url).then((res) =>{
            resolve(res.json());
        })
    });
}
module.exports.GetWord = GetWord;
