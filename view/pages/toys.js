const header = require('../components/header')
const head = require('../components/head')
const footer = require('../components/footer')

const pageToys = `
${head('Игрушки')}
<body>
  ${header}
  <h1>Игрушки для животных</h1>
  <ul>
    <li>Пищалка</li>
    <li>Плюшевый медвед</li>
    <li>Тапочки</li>
  </ul>
  ${footer}
</body>
</html>
`

module.exports = pageToys;