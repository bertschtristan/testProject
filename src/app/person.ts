export class Person {
    name: string = ""
    email: string = ""
    phoneNumber: string = ""
    address: string = ""
    age: number = 0
    funFact: string = ""
    constructor (name: string, email: string, phoneNumber: string, address: string, age: number, funFact: string) {
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.address = address
        this.age = age
        this.funFact = funFact
    }
}