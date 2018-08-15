//greater then
db.movieDetails.find({ runtime: { $gt: 90 } }).count()

//greater then,less then
db.movieDetails.find({ runtime: { $gt: 90, $lt: 120 } }).count()

//greater then equals
db.movieDetails.find({ "tomato.meter": { $gte: 95 }, runtime: { $gt: 180 } })

//not equals
db.movieDetails.find({ rated: { $ne: "UNRATED" } }).count()

//in operator
db.movieDetails.find({ rated: { $in: ["G", "PG"] } }).pretty()



