//INSERT

//TO insert an object in the collection use command:
//db.<collection>.insertOne(obj)

//TO push multiple objects at one use command:
//db.<collection>.insertMany(obj_array)


db.users.insertOne({
    name: "User",
    email: "user@domain.com",
    age: 21
})


db.users.insertMany([
    {
        name: "John",
        email: "john@domain.com",
        age: 24
    },
    {
        name: "Kamil",
        email: "kamil@domain.com",
        age: 24
    },
    {
        name: "Irshad",
        email: "irshad@domain.com",
        age: 22
    },
])