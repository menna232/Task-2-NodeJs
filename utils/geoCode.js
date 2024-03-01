const request  = require("request")
// const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+countryName+".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"


const geoCode = (country , callback )=>{
    const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" +country+ ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    request({url:mapboxUrl  , json : true} , (err,res  )=>{
        if(err){
            callback("low level erreo , can't connect with the api" , undefined)
        }else if (res.body.message){
            callback("invalid token " , undefined)
        }else if (res.body.features.length == 0){
            callback("invalid country name " , undefined)
        }else{
            callback(undefined , {
                lang : res.body.features[0].center[0],
                lat : res.body.features[0].center[1]
        } )
        }
    })
}

module.exports= geoCode