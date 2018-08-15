/*Which of the choices below is the title of a movie from the year 2013 that is rated PG-13 and won no awards? 
Please query the video.movieDetails collection to find the answer.

NOTE: There is a dump of the video database included in the handouts for the "Creating Documents" lesson. 
Use that data set to answer this question.*/

1-switch to folder 'creating documents'
2-use command 'mongorestore dump'
3-switch to dump folder and start mongodb server by 'mongo' command.
4-switch to 'video' database.
5-fire command to find appropriate file as mentioned above.

db.movieDetails.find({year:2013,rated:"PG-13","awards.wins":0}).pretty();