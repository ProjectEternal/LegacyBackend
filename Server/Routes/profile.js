const res_profile0 = {
    "created": "",
    "updated": "",
    "rvn": 1,
    "wipeNumber": 1,
    "accountId": "OTServer",
    "profileId": "profile0",
    "version": "no_version",
    "items": {
        "Currency:MtxPurchased": {
            "templateId": "Currency:MtxPurchased",
            "attributes": {
                "platform": "Shared"
            },
            "quantity": 1000000
        },
        "HomebaseBannerColor:DefaultColor1": {
            "templateId": "HomebaseBannerColor:DefaultColor1",
            "attributes": {
                "item_seen": true
            },
            "quantity": 1
        },
    },
    "stats": {
        "templateId": "profile_v2",
        "attributes": {
            "node_costs": {
                "t1_main_nodepage_layer1": {
                    "Token:homebasepoints": 5
                }
            },
            "mission_alert_redemption_record": {
                "lastClaimTimesMap": {
                    "General": {
                        "missionAlertGUIDs": [
                            "",
                            "",
                            ""
                        ],
                        "lastClaimedTimes": [
                        ]
                    },
                    "StormLow": {
                        "missionAlertGUIDs": [
                            "",
                            "",
                            "",
                            ""
                        ],
                        "lastClaimedTimes": [
                        ]
                    },
                    "Halloween": {
                        "missionAlertGUIDs": [
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            ""
                        ],
                        "lastClaimedTimes": [
                        ]
                    },
                    "Horde": {
                        "missionAlertGUIDs": [
                            "",
                            "",
                            "",
                            "",
                            "",
                            ""
                        ],
                        "lastClaimedTimes": [
                        ]
                    },
                    "Storm": {
                        "missionAlertGUIDs": [
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            ""
                        ],
                        "lastClaimedTimes": [
                        ]
                    }
                },
                "oldestClaimIndexForCategory": [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "twitch": {},
            "client_settings": {
                "pinnedQuestInstances": []
            },
            "level": 10,
            "named_counters": {
                "SubGameSelectCount_Campaign": {
                    "current_count": 0,
                    "last_incremented_time": ""
                },
                "SubGameSelectCount_Athena": {
                    "current_count": 0,
                    "last_incremented_time": ""
                }
            },
            "default_hero_squad_id": "",
            "collection_book": {
                "pages": [],
                "maxBookXpLevelAchieved": 0
            },
            "quest_manager": {
                "dailyLoginInterval": "2017-12-25T01:44:10.602Z",
                "dailyQuestRerolls": 1
            },
            "bans": {},
            "gameplay_stats": [
                {
                    "statName": "zonescompleted",
                    "statValue": 1
                }
            ],
            "inventory_limit_bonus": 100000,
            "current_mtx_platform": "Epic",
            "weekly_purchases": {},
            "daily_purchases": {
                "lastInterval": "2017-08-29T00:00:00.000Z",
                "purchaseList": {
                }
            },
            "mode_loadouts": [
                {
                    "loadoutName": "Default",
                    "selectedGadgets": [
                        "",
                        ""
                    ]
                }
            ],
            "in_app_purchases": {
                "receipts": [
                ],
                "fulfillmentCounts": {
                }
            },
            "daily_rewards": {
                "nextDefaultReward": 0,
                "totalDaysLoggedIn": 0,
                "lastClaimDate": "0001-01-01T00:00:00.000Z",
                "additionalSchedules": {
                    "founderspackdailyrewardtoken": {
                        "rewardsClaimed": 0,
                        "claimedToday": true
                    }
                }
            },
            "monthly_purchases": {},
            "xp": 0,
            "homebase": {
                "townName": "OTServer",
                "bannerIconId": "OT6Banner",
                "bannerColorId": "DefaultColor15",
                "flagPattern": -1,
                "flagColor": -1
            },
            "packs_granted": 13
        },
        "commandRevision": 0
    }
}

module.exports = function (server) {
    server.post("/fortnite/api/game/v2/profile/:accId/client/:McpCmd", (req, res) => {
        console.log("MCP: " + req.params.McpCmd)
        //if (req.params.McpCmd == "QueryProfile" ||req.params.McpCmd == "QueryProfile" ) {
            res.json({
                profileRevision: 0,
                profileId: req.query.profileId || "profile0",
                profileChangesBaseRevision: 0,
                profileChanges: {
                    "changeType": "fullProfileUpdate",
                    "profile": res_profile0
                },
                profileCommandRevision: 1,
                serverTime: new Date().toISOString(),
                multiUpdate: [],
                responseVersion: 1
            })
        //}
    })
}