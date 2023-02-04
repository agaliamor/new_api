const header = require('../components/header')
const head = require('../components/head')
const footer = require('../components/footer')

const pageFood = `
${head('Корм для животных')}
<body>
  ${header}
  <h1>Корм для животных</h1>
  <ul>
    <li>Что-то вкусное</li>
    <li>Что-то улётное</li>
    <li>Ну такое</li>
  </ul>
  ${footer}
</body>
</html>
`

module.exports = pageFood;