const{Pool} = require('pg')

const dbConfig = {
  host:'motty.db.elephantsql.com',
  user:'hdzugbvi',
  password:'RJNNXeR_CSlQi-8OYnZibDocPWDEpQ5g',
  database:'hdzugbvi',
  port:5432
}


export function removeUser(email){
    const pool = new Pool(dbConfig)
    return new Promise(function(resolve){
      pool.query('DELETE from users where email = $1',[email],function(error, result){
        
        if(error){
          throw error

        }
        resolve({success:result})
      })

    })
  }