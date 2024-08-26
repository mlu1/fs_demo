function getName(name){
    return name;
}

let a = false;
let b =true;

console.log(a && getName("Mluleki Mtande"))
console.log(a || getName("Mluleki"))

//Template Literals
let name1 = "Mluleki";
let name2 = "Doe";
console.log(name1 + " " +name2 + `${name1} + ${name2}`)

//Ternary Operator
const showRecipePne = false;

function getRecipeOneName(recipeName){
    return recipeName
}

function getRecipeTwoName(recipeName){
    return recipeName
}
if(showRecipePne){
    console.log(getRecipeOneName('Beef Stew'))
}else{
    console.log(getRecipeOneName('Coke'))
}

showRecipePne ? getRecipeOneName('Chickhen'):getRecipeTwoName('Umdoko')

const id =1
const productName = "Product Apple Watch"
const rating =5;

const product = {
    id,
    productName,
    rating}

console.log(product)


const product2 = {
    description:"Product 2 desc",
    id,
    productName,
    rating
}
const getProductName = product2.description;

console.log(getProductName)

const {description} = product2
console.log(description)

const array = [1,2,3]
let getArrayFirst = array[0];
let getArraySecond = array[1];

console.log(getArrayFirst,getArraySecond)

//default parameters ,spread and rest operators

function mulTwoNumbers(num1=1,num2=2){
    return num1*num2;
}

console.log(mulTwoNumbers(10))

//spread parameters
const array2 = [2,3,4]
const array3 = [10,11,12]

console.log([...array2])

console.log(9999,...array2,90,...array2,100000);


function getInfo(a,b,...c){
    console.log(a,c);
    return 'Mluleki Mtande';
}
console.log(getInfo(1,2,3,4,5,6,7,8,9,10))

//map,filter,find,some,every,includes

const personArray = [
    {
        name:'Person 1',
        age:30,
        country:'USA'
    },{
        name:'Person 2',
        age:40,
        country:'Russia'
    },
      {
        name:'Person 3',
        age:50,
        country:'India'
      },
      {
        name:'Person 4',
        age:66,
        country:'USA'
      }
];

//map
let getAllNames = personArray.map((person,index)=>{
    return `${person.name} age is ${person.age}`;
});

console.log(getAllNames);

//find a person from USA
let getPersonFromUsa = personArray.find((singlePerson,index)=>{
    return singlePerson.country === 'USA'
})

console.log(getPersonFromUsa)


//filter all the things with criteria

let getAllPersonsFromUsa = personArray.filter((singlePerson,index)=>{
    return singlePerson.country ==='USA';
})

console.log(getAllPersonsFromUsa)

let checkSomePerson = personArray.some((singlePerson)=>{
    return singlePerson.age >40;
})


let checkEvery = personArray.every((singlePerson)=>{
    return singlePerson >25;
})

console.log(checkEvery)
const fruitsArray = ['apple','banana','orange']
console.log(fruitsArray.includes("Mluleki"),fruitsArray.indexOf('orange'))


let getIndexOFRussian = personArray.findIndex((singlePerson)=>{
    return singlePerson.country ==="Russia"
})

let getListOfProductsElement = document.querySelector('.list-of-products')

function renderProducts(getProducts){
    getListOfProductsElement.innerHTML = getProducts
    .map((singleProduct)=>`<p>${singleProduct.title}<p/>`).join(" ");
}

async function fetchListOfProducts() {
        try{
            const apiResponse = await fetch('https://dummyjson.com/products',{
                method:"GET",
            });
            console.log(apiResponse)
            const result = await apiResponse.json();
            console.log(result);
            if(result?.products?.length >0) renderProducts(result?.products)
        }
        catch(e){
            console.log(e)
        }
}
fetchListOfProducts()