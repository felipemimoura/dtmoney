const fs = require('fs')
const DB_FILE = './core/db'
console.log('Crud')

function create(content) {
  fs.writeFileSync(DB_FILE, content)
  return content
}

// [SIMULATION]
console.log(create('Hoje eu preciso gravar aulas 2'))
