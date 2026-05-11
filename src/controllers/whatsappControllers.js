const VerifyToken = (req, res) => {
    try{
        let accessTocken = "WSP_9fK2xQ7LmN4vT8aZ1pR6uD3yH5cJ0sE"
        let token = req.query["hub.verify_token"];
        let challenge = req.body["hub.challenge"];

        if(challenge !=null && token !=null && accessTocken == token){
            res.send(challenge);
        }else{
            res.status(400).send("Token no verificado");
        }



    }catch(error){
        res.status(400).send("Error al verificar el token");
    }
}

const ReceivedMessage = (req, res) => {
    res.send("Mensaje recibido correctamente");
}

module.exports ={
    VerifyToken,
    ReceivedMessage
}