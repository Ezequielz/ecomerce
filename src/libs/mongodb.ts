import mongoose from 'mongoose'

const { MONGODB_URI } = process.env

if (!MONGODB_URI) {
    throw new Error('MONGODB_URI must be defined')
}

const mongoConnection = {
    isConnected: 0
}

export const connectDB = async () => {
    if ( mongoConnection.isConnected ) {
        console.log('Ya estabamos conectados');
        return;
    }

    //TODO fix disconect mongoose
    // if ( mongoose.connections.length > 0 ) {
    //     mongoConnection.isConnected = mongoose.connections[0].readyState;

    //     if ( mongoConnection.isConnected === 1 ) {
    //         console.log('Usando conexión anterior');
    //         return;
    //     }

    //     await mongoose.disconnect();
    // }
    
    try {
        const { connection } = await mongoose.connect(MONGODB_URI)
        if (connection.readyState === 1) {
            console.log('Conectado a MongoDB');
            return Promise.resolve(true)
        }
    } catch (error) {
        console.log(error)
        return Promise.reject(false)
    }
}

export const disconnectDB = async() => {
    
    // if ( process.env.NODE_ENV === 'development' ) return;
    if ( mongoConnection.isConnected === 0 ) {
        // console.log('mongo conection status:', mongoConnection.isConnected)
        console.log('Desconectado de mongoDB')
        
        return;
    } 

    try {
        // console.log('mongo conection status:', mongoConnection.isConnected)
        // console.log('desconectando...')
        await mongoose.disconnect();
        mongoConnection.isConnected = 0;
        // console.log('mongo conection status:', mongoConnection.isConnected)
        console.log('Desconectado de MongoDB');
        
    } catch (error) {
        console.log(error)
    }


}