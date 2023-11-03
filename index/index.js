const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('../lib/shapes.js');
const fs = require('fs');
const path = require('path');
//Validates the text input by inquirer
const logoTextValidator = async (input) => {
    if (input > 3) {
       throw new Error ('Please no more than 3 characters.');
    }
    return true;
 };

async function mainMenu () {
    //awaits the prompts to be answered before the rest of the code runs
    const response = await inquirer.prompt([
        {
            name: 'text',
            type: 'input', 
            message: 'Enter text for your logo.',
            validate: logoTextValidator()
        },
        {
            name: 'textColor',
            type: 'input',
            message: 'What color would you like your text?'
        },
        {
            name: 'shape',
            type: 'list',
            message: 'What shape would you like your logo to be?',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            name: 'bgColor',
            type:'input',
            message: 'What color would you like the background of your logo?'
        }
    ]);
    //defines shape
    let shape;
    if (response.shape === 'Circle') {
        shape = new Circle;
    }
    if (response.shape === 'Square') {
        shape = new Square;
    }
    if (response.shape === 'Triangle') {
        shape = new Triangle;
    }
    //defines shape's color based on response
    shape.setColor(response.bgColor);
    let svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shape.render()}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
  
  </svg>`
  //accesses file path using __dirname to create file in specific location
  fs.writeFileSync(path.join(__dirname, './examples/logo.svg'), svg);
}
mainMenu();