//Write a MongoDB query to display all the documents in the collection restaurants.
db.restaurants.find()

//Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents
//in the collection restaurant.
db.restaurants.find({},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1})

//Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, 
//but exclude the field _id for all the documents in the collection restaurant.
db.restaurants.find({},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1,"_id":0})

//Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, 
//but exclude the field _id for all the documents in the collection restaurant.
db.restaurants.find({"borough": "Bronx"})

//Write a MongoDB query to display all the restaurant which is in the borough Bronx.
db.restaurants.find({"borough": "Bronx"})

//Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
db.restaurants.find({"borough": "Bronx"}).limit(5)

//Write a MongoDB query to find the restaurants who achieved a score more than 90.
db.restaurants.find({"grades":{ $elemMatch:{"score":{$gt : 90}}}})

//Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' 
//and their grade score more than 70 and latitude less than -65.754168.
db.restaurants.find({
    "cuisine":{ $ne: "American" },
    "grades":{ $elemMatch:{"score":{$gt:70}},
    "address":{ $arrayElemAt:{["coord",0]: {$lt:-65.754168}}
    })
    
//Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American'
//and achieved a score more than 70 and located in the longitude less than -65.754168. Note : 
//Do this query without using $and operator.
db.restaurants.find({
    "cuisine":{ $ne: "American" },
    "grades":{ $elemMatch:{"score":{$gt:70}},
    "address":{ $arrayElemAt:{["coord",0]: {$lt:-65.754168}}
    })

//Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American '
//and achieved a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed 
//according to the cuisine in descending order.
db.restaurants.find({
    "cuisine":{ $ne: "American" },
    {"grades":{ $elemMatch:{"grade":"A"}}},
    {"borough": {$ne :"Brooklyn"}}
}).sort("cuisine":-1)

//Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either 
//American or Chinese dish.
db.restaurants.find({
    {"borough": "Bronx"},
    {"cuisine":{$or [{"American"},{"Chinese"}]}}
}

//Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants 
//which belong to the borough Staten Island or Queens or Bronxor Brooklyn.
db.restaurants.find({
    {"borough": { 
        $or[
            {"Staten Island"},
            $or[
                {"Queens"},
                {"Bronxor Brooklyn"}
            ]
        ]    
    }},
    {"restaurant_id":1,"name":1,"borough":1,"cuisine":1}
})