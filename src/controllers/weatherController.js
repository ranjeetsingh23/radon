let axios = require("axios")

let getWeather = async function (req, res) {

    try {
        let place = req.query.q
        let id = req.query.appid
        let options = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${id}`
        }
        let result = await axios(options);
        let data = result.data.main.temp    //accessing temperatue only
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getSortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

        let cityObjArray = []

        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }

            let options = {
                method: "get",
                url: `https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d4b26cad7fa297f0a4c0f225185b9e7b`
            }
            let result = await axios(options)

            console.log(result.data.main.temp)

            obj.temp = result.data.main.temp
            cityObjArray.push(obj)  //pushing inside cityObjArray
        }

        let sorted = cityObjArray.sort((a, b) => { return a.temp - b.temp })  //sorting in ascending order
        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })

    }
}

module.exports.getSortedCities = getSortedCities
module.exports.getWeather = getWeather