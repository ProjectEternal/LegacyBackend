module.exports = function(server) {
    server.get("/lightswitch/api/service/Fortnite/status", (req, res) => {
        res.json({
            "serviceInstanceId": "fortnite",
            "status": "UP",
            "message": "OT Server @GDBOI101",
            "maintenanceUri": null,
            "overrideCatalogIds": [],
            "allowedActions": ["PLAY", "DOWNLOAD"],
            "banned": false, //Acc banning
            "launcherInfoDTO" : {
                "appName": "Fortnite",
                "catalogItemId": "Idfk",
                "namespace" : "fn"
            }
        });
    })
}