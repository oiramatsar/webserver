const mongoose = require('mongoose')

const dbConection=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_CNN,{
        
        })
        console.log("Conexion exitosa")
    } catch (error) {
        console.log("error al iniciar la bd",error)
        throw new Error("Error al iniciar la bd")
    }

}
module.exports={
    dbConection
}
