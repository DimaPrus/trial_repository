describe('Test JSON Objects', () => {
    it('JSON Tests', () => {
        cy.visit('https://app-intltest.mystrength.me/login')

        const simpleObject = {
            "name": "Dima",
            "age": "30"
        }

        const simpleArrayValues = ["first", "second", "third"]
        const arrayObjects = [{"country":"Ukraine"}, {"country":"usa"}, {"country":"poland"}]
        const dataTypes = {"string":"this is a string", "number": 10}

        const residents = {
            "peopleUSA":[
                {
                    "firstName":"Michael",
                    "lastName":"Brown",
                    "country":"usa",
                    "city":"new york"
                },
                {
                    "firstName":"Lisa",
                    "lastName":"Stewart",
                    "country":"usa",
                    "city":"new york"
                }
            ],
            "peopleUkraine":[
                {
                    "firstName":"Dima",
                    "lastName":"Prus",
                    "country":"ukraine",
                    "city":"ternopil"
                },
                {
                    "firstName":"Roman",
                    "lastName":"Prus",
                    "country":"ukraine",
                    "city":"kyiv"
                }
            ]
        }
        console.log(simpleArrayValues[0])
        console.log(simpleObject.name)
        console.log(arrayObjects[2].country)
        console.log(residents.peopleUkraine[0])
    })
})