const db = require('./../config/db');


exports.obtenerUsuarios = async ()=>{
    const [rows, fields] = await db.execute ('SELECT * from usuarios');
    //('SELECT `id`, `username`, `PASSWORD`, `role`, `img`, `email` FROM `usuarios`'); 
    
    console.log(rows);
    return rows;
};
exports.getUserById = async (id) => {
    const [rows, fields] = await db.execute ('SELECT * FROM `usuarios` WHERE id=?, [id]');

}
exports.createUsuario = async (usuarioData) => {
    const { username, password, role, img, email } = usuarioData;
  
    try {
      const [result] = await db.execute(
        'INSERT INTO usuarios (username, password, role, img, email) VALUES (?, ?, ?, ?, ?)',
        [username, password, role, img, email]
      );
  
      const nuevoUsuarioId = result.insertId;
  
      return { nuevoUsuarioId, ...usuarioData };
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw error;
    }
  };