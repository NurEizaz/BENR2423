const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.xyjdt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const { faker } = require('@faker-js/faker');
const firstname = faker.name.firstName(); 
const lastname =faker.name.lastName();
const Email = faker.internet.email(); 
const PhoneNumber = faker.phone.phoneNumber(); 

const bcrypt = require("bcryptjs")

const password = "mypass123"
const saltRounds = 10

bcrypt.genSalt(saltRounds, function (saltError, salt) {
	if (saltError) {
	  throw saltError
	} else {
	  bcrypt.hash(password, salt, function(hashError, hash) {
		if (hashError) {
		  throw hashError
		} else {
		  console.log(hash)
		  //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
		}
	  })
	}
  })

client.connect(err => {
	if (err) {
		console.log(err.message)
		return
	}
	console.log('Connected to MongoDB');
	console.time('insert');

    /*client.db('Week03').collection('companies').insertOne({
        Firstname:`${firstname}`,
		Lastname: `${lastname}`,
		PhoneNumber: `${PhoneNumber}`,
		Email:`${Email}`
    })*/

	console.timeEnd('insert');
	console.log('completed');
});