module.exports = function (server) {
    server.get("/account", (req, res) => {
        res.json({});
    })

    server.get("/account/api/public/account/:accId", (req, res) => {
        res.json({
            "id": req.params.accId,
            "displayName": "OTServer",
            "name": "Project",
            "email": "OTServer@Eternal.dev",
            "failedLoginAttempts": 0, //Maybe Bot Protection?
            "lastLogin": new Date().toISOString(),
            "numberOfDisplayNameChanges": 0, //Add this too
            "ageGroup": "UNKNOWN",
            "headless": false,
            "country": "US", //maybe?
            "lastName": "Eternal",
            //Cool Stuff
            "preferredLanguage": "en",
            "canUpdateDisplayName": true,
            "tfaEnabled": false,
            "emailVerified": true,
            //End Cool stuff
            "minorVerified": false,
            "minorExpected": false,
            "minorStatus": "NOT_MINOR",
            "cabinedMode": false,
            "hasHashedEmail": false
        })
    })

    server.get("/account/api/public/account/:accId/externalAuths", (req, res) => {
        res.json({})
    })

    //Profile Stuff
    //TODO: Real Profiles

    server.get("/account/api/accounts/:accId/metadata", (req, res) => {
        res.json({
            "FGOnboarded": "true" //Proper Trust
        })
    })
}