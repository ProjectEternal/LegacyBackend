module.exports = function(server) {
    server.get("/fortnite/api/cloudstorage/user/:accId", (req,res) => {
        res.json([]);
    })
}