module.exports = function(server) {
    server.post("/ET2/CollectData.1", (req,res) => {
        res.json({});
    })

    server.get("/account/api/epicdomains/ssodomains", (req,res) => {
        res.json([
            "unrealengine.com",
            "unrealtournament.com",
            "fortnite.com",
            "epicgames.com"
        ])
    })
}