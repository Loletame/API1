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
exports.addUser = async (user) => {
    const [rows, fields] = await db.execute ('INSERT INTO `usuarios`(`id`, `username`, `PASSWORD`, `role`, `img`, `email`) VALUES (?, ?, ?, ?, ?)');

}
