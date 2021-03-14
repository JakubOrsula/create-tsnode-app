/**
 *
 * TODO for webstorm users
 * 1. Go to preferences, search for eslint, choose automatic configuration and enable "run eslint on save".
 * 2. Click "Add Configuration in the bar on top.
 *     2.1 Click "+" in upper left corner and select "Node.js"
 *     2.2 Node interpreter should be already selected for you, if not select one.
 *         + this assumes you used nvm to install node. If not use "npm i node"
 *     2.3 Add "--require ts-node/register" to node parameters
 *     2.3 Select "index.ts" as entry file
 *     2.4 Click ok and you are ready to go
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

