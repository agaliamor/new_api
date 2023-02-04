const header = require('../components/header')
const head = require('../components/head')
const footer = require('../components/footer')

const pageContacts = `
${head('Контакты')}
<body>
  ${header}
  <h1>Как связаться с нами?</h1>
  <ul>
    <li>Буба 88005553535</li>
    <li>Биба 88005553535</li>
    <li>Боба 88005553535</li>
  </ul>
  ${footer}
</body>
</html>
`

module.exports = pageContacts;
