/**
 * If you are using webstorm go to preferences, search for eslint, and enable lint on save.
 * You may also have to manually configure eslint location.
 * Also change indent size to 2 if that's your thing, or edit the eslintrc.
 */

//this is not how to decalre a function and eslint should scream at you
function fun() {
    return 42;
}

const obj: {name: string, age: number} = {name: "jane doe", age: 50}

console.log(obj.name + fun())

