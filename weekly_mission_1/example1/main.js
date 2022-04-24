console.log("Que onda super explorer intergalacticos!!!!");


let myCar = new Object();
myCar.model = "Audi"

const myModule = (() => {
    const privateFoo = "No quiero que vean esto!"

    const exported = {
        publicFoo: "Quiero que vean esto"
    }
    return exported
})

console.log(myModule().publicFoo)