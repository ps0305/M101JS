* Suppose we have a collection foo that has an index created as follows:

```js
db.foo.createIndex( { a:1, b:1 } )
```

### Which of the following inserts are valid to this collection?
:white_check_mark: db.foo.insert({a:["apples","oranges"],b:"grapes})

:white_check_mark: db.foo.insert({a:"grapes",b:"oranges"})

:white_check_mark: db.foo.insert({a:"grapes",b:[8,9,10]})

:x: db.foo.insert({a:[1,2,3],b:[5,6,7})
