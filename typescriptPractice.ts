// Generic function allows normal arguments but also type arguments to use inside the function

function thisGenericFunction<T>(){
    return 'string' as T
}

// or say
function thisOtherGenericFunction<T>(one: T){
    return 'string' as T
}

// Allows whoever is using this function to provide the type argument
const result = thisOtherGenericFunction<number>(4)


// as const in TS.... newer feature that allows us to write objects that are sealed so any part of the object is immutable
// In JS Object.freeze works run time but

const tibs = {
    host: 'chef',
    port: 3,
    auth: {
        client: 'oshkosh'
    }
} as const;

// config.auth.client = 'titan' throws an error because nested parameters are immutable


// What does the private access modifer do when added to a class variable or method?
// - this says because config is private, you won;t be able to access from the outside

class Service {
    private config: string;
    constructor() {
        this.config = 'Tom is the greatest dog to ever live';
    }
}

//
const newService = new Service()

// So newService.config would not work
//  This is a good way to apply solid priciple of interface segregation.  Any exposed class use the params there and nothing more


// decorators.. use case... common in object oriented languages... is a way to re-use code following the "decorated path"
// its function that can actually decorate classes or functions.
// Liskov substitution 

function Injectable(){}

'@Injectable()'
class TibsTruckService {
    private config: string;
    constructor() {
        this.config = 'oshkosh likes this too';
    }
}

// What is the difference between Type and Interface
// For th most part these are interchangeable... main difference is at build time, interfaces are can be declared several times through the code
// Type has to be singular, and if a type is defined again somewhere inn the project, an error occurs
// lets say in the API we have an object defined as interface, this lets users add on to it.. Typescript figures it out and merges the objects together
// Use types for defining domain entities... as in defining product prices
// Auxillary shapes.. Props of react component, or inout of certain function


// What is Type Guard in TS?
// A way to right a function that whever you have a union type... ie. type: fruit.. pineapple, apple stawbery etc...
// you code a "fruit" type guard and you define what fall sunder fruit
// use case: whenever you get a list of a union type, and you want to do something specfic with "fruits" of that type, ie. narrow fruits.


// Structural Typing vs Nominal typing and what does TS implment... mainly structural typing
//- ie. if two objects have the same property, they are the same thing for TS
// ie. for java or C, its more nominal... they have to be substantiated by the same class... doesn;t matter if they have the same properties.
//TS gives you flexibillity here to combine objects assuming they have the same properties