In this lab, you will implement the methods in items.js necessary to support the route for text search or "/search". This route is implemented in mongomart.js in the function that begins with this line:

```js
router.get("/search", function(req, res) {
```
The methods you will implement in items.js are: searchItems(), and getNumSearchItems(). The comments in each of these methods describe in detail what you need to do to implement each method. When you are finished, restart the mongomart.js application and answer the question below.

* How many products match the query, "leaf"?