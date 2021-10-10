const { recipes } = require('../../../assets/reqs/recipes.js')
const { buildings } = require('../../../assets/reqs/buildings.js')

const steps = [
    {
        title: 'Step 1',
        intro: 'Sell Flour, save money.',
        img: require('../../../assets/strats/improving/improving_1.jpg'),
        text: "<p>" +
            `Picking up where we left off in the Beginner Guide, continue selling ${recipes.Flour.Name} to build up your bank roll.` +
            "</p>" +
            "<p>" +
            "You can leave everything as is and run for 24 hours and end up with 10,000 stars and $750,000. That is what I will do in this example." +
            "</p>"
    },
    {
        title: 'Step 2',
        intro: 'Clear some land, remove some buildings and build some Dirt Roads.',
        img: require('../../../assets/strats/improving/improving_2.jpg'),
        text: '<p>' +
            'Clearing land helps you grow and improve.' +
            '</p>' +
            '<p>' +
            'You need to do it to make room for new additions. Also, by moving things around you can make them more efficient.' +
            '</p>' +
            '<p>' +
            `For example, don't put a ${buildings.Windmill.Name} close to a ${buildings.Silo.Name} as it will get windblocked. Lets move the left Windmills. A Lumberjack's house put next to a tree will throw shade on it, slowing its growth. Better efficiency speeds up production giving you more $ and stars!` +
            '</p>' +
            '<p>' +
            'Now that you have some more money to work with, let\'s clear some land, remove some buildings, and build some roads to prepare.' +
            '</p>',
    },
    {
        title: 'Step 3',
        intro: 'Re-place Lumberjacks and Windmills.',
        img: require('../../../assets/strats/improving/improving_3.jpg'),
        text: '<p>' +
            `Our trees are growing faster now from deleting the ${buildings.Lumberjack_House.Name} and ${buildings.Farm_House.Name} from the top right corner and by removing the ${buildings.Windmill.Name}s from the left.` +
            '</p>' +
            '<p>' +
            `So now let’s add back some more ${buildings.Lumberjack_House.Name}s to take advantage and produce wood faster.` +
            '</p>',
    },
    {
        title: 'Step 4',
        intro: 'Build Ponds to form a Crop Operation.',
        img: require('../../../assets/strats/improving/improving_4.jpg'),
        text: '<p>\n' +
            `This next strategy is the cornerstone of mass producing items that grow using water.` +
            '</p>' +
            '<p>' +
            `You can strategically place Ponds around your wheat and tree farms to take advantage of “passive” water. A pond gives 2 passive water to every adjacent tile and 1 passive water to every 2nd tile. They are expensive, but worth it, let’s build some ${buildings.Pond.Name}s!` +
            '</p>' +
            '<p>' +
            `You will need wells to create water to build the Ponds. Now is a good time to add in an extra ${buildings.Builder_House.Name} too.` +
            '</p>',
    },
    {
        title: 'Step 5',
        intro: 'Build Wheat Fields, Ponds, Tree Farms and Dirt Roads.',
        img: require('../../../assets/strats/improving/improving_5.jpg'),
        text: '<p>' +
            `We can complete our ${buildings.Pond.Name} growing pod by adding in ${buildings.Wheat_Field.Name}s, ${buildings.Tree_Farm.Name}s, ${buildings.Dirt_Road.Name}s, and another ${buildings.Pond.Name} on the end.` +
            '</p>',
    },
    {
        title: 'Step 6',
        intro: `With the extra Wheat and Wood available, we can now ramp up ${recipes.Flour.Name} production.`,
        img: require('../../../assets/strats/improving/improving_6.jpg'),
        text: '<p>' +
            `To maximize efficiency we want to keep the new Windmills close to the Silo but not shaded by any other buildings or each other. Delete the Trade Depot and Builder House at the top and build a new Trade Depot and 2 Builder Houses at the bottom. Then you can add in 2 new Windmills. ` +
            '</p>',
    },
    {
        title: 'Step 7',
        intro: `Add 2 ${buildings.Lumberjack_House.Name} near the bottom and 2 ${buildings.Farm_House.Name}s on the left.`,
        img: require('../../../assets/strats/improving/improving_7.jpg'),
        text: '<p>' +
            `Next we need some more ${buildings.Farm_House.Name} and ${buildings.Lumberjack_House.Name} and to aid in producing ${recipes.Flour.Name} faster after adding the ${buildings.Windmill.Name}s. But we want to place them smartly so they do not shade and hinder any of our new production.` +
            '</p>' +
            '<p>' +
            `Add 2 ${buildings.Lumberjack_House.Name} near the bottom and 2 ${buildings.Farm_House.Name}s on the left.` +
            '</p>',
    },
    {
        title: 'Step 8',
        intro: `Build 2 ${buildings.Wind_Turbine.Name}s, 1 ${buildings.Oil_Pump.Name} and 1 ${buildings.Worker_House.Name}.`,
        img: require('../../../assets/strats/improving/improving_8.jpg'),
        text: '<p>' +
            `In one final tweak, let’s bump up gas production by adding 2 Wind Turbines, 1 Oil Pump, and 1 Worker House. Additionally swapping the top left Tree Farm with a Wheat Field will help with balance.` +
            '</p>',
    },
    {
        title: 'Closing Remarks',
        intro: 'Congratulations! You now have the Power of the Ponds!',
        img: require('../../../assets/ingame/buildings/icon_pond.png'),
        text: '<p>' +
            `You have become a much more efficient producer and your town is growing! The skills and techniques you have learned here can be repeated and implemented to get you to your final build!` +
            '</p>' +
            '<p>' +
            `Remember to keep an eye on your storage, you don’t want 1 item over producing and choking out another. That could bring Flour and or Gasoline production to a halt. Your builds need to have balance.` +
            '</p>' +
            '<p>' +
            `Be sure to check out the next tutorial “Improved Gas Production”!` +
            '</p>',
    }
]

module.exports = { steps }
