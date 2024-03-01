const request = require("request")

const weatherApi = (lang , lat  , callback)=>{
    const wheatherUrl = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q="+lang +","+lat

    request({url : wheatherUrl , json: true} ,(err,res)=>{
    if(err){
        callback("can't connect eith wheather api" , undefined)
    }else if(res.body.error){
        callback(res.body.error,undefined)
    }else{
        callback (undefined , res.body.location.name + " it is " + res.body.current.condition.text  )
    }
})
}


module.exports = weatherApi