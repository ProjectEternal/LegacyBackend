const res_profile0 = {
    "_id": "OTServer",
    "created": "2017-08-29T20:38:59.824Z",
    "updated": "2017-12-25T02:08:43.518Z",
    "rvn": 1,
    "wipeNumber": 1,
    "accountId": "OTServer",
    "profileId": "profile0",
    "version": "s1",
    "notifications": 10,
    "level": 50,
    "stats": {
        "level": 50,
        "templateId": "profile_v2",
        "attributes": {
            "node_costs": {
                "t1_main_nodepage_layer1": {
                    "Token:homebasepoints": 5
                }
            },
            "level": 30,
            "xp": 36000,
            "level_info": 20,
            "totalBalance": 500,
            "homebase": {
                "townName": "Name",
                "flagPattern": 5,
                "flagColor": 0,
                "level": 30
            },
            "commandRevision": 1
        }
    }
}

module.exports = function (server) {
    server.post("/fortnite/api/game/v2/profile/:accId/:perm/:McpCmd", (req, res) => {
        //console.log("MCP: " + req.params.McpCmd)
        //if (req.params.McpCmd == "QueryProfile" ||req.params.McpCmd == "QueryProfile" ) {
        res.json({
            profileRevision: 0,
            profileId: "profile0",
            profileChangesBaseRevision: 0,
            profileChanges: {
                "changeType": "fullProfileUpdate",
                "profile": res_profile0
            },
            profileCommandRevision: 1,
            serverTime: new Date().toISOString(),
            responseVersion: 1
        })
        //}
    })
}