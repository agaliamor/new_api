const header = require('../components/header')
const head = require('../components/head')
const footer = require('../components/footer')

const main = `
${head('Добро пожаловать')}
<body>
  ${header}
  <main>
    <div>
      <h1>Добро пожаловать!</h1>
      <p>Рады видеть Вас на нашем сайте.</p>
    </div>
  </main>
  ${footer}
</body>
</html>
`

module.exports = main;