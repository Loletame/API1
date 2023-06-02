const db = require('./../config/db');


exports.obtenerUsuarios = async ()=>{
    const [rows, fields] = await db.execute ('SELECT * from usuarios');
    //('SELECT `id`, `username`, `PASSWORD`, `role`, `img`, `email` FROM `usuarios`'); 
    
    console.log(rows);
    return rows;
}
exports.getUserById = async (id) => {
    const [rows, fields] = await db.execute('SELECT username, PASSWORD, role, img, email FROM usuarios WHERE id=?', [id]);
    return rows;
}
exports.createUsuario = async (nuevousuario)=>{
  const [rows, fields] = await db.execute('INSERT INTO usuarios (username, PASSWORD, role, img, email) VALUES (?, ?, ?, ?, ?)', [nuevousuario.username, nuevousuario.PASSWORD, nuevousuario.role, nuevousuario.img , nuevousuario.email]);
  return rows;
}
exports.updateUsuario = async (usuario) =>{
    const [rows, fields] = await db.execute(' UPDATE usuarios SET username = ?, PASSWORD = ?, role = ?, img = ? , email = ? WHERE id = ?', [usuario.username, usuario.PASSWORD, usuario.role, usuario.img , usuario.email, usuario.id]);
    return rows;
}
exports.deleteUsuarioById = async (id) =>{
  const  [rows, fields]= await db.execute('DELETE FROM usuarios WHERE id =?',[id]);
  return rows;
}
