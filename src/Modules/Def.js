const fetch = require('node-fetch');

// module.exports.GDef = (word) =>{
//     let url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=3de6d44b-f9f6-46b7-a9dd-4edf259fa42d`;
//     return GenerateDefinition(url).then((res)=>{
//         return res;
//     })
// }

async function GDef(word) {
    let url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=3de6d44b-f9f6-46b7-a9dd-4edf259fa42d`;
    return GenerateDefinition(url).then((res)=>{
        return res;
    })
}

function GenerateDefinition(url){
    return fetch(url).then(function (u){
        return u.json().then(function (response){
            return response;
        })
    })
}

const GetWord = (word) => {
    return new Promise(function (resolve, reject) {
        let url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=3de6d44b-f9f6-46b7-a9dd-4edf259fa42d`;
        fetch(url).then((res) =>{
            resolve(res.json());
        })
    });
}

module.exports.GDef = GDef;
module.exports.GetWord = GetWord;

// module.exports.GenerateDef = (word) =>{
//     let url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=3de6d44b-f9f6-46b7-a9dd-4edf259fa42d`;
//     //fetch(url).then(res => res.json()).then(json => console.log(json));
//     let ret = null;
//     fetch(url).then(function(u){
//         return u.json().then(function (response){
//             ret = response;
//             console.log(ret);
//             return response;
//             // console.log(response[0].fl);
//             // console.log(response[0].shortdef);
//         })
//     })
//     return ret;
// }
