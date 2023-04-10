//Finding Documents in a Collection

//Find a Document with Equality
//this command will return the specified document that matches the exact value
//db.collection.find({key: vlaue})

db.users.find({ age: 22 })

//array
db.grades.find({ grade: "A" })
//gives object which includes A

db.grades.find({ grade: ["A"] })
//gives object which has just A


// Find a Document by Using the $in Operator
// Use the $in operator to select documents where the value of a field equals any value in the specified array. Here's an example:

db.zips.find({ city: { $in: ["PHOENIX", "CHICAGO"] } })

// Finding Documents by Using Comparison Operators

$gt
// Use the $gt operator to match documents with a field greater than the given value 

db.sales.find({ "items.price": { $gt: 50 } })

$lt
// Use the $lt operator to match documents with a field less than the given value. For example:

db.sales.find({ "items.price": { $lt: 50 } })

$lte
// Use the $lte operator to match documents with a field less than or equal to the given value. For example:

db.sales.find({ "customer.age": { $lte: 65 } })

$gte
// Use the $gte operator to match documents with a field greater than or equal to the given value. For example:

db.sales.find({ "customer.age": { $gte: 65 } })

