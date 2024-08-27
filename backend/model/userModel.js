// All the queries and operations live here

const db=require('../config/db')

// My user object would be a collection of SQL operations that can be utilised by the controller

const User={
    create:(data,callback)=>{
        const query='INSERT INTO users (username,password_hash,role) VALUES (?,?,?);'
        db.query(query,[data.username,data.password_hash,data.role],callback)
    },
findAll:(callback)=>{
    const query='SELECT * FROM users;'
    db.query(query,callback)
},
findById: (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?;'
    db.query(query, [id], callback)
},
findByRole:(role,callback)=>{
    const query='SELECT * FRom users WHERE role=?;'
    db.query(query,[role],(err,results)=>{
      if(err){
        return callback(err,nul)
      }  if(results.length===0){
        return callback(null, null);
      }
      callback(null, results[0]);
    })

},
findByUsername:(username,callback)=>{
    const query='SELECT * FRom users WHERE username=?;'
    db.query(query,[username],(err,results)=>{
      if(err){
        return callback(err,nul)
      }  if(results.length===0){
        return callback(null, null);
      }
      callback(null, results[0]);
    })

},


update: (id, data, callback) => {
    const query = 'UPDATE users SET username = ?, password_hash = ?, role = ? WHERE id = ?;'
    db.query(query, [data.username, data.password_hash,data.role, id], callback)
},
delete: (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?;'
    db.query(query, [id], callback)
}

}

module.exports=User;