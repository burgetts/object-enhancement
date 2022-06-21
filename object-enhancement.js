
// Same keys and values
const createInstructor = (firstName, lastName) => ({firstName, lastName})

// Computed property names
let favoriteNumber = 42
let instructor = {
    firstName: 'Colt',
    [favoriteNumber] : 'That is my favorite!'
}

// Object methods
let instructor1 = {
    firstName : 'Colt',
    sayHi() {
        return 'Hi!'
    },
    sayBye() {
        return this.firstName + ' says bye!'
    }
}

// createAnimal function

const createAnimal = (species, verb, noise) => {
    let animalObj = {
        species,
        [verb]() {
            return noise
        }
    }
    return animalObj
}

dog = createAnimal('dog','bark','WOOF!')
sheep = createAnimal('sheep','bleet','BAAH!')
