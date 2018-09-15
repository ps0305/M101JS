For companies in our collection founded in 2004 and having 5 or more rounds of funding, calculate the average amount raised in each round of funding. Which company meeting these criteria raised the smallest average amount of money per funding round? You do not need to distinguish between currencies. Write an aggregation query to answer this question.

As a check on your solution, Facebook had the largest funding round average.


* Hakia
* ooma
* Balihoo
* Pentaho
* Limerick BioPharma
* Sugar CRM
* Tumri
* Yelp
* KAYAK
* Nimbit

```js
db.companies.aggregate([
    {	$match: { "founded_year" : 2004 }},
    {
      $project: { 
          "_id" : 0, 
          "name" : 1, 
          "founded_year" : 1, 
          "funding_rounds" : 1,
          "total_rounds" : {
              "$size" : "$funding_rounds"
          }
      }
    },
    {   $match: { "total_rounds" : { "$gte" : 5 }} },
    {   $unwind: "$funding_rounds" },
    {   $group: { "_id" : "$name", "average": { $avg:"$funding_rounds.raised_amount"}} },
    {   $sort: { "average" : 1 } }
]);
