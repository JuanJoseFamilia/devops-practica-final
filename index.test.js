const fs = require('fs');
const path = require('path');

test('La página contiene ¡Hola Mundo!, el nombre y la matrícula', () => {
    const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

    expect(html).toMatch(/¡Hola Mundo!/);
    expect(html).toMatch(/Juan José Familia/);
    expect(html).toMatch(/20230218/);
});
