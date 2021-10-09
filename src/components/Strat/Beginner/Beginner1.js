const { recipes } = require('../../../assets/reqs/recipes.js')
const { buildings } = require('../../../assets/reqs/buildings.js')

const steps = [
    {
        title: 'Step 1',
        intro: 'Pick a spot with Forest terrain close to a City.',
        img: require('../../../assets/strats/start/start_1.jpg'),
        text: "<p>" +
            "The starting buildings are always the same:" +
            "</p>" +
            "<ul style='margin-bottom: 1rem;'>" +
            "<li>" +
            "Trade Depot" +
            "</li>" +
            "<li>" +
            "Fuel Storage" +
            "</li>" +
            "<li>" +
            "Silo" +
            "</li>" +
            "<li>" +
            "Farm House" +
            "</li>" +
            "<li>" +
            "Well" +
            "</li>" +
            "<li>" +
            "Two Wheat Fields" +
            "</li>" +
            "</ul>" +
            "<p>" +
            "The starting items in your inventory are also always the same:" +
            "</p>" +
            "<ul style='margin-bottom: 1rem;'>" +
            "<li>" +
            "40 Gasoline" +
            "</li>" +
            "<li>" +
            "10 Wheat" +
            "</li>" +
            "<li>" +
            "$25,000" +
            "</li>" +
            "</ul>" +
            "<p>" +
            "You can see your current points in the top right corner, along with the time remaining for the round. Every round runs for 6 days, and your objective is to score points by selling the items you produce using the trade depot." +
            "</p>" +
            "<p>" +
            "In your top left, you see how much money you currently have. Beneath that is the wages your workers charge every minute in order to keep working, and then all the items you have in your inventory." +
            "</p>" +
            "<p>" +
            "Right now, one of the easiest strategies to get a decent amount of money is to get Windmills." +
            "</p>"
    },
    {
        title: 'Step 2',
        intro: 'Sell 10 Wheat and build a Storehouse.',
        img: require('../../../assets/strats/start/start_2.jpg'),
        text: '<p>' +
            'The Storehouse is needed to store the Flour we will be producing.' +
            '</p>' +
            '<p>' +
            'Be very conservative with your Gasoline in the beginning. You will run out much faster than you think. Therefore, it is important to make the most out of every tank of gas – try only to sell higher value items like Flour, Sugar or Salt.\n' +
            'For now, we will just sell the 10 Wheat to afford a Storehouse.' +
            '</p>',
    },
    {
        title: 'Step 3',
        intro: 'Sell 10 Wheat and 3 Ponds on the bottom center of your map. Then build a Lumberjack.',
        img: require('../../../assets/strats/start/start_3.jpg'),
        text: '<p>' +
            'Ponds are the biggest strength of the Forest biome.' +
            '</p>' +
            '<p>' +
            `Selling a Pond gives you ${buildings.Pond.DestroyCost}.` +
            'We will use this to fund some of our early start, but do not fall into the temptation to sell everything.' +
            'They will be very useful to have later in your strategy.' +
            '</p>',
    },
    {
        title: 'Step 4',
        intro: 'Extend the Dirt Road in the top left and build 1 Windmill.',
        img: require('../../../assets/strats/start/start_4.jpg'),
        text: '<p>\n' +
            `It's important to build the Windmill where it has ${buildings.Windmill.ProximityDist} tiles of free space around it.<br>` +
            `If another building is closer than ${buildings.Windmill.ProximityDist} tiles from the Windmill, it will get <router-link to="/kbase/proximity">Wind Blocked</router-link>.` +
            '</p>' +
            '<p>' +
            'The production timer for Flour is as follows, with Green being no Wind Block at all:<br>\n' +
            `Green ${recipes.Flour.Time0}s<br>\n` +
            `Yellow ${recipes.Flour.Time1}s<br>\n` +
            `Red ${recipes.Flour.Time2}s\n` +
            '</p>',
    },
    {
        title: 'Step 5',
        intro: 'Sell 10 Wheat and start crafting Flour.',
        img: require('../../../assets/strats/start/start_5.jpg'),
        text: '<p>' +
            'We are well on our way, we just need a little more funds so we sell some Wheat and start up the Windmill to craft Flour.<br>' +
            'To craft Flour, click the Windmill and select Craft in the menu at the bottom. You will find Flour in the craft selection menu.' +
            '</p>',
    },
    {
        title: 'Step 6',
        intro: 'Sell 3 Ponds on bottom right, build 3 Dirt Roads and another Windmill.',
        img: require('../../../assets/strats/start/start_6.jpg'),
        text: '<p>' +
            "Now we're getting somewhere. Flour production is started and we are constructing our second Windmill." +
            '</p>',
    },
    {
        title: 'Step 7',
        intro: '<p>' +
            'Sell 3 Ponds top right<br>' +
            'Start crafting Flour on Windmill #2<br>' +
            'Build Dirt Road and Lumberjack #2<br>' +
            'Build Farmhouse #2<br>' +
            'Build Wheat Field #3' +
            '</p>',
        img: require('../../../assets/strats/start/start_7.jpg'),
        text: '<p>' +
            'We need more funds, so 3 more Ponds are sold. <br>We build more workers and crops since we will now need more raw materials to supply the increased production of our Town.' +
            '</p>',
    },
    {
        title: 'Step 8',
        intro: 'Build Wood Shed #2',
        img: require('../../../assets/strats/start/start_8.jpg'),
        text: '<p>' +
            'To prepare for increased production and to get a better positioning of storage, we build a second Wood Shed.\n' +
            '</p>',
    },
    {
        title: 'Step 9',
        intro: 'Wait and sell 10 Flour when ready.',
        img: require('../../../assets/strats/start/start_9.jpg'),
        text: '<p>' +
            'Please remember that we are conserving Gasoline.<br>' +
            `Do not sell any other smaller items - we will get ${recipes.Flour.CityPrice*10} for selling the Flour which will be enough for now.` +
            '</p>',
    },
    {
        title: 'Step 10',
        intro: 'Build 3 Dirt Roads, 1 Wind Turbine, 1 Warehouse, and 1 Worker House.<br>' +
            '          Then sell 10 Flour.',
        img: require('../../../assets/strats/start/start_10.jpg'),
        text: '<p>' +
            'We are building these to prepare for Gasoline production.<br>' +
            '</p>',
    },
    {
        title: 'Step 11',
        intro: 'Build 3 Dirt Roads, 1 Oil Pump, and 1 Fuel Storage.',
        img: require('../../../assets/strats/start/start_11.jpg'),
        text: '<p>' +
            'This is the plot where we will set up our Refinery operations<br>' +
            '</p>',
    },
    {
        title: 'Step 12',
        intro: 'Wait and sell 10 Flour.',
        img: require('../../../assets/strats/start/start_12.jpg'),
        text: '<p>' +
            'Reminder that we are still conserving Gasoline!<br>' +
            'Don\'t sell any small items while waiting for Flour unless absolutely necessary.' +
            '</p>',
    },
    {
        title: 'Step 13',
        intro: 'Build 4 Dirt Roads, 1 Well, and 1 Water Facility. Sell 10 Flour when ready.',
        img: require('../../../assets/strats/start/start_13.jpg'),
        text: '<p>' +
            'At this point you will need to sell 10 Extra energy to free up space in your Warehouse for the Water Drums.<br>' +
            'We should now be making Energy and Water Drums at almost the same speed, so try to have about 10 of each in the Warehouse so you don\'t need to keep selling them.' +
            '</p>',
    },
    {
        title: 'Step 14',
        intro: 'Build 2 Dirt Roads.',
        img: require('../../../assets/strats/start/start_14.jpg'),
        text: '<p>' +
            'One of these Dirt Roads will be upgraded to a Paved Road, which is a requirement for building a Refinery.' +
            '</p>',
    },
    {
        title: 'Step 15',
        intro: 'Upgrade 1 Dirt Road to Paved Road<br>' +
            'Wait and sell 10 Flour, repeat until you have at least $20000',
        img: require('../../../assets/strats/start/start_15.jpg'),
        text: '',
    },
    {
        title: 'Step 16',
        intro: 'Sell 3 Ponds and build 2 Refineries<br>' +
            'IMPORTANT - be sure to leave the 4th Pond for later use!!!',
        img: require('../../../assets/strats/start/start_16.jpg'),
        text: '<p>' +
            'DO NOT SELL THE SELECTED POND.' +
            '</p>',
    },
    {
        title: 'Step 17',
        intro: 'Build a second Builder House.',
        img: require('../../../assets/strats/start/start_17.jpg'),
        text: '',
    },
    {
        title: 'Step 18',
        intro: 'Start crafting Petroleum with the lower Refinery.',
        img: require('../../../assets/strats/start/start_18.jpg'),
        text: '',
    },
    {
        title: 'Step 19',
        intro: 'Start crafting Gasoline with the left Refinery.',
        img: require('../../../assets/strats/start/start_19.jpg'),
        text: '',
    },
    {
        title: 'Step 20',
        intro: 'CONGRATULATIONS!<br>' +
            'You are making Gasoline!!!',
        img: require('../../../assets/strats/start/start_20.jpg'),
        text: '',
    },
    {
        title: 'Step 21',
        intro: 'Add some Dirt Roads and another Windmill.',
        img: require('../../../assets/strats/start/start_21.jpg'),
        text: '<p>' +
            'A good way to speed up Flour production and not run out of money to pay wages is to add on another Windmill.' +
            '</p>',
    },
    {
        title: 'Closing Remarks',
        intro: 'At this point you are free to play around and try different things by continuing to sell Flour for cash to build and grow.\n' +
            'You might want to try adding another Farm House and more Wheat crops to increase Flour production.',
        img: require('../../../assets/ingame/buildings/icon_cow.png'),
        text: '<h2>' +
            'Important Notes' +
            '</h2>' +
            '<p>' +
            '- If you get low on cash and you have enough gas you could sell 10 to help out, but I avoid that if possible.<br><br>\n' +
            '- Now you just need to monitor your Energy, Water Drums, Crude Oil, Petroleum, and Gasoline to be sure you do not run out of storage space by over producing any of them.<br><br>\n' +
            '- You can sell any extra products since you still have extra Gasoline, or you can turn off and back on any of the crafting to control how much of any item is made.<br><br>\n' +
            '- Be sure to sell extra Water Drums or you will fill your Warehouse and have no place to store Energy and your Gasoline production will stop.<br><br>\n' +
            '- Try to only sell Flour (or other high tier items) to save gas and maximize your money.\n' +
            '</p>',
    }

]

module.exports = { steps }
