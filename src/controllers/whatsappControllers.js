const VerifyToken = (req, res) => {
    try{
        let accessTocken = "WSP_9fK2xQ7LmN4vT8aZ1pR6uD3yH5cJ0sE"
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];

        if(challenge !=null && token !=null && token == accessTocken){
            res.send(challenge);
        }else{
            res.status(400).send("Token no verificado");
        }



    }catch(error){
        res.status(400).send("Error al verificar el token");
    }
}

const ReceivedMessage = (req, res) => {
    try{
        let entry = (req.body["entry"])[0];
        let changes = (entry["changes"])[0];
        let value = changes["value"];
        let messageObject = value["messages"];

        console.log("Mensaje recibido:", messageObject);


        res.send("EVENT_RECEIVED");
    }catch(e){
        console.log("Error al recibir el mensaje:", e);
        res.send("EVENT_RECEIVED");
    }
}

module.exports ={
    VerifyToken,
    ReceivedMessage
}