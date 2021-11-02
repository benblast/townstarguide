let recipes = {
    "Baguette": {
        "CityPoints": 1472,
        "CityPrice": 91300,
        "Class": "Crafted",
        "CraftingText": "Baking",
        "Id": 3000,
        "Name": "Baguette",
        "OnDestroy": "Baguette_VFX",
        "ProximityBonus": "None",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Dough",
        "Req2": "Butter",
        "Req3": "Wood",
        "Time0": 60,
        "Time1": 120,
        "Time2": 240,
        "Time3": 480,
        "Type": "Chosen",
        "Value1": 2,
        "Value2": 2,
        "Value3": 2,
        "FileUrl": "files/assets/24496986/1/icon_baguette.png?t=37cd3e325e708883a4acc6b75c1d0625"
    },
    "Batter": {
        "CityPoints": 450,
        "CityPrice": 48700,
        "Class": "Crafted",
        "CraftingText": "Mixing",
        "Id": 3001,
        "Name": "Batter",
        "OnDestroy": "Batter_VFX",
        "ProximityBonus": "None",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Flour",
        "Req2": "Eggs",
        "Req3": "Butter",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Chosen",
        "Value1": 5,
        "Value2": 3,
        "Value3": 2,
        "FileUrl": "files/assets/24496985/1/icon_batter.png?t=714a371fa955fef84f9d372fb5f09e25"
    },
    "Blue_Steel": {
        "CityPoints": 6800,
        "CityPrice": 270950,
        "Class": "Produced",
        "CraftingText": "Smelting",
        "Id": 3002,
        "Name": "Blue_Steel",
        "OnDestroy": "Steel_VFX",
        "ProximityBonus": "Energy",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Steel",
        "Req2": "Energy",
        "Req3": "Uniforms",
        "Time0": 90,
        "Time1": 180,
        "Time2": 360,
        "Time3": 720,
        "Type": "Chosen",
        "Value1": 5,
        "Value2": 10,
        "Value3": 1,
        "FileUrl": "files/assets/24496984/1/icon_blueSteel.png?t=0d58012fad449746318c356986708750"
    },
    "Brine": {
        "CityPoints": 1,
        "CityPrice": 300,
        "Class": "Crop",
        "CraftingText": "Evaporating",
        "Id": 3004,
        "Name": "Brine",
        "OnDestroy": "Brine_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Salty",
        "ProximityReverse": true,
        "Req1": "Water",
        "Req2": "none",
        "Req3": "none",
        "Time0": 475,
        "Time1": 190,
        "Time2": 75,
        "Time3": 30,
        "Type": "Auto",
        "Value1": 3,
        "Value2": 0,
        "Value3": 0,
        "FileUrl": "files/assets/24496979/1/icon_brine.png?t=b3c42c4a37547d53e25b0bd4a4706e36"
    },
    "Butter": {
        "CityPoints": 153,
        "CityPrice": 16250,
        "Class": "Crafted",
        "CraftingText": "Churning",
        "Id": 3005,
        "Name": "Butter",
        "OnDestroy": "Butter_VFX",
        "ProximityBonus": "None",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Milk",
        "Req2": "Salt",
        "Req3": "Sugar",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Chosen",
        "Value1": 2,
        "Value2": 2,
        "Value3": 1,
        "FileUrl": "files/assets/24496980/1/icon_butter.png?t=85cb1cdd97b555153961015587cb11ae"
    },
    "Cabernet_Grapes": {
        "CityPoints": 16,
        "CityPrice": 1820,
        "Class": "Crop",
        "CraftingText": "Growing",
        "Id": 3044,
        "Name": "Cabernet_Grapes",
        "OnDestroy": "Grapes_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Dirty,Salty,Shady",
        "ProximityReverse": false,
        "Req1": "Water",
        "Req2": "Wood",
        "Req3": "none",
        "Time0": 420,
        "Time1": 840,
        "Time2": 1680,
        "Time3": 3360,
        "Type": "Auto",
        "Value1": 2,
        "Value2": 1,
        "Value3": 0,
        "FileUrl": "files/assets/43726733/1/icon_cabernetGrapes.png?t=d8d158a2287c083ecb38dd7cf85c0a29"
    },
    "Cabernet_Sauvignon": {
        "CityPoints": 736,
        "CityPrice": 42000,
        "Class": "Crafted",
        "CraftingText": "Making",
        "Id": 3037,
        "Name": "Cabernet_Sauvignon",
        "OnDestroy": "Wine_VFX",
        "ProximityBonus": "None",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Cabernet_Grapes",
        "Req2": "Wine_Bottle",
        "Req3": "Oak_Barrel",
        "Time0": 270,
        "Time1": 540,
        "Time2": 1080,
        "Time3": 2160,
        "Type": "Chosen",
        "Value1": 5,
        "Value2": 1,
        "Value3": 1,
        "FileUrl": "files/assets/43726732/1/icon_cabernetSauvignon.png?t=0502b79a4793abb9a0be172655eccc8d"
    },
    "Cake": {
        "CityPoints": 4475,
        "CityPrice": 178050,
        "Class": "Crafted",
        "CraftingText": "Baking",
        "Id": 3006,
        "Name": "Cake",
        "OnDestroy": "Bread_VFX",
        "ProximityBonus": "Energy",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Batter",
        "Req2": "Sugar",
        "Req3": "Energy",
        "Time0": 60,
        "Time1": 120,
        "Time2": 240,
        "Time3": 480,
        "Type": "Chosen",
        "Value1": 3,
        "Value2": 10,
        "Value3": 3,
        "FileUrl": "files/assets/24496983/1/icon_cake.png?t=1691034adb80686649e28684bb2e6cf1"
    },
    "Chardonnay": {
        "CityPoints": 496,
        "CityPrice": 27950,
        "Class": "Crafted",
        "CraftingText": "Making",
        "Id": 3038,
        "Name": "Chardonnay",
        "OnDestroy": "Wine_VFX",
        "ProximityBonus": "None",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Chardonnay_Grapes",
        "Req2": "Wine_Bottle",
        "Req3": "Oak_Barrel",
        "Time0": 240,
        "Time1": 480,
        "Time2": 960,
        "Time3": 1920,
        "Type": "Chosen",
        "Value1": 3,
        "Value2": 1,
        "Value3": 1,
        "FileUrl": "files/assets/43726734/1/icon_chardonnay.png?t=6d854a703d00942cef9eb62b42d6a15a"
    },
    "Chardonnay_Grapes": {
        "CityPoints": 8,
        "CityPrice": 810,
        "Class": "Crop",
        "CraftingText": "Growing",
        "Id": 3046,
        "Name": "Chardonnay_Grapes",
        "OnDestroy": "Grapes_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Dirty,Salty,Shady",
        "ProximityReverse": false,
        "Req1": "Water",
        "Req2": "Wood",
        "Req3": "none",
        "Time0": 360,
        "Time1": 720,
        "Time2": 1440,
        "Time3": 2880,
        "Type": "Auto",
        "Value1": 2,
        "Value2": 1,
        "Value3": 0,
        "FileUrl": "files/assets/43726735/1/icon_chardonnayGrapes.png?t=8dba9a4bc01f8f48c1a1bdba262801bd"
    },
    "Chromium": {
        "CityPoints": 54,
        "CityPrice": 4600,
        "Class": "Natural",
        "CraftingText": "Mining",
        "Id": 3042,
        "Name": "Chromium",
        "OnDestroy": "Chromium_VFX",
        "ProximityBonus": "Energy,Water_Drum",
        "ProximityPenalty": "Water",
        "ProximityReverse": false,
        "Req1": "Lumber",
        "Req2": "Energy",
        "Req3": "Water_Drum",
        "Time0": 60,
        "Time1": 120,
        "Time2": 240,
        "Time3": 480,
        "Type": "Auto",
        "Value1": 3,
        "Value2": 3,
        "Value3": 2,
        "FileUrl": "files/assets/43726739/1/icon_chromium.png?t=bc91ea3d6a7913438fa6ae66a5cad598"
    },
    "Cotton": {
        "CityPoints": 1,
        "CityPrice": 350,
        "Class": "Crop",
        "CraftingText": "Growing",
        "Id": 3007,
        "Name": "Cotton",
        "OnDestroy": "Cotton_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Dirty,Salty,Shady",
        "ProximityReverse": false,
        "Req1": "Water",
        "Req2": "none",
        "Req3": "none",
        "Time0": 20,
        "Time1": 40,
        "Time2": 80,
        "Time3": 160,
        "Type": "Auto",
        "Value1": 4,
        "Value2": 0,
        "Value3": 0,
        "FileUrl": "files/assets/24496930/1/icon_cotton.png?t=88c43d55100a3af0aae808b337e70a6f"
    },
    "Cotton_Yarn": {
        "CityPoints": 16,
        "CityPrice": 3250,
        "Class": "Produced",
        "CraftingText": "Spinning",
        "Id": 3008,
        "Name": "Cotton_Yarn",
        "OnDestroy": "Cotton_Yarn_VFX",
        "ProximityBonus": "Cotton,Energy",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Cotton",
        "Req2": "Lumber",
        "Req3": "Energy",
        "Time0": 60,
        "Time1": 120,
        "Time2": 240,
        "Time3": 480,
        "Type": "Chosen",
        "Value1": 5,
        "Value2": 1,
        "Value3": 1,
        "FileUrl": "files/assets/24496977/1/icon_cottonYarn.png?t=536a340e113734fd820d78ba4dc9d1ba"
    },
    "Crude_Oil": {
        "CityPoints": 1,
        "CityPrice": 50,
        "Class": "Fuel",
        "CraftingText": "Pumping",
        "Id": 3009,
        "Name": "Crude_Oil",
        "OnDestroy": "Crude_Oil_VFX",
        "ProximityBonus": "None",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "none",
        "Req2": "none",
        "Req3": "none",
        "Time0": 180,
        "Time1": 360,
        "Time2": 720,
        "Time3": 1440,
        "Type": "Auto",
        "Value1": 0,
        "Value2": 0,
        "Value3": 0,
        "FileUrl": "files/assets/24496975/1/icon_crudeOil.png?t=b8613c6cd6f16ef2e09f117cb8e72d55"
    },
    "Dough": {
        "CityPoints": 270,
        "CityPrice": 29150,
        "Class": "Crafted",
        "CraftingText": "Rolling",
        "Id": 3010,
        "Name": "Dough",
        "OnDestroy": "Dough_VFX",
        "ProximityBonus": "None",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Flour",
        "Req2": "Eggs",
        "Req3": "Butter",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Chosen",
        "Value1": 5,
        "Value2": 1,
        "Value3": 1,
        "FileUrl": "files/assets/24496972/1/icon_dough.png?t=a69233c027a3d6ebfefdb1ff759d866c"
    },
    "Eggs": {
        "CityPoints": 12,
        "CityPrice": 1650,
        "Class": "Crafted",
        "CraftingText": "Gathering",
        "Id": 3011,
        "Name": "Eggs",
        "OnDestroy": "Eggs_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Dirty",
        "ProximityReverse": false,
        "Req1": "Feed",
        "Req2": "Wood",
        "Req3": "Water",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Chosen",
        "Value1": 3,
        "Value2": 1,
        "Value3": 1,
        "FileUrl": "files/assets/24496927/1/icon_eggs.png?t=bf433510dcec27001157733569809d53"
    },
    "Energy": {
        "CityPoints": 1,
        "CityPrice": 150,
        "Class": "Produced",
        "CraftingText": "Charging",
        "Id": 3012,
        "Name": "Energy",
        "OnDestroy": "Energy_VFX",
        "ProximityBonus": "Crude_Oil,Water_Drum",
        "ProximityPenalty": "Shady",
        "ProximityReverse": false,
        "Req1": "Crude_Oil",
        "Req2": "Water_Drum",
        "Req3": "none",
        "Time0": 20,
        "Time1": 40,
        "Time2": 80,
        "Time3": 160,
        "Type": "Chosen",
        "Value1": 2,
        "Value2": 1,
        "Value3": 0,
        "FileUrl": "files/assets/24496973/1/icon_energy.png?t=6e3adfe40f9403610f4b9b972d04f5d4"
    },
    "Feed": {
        "CityPoints": 1,
        "CityPrice": 340,
        "Class": "Feed",
        "CraftingText": "Collecting",
        "Id": 3013,
        "Name": "Feed",
        "OnDestroy": "Feed_VFX",
        "ProximityBonus": "Wheat",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Wheat",
        "Req2": "none",
        "Req3": "none",
        "Time0": 5,
        "Time1": 10,
        "Time2": 20,
        "Time3": 40,
        "Type": "Chosen",
        "Value1": 1,
        "Value2": 0,
        "Value3": 0,
        "FileUrl": "files/assets/24496969/1/icon_feed.png?t=cee83bd2adbf464528860abd32601847"
    },
    "Flour": {
        "CityPoints": 12,
        "CityPrice": 2250,
        "Class": "Crafted",
        "CraftingText": "Milling",
        "Id": 3014,
        "Name": "Flour",
        "OnDestroy": "Flour_VFX",
        "ProximityBonus": "Wheat",
        "ProximityPenalty": "Shady",
        "ProximityReverse": false,
        "Req1": "Wheat",
        "Req2": "Wood",
        "Req3": "none",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Chosen",
        "Value1": 5,
        "Value2": 3,
        "Value3": 0,
        "FileUrl": "files/assets/24496968/1/icon_flour.png?t=54b202363da43d50e30fdf511b571609"
    },
    "Gasoline": {
        "CityPoints": 8,
        "CityPrice": 1450,
        "Class": "Fuel",
        "CraftingText": "Refining",
        "Id": 3015,
        "Name": "Gasoline",
        "OnDestroy": "Gasoline_VFX",
        "ProximityBonus": "Water_Drum,Energy",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Petroleum",
        "Req2": "Water_Drum",
        "Req3": "Energy",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Chosen",
        "Value1": 1,
        "Value2": 2,
        "Value3": 6,
        "FileUrl": "files/assets/24496966/1/icon_gasoline.png?t=a231669433ff6cc683e15871404c8f05"
    },
    "Iron": {
        "CityPoints": 54,
        "CityPrice": 4600,
        "Class": "Produced",
        "CraftingText": "Mining",
        "Id": 3017,
        "Name": "Iron",
        "OnDestroy": "Iron_VFX",
        "ProximityBonus": "Energy,Water_Drum",
        "ProximityPenalty": "Water",
        "ProximityReverse": false,
        "Req1": "Lumber",
        "Req2": "Energy",
        "Req3": "Water_Drum",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Chosen",
        "Value1": 3,
        "Value2": 3,
        "Value3": 2,
        "FileUrl": "files/assets/24496967/1/icon_iron.png?t=9385218ac79d399c00d60e815abc039c"
    },
    "Jet_Fuel": {
        "CityPoints": 27,
        "CityPrice": 1900,
        "Class": "Fuel",
        "CraftingText": "Refining",
        "Id": 3018,
        "Name": "Jet_Fuel",
        "OnDestroy": "Jet_Fuel_VFX",
        "ProximityBonus": "Water_Drum,Energy",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Petroleum",
        "Req2": "Water_Drum",
        "Req3": "Energy",
        "Time0": 90,
        "Time1": 180,
        "Time2": 360,
        "Time3": 720,
        "Type": "Chosen",
        "Value1": 3,
        "Value2": 2,
        "Value3": 3,
        "FileUrl": "files/assets/24496964/1/icon_jetFuel.png?t=bbeb4de39f03aba76d960a96ee8599f6"
    },
    "Limestone": {
        "CityPoints": 54,
        "CityPrice": 4600,
        "Class": "Natural",
        "CraftingText": "Mining",
        "Id": 3041,
        "Name": "Limestone",
        "OnDestroy": "Limestone_VFX",
        "ProximityBonus": "Energy,Water_Drum",
        "ProximityPenalty": "Water",
        "ProximityReverse": false,
        "Req1": "Lumber",
        "Req2": "Energy",
        "Req3": "Water_Drum",
        "Time0": 60,
        "Time1": 120,
        "Time2": 240,
        "Time3": 480,
        "Type": "Auto",
        "Value1": 3,
        "Value2": 3,
        "Value3": 2,
        "FileUrl": "files/assets/43726737/1/icon_limestone.png?t=01fa2771cbf79e1954ccb83914497d53"
    },
    "Lumber": {
        "CityPoints": 8,
        "CityPrice": 1350,
        "Class": "Produced",
        "CraftingText": "Sawing",
        "Id": 3019,
        "Name": "Lumber",
        "OnDestroy": "Wood_VFX",
        "ProximityBonus": "Energy,Water_Drum",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Wood",
        "Req2": "Energy",
        "Req3": "Water_Drum",
        "Time0": 10,
        "Time1": 20,
        "Time2": 40,
        "Time3": 80,
        "Type": "Chosen",
        "Value1": 4,
        "Value2": 2,
        "Value3": 1,
        "FileUrl": "files/assets/24496963/1/icon_lumber.png?t=3821bb767168e17ed77fa8fb6429e96a"
    },
    "Milk": {
        "CityPoints": 20,
        "CityPrice": 4000,
        "Class": "Crafted",
        "CraftingText": "Bottling",
        "Id": 3020,
        "Name": "Milk",
        "OnDestroy": "Milk_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Dirty",
        "ProximityReverse": false,
        "Req1": "Feed",
        "Req2": "Wood",
        "Req3": "Water",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Chosen",
        "Value1": 8,
        "Value2": 1,
        "Value3": 3,
        "FileUrl": "files/assets/24496962/1/icon_milk.png?t=bf243cea5c9cdc7457d693b50a1adfd1"
    },
    "Oak_Barrel": {
        "CityPoints": 63,
        "CityPrice": 5500,
        "Class": "Produced",
        "CraftingText": "Building",
        "Id": 3039,
        "Name": "Oak_Barrel",
        "OnDestroy": "Oak_Barrel_VFX",
        "ProximityBonus": "Energy",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Oak_Wood",
        "Req2": "Iron",
        "Req3": "Energy",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Chosen",
        "Value1": 3,
        "Value2": 1,
        "Value3": 1,
        "FileUrl": "files/assets/43726738/1/icon_oakBarrel.png?t=4a61c81bbdd998c733a5ebc74fed372d"
    },
    "Oak_Wood": {
        "CityPoints": 1,
        "CityPrice": 250,
        "Class": "Timber",
        "CraftingText": "Growing",
        "Id": 3047,
        "Name": "Oak_Wood",
        "OnDestroy": "Wood_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Dirty,Salty,Shady",
        "ProximityReverse": false,
        "Req1": "Water",
        "Req2": "none",
        "Req3": "none",
        "Time0": 60,
        "Time1": 120,
        "Time2": 240,
        "Time3": 480,
        "Type": "Auto",
        "Value1": 5,
        "Value2": 0,
        "Value3": 0,
        "FileUrl": "files/assets/43726736/1/icon_oakWood.png?t=6fb2a970d4fce8f8ff913cba5734e6f1"
    },
    "Petroleum": {
        "CityPoints": 4,
        "CityPrice": 450,
        "Class": "Fuel",
        "CraftingText": "Refining",
        "Id": 3021,
        "Name": "Petroleum",
        "OnDestroy": "Petroleum_VFX",
        "ProximityBonus": "Crude_Oil,Water_Drum,Energy",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Crude_Oil",
        "Req2": "Water_Drum",
        "Req3": "Energy",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Chosen",
        "Value1": 2,
        "Value2": 1,
        "Value3": 2,
        "FileUrl": "files/assets/24496959/1/icon_petroleum.png?t=a4473cadfc09d4f0672e009303509b1f"
    },
    "Pinot_Noir": {
        "CityPoints": 1008,
        "CityPrice": 57200,
        "Class": "Crafted",
        "CraftingText": "Making",
        "Id": 3036,
        "Name": "Pinot_Noir",
        "OnDestroy": "Wine_VFX",
        "ProximityBonus": "None",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Pinot_Noir_Grapes",
        "Req2": "Wine_Bottle",
        "Req3": "Oak_Barrel",
        "Time0": 300,
        "Time1": 600,
        "Time2": 1200,
        "Time3": 2400,
        "Type": "Chosen",
        "Value1": 6,
        "Value2": 1,
        "Value3": 1,
        "FileUrl": "files/assets/43726740/1/icon_pinotNoir.png?t=c48e5f006b84f8ac995d588403126737"
    },
    "Pinot_Noir_Grapes": {
        "CityPoints": 20,
        "CityPrice": 2670,
        "Class": "Crop",
        "CraftingText": "Growing",
        "Id": 3045,
        "Name": "Pinot_Noir_Grapes",
        "OnDestroy": "Grapes_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Dirty,Salty,Shady",
        "ProximityReverse": false,
        "Req1": "Water",
        "Req2": "Wood",
        "Req3": "none",
        "Time0": 450,
        "Time1": 900,
        "Time2": 1800,
        "Time3": 3600,
        "Type": "Auto",
        "Value1": 2,
        "Value2": 1,
        "Value3": 0,
        "FileUrl": "files/assets/43726741/1/icon_pinotNoirGrapes.png?t=cd70f710d9ffa9e3079b444344ee43fb"
    },
    "Pumpkin": {
        "CityPoints": 2,
        "CityPrice": 1000,
        "Class": "Crop",
        "CraftingText": "Growing",
        "Id": 3034,
        "Name": "Pumpkin",
        "OnDestroy": "Pumpkin_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Dirty,Salty,Shady",
        "ProximityReverse": false,
        "Req1": "Water",
        "Req2": "none",
        "Req3": "none",
        "Time0": 300,
        "Time1": 600,
        "Time2": 1200,
        "Time3": 2400,
        "Type": "Auto",
        "Value1": 20,
        "Value2": 0,
        "Value3": 0,
        "FileUrl": "files/assets/36897915/1/icon_Pumpkin.png?t=c0af83e4e234482d619f70bb536941b1"
    },
    "Pumpkin_Pie": {
        "CityPoints": 816,
        "CityPrice": 49750,
        "Class": "Crafted",
        "CraftingText": "Baking",
        "Id": 3035,
        "Name": "Pumpkin_Pie",
        "OnDestroy": "Pumpkin_VFX",
        "ProximityBonus": "None",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Pumpkin",
        "Req2": "Sugar",
        "Req3": "Eggs",
        "Time0": 180,
        "Time1": 360,
        "Time2": 720,
        "Time3": 1440,
        "Type": "Chosen",
        "Value1": 10,
        "Value2": 10,
        "Value3": 5,
        "FileUrl": "files/assets/37126455/1/icon_pumpkinPie.png?t=6d2b3f6730dd7eb844f5fe188c2d43ea"
    },
    "Salt": {
        "CityPoints": 16,
        "CityPrice": 2550,
        "Class": "Crafted",
        "CraftingText": "Milling",
        "Id": 3022,
        "Name": "Salt",
        "OnDestroy": "Salt_VFX",
        "ProximityBonus": "None",
        "ProximityPenalty": "Shady",
        "ProximityReverse": false,
        "Req1": "Brine",
        "Req2": "Wood",
        "Req3": "none",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Chosen",
        "Value1": 6,
        "Value2": 3,
        "Value3": 0,
        "FileUrl": "files/assets/24496956/1/icon_salt.png?t=966ccd519247d3d9303b8b6dd003b070"
    },
    "Silica": {
        "CityPoints": 2,
        "CityPrice": 1000,
        "Class": "Natural",
        "CraftingText": "Mining",
        "Id": 3043,
        "Name": "Silica",
        "OnDestroy": "Silica_VFX",
        "ProximityBonus": "Energy",
        "ProximityPenalty": "Salty,Sandy",
        "ProximityReverse": true,
        "Req1": "Energy",
        "Req2": "none",
        "Req3": "none",
        "Time0": 565,
        "Time1": 225,
        "Time2": 90,
        "Time3": 35,
        "Type": "Auto",
        "Value1": 2,
        "Value2": 0,
        "Value3": 0,
        "FileUrl": "files/assets/43726742/1/icon_silica.png?t=32700ede2d2144dab72fd17a274484d6"
    },
    "Steel": {
        "CityPoints": 768,
        "CityPrice": 47000,
        "Class": "Produced",
        "CraftingText": "Smelting",
        "Id": 3023,
        "Name": "Steel",
        "OnDestroy": "Steel_VFX",
        "ProximityBonus": "Energy,Water_Drum",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Iron",
        "Req2": "Energy",
        "Req3": "Water_Drum",
        "Time0": 90,
        "Time1": 180,
        "Time2": 360,
        "Time3": 720,
        "Type": "Chosen",
        "Value1": 10,
        "Value2": 5,
        "Value3": 5,
        "FileUrl": "files/assets/24496955/1/icon_steel.png?t=633c24af6182ecb6a1a857e4873f86aa"
    },
    "Sugar": {
        "CityPoints": 16,
        "CityPrice": 3150,
        "Class": "Crafted",
        "CraftingText": "Milling",
        "Id": 3024,
        "Name": "Sugar",
        "OnDestroy": "Sugar_VFX",
        "ProximityBonus": "Sugarcane",
        "ProximityPenalty": "Shady",
        "ProximityReverse": false,
        "Req1": "Sugarcane",
        "Req2": "Wood",
        "Req3": "none",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Chosen",
        "Value1": 6,
        "Value2": 3,
        "Value3": 0,
        "FileUrl": "files/assets/24496954/1/icon_sugar.png?t=f9a32fe1e00c61e73a7437ec68bcd9a4"
    },
    "Sugarcane": {
        "CityPoints": 1,
        "CityPrice": 400,
        "Class": "Crop",
        "CraftingText": "Growing",
        "Id": 3025,
        "Name": "Sugarcane",
        "OnDestroy": "Sugarcane_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Dirty,Salty,Shady",
        "ProximityReverse": false,
        "Req1": "Water",
        "Req2": "none",
        "Req3": "none",
        "Time0": 20,
        "Time1": 40,
        "Time2": 80,
        "Time3": 160,
        "Type": "Auto",
        "Value1": 8,
        "Value2": 0,
        "Value3": 0,
        "FileUrl": "files/assets/24496957/1/icon_sugarcane.png?t=51aeb4a0643ee5aca60b4fcbe4e2b2cb"
    },
    "Uniforms": {
        "CityPoints": 560,
        "CityPrice": 34450,
        "Class": "Produced",
        "CraftingText": "Sewing",
        "Id": 3026,
        "Name": "Uniforms",
        "OnDestroy": "Uniforms_VFX",
        "ProximityBonus": "Energy",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Cotton_Yarn",
        "Req2": "Wool_Yarn",
        "Req3": "Energy",
        "Time0": 60,
        "Time1": 120,
        "Time2": 240,
        "Time3": 480,
        "Type": "Chosen",
        "Value1": 3,
        "Value2": 1,
        "Value3": 3,
        "FileUrl": "files/assets/24496958/1/icon_uniforms.png?t=c3758c33624d5e93f69598d848c1f222"
    },
    "Water": {
        "CityPoints": 1,
        "CityPrice": 50,
        "Class": "Natural",
        "CraftingText": "Fetching",
        "Id": 3027,
        "Name": "Water",
        "OnDestroy": "Water_VFX",
        "ProximityBonus": "None",
        "ProximityPenalty": "Dirty",
        "ProximityReverse": false,
        "Req1": "none",
        "Req2": "none",
        "Req3": "none",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Auto",
        "Value1": 0,
        "Value2": 0,
        "Value3": 0,
        "FileUrl": "files/assets/24496953/1/icon_water.png?t=f7dfc58adc3d81b7b2d6efdc11bb71c2"
    },
    "Water_Drum": {
        "CityPoints": 1,
        "CityPrice": 50,
        "Class": "Produced",
        "CraftingText": "Filling",
        "Id": 3033,
        "Name": "Water_Drum",
        "OnDestroy": "Water_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Dirty",
        "ProximityReverse": false,
        "Req1": "Water",
        "Req2": "none",
        "Req3": "none",
        "Time0": 30,
        "Time1": 60,
        "Time2": 120,
        "Time3": 240,
        "Type": "Auto",
        "Value1": 3,
        "Value2": 0,
        "Value3": 0,
        "FileUrl": "files/assets/32374821/1/icon_waterDrum.png?t=06ee1896b7c3fbbe42b747d31adf4f15"
    },
    "Wheat": {
        "CityPoints": 1,
        "CityPrice": 300,
        "Class": "Crop",
        "CraftingText": "Growing",
        "Id": 3029,
        "Name": "Wheat",
        "OnDestroy": "Wheat_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Dirty,Salty,Shady",
        "ProximityReverse": false,
        "Req1": "Water",
        "Req2": "none",
        "Req3": "none",
        "Time0": 20,
        "Time1": 40,
        "Time2": 80,
        "Time3": 160,
        "Type": "Auto",
        "Value1": 3,
        "Value2": 0,
        "Value3": 0,
        "FileUrl": "files/assets/24496952/1/icon_wheat.png?t=98cdc630e5951ef3f4b7cab7e504e6ad"
    },
    "Wine_Bottle": {
        "CityPoints": 126,
        "CityPrice": 12800,
        "Class": "Produced",
        "CraftingText": "Making",
        "Id": 3040,
        "Name": "Wine_Bottle",
        "OnDestroy": "Bottle_VFX",
        "ProximityBonus": "None",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Silica",
        "Req2": "Chromium",
        "Req3": "Limestone",
        "Time0": 60,
        "Time1": 120,
        "Time2": 240,
        "Time3": 480,
        "Type": "Chosen",
        "Value1": 3,
        "Value2": 1,
        "Value3": 1,
        "FileUrl": "files/assets/43726743/1/icon_wineBottle.png?t=04041ab6c35dc173822c370af9467f49"
    },
    "Wood": {
        "CityPoints": 1,
        "CityPrice": 250,
        "Class": "Timber",
        "CraftingText": "Growing",
        "Id": 3030,
        "Name": "Wood",
        "OnDestroy": "Wood_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Dirty,Salty,Shady",
        "ProximityReverse": false,
        "Req1": "Water",
        "Req2": "none",
        "Req3": "none",
        "Time0": 40,
        "Time1": 80,
        "Time2": 160,
        "Time3": 320,
        "Type": "Auto",
        "Value1": 7,
        "Value2": 0,
        "Value3": 0,
        "FileUrl": "files/assets/24496903/1/icon_wood.png?t=5813663b26908d759b293a10d5557cca"
    },
    "Wool": {
        "CityPoints": 24,
        "CityPrice": 4550,
        "Class": "Crafted",
        "CraftingText": "Shearing",
        "Id": 3031,
        "Name": "Wool",
        "OnDestroy": "Wool_VFX",
        "ProximityBonus": "Water",
        "ProximityPenalty": "Dirty",
        "ProximityReverse": false,
        "Req1": "Feed",
        "Req2": "Wood",
        "Req3": "Water",
        "Time0": 60,
        "Time1": 120,
        "Time2": 240,
        "Time3": 480,
        "Type": "Chosen",
        "Value1": 9,
        "Value2": 1,
        "Value3": 5,
        "FileUrl": "files/assets/24496950/1/icon_wool.png?t=70a6c832dbf65cc405378ad00a0fbac9"
    },
    "Wool_Yarn": {
        "CityPoints": 225,
        "CityPrice": 24250,
        "Class": "Produced",
        "CraftingText": "Spinning",
        "Id": 3032,
        "Name": "Wool_Yarn",
        "OnDestroy": "Wool_Yarn_VFX",
        "ProximityBonus": "Energy",
        "ProximityPenalty": "None",
        "ProximityReverse": false,
        "Req1": "Wool",
        "Req2": "Lumber",
        "Req3": "Energy",
        "Time0": 60,
        "Time1": 120,
        "Time2": 240,
        "Time3": 480,
        "Type": "Chosen",
        "Value1": 5,
        "Value2": 1,
        "Value3": 1,
        "FileUrl": "files/assets/24496900/1/icon_yarn.png?t=40ca00c8293fe3c12489901c58e00dad"
    }
}

module.exports = { recipes }
