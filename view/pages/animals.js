const header = require('../components/header')
const head = require('../components/head')
const footer = require('../components/footer')

const pageAnimals = `
${head('Животные')}
<body>
  ${header}
  <h1>Животные</h1>
  <ul>
    <li>Сурикаты</li>
    <li>Кошки</li>
    <li>Собаки</li>
  </ul>
  ${footer}
</body>
</html>
`

module.exports = pageAnimals;