const fs = require('fs')

module.exports = function (server) {
    server.get("/fortnite/api/version", (req, res) => {
        res.json({
            "app": "fortnite",
            "serverDate": new Date().toISOString(),
            "overridePropertiesVersion": "unknown",
            "cln": "2870186",
            "build": "Project Eternal",
            "moduleName": "Fortnite-Alpha",
            "buildDate": "2016-02-16T12:00:00.420Z",
            "version": "OT6.5",
            "branch": "OT-6.5",
            "modules": {}
        });
    })

    server.get("/fortnite/api/game/v2/enabled_features", (req, res) => {
        res.json([]);
    })

    server.get("/fortnite/api/game/v2/world/info", (req, res) => {
        res.json({
            "theaters": [
                {
                    "displayName": "Stonewood",
                    "uniqueId": "8633333E41A86F67F78EAEAF25BF4735",
                    "theaterSlot": 0,
                    "bIsTestTheater": false,
                    "description": "",
                    "runtimeInfo": {
                        "theaterType": "Tutorial",
                        "theaterTags": {
                            "gameplayTags": []
                        },
                        "theaterVisibilityRequirements": {
                            "commanderLevel": 0,
                            "personalPowerRating": 0,
                            "partyPowerRating": 0,
                            "activeQuestDefinition": "None",
                            "questDefinition": "None",
                            "objectiveStatHandle": {
                                "dataTable": "None",
                                "rowName": "None"
                            },
                            "itemDefinition": "None"
                        },
                        "requirements": {
                            "commanderLevel": 0,
                            "personalPowerRating": 0,
                            "partyPowerRating": 0,
                            "activeQuestDefinition": "None",
                            "questDefinition": "None",
                            "objectiveStatHandle": {
                                "dataTable": "None",
                                "rowName": "None"
                            },
                            "itemDefinition": "None"
                        },
                        "worldMapPinClass": "BlueprintGeneratedClass'/Game/Environments/WorldMap/Blueprints/WM_PinEasy.WM_PinEasy_C'",
                        "theaterImage": "Texture2D'/Game/UI/Icons/Icon-TheaterDifficulty-_normal_.Icon-TheaterDifficulty-_normal_'",
                        "theaterImages": {
                            "brush_XXS": {
                                "imageSize": {
                                    "x": 32,
                                    "y": 32
                                },
                                "drawAs": "Image",
                                "margin": {
                                    "left": 0,
                                    "top": 0,
                                    "right": 0,
                                    "bottom": 0
                                },
                                "tintColor": {
                                    "specifiedColor": {
                                        "r": 1,
                                        "g": 1,
                                        "b": 1,
                                        "a": 1
                                    },
                                    "colorUseRule": "UseColor_Specified"
                                },
                                "tiling": "NoTile",
                                "mirroring": "NoMirror",
                                "imageType": "NoImage",
                                "resourceObject": "None",
                                "resourceName": "None",
                                "bIsDynamicallyLoaded": false,
                                "uVRegion": {
                                    "min": {
                                        "x": 0,
                                        "y": 0
                                    },
                                    "max": {
                                        "x": 0,
                                        "y": 0
                                    },
                                    "isValid": 0
                                }
                            },
                            "brush_XS": {
                                "imageSize": {
                                    "x": 32,
                                    "y": 32
                                },
                                "drawAs": "Image",
                                "margin": {
                                    "left": 0,
                                    "top": 0,
                                    "right": 0,
                                    "bottom": 0
                                },
                                "tintColor": {
                                    "specifiedColor": {
                                        "r": 1,
                                        "g": 1,
                                        "b": 1,
                                        "a": 1
                                    },
                                    "colorUseRule": "UseColor_Specified"
                                },
                                "tiling": "NoTile",
                                "mirroring": "NoMirror",
                                "imageType": "NoImage",
                                "resourceObject": "None",
                                "resourceName": "None",
                                "bIsDynamicallyLoaded": false,
                                "uVRegion": {
                                    "min": {
                                        "x": 0,
                                        "y": 0
                                    },
                                    "max": {
                                        "x": 0,
                                        "y": 0
                                    },
                                    "isValid": 0
                                }
                            },
                            "brush_S": {
                                "imageSize": {
                                    "x": 32,
                                    "y": 32
                                },
                                "drawAs": "Image",
                                "margin": {
                                    "left": 0,
                                    "top": 0,
                                    "right": 0,
                                    "bottom": 0
                                },
                                "tintColor": {
                                    "specifiedColor": {
                                        "r": 1,
                                        "g": 1,
                                        "b": 1,
                                        "a": 1
                                    },
                                    "colorUseRule": "UseColor_Specified"
                                },
                                "tiling": "NoTile",
                                "mirroring": "NoMirror",
                                "imageType": "NoImage",
                                "resourceObject": "None",
                                "resourceName": "None",
                                "bIsDynamicallyLoaded": false,
                                "uVRegion": {
                                    "min": {
                                        "x": 0,
                                        "y": 0
                                    },
                                    "max": {
                                        "x": 0,
                                        "y": 0
                                    },
                                    "isValid": 0
                                }
                            },
                            "brush_M": {
                                "imageSize": {
                                    "x": 32,
                                    "y": 32
                                },
                                "drawAs": "Image",
                                "margin": {
                                    "left": 0,
                                    "top": 0,
                                    "right": 0,
                                    "bottom": 0
                                },
                                "tintColor": {
                                    "specifiedColor": {
                                        "r": 1,
                                        "g": 1,
                                        "b": 1,
                                        "a": 1
                                    },
                                    "colorUseRule": "UseColor_Specified"
                                },
                                "tiling": "NoTile",
                                "mirroring": "NoMirror",
                                "imageType": "NoImage",
                                "resourceObject": "None",
                                "resourceName": "None",
                                "bIsDynamicallyLoaded": false,
                                "uVRegion": {
                                    "min": {
                                        "x": 0,
                                        "y": 0
                                    },
                                    "max": {
                                        "x": 0,
                                        "y": 0
                                    },
                                    "isValid": 0
                                }
                            },
                            "brush_L": {
                                "imageSize": {
                                    "x": 32,
                                    "y": 32
                                },
                                "drawAs": "Image",
                                "margin": {
                                    "left": 0,
                                    "top": 0,
                                    "right": 0,
                                    "bottom": 0
                                },
                                "tintColor": {
                                    "specifiedColor": {
                                        "r": 1,
                                        "g": 1,
                                        "b": 1,
                                        "a": 1
                                    },
                                    "colorUseRule": "UseColor_Specified"
                                },
                                "tiling": "NoTile",
                                "mirroring": "NoMirror",
                                "imageType": "NoImage",
                                "resourceObject": "None",
                                "resourceName": "None",
                                "bIsDynamicallyLoaded": false,
                                "uVRegion": {
                                    "min": {
                                        "x": 0,
                                        "y": 0
                                    },
                                    "max": {
                                        "x": 0,
                                        "y": 0
                                    },
                                    "isValid": 0
                                }
                            },
                            "brush_XL": {
                                "imageSize": {
                                    "x": 32,
                                    "y": 32
                                },
                                "drawAs": "Image",
                                "margin": {
                                    "left": 0,
                                    "top": 0,
                                    "right": 0,
                                    "bottom": 0
                                },
                                "tintColor": {
                                    "specifiedColor": {
                                        "r": 1,
                                        "g": 1,
                                        "b": 1,
                                        "a": 1
                                    },
                                    "colorUseRule": "UseColor_Specified"
                                },
                                "tiling": "NoTile",
                                "mirroring": "NoMirror",
                                "imageType": "NoImage",
                                "resourceObject": "None",
                                "resourceName": "None",
                                "bIsDynamicallyLoaded": false,
                                "uVRegion": {
                                    "min": {
                                        "x": 0,
                                        "y": 0
                                    },
                                    "max": {
                                        "x": 0,
                                        "y": 0
                                    },
                                    "isValid": 0
                                }
                            }
                        },
                        "theaterColorInfo": {
                            "bUseDifficultyToDetermineColor": false,
                            "color": {
                                "specifiedColor": {
                                    "r": 0.4969330132007599,
                                    "g": 1,
                                    "b": 0.01298299990594387,
                                    "a": 1
                                },
                                "colorUseRule": "UseColor_Specified"
                            }
                        },
                        "socket": "Onboarding_Gate",
                        "missionAlertRequirements": {
                            "commanderLevel": 0,
                            "personalPowerRating": 0,
                            "partyPowerRating": 0,
                            "activeQuestDefinition": "None",
                            "questDefinition": "None",
                            "objectiveStatHandle": {
                                "dataTable": "None",
                                "rowName": "None"
                            },
                            "itemDefinition": "None"
                        }
                    },
                    "tiles": [
                        {
                            "tileType": "Normal",
                            "zoneTheme": "/Game/World/ZoneThemes/Onboarding/ZT_OnboardingFort/BP_ZT_Onboarding_Fort.BP_ZT_Onboarding_Fort_C",
                            "requirements": {
                                "commanderLevel": 0,
                                "personalPowerRating": 0,
                                "partyPowerRating": 0,
                                "activeQuestDefinition": "None",
                                "questDefinition": "None",
                                "objectiveStatHandle": {
                                    "dataTable": "None",
                                    "rowName": "None"
                                },
                                "itemDefinition": "None"
                            },
                            "linkedQuests": [],
                            "xCoordinate": 2,
                            "yCoordinate": 1,
                            "missionWeightOverrides": [
                                {
                                    "weight": 1,
                                    "missionGenerator": "/Game/World/MissionGens/MissionGen_Onboarding_Fort.MissionGen_Onboarding_Fort_C"
                                }
                            ],
                            "difficultyWeightOverrides": [],
                            "canBeMissionAlert": true,
                            "tileTags": {
                                "gameplayTags": []
                            }
                        }
                    ],
                    "regions": [
                        {
                            "displayName": "Rural Region",
                            "regionTags": {
                                "gameplayTags": []
                            },
                            "tileIndices": [
                                0
                            ],
                            "regionThemeIcon": "None",
                            "missionData": {
                                "missionWeights": [],
                                "difficultyWeights": [],
                                "numMissionsAvailable": 0,
                                "numMissionsToChange": 0,
                                "missionChangeFrequency": 0
                            },
                            "requirements": {
                                "commanderLevel": 0,
                                "personalPowerRating": 0,
                                "partyPowerRating": 0,
                                "activeQuestDefinition": "None",
                                "questDefinition": "None",
                                "objectiveStatHandle": {
                                    "dataTable": "None",
                                    "rowName": "None"
                                },
                                "itemDefinition": "None"
                            }
                        }
                    ]
                }
            ],
            "missions": [],
            "missionAlerts": []
        });
    })
}