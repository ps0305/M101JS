In this lab, you will implement the method in `items.js` necessary to support the route for viewing a single item. This route is implemented in `mongomart.js` in the function that begins with this line:

```js
router.get("/item/:itemId", function(req, res) {
```
This route is implemented using a parameter for the item as part of the url. In Express, you may define a route with url parameters by placing a ":" before each portion of the url path that should be interpreted by Express as a variable. In this case, :itemId indicates that our callback for this route expects to use the value found in this portion of the url to do its job. You may access url parameters via the params property of the request object passed as the first parameter to our route callback function as we do here:
```js
var itemId = parseInt(req.params.itemId);
```
To complete the functionality to support the single item view, you will need to implement the `getItem()` method in `items.js`. The comments in this method describe what you need to do to implement it. When you are finished, restart the `mongomart.js` application and answer the question below.

Which of the following are true of the single item view for the Track Jacket product? Check all that apply.

* The Track jacket page shows reviews from Shannon, Bob and Jorge.
* Jorge's review is the last review listed on the Track Jacket page.