const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes');
const fs = require('fs');
const path = require('path');

async function mainMenu () {
    const response = await inquirer.prompt([
        {
            name: 'text',
            type: 'input', 
            message: 'Enter text for your logo.'
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
    shape.setColor(response.bgColor);
    let svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shape.render()}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
  
  </svg>`
  fs.writeFileSync(path.join(__dirname, './examples/logo.svg'), svg);
}
mainMenu();