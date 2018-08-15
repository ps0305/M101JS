//Matching in embedded document
db.collection.find({ year: 2018}).count();

//Accessing nested property
db.collectio.find({ "object.Address" : "Bangalore"}).count //key must be in quotes

//finding scaler nested objects
db.collection.find ({ "directors" : ["Anurag kashyap", "Ram gopal varma"]}).count()
/*Above will find element in exactly same manner 
i.e. 1st director followed by second*/


//for specific query
db.collection.find ({"director.0" : "Anurag Kashyap"})


//Cursor
var c = db.collection.find();
var doc = function(){ return c.hasNext() ? c.next() : null;}
// to find number of objects left in batch
c.objsLeftInBatch();
//we can iterate through this database by calling doc() function

//Projection:reduces network overhead and processing requirement by limiting fields that returns in result document.
//0=>exclude, 1=> include
db.collection.find ({ rated: "PG"}, { title: 1})// _id will return by default
// to remove _id also
db.collection.find ({ rated: "PG"}, { title: 1, _id: 0 })
