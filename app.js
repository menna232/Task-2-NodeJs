const { error } = require("console")
const request = require("request")
const geoCode = require("./utils/geoCode")
const weatherApi = require("./utils/weatherApi")

const countryName = process.argv[2]


geoCode( countryName , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : "  , data)

    weatherApi( data.lang , data.lat , (error , data) => {
        console.log("ERROR : " , error)
        console.log("DATA : " , data)
} )
})



