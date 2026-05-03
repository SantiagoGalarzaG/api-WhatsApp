const VerifyToken = (req, res) => {
    res.send("Token verificado correctamente");
}

const ReceivedMessage = (req, res) => {
    res.send("Mensaje recibido correctamente");
}

module.exports ={
    VerifyToken,
    ReceivedMessage
}