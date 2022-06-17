let axios = require("axios")

let getAllMemes = async function(req,res){
    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let memeEditor = async function(req,res){
    try {
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        let id = req.query.template_id
        console.log(`query params are: ${text0} ${text1} ${username} ${password}`)
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
        }

        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getAllMemes = getAllMemes
module.exports.memeEditor = memeEditor