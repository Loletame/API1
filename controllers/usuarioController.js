const usuariosModel = require('./../models/usuariosModel');

// los controladores se encargan de la parte logica

exports.getUser = async (req, res)=>{
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const usuarios = await usuariosModel.obtenerUsuarios();
        //si todo va bien respondemos con los usuarios, del lado del cliente
        //lo obtenemos con json
        //status 200 que todo fue ok
        res.status(200).json({
            success:true,
            data: usuarios
        })

    } catch (error) {
        //si las instrucciones dentro del bloque try fallan, 
        //capturamos el error, lo mostramos en consola
        //y devolvemos la info del error al cliente
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos'
        })
    }
    exports.getUserById = async (req,res)=>{
        const idUser = req.params.id;
    try { const usuario = await usuarioModel.getUserById(idUser)
        if(usuario.length <1){
            res.status(404).json({
                success: false,
                message:`No existe el usuario con ID: ${idUser}`
            })
        }
        res.status(200).json({
            success : true,
            usuario
        })
        
    } catch (error) {
        
    }
    exports.createUsuario = async (req, res) => {
        try {
          const usuarioData = req.body;
          const nuevoUsuario = await usuariosModel.createUsuario(usuarioData);
          res.json(nuevoUsuario);
          res.status(200).json({
            success : true,
            message : "Todo ok"
          })

        } catch (error) {
          console.error('Error al crear el usuario:', error);
          res.status(500).json({ mensaje: 'Error al crear el usuario' });
        }
      };
    


    }

}