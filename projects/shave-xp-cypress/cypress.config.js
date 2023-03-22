const { defineConfig } = require("cypress");
const{Pool} = require('pg')

const dbConfig = {
  host:'motty.db.elephantsql.com',
  user:'hdzugbvi',
  password:'RJNNXeR_CSlQi-8OYnZibDocPWDEpQ5g',
  database:'hdzugbvi',
  port:5432
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      const pool = new Pool(dbConfig)
      on('task', {
        removeUser(email){
          return new Promise(function(resolve){
            pool.query('DELETE from users where email = $1',[email],function(error, result){
              if(error){
                throw error
  
              }
              resolve({success:result})
            })

          })
        }
      })
    },
    viewportWidth:1920,
    viewportHeight:1080,
    baseUrl:'http://localhost:3000'
  },
});
