1) npm install
2) npm start

Above two steps install and run the project (its a standard create-react-app project).
Debugging tools:
a) Chrome Developer tools
b) react-devtools (an extension for chrome and firefox)

Debugging:
1) use React part of devtools to see the components themselves as well as their props and state values
2) in the chrome's developer console, you have access to all the react objects via command-line.
   Just type:
   $r. and you will see all the different options available. Some will have value, others won't depending 
   on the place you are in the application.

   like $r.state will give me access to the current state object.
   Please keep in mind that when you are using commands on the commandline, these commands will be run on
   the component you are using at that moment.

   The way to do this is: 
   step1) you goto React tab in the developer tools. Select the component you want to run commands on.
   step2) then goto Console. and type..say... $r.state
   now you will have access to the state of the component selected in step1.
   Additionally, you will also have access to all the functions inside that component through __proto__

Testing tools:
1) Jest comes pre-installed if the project was create-react-app based. It even has an example test.
run the test via:
npm run test

2) Type checking with Flow. Flow is a static type checker for javascript.
Type checking allows us to specify what values our variable, objects and functions should accept. This prevents
a lot of unexpected behavior in our code. PropTypes is another tool that does type checking. 
To install flow:
npm install flow-bin --save-dev

After installing flow, goto package.json, under scripts, and add "flow": "flow"

this will make sure that flow script can be run.

then do-> npm run flow init 
this will create a .flowconfig file. This is the configuration file for flow. Inside this file, you could ignore or include types for checking and other things.
In this project we will not be using it much.

IMPORTANT!!
last thing needed to have flow checking types you want to check is to add //@flow to the top of all the files that you want flow to do type checking on.

then run flow with:
npm run flow

this will make flow run and do type checking in all the files decorated on top by // @flow and then give results.. usually a buch of errors if it did find type checking errors.

3) ESLint and related tools for linting. 
npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
(you might get some warnings like eslint-config-react-app@0.5.2 requires a peer of eslint-plugin-jsx-a11y@^2.2.3

Just check in package.json if eslint-plugin-jsx-a11y is installed .. and it will be ok. Same goes with other warnings)

After this we need to do configuration for ESLint, to make it work. So make a .eslintrc.json file
In this file (.eslintrc.json), we will be extending the rules of airbnb to the standards of eslint. So add "extends":"airbnb". Eslint already has some rule. So we will be extending it to the standards that airbnb abides by.
After this, add the plugins that we just installed in the .eslintrc.json file.
"plugins":[
    "react", "jsx-a11y", "import"
] 

4) Now install a VSCode extension for ESLint. Search for ESLint and install ESLint from Dirk Baeumer

Now all is installed. When you open any js file, you should see errors popping up because we just installed a linter. 
Note: in the PROBLEMS terminal, you will see a list of all the errors. You will see that all the linting errors are preceeded by [eslint]
They will not break your code.

5) OK, so now lets begin with Jest. Jest supports dozens of methods to meet most of our testing needs.
We will start by using a few methods to test numbers within our application.
