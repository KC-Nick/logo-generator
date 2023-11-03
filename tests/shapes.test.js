const { Circle, Triangle, Square } = require('../lib/shapes.js');

describe('Shapes', () => {
    it('should create a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#FF0000"/>');
    })
});

    it('should create a green circle', () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>');
});

    it('should create a purple square', () => {
    const shape = new Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="purple"/>');
});