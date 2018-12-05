var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  var dbo = db.db("agenda")
  dbo.collection('events').aggregate([
    {
      "$project":{
        "id":"$id",
        "start":{
          "$concat":["$startDate", "$startTime"]
        },
        "end":{
          "$concat":["$endDate", "$endTime"]
        },
        "isFullDay":"$isFullDay"
      }
    },
    {
      $lookup:{
         from: 'relations',
         localField: 'id',
         foreignField: 'event',
         as: 'eventos'
       }
     },
     {
       "$unwind":"$eventos"
     }
     ,{$match:{"eventos.user":"mdelacruz@northware.mx"}}
   ]).toArray(function(err, res) {
    if (err) throw err
    console.log(JSON.stringify(res))
    db.close()
  })
})
