const person = {
    firstname: 'Jawad',
    secondname: 'Hassan',
    age: 20,
    hobbies: ['swim','run','football'],
    address: {
               street: '55th street',
               city: 'islamabad',
               country: 'pakistan',
    }
    }

    console.log(person.hobbies[1])
    console.log(person.address.city)
    const { firstname, age, address: {city}} = person
    console.log(age) // destructor
    console.log(city)
    person.email='jawad@email.com'
    console.log(person)
