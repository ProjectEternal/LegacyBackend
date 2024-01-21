module.exports = function(server) {
    server.post("/account/api/oauth/token", (req, res) => {
        res.json({
            "access_token": "RealOAuthToken",
            "expires_in": 99999,
            "expires_at" : "9999-12-02T01:12:01.100Z",
            "token_type": "bearer",
            "refresh_token": "RealRefreshToken",
            "refresh_expires" : 99999,
            "refresh_expires_at" : "9999-12-02T01:12:01.100Z",
            "account_id" : "OTServer",
            "client_id": "RealClientId",
            "internal_client": true,
            "client_service": "fortnite",
            "displayName" : "OTServer",
            "app": "fortnite",
            "in_app_id": "OTServer",
            "device_id": "RealDeviceId" //Hardware ban fr
        });
    })

    server.get("/account/api/oauth/verify", (req, res) => {
        res.json({
            "token": "RealOAuthToken",
            "session_id": "RealSessionId",
            "token_type": "bearer",
            "client_id": "RealClientId",
            "internal_client": true,
            "client_service": "fortnite",
            "account_id" : "OTServer",
            "expires_in": 99999,
            "expires_at" : "9999-12-02T01:12:01.100Z",
            "auth_method": "exchange_code", //Not yet but soon
            "displayName" : "OTServer",
            "app": "fortnite",
            "in_app_id": "OTServer",
            "device_id": "RealDeviceId" //Hardware ban fr
        });
    })

    server.delete("/account/api/oauth/sessions/kill", (req, res) => {
        //TODO: This could actaully be useful ngl
        res.status(204).end();
    })

    server.delete("/account/api/oauth/sessions/kill/*", (req, res) => {
        //TODO: This could actaully be useful ngl
        res.status(204).end();
    })
}