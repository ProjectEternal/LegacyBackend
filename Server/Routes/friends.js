module.exports = function(server) {
    //TODO: Everything
    server.get("/friends/api/public/friends/:accId", (req, res) => {
        res.json([])
    })

    server.get("/friends/api/public/list/fortnite/:accId/recentPlayers", (req,res) => {
        res.json([])
    })

    server.get("/friends/api/public/blocklist/:accId", (req, res) => {
        res.json([])
    })
}