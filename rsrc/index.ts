/**
 * TODO if you are using webstorm go to preferences, search for eslint, choose automatic configuration and enable "run eslint on save".
 * You may also have to manually configure eslint location.
 * Also change indent size to 2 if that's your thing, or edit the eslintrc.
 */

//this is not how to decalre a function and eslint should scream at you
function fun() {
    return 42;
}

// remove this comment hit ctrl + s, and webstorm (eslint) will add semicolons automatically
const obj: {name: string, age: number} = {name: "jane doe", age: 50}

console.log(obj.name + fun())

