type ObjectType = any;
var ObjectType; 

type RecipeLevel = any;
var RecipeLevel; 

type SkillType = any;
var SkillType;

type DamageType = any;
var DamageType;

type UseType = any;
var UseType;

type EquipType = any;
var EquipType;

type TerrainType = any;
var TerrainType;

type DoodadType = any;
var DoodadType;

interface Defense{}
var Defense;

type LootGroupType = any;
var LootGroupType;


/**
 * The items.js file will contain item related code as well as the items object.
 */

var itemSet = new Image();
itemSet.src = "images/itemSet.png";

var itemSetSmall = new Image();
itemSetSmall.src = "images/itemset_small.png";

interface IRecipe {
    requires: number[][];
    skill: SkillType;
    level: RecipeLevel;
    requiredEnv?: ObjectType;
}

interface IRanged {
    range: number;
    attack: number;
}

interface IItemBase {
    name?: string;
    description?: string;
    disassemble?: boolean;
    damageType?: DamageType;
    onBurn?: ObjectType;
    onUse?: any[];
    onEquip?: any[];
    lit?: ObjectType;
    group?: ObjectType[];
    recipe?: IRecipe;
    ranged?: IRanged;
    use?: UseType[];
    decayable?: any[];
    isContainer?: boolean;
    revert?: ObjectType;
    defense?: Defense;
    maxWeight?: number;
    attack?: number;
    returnOnUse?: ObjectType;
    equip?: EquipType;
    skillUse?: SkillType;
    spread?: number;
    decay?: number;
}

interface IItemDescription extends IItemBase {
    id: number;
    tX: number;
    tY: number;
    weight: number;
    durability?: number;
    doodadType?: DoodadType;
}

interface IGroupDescription {
    name: string;
}

interface IUseDescription {
    name: string;
    description: string;
}

var lootGroup = Array<ObjectType[]>();
var groups = Array<IGroupDescription>();
var useDescriptions = Array<IUseDescription>();
var items = Array<IItemDescription>();

items[ObjectType.Amber] = {
    id: 0,
    tX: 0,
    tY: 0,
    name: "Amber",
    description: "Fossilized tree resin, which can be melted down to reinforce items.",
    weight: 0.5
};

items[ObjectType.AnimalSkull] = {
    id: 1,
    tX: 1,
    tY: 0,
    description: "A hollowed out, bleached animal skull, suitable for crafting into a makeshift helmet.",
    name: "An Animal Skull",
    weight: 1.5
};

items[ObjectType.Arrow] = {
    id: 2,
    tX: 2,
    tY: 0,
    description: "A projectile to be fired from a bow, crafted with an arrowhead and feather to control flight.",
    name: "An Arrow",
    weight: 0.7,
    group: [ObjectType.Arrow],
    recipe: {
        requires: [
            [ObjectType.WoodenPole, 1, 1, 1],
            [ObjectType.Feather, 1, 1, 1],
            [ObjectType.Arrowhead, 1, 1, 1],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Fletching,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    attack: 2,
    damageType: DamageType.Piercing,
    durability: 15
};

items[ObjectType.Arrowhead] = {
    id: 3,
    tX: 3,
    tY: 0,
    description: "Crafted from stone, to be used in crafting arrows.",
    name: "A Stone Arrowhead",
    weight: 0.3,
    group: [ObjectType.SharpenedItem],
    use: [UseType.Carve],
    recipe: {
        requires: [
            [ObjectType.SharpenedRock, 2, 1]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.AshPile] = {
    id: 4,
    tX: 4,
    tY: 0,
    description: "The powdery remains of burnt matter.",
    name: "A Pile of Ash",
    weight: 0.2,
    recipe: {
        requires: [
            [ObjectType.MortarAndPestle, 1, 0],
            [ObjectType.Charcoal, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple
    }
};

declare var Resistances; declare var Vulnerabilities;
items[ObjectType.BarkLeggings] = {
    id: 5,
    tX: 5,
    tY: 0,
    description: "Makeshift leg armor, crafted from strong tree bark and secured with string.",
    name: "Bark Leggings",
    weight: 2,
    durability: 20,
    equip: EquipType.Legs,
    defense: new Defense(1,
        new Resistances(
            DamageType.Blunt, 1
        ),
        new Vulnerabilities(
            DamageType.Fire, 2,
            DamageType.Piercing, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.TreeBark, 4, 4, 4],
            [ObjectType.String, 2, 2, 2]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    onBurn: ObjectType.Charcoal
};

items[ObjectType.BarkShield] = {
    id: 6,
    tX: 6,
    tY: 0,
    description: "Makeshift shield, used to block incoming attacks, crafted from strong tree bark and secured with string.",
    name: "A Bark Shield",
    weight: 2,
    durability: 20,
    equip: EquipType.Held,
    defense: new Defense(1,
        new Resistances(
            DamageType.Blunt, 1
        ),
        new Vulnerabilities(
            DamageType.Fire, 2,
            DamageType.Piercing, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.TreeBark, 4, 4, 4],
            [ObjectType.String, 2, 2, 2]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    onBurn: ObjectType.Charcoal
};

items[ObjectType.BarkTunic] = {
    id: 7,
    tX: 7,
    tY: 0,
    name: "A Bark Tunic",
    description: "Makeshift chest armor, crafted from strong tree bark and secured with string.",
    weight: 2,
    durability: 20,
    equip: EquipType.Chest,
    defense: new Defense(2,
        new Resistances(
            DamageType.Blunt, 1
        ),
        new Vulnerabilities(
            DamageType.Fire, 2,
            DamageType.Piercing, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.TreeBark, 6, 6, 6],
            [ObjectType.String, 2, 2, 2]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    onBurn: ObjectType.Charcoal
};

items[ObjectType.Bone] = {
    id: 8,
    tX: 8,
    tY: 0,
    description: "A sun-bleached heavy animal bone, suitable for rudimentary combat or crafting into more useful items.",
    name: "A Bone",
    weight: 0.5,
    group: [ObjectType.BoneLike],
    durability: 15,
    equip: EquipType.Held,
    attack: 2,
    damageType: DamageType.Blunt,
    use: [UseType.Gather]
};

items[ObjectType.Branch] = {
    id: 9,
    tX: 9,
    tY: 0,
    description: "A typical tree branch, suitably dried and useful for a variety of crafts.",
    name: "A Branch",
    weight: 0.5,
    use: [UseType.StokeFire, UseType.Gather],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Sapling, 1, 1]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Simple
    },
    group: [ObjectType.Utensil],
    durability: 5,
    equip: EquipType.Held,
    attack: 1,
    damageType: DamageType.Blunt,
    onBurn: ObjectType.Charcoal
};
items[ObjectType.Branch].onUse[UseType.StokeFire] = 1;

items[ObjectType.CactusSpines] = {
    id: 10,
    tX: 10,
    tY: 0,
    description: "Thin, long spikes, suitable for crafting into makeshift needles.",
    name: "Cactus Spines",
    weight: 0.2
};

items[ObjectType.Charcoal] = {
    id: 11,
    tX: 11,
    tY: 0,
    description: "Condensed, carbon-enriched burnt matter.",
    name: "Charcoal",
    weight: 1,
    group: [ObjectType.Carbons, ObjectType.FuelLike, ObjectType.Medicinal],
    use: [UseType.StokeFire],
    onUse: []
};
items[ObjectType.Charcoal].onUse[UseType.StokeFire] = 4;

items[ObjectType.Cobblestone] = {
    id: 12,
    tX: 12,
    tY: 0,
    description: "Primitive flooring, crafted from laying together many stones in an organized manner.",
    name: "Cobblestone Flooring",
    weight: 5,
    use: [UseType.PlaceTile],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Stones, 5, 5, 5]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    durability: 15
};
items[ObjectType.Cobblestone].onUse[UseType.PlaceTile] = TerrainType.Cobblestone;

items[ObjectType.CookedMeat] = {
    id: 13,
    tX: 13,
    tY: 0,
    description: "Adequately heated meat, ready for safe consumption.",
    name: "Cooked Meat",
    weight: 1,
    use: [UseType.Eat],
    onUse: [],
    decayable: [4750, ObjectType.RottenMeat],
    recipe:
    {
        requires: [
            [ObjectType.RawMeat, 1, 1],
            [ObjectType.Utensil, 1, 0]
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.FireSource
    },
    group: [ObjectType.Meat, ObjectType.Food]
};
items[ObjectType.CookedMeat].onUse[UseType.Eat] = [2, 5, 8, -2];

items[ObjectType.EarthWorm] = {
    id: 14,
    tX: 14,
    tY: 0,
    description: "A wriggling, live earth insect, useful for bait or eating on its own.",
    name: "An Earthworm",
    weight: 0.1,
    use: [UseType.Eat],
    onUse: [],
    group: [ObjectType.Insect],
    decayable: [2750]
};
items[ObjectType.EarthWorm].onUse[UseType.Eat] = [0, 2, 1, 0];

items[ObjectType.Feather] = {
    id: 15,
    tX: 15,
    tY: 0,
    description: "A bright white plumage from an avian creature.",
    name: "A Feather",
    weight: 0.1
};

items[ObjectType.FertileSoil] = {
    id: 16,
    tX: 16,
    tY: 0,
    description: "A rich soil suitable for adding to plants to promote their fertility.",
    name: "Fertile Soil",
    weight: 2,
    use: [UseType.Garden],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.AshPile, 1, 1],
            [ObjectType.Soil, 1, 1],
            [ObjectType.Peat, 1, 1]
        ],
        skill: SkillType.Botany,
        level: RecipeLevel.Intermediate
    }
};
items[ObjectType.FertileSoil].onUse[UseType.Garden] = 4;

items[ObjectType.SeaWaterWaterskin] = {
    id: 17,
    tX: 17,
    tY: 0,
    description: "A waterskin full of sea water, not suitable for drinking. Can be desalinated.",
    name: "Sea Water in Waterskin",
    weight: 2,
    use: [UseType.Drink, UseType.Pour],
    onUse: [],
    durability: 20,
    group: [ObjectType.Water],
    returnOnUse: ObjectType.Waterskin
};
items[ObjectType.SeaWaterWaterskin].onUse[UseType.Drink] = [0, -15, 1, -2];

items[ObjectType.FirePlough] = {
    id: 18,
    tX: 18,
    tY: 0,
    description: "A fire making device using a stick and groove method, whereby the stick is pushed into the groove to create heat and friction.",
    name: "A Fire Plough",
    weight: 3,
    durability: 30,
    use: [UseType.StartFire],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.WoodenPole, 1, 1, 1],
            [ObjectType.Log, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    onBurn: ObjectType.Charcoal
};

items[ObjectType.FlowerSeeds] = {
    id: 19,
    tX: 19,
    tY: 0,
    description: "Dried flower seeds, suitable for planting to grow some flowers.",
    name: "Flower Seeds",
    weight: 0.1,
    use: [UseType.Plant],
    onUse: [],
    group: [ObjectType.Medicinal]
};
items[ObjectType.FlowerSeeds].onUse[UseType.Plant] = ObjectType.YellowFlowers;

items[ObjectType.Fossil] = {
    id: 20,
    tX: 20,
    tY: 0,
    description: "A carbonized fossil of a species long since extinct.",
    name: "A Fossil",
    group: [ObjectType.Carbons],
    weight: 0.8
};

items[ObjectType.GoldCoins] = {
    id: 21,
    tX: 21,
    tY: 0,
    description: "Shiny, glossy gold coins, from a culture unknown to you.",
    name: "Gold Coins",
    weight: 2,
    group: [ObjectType.Treasure]
};

items[ObjectType.GoldenChalice] = {
    id: 22,
    tX: 22,
    tY: 0,
    description: "A large golden drinking utensil, ornate and resplendent.",
    name: "A Golden Chalice",
    weight: 3,
    group: [ObjectType.Treasure]
};

items[ObjectType.GoldenRing] = {
    id: 23,
    tX: 23,
    tY: 0,
    description: "A golden ring, used to show wealth and power.",
    name: "A Golden Ring",
    weight: 1,
    group: [ObjectType.Treasure]
};

items[ObjectType.GoldenSword] = {
    id: 24,
    tX: 24,
    tY: 0,
    description: "An ornate, but fragile long sword, forged from molded gold metal.",
    name: "A Golden Sword",
    weight: 3,
    durability: 15,
    equip: EquipType.Held,
    attack: 8,
    damageType: DamageType.Piercing | DamageType.Slashing,
    use: [UseType.Carve, UseType.Gather],
    group: [ObjectType.SharpenedItem, ObjectType.Treasure]
};

items[ObjectType.GrassSeeds] = {
    id: 25,
    tX: 25,
    tY: 0,
    description: "Small dried grass seeds, suitable for planting to grow grass.",
    name: "Grass Seeds",
    weight: 0.1,
    use: [UseType.Plant],
    onUse: []
};
items[ObjectType.GrassSeeds].onUse[UseType.Plant] = ObjectType.GrassSeeds;

items[ObjectType.IronOre] = {
    id: 26,
    tX: 26,
    tY: 0,
    description: "Unprocessed raw iron ore, useful for smelting.",
    name: "Iron Ore",
    weight: 3
};

items[ObjectType.Kindling] = {
    id: 27,
    tX: 27,
    tY: 0,
    description: "A must-have for fire making, allows a starting fire to create enough heat to light the larger fuel on fire.",
    name: "Kindling",
    weight: 0.2,
    use: [UseType.StokeFire],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Twigs, 1, 1],
            [ObjectType.TreeBark, 1, 1]
        ],
        skill: SkillType.Camping,
        level: RecipeLevel.Simple
    }
};
items[ObjectType.Kindling].onUse[UseType.StokeFire] = 2;

items[ObjectType.LargeRock] = {
    id: 28,
    tX: 28,
    tY: 0,
    description: "A rather larger rock, useful for many crafting practices and tools.",
    name: "A Large Rock",
    weight: 3,
    group: [ObjectType.RockLike]
};

items[ObjectType.LeafBedroll] = {
    id: 29,
    tX: 29,
    tY: 0,
    description: "A makeshift sleeping and insulation device to sleep or rest on top of.",
    name: "A Leaf Bedroll",
    weight: 1.2,
    durability: 25,
    use: [UseType.Rest, UseType.Sleep],
    recipe: {
        requires: [
            [ObjectType.Leaves, 10, 10, 10],
            [ObjectType.RopeLike, 2, 2, 2]
        ],
        skill: SkillType.Camping,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.Leather] = {
    id: 30,
    tX: 30,
    tY: 0,
    description: "A fresh leather hide, stripped and de-furred from an animal.",
    name: "A Leather Hide",
    weight: 1.5
};

items[ObjectType.Leaves] = {
    id: 31,
    tX: 31,
    tY: 0,
    description: "A handful of foliage from a tree, useful in composting and fire making.",
    name: "Leaves",
    group: [ObjectType.Compost],
    use: [UseType.StokeFire],
    onUse: [],
    weight: 0.1
};
items[ObjectType.Leaves].onUse[UseType.StokeFire] = 1;

items[ObjectType.Limestone] = {
    id: 32,
    tX: 32,
    tY: 0,
    description: "A mineral-rich rock, useful for glass making.",
    name: "Limestone",
    weight: 2
};

items[ObjectType.Log] = {
    id: 33,
    tX: 33,
    tY: 0,
    description: "A sturdy piece of wood, useful for buildings and fire.",
    name: "A Log",
    weight: 5,
    use: [UseType.StokeFire],
    onUse: [],
    group: [ObjectType.FuelLike],
    onBurn: ObjectType.Charcoal
};
items[ObjectType.Log].onUse[UseType.StokeFire] = 8;

items[ObjectType.MortarAndPestle] = {
    id: 34,
    tX: 34,
    tY: 0,
    description: "A grinding and crushing device made from heavy stone.",
    name: "Mortar and Pestle",
    weight: 2,
    recipe: {
        requires: [
            [ObjectType.SmoothRock, 2, 2]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Intermediate
    },
    durability: 10
};

items[ObjectType.CommonMushrooms] = {
    id: 35,
    tX: 35,
    tY: 0,
    description: "A tasty, long lasting mushroom, great for eating.",
    name: "Common Mushrooms",
    weight: 0.2,
    use: [UseType.Eat, UseType.Plant],
    skillUse: SkillType.Mycology,
    onUse: [],
    decayable: [19000],
    group: [ObjectType.Food],
    doodadType: DoodadType.Mushrooms1
};
items[ObjectType.CommonMushrooms].onUse[UseType.Eat] = [3, 2, 2, -1];
items[ObjectType.CommonMushrooms].onUse[UseType.Plant] = ObjectType.CommonMushrooms;

items[ObjectType.Nopal] = {
    id: 36,
    tX: 36,
    tY: 0,
    description: "A de-spined cactus fruit, great for eating and reducing thirst.",
    name: "Nopal",
    weight: 0.5,
    use: [UseType.Eat],
    skillUse: SkillType.Botany,
    onUse: [],
    decayable: [8750, ObjectType.RottingVegetation],
    group: [ObjectType.Food],
    returnOnUse: ObjectType.CactiSeeds
};
items[ObjectType.Nopal].onUse[UseType.Eat] = [0, 3, 3, 1];

items[ObjectType.Peat] = {
    id: 37,
    tX: 37,
    tY: 0,
    description: "A dried mass of sponge-like plants, great for fire making and composts.",
    name: "Peat",
    weight: 1,
    group: [ObjectType.FuelLike, ObjectType.Compost],
    use: [UseType.StokeFire],
    onUse: []
};
items[ObjectType.Peat].onUse[UseType.StokeFire] = 4;

items[ObjectType.Sandstone] = {
    id: 38,
    tX: 38,
    tY: 0,
    description: "A brittle, but malleable rock, useful for building and tool making.",
    name: "Sandstone",
    weight: 2
};

items[ObjectType.PileOfGravel] = {
    id: 39,
    tX: 39,
    tY: 0,
    description: "A large pile of damp stone and sand.",
    name: "A Pile of Gravel",
    weight: 3,
    use: [UseType.PlaceTile],
    onUse: []
};
items[ObjectType.PileOfGravel].onUse[UseType.PlaceTile] = TerrainType.Gravel;

items[ObjectType.PileOfSand] = {
    id: 40,
    tX: 40,
    tY: 0,
    description: "A large pile of moist sand, useful for glass making.",
    name: "A Pile of Sand",
    weight: 3,
    use: [UseType.PlaceTile],
    onUse: [],
    onBurn: ObjectType.SharpGlass
};
items[ObjectType.PileOfSand].onUse[UseType.PlaceTile] = TerrainType.Sand;

items[ObjectType.WoodenArrow] = {
    id: 41,
    tX: 41,
    tY: 0,
    description: "A makeshift wooden projectile to be fired from a bow, crafted with a feather to control flight.",
    name: "A Wooden Arrow",
    weight: 0.6,
    group: [ObjectType.Arrow],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.WoodenPole, 1, 1, 1],
            [ObjectType.Feather, 1, 1, 1]
        ],
        skill: SkillType.Fletching,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    attack: 1,
    damageType: DamageType.Piercing,
    durability: 10
};

items[ObjectType.StoneAxe] = {
    id: 42,
    tX: 42,
    tY: 0,
    description: "A dual-use tool which is both sharp and blunt that can be used to both mine and lumberjack with ease, made from stone.",
    name: "A Stone Axe",
    weight: 2,
    durability: 50,
    equip: EquipType.Held,
    attack: 3,
    damageType: DamageType.Slashing | DamageType.Blunt,
    group: [ObjectType.SharpenedItem],
    use: [UseType.Carve, UseType.Gather],
    recipe: {
        requires: [
            [ObjectType.SharpenedRock, 2, 2, 2],
            [ObjectType.PoleLike, 1, 1, 1],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.Bandage] = {
    id: 43,
    tX: 43,
    tY: 0,
    description: "A tattered piece of fabric, used to clot blood loss and stop infection.",
    name: "A Bandage",
    weight: 0.1,
    use: [UseType.Heal],
    skillUse: SkillType.Anatomy,
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.FabricLike, 1, 1, 1]
        ],
        skill: SkillType.Tailoring,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};
items[ObjectType.Bandage].onUse[UseType.Heal] = [12, 0, 0, 0];

items[ObjectType.WovenFabric] = {
    id: 44,
    tX: 44,
    tY: 0,
    description: "A makeshift piece of fibrous tissue, woven together into fabric.",
    name: "Woven Fabric",
    weight: 0.2,
    group: [ObjectType.FabricLike],
    recipe: {
        requires: [
            [ObjectType.String, 6, 6, 6],
            [ObjectType.NeedleLike, 1, 0]
        ],
        skill: SkillType.Tailoring,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.CactusNeedle] = {
    id: 45,
    tX: 45,
    tY: 0,
    description: "A needle from a cactus plant, useful in crafting smaller, more intricate items.",
    name: "A Cactus Needle",
    weight: 0.1,
    group: [ObjectType.NeedleLike],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.CactusSpines, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Simple
    },
    durability: 5
};

items[ObjectType.StoneShovel] = {
    id: 46,
    tX: 46,
    tY: 0,
    description: "A digging tool made from stone, used to gather from tiles or route water.",
    name: "A Stone Shovel",
    weight: 2,
    durability: 50,
    equip: EquipType.Held,
    attack: 2,
    damageType: DamageType.Slashing,
    use: [UseType.Dig, UseType.Gather, UseType.GatherTreasure],
    recipe: {
        requires: [
            [ObjectType.SharpenedRock, 1, 1, 1],
            [ObjectType.PoleLike, 2, 2, 2],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.WoodenSpear] = {
    id: 47,
    tX: 47,
    tY: 0,
    description: "A makeshift hunting weapon, suitable for throwing in certain situations due to ease of crafting.",
    name: "A Wooden Spear",
    weight: 0.8,
    durability: 10,
    equip: EquipType.Held,
    attack: 2,
    damageType: DamageType.Piercing,
    group: [ObjectType.Utensil],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.WoodenPole, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    use: [UseType.Gather]
};

items[ObjectType.Suture] = {
    id: 48,
    tX: 48,
    tY: 0,
    description: "A sharp needle-like tool with an attached string, used to sew and close gaping wounds.",
    name: "A Suture",
    weight: 0.1,
    use: [UseType.Heal],
    skillUse: SkillType.Anatomy,
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.String, 1, 1, 1],
            [ObjectType.NeedleLike, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};
items[ObjectType.Suture].onUse[UseType.Heal] = [8, 0, 0, 0];

items[ObjectType.Raft] = {
    id: 49,
    tX: 49,
    tY: 0,
    description: "A rudimentary water travelling device, useful to traversing expanses of water quicker than swimming.",
    name: "A Raft",
    weight: 15,
    durability: 500,
    use: [UseType.Raft],
    recipe: {
        requires: [
            [ObjectType.Rope, 2, 2, 2],
            [ObjectType.Log, 3, 3, 3],
            [ObjectType.BoatPaddle, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    onBurn: ObjectType.Charcoal
};

items[ObjectType.RawMeat] = {
    id: 50,
    tX: 50,
    tY: 0,
    description: "A raw, bloody piece of meat. Cooking is recommended before consumption.",
    name: "Raw Meat",
    weight: 1,
    use: [UseType.Eat],
    onUse: [],
    decayable: [2750, ObjectType.RottenMeat],
    onBurn: ObjectType.CookedMeat,
    group: [ObjectType.Meat]
};
items[ObjectType.RawMeat].onUse[UseType.Eat] = [-2, 2, 7, -2];

items[ObjectType.RedBerries] = {
    id: 51,
    tX: 51,
    tY: 0,
    description: "Lush, ripe berries, plucked from a tree or bush.",
    name: "Red Berries",
    weight: 0.1,
    use: [UseType.Eat],
    skillUse: SkillType.Botany,
    onUse: [],
    decayable: [14000, ObjectType.RottingVegetation],
    group: [ObjectType.Food],
    returnOnUse: ObjectType.BerrySeeds
};
items[ObjectType.RedBerries].onUse[UseType.Eat] = [1, 1, 2, 0];

items[ObjectType.RedMushroom] = {
    id: 52,
    tX: 52,
    tY: 0,
    description: "An odd looking, foul smelling mushroom.",
    name: "A Spotted Red Mushroom",
    weight: 0.2,
    use: [UseType.Eat, UseType.Plant],
    skillUse: SkillType.Mycology,
    onUse: [],
    decayable: [19000],
    group: [ObjectType.Food],
    doodadType: DoodadType.RedMushrooms1
};
items[ObjectType.RedMushroom].onUse[UseType.Eat] = [-5, 8, 2, -1];
items[ObjectType.RedMushroom].onUse[UseType.Plant] = ObjectType.RedMushroom;

items[ObjectType.Rope] = {
    id: 53,
    tX: 53,
    tY: 0,
    description: "A very thick, twisted piece of cordage, useful for heavy-duty binding.",
    name: "A Rope",
    weight: 0.8,
    recipe: {
        requires: [
            [ObjectType.String, 2, 2, 2]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.Sapling] = {
    id: 54,
    tX: 54,
    tY: 0,
    description: "A young, still fertile tree, suitable for planting in a new location.",
    name: "A Sapling",
    weight: 2.5,
    use: [UseType.Plant, UseType.StokeFire],
    onUse: [],
    onBurn: ObjectType.Charcoal
};
items[ObjectType.Sapling].onUse[UseType.StokeFire] = 3;
items[ObjectType.Sapling].onUse[UseType.Plant] = ObjectType.Sapling;

items[ObjectType.Seaweed] = {
    id: 55,
    tX: 55,
    tY: 0,
    description: "A stringy mass of sea plants. Can be used as cordage or eating in a pinch.",
    name: "Seaweed",
    weight: 0.2,
    use: [UseType.Eat],
    skillUse: SkillType.Botany,
    onUse: [],
    decayable: [19000, ObjectType.RottingVegetation],
    group: [ObjectType.RopeLike, ObjectType.Food]
};
items[ObjectType.Seaweed].onUse[UseType.Eat] = [0, 1, 1, -1];

items[ObjectType.SharpGlass] = {
    id: 56,
    tX: 56,
    tY: 0,
    description: "An semi-opaque shard of sharpened glass, molded naturally after melting down sand.",
    name: "Sharp Glass",
    weight: 0.3,
    use: [UseType.Carve],
    group: [ObjectType.SharpenedItem],
    durability: 15,
    recipe: {
        requires: [
            [ObjectType.PileOfSand, 1, 1]
        ],
        skill: SkillType.Glassblowing,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.FireSource
    }
};

items[ObjectType.SharpRock] = {
    id: 57,
    tX: 57,
    tY: 0,
    description: "A sharpened rock, useful for many crafts, tools and even carving when required.",
    name: "A Sharp Rock",
    weight: 1,
    durability: 10,
    group: [ObjectType.SharpenedItem, ObjectType.SharpenedRock],
    use: [UseType.Carve],
    recipe: {
        requires: [
            [ObjectType.LargeRock, 2, 1]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.SkullCap] = {
    id: 58,
    tX: 58,
    tY: 0,
    description: "A hollowed-out animal skull, useful for a makeshift form of head protection.",
    name: "A Skullcap",
    weight: 1,
    durability: 15,
    equip: EquipType.Head,
    defense: new Defense(1,
        new Resistances(
            DamageType.Slashing, 1
        ),
        new Vulnerabilities()
    ),
    recipe: {
        requires: [
            [ObjectType.RockLike, 1, 0],
            [ObjectType.AnimalSkull, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.SmoothRock] = {
    id: 59,
    tX: 59,
    tY: 0,
    description: "A round, smooth rock, useful for many crafts.",
    name: "A Smooth Rock",
    weight: 2,
    group: [ObjectType.RockLike],
    recipe: {
        requires: [
            [ObjectType.SharpenedRock, 1, 1],
            [ObjectType.LargeRock, 1, 1]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.Soil] = {
    id: 60,
    tX: 60,
    tY: 0,
    description: "A pile of moistened dirt.",
    name: "Soil",
    weight: 2,
    use: [UseType.PlaceTile],
    onUse: []
};
items[ObjectType.Soil].onUse[UseType.PlaceTile] = TerrainType.Dirt;

items[ObjectType.Spear] = {
    id: 61,
    tX: 61,
    tY: 0,
    description: "A hunting weapon crafted with a stone head, suitable for throwing in certain situations.",
    name: "A Stone Spear",
    weight: 2,
    durability: 20,
    equip: EquipType.Held,
    attack: 3,
    damageType: DamageType.Piercing,
    group: [ObjectType.Utensil],
    recipe: {
        requires: [
            [ObjectType.WoodenPole, 1, 1, 1],
            [ObjectType.SharpenedRock, 1, 1, 1],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    use: [UseType.Gather]
};

items[ObjectType.Stones] = {
    id: 62,
    tX: 62,
    tY: 0,
    description: "A mass of small rocks, grouped together.",
    name: "Stones",
    weight: 1,
    recipe: {
        requires: [
            [ObjectType.RockLike, 2, 1]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.StoneWall] = {
    id: 63,
    tX: 63,
    tY: 0,
    description: "An interlaced series of found rocks and stones shaped into a vertical wall structure. Can be built to keep enemies out.",
    name: "A Stone Wall",
    weight: 24,
    use: [UseType.PlaceTile],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.LargeRock, 8, 8, 8]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    durability: 15
};
items[ObjectType.StoneWall].onUse[UseType.PlaceTile] = TerrainType.StoneWall;

items[ObjectType.String] = {
    id: 64,
    tX: 0,
    tY: 1,
    description: "The cornerstone of all crafting materials, woven together fabric, used for binding.",
    name: "String",
    weight: 0.2,
    recipe: {
        requires: [
            [ObjectType.RopeLike, 2, 2, 2]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Simple
    },
    disassemble: true
};

items[ObjectType.StrippedBark] = {
    id: 65,
    tX: 1,
    tY: 1,
    description: "A strong, fibrous shaving from a branch or log, useful for cordage making.",
    name: "Stripped Bark",
    weight: 0.1,
    group: [ObjectType.RopeLike],
    use: [UseType.StokeFire],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.Branch, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Simple
    }
};
items[ObjectType.StrippedBark].onUse[UseType.StokeFire] = 2;

items[ObjectType.TannedLeather] = {
    id: 66,
    tX: 2,
    tY: 1,
    description: "A durable, treated piece of leather, useful in the making of armor.",
    name: "Tanned Leather",
    weight: 1.5,
    recipe: {
        requires: [
            [ObjectType.Tannin, 1, 1],
            [ObjectType.Leather, 1, 1]
        ],
        skill: SkillType.Leatherworking,
        level: RecipeLevel.Intermediate
    }
};

items[ObjectType.Tannin] = {
    id: 67,
    tX: 3,
    tY: 1,
    description: "A natural treating agent used in the tanning of hides to create leather.",
    name: "Tannin",
    weight: 0.1,
    recipe: {
        requires: [
            [ObjectType.MortarAndPestle, 1, 0],
            [ObjectType.TreeBark, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.ThistleSeeds] = {
    id: 68,
    tX: 4,
    tY: 1,
    description: "A small, hard seed, used for growing thistle plants.",
    name: "Thistle Seeds",
    weight: 0.1,
    use: [UseType.Eat, UseType.Plant],
    skillUse: SkillType.Botany,
    onUse: [],
    group: [ObjectType.Medicinal, ObjectType.Food]
};
items[ObjectType.ThistleSeeds].onUse[UseType.Plant] = ObjectType.Thistle;
items[ObjectType.ThistleSeeds].onUse[UseType.Eat] = [3, 0, 1, 0];

items[ObjectType.TreeBark] = {
    id: 69,
    tX: 5,
    tY: 1,
    description: "A durable, dense chunk of bark, broken off of a tree or log.",
    name: "Tree Bark",
    weight: 0.3,
    use: [UseType.StokeFire],
    onUse: [],
    onBurn: ObjectType.Charcoal
};
items[ObjectType.TreeBark].onUse[UseType.StokeFire] = 2;

items[ObjectType.TreeFungus] = {
    id: 70,
    tX: 6,
    tY: 1,
    description: "A semi-hard chunk of fungus, grown from a tree and possibly edible.",
    name: "Tree Fungus",
    weight: 0.2,
    use: [UseType.Eat],
    skillUse: SkillType.Mycology,
    onUse: [],
    decayable: [19000],
    group: [ObjectType.Food]
};
items[ObjectType.TreeFungus].onUse[UseType.Eat] = [0, 7, 3, -1];

items[ObjectType.TreeVine] = {
    id: 71,
    tX: 7,
    tY: 1,
    description: "A long strand of .",
    name: "A Tree Vine",
    weight: 0.8,
    group: [ObjectType.RopeLike]
};

items[ObjectType.Twigs] = {
    id: 72,
    tX: 8,
    tY: 1,
    description: "A broken mass of small branches and tree limbs.",
    name: "Twigs",
    weight: 0.2,
    use: [UseType.StokeFire],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.Branch, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Simple
    },
    onBurn: ObjectType.Charcoal
};
items[ObjectType.Twigs].onUse[UseType.StokeFire] = 2;

items[ObjectType.Waterskin] = {
    id: 73,
    tX: 9,
    tY: 1,
    description: "A portable container, stitched and fabricated using tanned leather.",
    name: "A Waterskin",
    weight: 1,
    use: [UseType.FillWater],
    recipe: {
        requires: [
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.TannedLeather, 1, 1, 1],
            [ObjectType.String, 2, 2, 2]
        ],
        skill: SkillType.Leatherworking,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    durability: 20,
    group: [ObjectType.Container]
};

items[ObjectType.WoodenPole] = {
    id: 74,
    tX: 10,
    tY: 1,
    description: "A smooth long branch, shaved and carved down into a suitable pole.",
    name: "A Wooden Pole",
    weight: 0.5,
    group: [ObjectType.PoleLike, ObjectType.Utensil],
    durability: 10,
    equip: EquipType.Held,
    attack: 2,
    damageType: DamageType.Blunt,
    use: [UseType.LightItem, UseType.Gather],
    lit: ObjectType.PoleTorchLit,
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.Branch, 1, 1]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Simple
    },
    onBurn: ObjectType.Charcoal
};

items[ObjectType.PeatBandage] = {
    id: 75,
    tX: 11,
    tY: 1,
    description: "A fabric bandage, infused with peat as an antiseptic agent.",
    name: "A Peat Bandage",
    weight: 0.5,
    use: [UseType.Heal],
    skillUse: SkillType.Anatomy,
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Bandage, 1, 1, 1],
            [ObjectType.Peat, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};
items[ObjectType.PeatBandage].onUse[UseType.Heal] = [15, 0, 0, 0];

items[ObjectType.Bow] = {
    id: 76,
    tX: 12,
    tY: 1,
    description: "A short wooden pole, bent and shaped into a D shape, useful for firing projectiles using tension of the string.",
    name: "A Bow",
    weight: 1,
    durability: 15,
    use: [UseType.Shoot],
    equip: EquipType.Held,
    twoHanded: true,
    attack: 1,
    damageType: DamageType.Blunt,
    ranged:
    {
        range: 4,
        attack: 1
    },
    recipe: {
        requires: [
            [ObjectType.WoodenPole, 1, 1, 1],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Fletching,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.BowDrill] = {
    id: 77,
    tX: 13,
    tY: 1,
    description: "An advanced fire starting device, using the speed and friction of a bow to rotate a piece of wood against another.",
    name: "A Bow Drill",
    weight: 5,
    durability: 45,
    use: [UseType.StartFire],
    recipe: {
        requires: [
            [ObjectType.Bow, 1, 1, 1],
            [ObjectType.HandDrill, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    onBurn: ObjectType.Charcoal
};

items[ObjectType.FishingNet] = {
    id: 78,
    tX: 14,
    tY: 1,
    description: "A checkered grid of woven fabric strings, pieced together to allow water through, but not fish, weighted on each end.",
    name: "A Fishing Net",
    weight: 2,
    durability: 50,
    ranged: {
        range: 2,
        attack: 0
    },
    use: [UseType.Fishing, UseType.GatherTreasure],
    recipe: {
        requires: [
            [ObjectType.String, 6, 6, 6],
            [ObjectType.Stones, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.RawCod] = {
    id: 79,
    tX: 15,
    tY: 1,
    description: "Slimy to the touch, but delicious and healthy to consume. Can be cooked for added benefits.",
    name: "A Raw Cod",
    weight: 1,
    use: [UseType.Eat],
    onUse: [],
    decayable: [2750, ObjectType.RottenMeat],
    onBurn: ObjectType.CookedCod,
    group: [ObjectType.Meat]
};
items[ObjectType.RawCod].onUse[UseType.Eat] = [1, 1, 5, -1];

items[ObjectType.CookedCod] = {
    id: 80,
    tX: 16,
    tY: 1,
    description: "A seared, evenly cooked cod, ready to consume.",
    name: "A Cooked Cod",
    weight: 0.9,
    use: [UseType.Eat],
    onUse: [],
    decayable: [4750, ObjectType.RottenMeat],
    recipe: {
        requires: [
            [ObjectType.RawCod, 1, 1],
            [ObjectType.Utensil, 1, 0]
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.FireSource
    },
    group: [ObjectType.Meat, ObjectType.Food]
};
items[ObjectType.CookedCod].onUse[UseType.Eat] = [2, 4, 6, -1];

items[ObjectType.Campfire] = {
    id: 81,
    tX: 17,
    tY: 1,
    description: "A mess of stones and rocks, shaped into a ring to as control a fire.",
    name: "A Campfire",
    weight: 17,
    use: [UseType.Build],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.RockLike, 5, 5, 5]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    durability: 10
};
items[ObjectType.Campfire].onUse[UseType.Build] = ObjectType.CampfireUnlit;

items[ObjectType.TreeVineWhip] = {
    id: 82,
    tX: 18,
    tY: 1,
    description: "A makeshift weapon, crafted from tree vines, wrapped and bound together.",
    name: "A Tree Vine Whip",
    weight: 0.5,
    durability: 10,
    equip: EquipType.Held,
    attack: 2,
    damageType: DamageType.Slashing,
    recipe: {
        requires: [
            [ObjectType.TreeVine, 2, 2]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.PileOfSnow] = {
    id: 83,
    tX: 19,
    tY: 1,
    description: "A rapidly melting pile of frozen water and snow. Useful to drink in a pinch.",
    name: "A Pile of Snow",
    use: [UseType.Eat, UseType.Pour],
    onUse: [],
    weight: 0.3,
    decayable: [750]
};
items[ObjectType.PileOfSnow].onUse[UseType.Eat] = [1, 10, 1, 3];

items[ObjectType.BarkTorch] = {
    id: 84,
    tX: 20,
    tY: 1,
    description: "A torch wrapped and bound with stripped tree bark, providing natural oils to stay lit longer.",
    name: "A Bark Torch",
    weight: 1,
    durability: 15,
    attack: 1,
    damageType: DamageType.Blunt,
    equip: EquipType.Held,
    use: [UseType.LightItem],
    group: [ObjectType.TorchLike],
    lit: ObjectType.BarkTorchLit,
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1],
            [ObjectType.StrippedBark, 5, 5]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    onBurn: ObjectType.Charcoal
};

items[ObjectType.BarkTorchLit] = {
    id: 85,
    tX: 21,
    tY: 1,
    description: "Provides light when equipped at the cost of the fuel applied to the torch.",
    name: "A Lit Bark Torch",
    weight: 1,
    durability: 15,
    equip: EquipType.Held,
    onEquip: ["Light Source", 2],
    attack: 3,
    damageType: DamageType.Fire | DamageType.Blunt,
    use: [UseType.StartFire],
    revert: ObjectType.BarkTorch,
    decayable: [1000, ObjectType.AshPile],
    onBurn: ObjectType.Charcoal
};

items[ObjectType.HandDrill] = {
    id: 86,
    tX: 22,
    tY: 1,
    name: "A Hand Drill",
    weight: 0.5,
    durability: 15,
    use: [UseType.StartFire],
    recipe: {
        requires: [
            [ObjectType.WoodenPole, 2, 2, 2]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    onBurn: ObjectType.Charcoal
};

items[ObjectType.SmallBag] = {
    id: 87,
    tX: 23,
    tY: 1,
    name: "A Small Bag",
    weight: 0.3,
    isContainer: true,
    maxWeight: 25,
    use: [UseType.OpenContainer],
    equip: EquipType.Belt,
    recipe: {
        requires: [
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.TannedLeather, 1, 1, 1],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Leatherworking,
        level: RecipeLevel.Intermediate
    }
};

items[ObjectType.Shale] = {
    id: 88,
    tX: 24,
    tY: 1,
    name: "Shale",
    weight: 0.8,
    durability: 5,
    group: [ObjectType.SharpenedItem, ObjectType.SharpenedRock],
    use: [UseType.Carve]
};

items[ObjectType.SharpenedBone] = {
    id: 89,
    tX: 25,
    tY: 1,
    name: "A Sharpened Bone",
    weight: 0.5,
    durability: 5,
    group: [ObjectType.SharpenedItem, ObjectType.Utensil],
    use: [UseType.Carve, UseType.Gather],
    equip: EquipType.Held,
    attack: 3,
    damageType: DamageType.Piercing,
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.BonePole, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.GrindStone] = {
    id: 90,
    tX: 26,
    tY: 1,
    name: "A Grindstone",
    weight: 1,
    durability: 5,
    use: [UseType.Repair],
    recipe: {
        requires: [
            [ObjectType.Sandstone, 2, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    group: [ObjectType.Repair]
};

items[ObjectType.RawFishSteak] = {
    id: 91,
    tX: 27,
    tY: 1,
    name: "A Raw Fishsteak",
    weight: 1,
    use: [UseType.Eat],
    onUse: [],
    decayable: [2750, ObjectType.RottenMeat],
    onBurn: ObjectType.CookedFishSteak,
    group: [ObjectType.Meat]
};
items[ObjectType.RawFishSteak].onUse[UseType.Eat] = [1, 1, 6, -1];

items[ObjectType.CookedFishSteak] = {
    id: 92,
    tX: 28,
    tY: 1,
    name: "A Cooked Fishsteak",
    weight: 1,
    use: [UseType.Eat],
    onUse: [],
    decayable: [4750, ObjectType.RottenMeat],
    recipe:
    {
        requires: [
            [ObjectType.RawFishSteak, 1, 1],
            [ObjectType.Utensil, 1, 0]
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.FireSource
    },
    group: [ObjectType.Meat, ObjectType.Food]
};
items[ObjectType.CookedFishSteak].onUse[UseType.Eat] = [2, 4, 6, -1];

items[ObjectType.DesalinatedWaterWaterskin] = {
    id: 93,
    tX: 29,
    tY: 1,
    name: "Desalinated Water in Waterskin",
    weight: 2,
    use: [UseType.Drink, UseType.Pour],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Flask, 1, 0],
            [ObjectType.SeaWaterWaterskin, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.CampfireLit
    },
    durability: 20,
    group: [ObjectType.Water, ObjectType.PotableWaterskin],
    returnOnUse: ObjectType.Waterskin
};
items[ObjectType.DesalinatedWaterWaterskin].onUse[UseType.Drink] = [2, 15, 1, 10];

items[ObjectType.BoatPaddle] = {
    id: 94,
    tX: 30,
    tY: 1,
    name: "A Boat Paddle",
    weight: 2,
    durability: 15,
    equip: EquipType.Held,
    attack: 2,
    damageType: DamageType.Blunt,
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1, 1],
            [ObjectType.TreeBark, 2, 2, 2],
            [ObjectType.String, 2, 2, 2]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    onBurn: ObjectType.Charcoal
};

items[ObjectType.BullBoat] = {
    id: 95,
    tX: 31,
    tY: 1,
    name: "A Bull Boat",
    weight: 10,
    use: [UseType.Travel],
    recipe: {
        requires: [
            [ObjectType.WoodenPole, 8, 8, 8],
            [ObjectType.TannedLeather, 1, 1, 1],
            [ObjectType.Rope, 2, 2, 2],
            [ObjectType.BoatPaddle, 1, 1, 1]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    onBurn: ObjectType.Charcoal
};

items[ObjectType.RefinedSand] = {
    id: 96,
    tX: 32,
    tY: 1,
    name: "Refined Sand",
    weight: 2,
    recipe: {
        requires: [
            [ObjectType.MortarAndPestle, 1, 0],
            [ObjectType.PileOfSand, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple
    },
    onBurn: ObjectType.SharpGlass
};

items[ObjectType.SpyGlass] = {
    id: 97,
    tX: 33,
    tY: 1,
    name: "A Spyglass",
    weight: 2,
    use: [UseType.Look],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.Lens, 2, 2, 2],
            [ObjectType.Log, 1, 1, 1],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    durability: 50
};

items[ObjectType.Flask] = {
    id: 98,
    tX: 34,
    tY: 1,
    name: "A Flask",
    weight: 1,
    recipe: {
        requires: [
            [ObjectType.ClayBlowPipe, 1, 0],
            [ObjectType.RefinedSand, 2, 2],
            [ObjectType.LimestonePowder, 1, 1]
        ],
        skill: SkillType.Glassblowing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.FurnaceLit
    },
    durability: 15
};

items[ObjectType.RawClay] = {
    id: 99,
    tX: 35,
    tY: 1,
    name: "Raw Clay",
    weight: 2,
    use: [UseType.PlaceTile],
    onUse: []
};
items[ObjectType.RawClay].onUse[UseType.PlaceTile] = TerrainType.Clay;

items[ObjectType.RawClayBlowPipe] = {
    id: 100,
    tX: 36,
    tY: 1,
    name: "A Raw Clay Blowpipe",
    weight: 1,
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 0],
            [ObjectType.RawClay, 1, 1, 1]
        ],
        skill: SkillType.Claythrowing,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.ClayBlowPipe] = {
    id: 101,
    tX: 37,
    tY: 1,
    name: "A Clay Blowpipe",
    weight: 1,
    recipe: {
        requires: [
            [ObjectType.RawClayBlowPipe, 1, 1]
        ],
        skill: SkillType.Claythrowing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.KilnLit
    },
    durability: 15
};

items[ObjectType.LeatherBelt] = {
    id: 102,
    tX: 38,
    tY: 1,
    name: "A Leather Belt",
    weight: 1,
    durability: 25,
    equip: EquipType.Belt,
    defense: new Defense(1,
        new Resistances(
            DamageType.Slashing, 1
        ),
        new Vulnerabilities(
            DamageType.Piercing, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.TannedLeather, 1, 1, 1],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Leatherworking,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.LeatherTunic] = {
    id: 103,
    tX: 39,
    tY: 1,
    name: "A Leather Tunic",
    weight: 3,
    durability: 25,
    equip: EquipType.Chest,
    defense: new Defense(3,
        new Resistances(
            DamageType.Slashing, 1
        ),
        new Vulnerabilities(
            DamageType.Piercing, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.TannedLeather, 2, 2, 2],
            [ObjectType.String, 4, 4, 4]
        ],
        skill: SkillType.Leatherworking,
        level: RecipeLevel.Advanced
    },
    disassemble: true
};

items[ObjectType.LeatherBoots] = {
    id: 104,
    tX: 40,
    tY: 1,
    name: "Leather Boots",
    weight: 3,
    durability: 25,
    equip: EquipType.Feet,
    defense: new Defense(2,
        new Resistances(
            DamageType.Slashing, 1
        ),
        new Vulnerabilities(
            DamageType.Piercing, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.TannedLeather, 2, 2, 2],
            [ObjectType.String, 2, 2, 2]
        ],
        skill: SkillType.Leatherworking,
        level: RecipeLevel.Advanced
    },
    disassemble: true
};

items[ObjectType.LeatherCap] = {
    id: 105,
    tX: 41,
    tY: 1,
    name: "A Leather Cap",
    weight: 1,
    durability: 25,
    equip: EquipType.Head,
    defense: new Defense(1,
        new Resistances(
            DamageType.Slashing, 1
        ),
        new Vulnerabilities(
            DamageType.Piercing, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.TannedLeather, 1, 1, 1],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Leatherworking,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.LeatherGorget] = {
    id: 106,
    tX: 42,
    tY: 1,
    name: "A Leather Gorget",
    weight: 1,
    durability: 25,
    equip: EquipType.Neck,
    defense: new Defense(1,
        new Resistances(
            DamageType.Slashing, 1
        ),
        new Vulnerabilities(
            DamageType.Piercing, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.TannedLeather, 1, 1, 1],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Leatherworking,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.LeatherPants] = {
    id: 107,
    tX: 43,
    tY: 1,
    name: "Leather Pants",
    weight: 2,
    durability: 25,
    equip: EquipType.Legs,
    defense: new Defense(2,
        new Resistances(
            DamageType.Slashing, 1
        ),
        new Vulnerabilities(
            DamageType.Piercing, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.TannedLeather, 2, 2, 2],
            [ObjectType.String, 4, 4, 4]
        ],
        skill: SkillType.Leatherworking,
        level: RecipeLevel.Advanced
    },
    disassemble: true
};

items[ObjectType.LeatherGloves] = {
    id: 108,
    tX: 44,
    tY: 1,
    name: "Leather Gloves",
    weight: 1,
    durability: 25,
    equip: EquipType.Hands,
    defense: new Defense(1,
        new Resistances(
            DamageType.Slashing, 1
        ),
        new Vulnerabilities(
            DamageType.Piercing, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.TannedLeather, 2, 2, 2],
            [ObjectType.String, 3, 3, 3]
        ],
        skill: SkillType.Leatherworking,
        level: RecipeLevel.Expert
    },
    disassemble: true
};

items[ObjectType.Furnace] = {
    id: 109,
    tX: 45,
    tY: 1,
    name: "A Furnace",
    weight: 24,
    use: [UseType.Build],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.RockLike, 8, 8, 8]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    durability: 15
};
items[ObjectType.Furnace].onUse[UseType.Build] = ObjectType.FurnaceUnlit;

items[ObjectType.Kiln] = {
    id: 110,
    tX: 46,
    tY: 1,
    name: "A Kiln",
    weight: 16,
    use: [UseType.Build],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Sandstone, 8, 8, 8]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    durability: 10
};
items[ObjectType.Kiln].onUse[UseType.Build] = ObjectType.KilnUnlit;

items[ObjectType.IronTongs] = {
    id: 111,
    tX: 47,
    tY: 1,
    name: "Iron Tongs",
    weight: 1,
    recipe: {
        requires: [
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 1, 1, 1],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true,
    group: [ObjectType.Tongs, ObjectType.Utensil],
    durability: 50
};

items[ObjectType.Talc] = {
    id: 112,
    tX: 48,
    tY: 1,
    name: "Talc",
    weight: 1
};

items[ObjectType.TalcumPowder] = {
    id: 113,
    tX: 49,
    tY: 1,
    name: "Talcum Powder",
    weight: 0.2,
    recipe: {
        requires: [
            [ObjectType.Talc, 1, 1],
            [ObjectType.MortarAndPestle, 1, 0]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.SandCastFlask] = {
    id: 114,
    tX: 50,
    tY: 1,
    name: "A Sand cast Flask",
    weight: 8,
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.Log, 1, 1],
            [ObjectType.GreenSand, 1, 1]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Intermediate
    },
    durability: 30
};

items[ObjectType.Lens] = {
    id: 115,
    tX: 51,
    tY: 1,
    name: "A Lens",
    weight: 1,
    durability: 45,
    use: [UseType.StartFire],
    recipe: {
        requires: [
            [ObjectType.Tongs, 1, 0],
            [ObjectType.RefinedSand, 1, 1],
            [ObjectType.LimestonePowder, 1, 1]
        ],
        skill: SkillType.Glassblowing,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.FurnaceLit
    }
};

items[ObjectType.PlantRoots] = {
    id: 116,
    tX: 52,
    tY: 1,
    name: "Plant Roots",
    weight: 0.3,
    group: [ObjectType.RopeLike, ObjectType.Medicinal, ObjectType.Food],
    use: [UseType.Eat],
    skillUse: SkillType.Botany,
    onUse: []
};
items[ObjectType.PlantRoots].onUse[UseType.Eat] = [1, 2, 1, 0];

items[ObjectType.LockPick] = {
    id: 117,
    tX: 53,
    tY: 1,
    name: "A Lockpick",
    weight: 0.1,
    durability: 5,
    use: [UseType.LockPick],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.NeedleLike, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    }
};

items[ObjectType.BoneNeedle] = {
    id: 118,
    tX: 54,
    tY: 1,
    name: "A Bone Needle",
    weight: 0.1,
    group: [ObjectType.NeedleLike],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.SharpenedBone, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    durability: 10
};

items[ObjectType.Pineapple] = {
    id: 119,
    tX: 55,
    tY: 1,
    name: "A Pineapple",
    weight: 1,
    use: [UseType.Eat],
    onUse: [],
    decayable: [8750, ObjectType.RottingVegetation],
    group: [ObjectType.Food],
    returnOnUse: ObjectType.PineappleSeeds
};
items[ObjectType.Pineapple].onUse[UseType.Eat] = [5, 5, 5, 3];

items[ObjectType.TatteredMap] = {
    id: 120,
    tX: 56,
    tY: 1,
    name: "A Tattered Map",
    weight: 0.5,
    durability: 50,
    use: [UseType.Decode]
};

items[ObjectType.Coal] = {
    id: 121,
    tX: 57,
    tY: 1,
    name: "Coal",
    weight: 1,
    group: [ObjectType.Carbons, ObjectType.FuelLike],
    use: [UseType.StokeFire],
    onUse: []
};
items[ObjectType.Coal].onUse[UseType.StokeFire] = 4;

items[ObjectType.WroughtIron] = {
    id: 122,
    tX: 58,
    tY: 1,
    name: "Wrought Iron",
    weight: 2,
    recipe: {
        requires: [
            [ObjectType.IronOre, 1, 1],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.FurnaceLit
    }
};

items[ObjectType.LimestonePowder] = {
    id: 123,
    tX: 59,
    tY: 1,
    name: "Limestone Powder",
    weight: 0.2,
    recipe: {
        requires: [
            [ObjectType.Limestone, 1, 1],
            [ObjectType.MortarAndPestle, 1, 0]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.IronIngot] = {
    id: 124,
    tX: 60,
    tY: 1,
    name: "An Iron Ingot",
    weight: 2,
    recipe: {
        requires: [
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.CarbonPowder, 1, 1],
            [ObjectType.LimestonePowder, 1, 1],
            [ObjectType.WroughtIron, 1, 1],
            [ObjectType.SandCastFlask, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.FurnaceLit
    }
};

items[ObjectType.Backpack] = {
    id: 125,
    tX: 61,
    tY: 1,
    name: "A Backpack",
    weight: 2,
    isContainer: true,
    maxWeight: 50,
    use: [UseType.OpenContainer],
    equip: EquipType.Back,
    recipe: {
        requires: [
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.TannedLeather, 2, 2, 2],
            [ObjectType.String, 2, 2, 2]
        ],
        skill: SkillType.Leatherworking,
        level: RecipeLevel.Advanced
    }
};

items[ObjectType.RottenMeat] = {
    id: 126,
    tX: 62,
    tY: 1,
    name: "Rotten Meat",
    weight: 0.8,
    group: [ObjectType.Compost],
    use: [UseType.Eat],
    onUse: [],
    decayable: [4750]
};
items[ObjectType.RottenMeat].onUse[UseType.Eat] = [-10, -20, 1, -1];

items[ObjectType.StoneHammer] = {
    id: 127,
    tX: 63,
    tY: 1,
    name: "A Stone Hammer",
    weight: 2,
    durability: 15,
    equip: EquipType.Held,
    attack: 2,
    damageType: DamageType.Blunt,
    use: [UseType.Repair, UseType.Gather],
    group: [ObjectType.HammerLike, ObjectType.Repair],
    recipe: {
        requires: [
            [ObjectType.String, 1, 1, 1],
            [ObjectType.RockLike, 1, 1, 1],
            [ObjectType.PoleLike, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.RawChicken] = {
    id: 128,
    tX: 0,
    tY: 2,
    name: "A Raw Chicken",
    weight: 2,
    use: [UseType.Eat],
    onUse: [],
    decayable: [2250, ObjectType.RottenMeat],
    onBurn: ObjectType.CookedChicken,
    group: [ObjectType.Meat]
};
items[ObjectType.RawChicken].onUse[UseType.Eat] = [-10, -10, 6, -1];

items[ObjectType.CookedChicken] = {
    id: 129,
    tX: 1,
    tY: 2,
    name: "A Cooked Chicken",
    weight: 2,
    use: [UseType.Eat],
    onUse: [],
    decayable: [3250, ObjectType.RottenMeat],
    recipe:
    {
        requires: [
            [ObjectType.RawChicken, 1, 1],
            [ObjectType.Utensil, 1, 0]
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.FireSource
    },
    group: [ObjectType.Meat, ObjectType.Food]
};
items[ObjectType.CookedChicken].onUse[UseType.Eat] = [5, 5, 8, -2];

items[ObjectType.ForgeAndAnvil] = {
    id: 130,
    tX: 2,
    tY: 2,
    name: "Forge and Anvil",
    weight: 20,
    use: [UseType.Build],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.RockLike, 7, 7, 7],
            [ObjectType.Log, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    durability: 15
};
items[ObjectType.ForgeAndAnvil].onUse[UseType.Build] = ObjectType.ForgeAndAnvilUnlit;

items[ObjectType.WoodenChest] = {
    id: 131,
    tX: 3,
    tY: 2,
    name: "A Wooden Chest",
    weight: 10,
    isContainer: true,
    use: [UseType.Build],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.Log, 3, 3]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Advanced
    },
    onBurn: ObjectType.Charcoal,
    durability: 10
};
items[ObjectType.WoodenChest].onUse[UseType.Build] = ObjectType.WoodenChestUnlocked;

items[ObjectType.IronSword] = {
    id: 132,
    tX: 4,
    tY: 2,
    name: "An Iron Sword",
    weight: 4,
    durability: 100,
    use: [UseType.Carve, UseType.Gather],
    group: [ObjectType.SharpenedItem],
    equip: EquipType.Held,
    attack: 6,
    damageType: DamageType.Piercing | DamageType.Slashing,
    recipe: {
        requires: [
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 2, 2, 2],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0],
            [ObjectType.Tongs, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Expert,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.IronBreastPlate] = {
    id: 133,
    tX: 5,
    tY: 2,
    name: "An Iron Breastplate",
    weight: 6,
    durability: 100,
    equip: EquipType.Chest,
    defense: new Defense(4,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Blunt, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities()
    ),
    recipe: {
        requires: [
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 3, 3, 3],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0],
            [ObjectType.Tongs, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Expert,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.IronBoots] = {
    id: 134,
    tX: 6,
    tY: 2,
    name: "Iron Boots",
    weight: 6,
    durability: 100,
    equip: EquipType.Feet,
    defense: new Defense(3,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Blunt, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities()
    ),
    recipe: {
        requires: [
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 3, 3, 3],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0],
            [ObjectType.Tongs, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Expert,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.IronHelmet] = {
    id: 135,
    tX: 7,
    tY: 2,
    name: "An Iron Helmet",
    weight: 4,
    durability: 100,
    equip: EquipType.Head,
    defense: new Defense(3,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Blunt, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities()
    ),
    recipe: {
        requires: [
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 2, 2, 2],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0],
            [ObjectType.Tongs, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Expert,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.IronGorget] = {
    id: 136,
    tX: 8,
    tY: 2,
    name: "An Iron Gorget",
    weight: 3,
    durability: 100,
    equip: EquipType.Neck,
    defense: new Defense(2,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Blunt, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities()
    ),
    recipe: {
        requires: [
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 2, 2, 2],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0],
            [ObjectType.Tongs, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.IronGreaves] = {
    id: 137,
    tX: 9,
    tY: 2,
    name: "Iron Greaves",
    weight: 5,
    durability: 100,
    equip: EquipType.Legs,
    defense: new Defense(4,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Blunt, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities()
    ),
    recipe: {
        requires: [
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 3, 3, 3],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0],
            [ObjectType.Tongs, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Expert,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.IronGauntlets] = {
    id: 138,
    tX: 10,
    tY: 2,
    name: "Iron Gauntlets",
    weight: 4,
    durability: 100,
    equip: EquipType.Hands,
    defense: new Defense(2,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Blunt, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities()
    ),
    recipe: {
        requires: [
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 2, 2, 2],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0],
            [ObjectType.Tongs, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Expert,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.IronShield] = {
    id: 139,
    tX: 11,
    tY: 2,
    name: "An Iron Shield",
    weight: 5,
    durability: 100,
    equip: EquipType.Held,
    defense: new Defense(3,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Blunt, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities()
    ),
    recipe: {
        requires: [
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 3, 3, 3],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0],
            [ObjectType.Tongs, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Expert,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.SandstoneWall] = {
    id: 140,
    tX: 12,
    tY: 2,
    name: "A Sandstone Wall",
    weight: 16,
    use: [UseType.PlaceTile],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Sandstone, 8, 8, 8]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    durability: 15
};
items[ObjectType.SandstoneWall].onUse[UseType.PlaceTile] = TerrainType.SandstoneWall;

items[ObjectType.SandstoneFloor] = {
    id: 141,
    tX: 13,
    tY: 2,
    name: "Sandstone Flooring",
    weight: 10,
    use: [UseType.PlaceTile],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Sandstone, 5, 5, 5]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    durability: 15
};
items[ObjectType.SandstoneFloor].onUse[UseType.PlaceTile] = TerrainType.SandstoneFloor;

items[ObjectType.SpiderSilk] = {
    id: 142,
    tX: 14,
    tY: 2,
    name: "Spider Silk",
    weight: 0.1,
    group: [ObjectType.RopeLike]
};

items[ObjectType.AnimalFat] = {
    id: 143,
    tX: 15,
    tY: 2,
    name: "Animal Fat",
    weight: 0.8,
    use: [UseType.Eat, UseType.StokeFire],
    onUse: [],
    group: [ObjectType.FuelLike],
    decayable: [4750]
};
items[ObjectType.AnimalFat].onUse[UseType.Eat] = [0, -6, 2, -1];
items[ObjectType.AnimalFat].onUse[UseType.StokeFire] = 1;

items[ObjectType.AnimalFatTorch] = {
    id: 144,
    tX: 16,
    tY: 2,
    name: "An Animal Fat Torch",
    weight: 1.5,
    durability: 25,
    equip: EquipType.Held,
    attack: 1,
    damageType: DamageType.Blunt,
    use: [UseType.LightItem],
    group: [ObjectType.TorchLike],
    lit: ObjectType.AnimalFatTorchLit,
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1],
            [ObjectType.AnimalFat, 1, 1],
            [ObjectType.FabricLike, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Advanced
    },
    onBurn: ObjectType.Charcoal
};

items[ObjectType.ClayFlakes] = {
    id: 145,
    tX: 17,
    tY: 2,
    name: "Clay Flakes",
    weight: 0.9,
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.RawClay, 1, 1]
        ],
        skill: SkillType.Claythrowing,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.GreenSand] = {
    id: 146,
    tX: 18,
    tY: 2,
    name: "Green Sand",
    weight: 3,
    recipe: {
        requires: [
            [ObjectType.ClayFlakes, 1, 1],
            [ObjectType.RefinedSand, 2, 2]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.OldInstructionalScroll] = {
    id: 147,
    tX: 19,
    tY: 2,
    name: "An Old Instructional Scroll",
    weight: 0.3,
    use: [UseType.Read]
};

items[ObjectType.SlimeGelatin] = {
    id: 148,
    tX: 20,
    tY: 2,
    name: "Slime Gelatin",
    weight: 0.5,
    use: [UseType.Eat, UseType.Preserve],
    group: [ObjectType.Preserve],
    onUse: [],
    decayable: [4750]
};
items[ObjectType.SlimeGelatin].onUse[UseType.Eat] = [-1, -2, 2, -1];

items[ObjectType.Glue] = {
    id: 149,
    tX: 21,
    tY: 2,
    name: "Glue",
    weight: 0.4,
    use: [UseType.Reinforce],
    recipe: {
        requires: [
            [ObjectType.Water, 1, 0],
            [ObjectType.SlimeGelatin, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.CampfireLit
    },
    decayable: [750],
    group: [ObjectType.Reinforce]
};

items[ObjectType.CookedSpider] = {
    id: 150,
    tX: 22,
    tY: 2,
    name: "A Cooked Spider",
    weight: 0.2,
    use: [UseType.Eat],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.DeadSpider, 1, 1],
            [ObjectType.Utensil, 1, 0]
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.FireSource
    },
    group: [ObjectType.Insect, ObjectType.Food],
    onBurn: ObjectType.CookedSpider,
    decayable: [4750, ObjectType.RottenMeat]
};
items[ObjectType.CookedSpider].onUse[UseType.Eat] = [3, 5, 2, 0];

items[ObjectType.DeadSpider] = {
    id: 151,
    tX: 23,
    tY: 2,
    name: "A Dead Spider",
    weight: 0.3,
    use: [UseType.Eat],
    onUse: [],
    group: [ObjectType.Insect],
    decayable: [4750, ObjectType.RottenMeat]
};
items[ObjectType.DeadSpider].onUse[UseType.Eat] = [-1, -2, 2, -1];

items[ObjectType.IronLockPick] = {
    id: 152,
    tX: 24,
    tY: 2,
    name: "An Iron lockpick",
    weight: 0.1,
    durability: 40,
    use: [UseType.LockPick],
    recipe: {
        requires: [
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 1, 1, 1],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.RottingVegetation] = {
    id: 153,
    tX: 25,
    tY: 2,
    name: "Rotting Vegetation",
    group: [ObjectType.Compost],
    weight: 0.8,
    use: [UseType.Eat],
    onUse: [],
    decayable: [4750]
};
items[ObjectType.RottingVegetation].onUse[UseType.Eat] = [-10, -15, 1, -1];

items[ObjectType.WildOnion] = {
    id: 154,
    tX: 26,
    tY: 2,
    name: "A Wild Onion",
    weight: 0.6,
    use: [UseType.Eat, UseType.Plant],
    skillUse: SkillType.Botany,
    onUse: [],
    decayable: [14000, ObjectType.RottingVegetation],
    group: [ObjectType.Food]
};
items[ObjectType.WildOnion].onUse[UseType.Eat] = [4, 4, 3, 0];
items[ObjectType.WildOnion].onUse[UseType.Plant] = ObjectType.WildOnion;

items[ObjectType.IronHammer] = {
    id: 155,
    tX: 27,
    tY: 2,
    name: "An Iron Hammer",
    weight: 2,
    durability: 65,
    attack: 4,
    damageType: DamageType.Blunt,
    equip: EquipType.Held,
    group: [ObjectType.HammerLike, ObjectType.Repair],
    use: [UseType.Repair, UseType.Gather],
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1],
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 1, 1, 1],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0],
            [ObjectType.Tongs, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.IronSpear] = {
    id: 156,
    tX: 28,
    tY: 2,
    name: "An Iron Spear",
    weight: 2,
    durability: 100,
    equip: EquipType.Held,
    attack: 5,
    damageType: DamageType.Piercing,
    group: [ObjectType.Utensil],
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1],
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 1, 1, 1],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0],
            [ObjectType.Tongs, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true,
    use: [UseType.Gather]
};

items[ObjectType.IronShovel] = {
    id: 157,
    tX: 29,
    tY: 2,
    name: "An Iron Shovel",
    weight: 2,
    durability: 200,
    equip: EquipType.Held,
    attack: 4,
    damageType: DamageType.Slashing,
    use: [UseType.Dig, UseType.Gather, UseType.GatherTreasure],
    recipe: {
        requires: [
            [ObjectType.PoleLike, 2, 2, 2],
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 1, 1, 1],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0],
            [ObjectType.Tongs, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.IronDoubleAxe] = {
    id: 158,
    tX: 30,
    tY: 2,
    name: "An Iron Double Axe",
    weight: 2,
    durability: 200,
    equip: EquipType.Held,
    twoHanded: true,
    attack: 6,
    damageType: DamageType.Slashing,
    group: [ObjectType.SharpenedItem],
    use: [UseType.Carve, UseType.Gather],
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1, 1],
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 2, 2, 2],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0],
            [ObjectType.Tongs, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.IronPickAxe] = {
    id: 159,
    tX: 31,
    tY: 2,
    name: "An Iron Pick Axe",
    weight: 2,
    durability: 200,
    equip: EquipType.Held,
    attack: 6,
    damageType: DamageType.Blunt | DamageType.Piercing,
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1, 1],
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.IronIngot, 1, 1, 1],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0],
            [ObjectType.Tongs, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true,
    use: [UseType.Gather]
};

items[ObjectType.TorchStand] = {
    id: 160,
    tX: 32,
    tY: 2,
    name: "A Torch Stand",
    weight: 5,
    use: [UseType.Build],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.TorchLike, 1, 1, 1],
            [ObjectType.RockLike, 4, 4, 4]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    onBurn: ObjectType.Charcoal,
    durability: 10
};
items[ObjectType.TorchStand].onUse[UseType.Build] = ObjectType.TorchStandUnlit;

items[ObjectType.Coconut] = {
    id: 161,
    tX: 33,
    tY: 2,
    name: "A Coconut",
    weight: 1,
    use: [UseType.Eat],
    onUse: [],
    decayable: [8750, ObjectType.RottingVegetation],
    group: [ObjectType.Food]
};
items[ObjectType.Coconut].onUse[UseType.Eat] = [5, 5, 5, 4];

items[ObjectType.PalmLeaf] = {
    id: 162,
    tX: 34,
    tY: 2,
    name: "A Palm Leaf",
    weight: 0.3,
    group: [ObjectType.RopeLike]
};

items[ObjectType.Offal] = {
    id: 163,
    tX: 35,
    tY: 2,
    name: "Offal",
    group: [ObjectType.Compost, ObjectType.Meat],
    weight: 0.8,
    use: [UseType.Eat],
    onUse: [],
    decayable: [750, ObjectType.RottenMeat]
};
items[ObjectType.Offal].onUse[UseType.Eat] = [-2, -6, 3, -1];

items[ObjectType.Bones] = {
    id: 164,
    tX: 36,
    tY: 2,
    name: "Bones",
    weight: 1.2,
    group: [ObjectType.BoneLike]
};

items[ObjectType.PoleTorchLit] = {
    id: 165,
    tX: 37,
    tY: 2,
    name: "A Lit Pole Torch",
    weight: 0.5,
    durability: 10,
    equip: EquipType.Held,
    attack: 2,
    damageType: DamageType.Fire | DamageType.Blunt,
    use: [UseType.StartFire],
    revert: ObjectType.WoodenPole,
    onEquip: ["Light Source", 1],
    decayable: [250, ObjectType.AshPile],
    onBurn: ObjectType.Charcoal
};

items[ObjectType.Cotton] = {
    id: 166,
    tX: 38,
    tY: 2,
    name: "Cotton",
    weight: 0.2
};

items[ObjectType.CottonSeeds] = {
    id: 167,
    tX: 39,
    tY: 2,
    name: "Cotton Seeds",
    weight: 0.1,
    skillUse: SkillType.Botany,
    use: [UseType.Plant],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Cotton, 1, 1]
        ],
        skill: SkillType.Tailoring,
        level: RecipeLevel.Simple
    }
};
items[ObjectType.CottonSeeds].onUse[UseType.Plant] = ObjectType.Cotton;

items[ObjectType.CottonFabric] = {
    id: 168,
    tX: 40,
    tY: 2,
    name: "Cotton Fabric",
    weight: 0.2,
    group: [ObjectType.FabricLike],
    recipe: {
        requires: [
            [ObjectType.Cotton, 3, 3]
        ],
        skill: SkillType.Tailoring,
        level: RecipeLevel.Intermediate
    }
};

items[ObjectType.BonePole] = {
    id: 169,
    tX: 41,
    tY: 2,
    name: "A Bone Pole",
    weight: 0.5,
    durability: 10,
    equip: EquipType.Held,
    attack: 2,
    damageType: DamageType.Blunt,
    group: [ObjectType.PoleLike, ObjectType.Utensil],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.BoneLike, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Simple
    },
    use: [UseType.Gather]
};

items[ObjectType.Tourniquet] = {
    id: 170,
    tX: 42,
    tY: 2,
    name: "A Tourniquet",
    weight: 0.2,
    use: [UseType.Heal],
    skillUse: SkillType.Anatomy,
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1, 1],
            [ObjectType.String, 2, 2, 2]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};
items[ObjectType.Tourniquet].onUse[UseType.Heal] = [2, 0, 0, 0];

items[ObjectType.WroughtIronPickAxe] = {
    id: 171,
    tX: 43,
    tY: 2,
    name: "A Wrought Iron Pick Axe",
    weight: 2,
    durability: 75,
    equip: EquipType.Held,
    attack: 5,
    damageType: DamageType.Blunt | DamageType.Piercing,
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1, 1],
            [ObjectType.WroughtIron, 1, 1, 1],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true,
    use: [UseType.Gather]
};

items[ObjectType.WroughtIronDoubleAxe] = {
    id: 172,
    tX: 44,
    tY: 2,
    name: "A Wrought Iron Double Axe",
    weight: 2,
    durability: 75,
    equip: EquipType.Held,
    twoHanded: true,
    attack: 5,
    damageType: DamageType.Slashing,
    group: [ObjectType.SharpenedItem],
    use: [UseType.Carve, UseType.Gather],
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1, 1],
            [ObjectType.WroughtIron, 2, 2, 2],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.WroughtIronShovel] = {
    id: 173,
    tX: 45,
    tY: 2,
    name: "A Wrought Iron Shovel",
    weight: 2,
    durability: 75,
    equip: EquipType.Held,
    attack: 3,
    damageType: DamageType.Slashing,
    use: [UseType.Dig, UseType.Gather, UseType.GatherTreasure],
    recipe: {
        requires: [
            [ObjectType.PoleLike, 2, 2, 2],
            [ObjectType.WroughtIron, 1, 1, 1],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.WroughtIronSpear] = {
    id: 174,
    tX: 46,
    tY: 2,
    name: "A Wrought Iron Spear",
    weight: 2,
    durability: 35,
    equip: EquipType.Held,
    attack: 4,
    damageType: DamageType.Piercing,
    group: [ObjectType.Utensil],
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1, 1],
            [ObjectType.WroughtIron, 1, 1, 1],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true,
    use: [UseType.Gather]
};

items[ObjectType.WroughtIronHammer] = {
    id: 175,
    tX: 47,
    tY: 2,
    name: "A Wrought Iron Hammer",
    weight: 2,
    durability: 30,
    equip: EquipType.Held,
    attack: 3,
    damageType: DamageType.Blunt,
    group: [ObjectType.HammerLike, ObjectType.Repair],
    use: [UseType.Repair, UseType.Gather],
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1, 1],
            [ObjectType.WroughtIron, 1, 1, 1],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.WroughtIronLockPick] = {
    id: 176,
    tX: 48,
    tY: 2,
    name: "A Wrought Iron lockpick",
    weight: 0.1,
    durability: 15,
    use: [UseType.LockPick],
    recipe: {
        requires: [
            [ObjectType.WroughtIron, 1, 1, 1],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.WroughtIronShield] = {
    id: 177,
    tX: 49,
    tY: 2,
    name: "A Wrought Iron Shield",
    weight: 5,
    durability: 35,
    equip: EquipType.Held,
    defense: new Defense(2,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities(
            DamageType.Blunt, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.WroughtIron, 3, 3, 3],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.WroughtIronGauntlets] = {
    id: 178,
    tX: 50,
    tY: 2,
    name: "Wrought Iron Gauntlets",
    weight: 4,
    durability: 35,
    equip: EquipType.Hands,
    defense: new Defense(1,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities(
            DamageType.Blunt, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.WroughtIron, 2, 2, 2],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.WroughtIronGreaves] = {
    id: 179,
    tX: 51,
    tY: 2,
    name: "Wrought Iron Greaves",
    weight: 5,
    durability: 35,
    equip: EquipType.Legs,
    defense: new Defense(3,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities(
            DamageType.Blunt, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.WroughtIron, 3, 3, 3],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.WroughtIronGorget] = {
    id: 180,
    tX: 52,
    tY: 2,
    name: "A Wrought Iron Gorget",
    weight: 3,
    durability: 35,
    equip: EquipType.Neck,
    defense: new Defense(1,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities(
            DamageType.Blunt, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.WroughtIron, 2, 2, 2],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.WroughtIronHelmet] = {
    id: 181,
    tX: 53,
    tY: 2,
    name: "A Wrought Iron Helmet",
    weight: 4,
    durability: 35,
    equip: EquipType.Head,
    defense: new Defense(2,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities(
            DamageType.Blunt, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.WroughtIron, 2, 2, 2],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.WroughtIronBoots] = {
    id: 182,
    tX: 54,
    tY: 2,
    name: "Wrought Iron Boots",
    weight: 6,
    durability: 35,
    equip: EquipType.Feet,
    defense: new Defense(2,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities(
            DamageType.Blunt, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.WroughtIron, 3, 3, 3],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.WroughtIronBreastPlate] = {
    id: 183,
    tX: 55,
    tY: 2,
    name: "A Wrought Iron Breastplate",
    weight: 6,
    durability: 35,
    equip: EquipType.Chest,
    defense: new Defense(3,
        new Resistances(
            DamageType.Slashing, 1,
            DamageType.Piercing, 1
        ),
        new Vulnerabilities(
            DamageType.Blunt, 1
        )
    ),
    recipe: {
        requires: [
            [ObjectType.WroughtIron, 3, 3, 3],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.WroughtIronSword] = {
    id: 184,
    tX: 56,
    tY: 2,
    name: "A Wrought Iron Sword",
    weight: 4,
    durability: 35,
    equip: EquipType.Held,
    attack: 6,
    damageType: DamageType.Piercing | DamageType.Slashing,
    group: [ObjectType.SharpenedItem],
    use: [UseType.Carve, UseType.Gather],
    recipe: {
        requires: [
            [ObjectType.WroughtIron, 2, 2, 2],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.WoodenWall] = {
    id: 185,
    tX: 57,
    tY: 2,
    name: "A Wooden Wall",
    weight: 15,
    use: [UseType.PlaceTile],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Log, 3, 3, 3],
            [ObjectType.SharpenedItem, 1, 0]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    durability: 15
};
items[ObjectType.WoodenWall].onUse[UseType.PlaceTile] = TerrainType.WoodenWall;

items[ObjectType.WoodenFloor] = {
    id: 186,
    tX: 58,
    tY: 2,
    name: "Wooden Flooring",
    weight: 10,
    use: [UseType.PlaceTile],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Log, 2, 2],
            [ObjectType.SharpenedItem, 1, 0]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Advanced
    },
    durability: 15
};
items[ObjectType.WoodenFloor].onUse[UseType.PlaceTile] = TerrainType.WoodenFloor;

items[ObjectType.WoodenDoor] = {
    id: 187,
    tX: 59,
    tY: 2,
    name: "A Wooden Door",
    weight: 15,
    use: [UseType.PlaceTile],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Log, 3, 3],
            [ObjectType.SharpenedItem, 1, 0]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Expert
    },
    durability: 15
};
items[ObjectType.WoodenDoor].onUse[UseType.PlaceTile] = TerrainType.WoodenDoor;

items[ObjectType.FishingRod] = {
    id: 188,
    tX: 60,
    tY: 2,
    name: "A Fishing Rod",
    weight: 2,
    durability: 20,
    equip: EquipType.Held,
    attack: 1,
    damageType: DamageType.Slashing,
    ranged:
    {
        range: 5,
        attack: 0
    },
    use: [UseType.Fishing],
    recipe:
    {
        requires: [
            [ObjectType.PoleLike, 1, 1, 1],
            [ObjectType.String, 1, 1, 1],
            [ObjectType.NeedleLike, 1, 1, 1],
            [ObjectType.Insect, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.MessageInABottle] = {
    id: 189,
    tX: 61,
    tY: 2,
    name: "A Message in a Bottle",
    weight: 2,
    use: [UseType.OpenBottle]
};

items[ObjectType.CarbonPowder] = {
    id: 190,
    tX: 62,
    tY: 2,
    name: "Carbon Powder",
    weight: 0.2,
    recipe: {
        requires: [
            [ObjectType.MortarAndPestle, 1, 0],
            [ObjectType.Carbons, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.PileOfCompost] = {
    id: 191,
    tX: 63,
    tY: 2,
    name: "Pile of Compost",
    weight: 2,
    use: [UseType.Garden],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Compost, 2, 2],
            [ObjectType.Soil, 1, 1]
        ],
        skill: SkillType.Botany,
        level: RecipeLevel.Intermediate
    }
};
items[ObjectType.PileOfCompost].onUse[UseType.Garden] = 4;

items[ObjectType.MeltedAmber] = {
    id: 192,
    tX: 0,
    tY: 3,
    name: "Melted Amber",
    weight: 0.4,
    use: [UseType.Reinforce],
    recipe: {
        requires: [
            [ObjectType.Amber, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.FireSource
    },
    decayable: [100, ObjectType.Amber],
    group: [ObjectType.Reinforce]
};

items[ObjectType.Tinder] = {
    id: 193,
    tX: 1,
    tY: 3,
    name: "Tinder",
    weight: 0.2,
    use: [UseType.StokeFire],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.Twigs, 1, 1]
        ],
        skill: SkillType.Camping,
        level: RecipeLevel.Simple
    }
};
items[ObjectType.Tinder].onUse[UseType.StokeFire] = 1;

items[ObjectType.Deadfall] = {
    id: 194,
    tX: 2,
    tY: 3,
    name: "A Deadfall",
    weight: 5,
    use: [UseType.Build],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.PoleLike, 3, 3, 3],
            [ObjectType.LargeRock, 1, 1, 1]
        ],
        skill: SkillType.Trapping,
        level: RecipeLevel.Simple
    },
    disassemble: true,
    durability: 5
};
items[ObjectType.Deadfall].onUse[UseType.Build] = ObjectType.DeadFallSet;

items[ObjectType.Snare] = {
    id: 195,
    tX: 3,
    tY: 3,
    name: "A Snare",
    weight: 2,
    use: [UseType.Build],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.PoleLike, 2, 2, 2],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Trapping,
        level: RecipeLevel.Simple
    },
    disassemble: true,
    durability: 5
};
items[ObjectType.Snare].onUse[UseType.Build] = ObjectType.SnareSet;

items[ObjectType.MedicinalWaterWaterskin] = {
    id: 196,
    tX: 4,
    tY: 3,
    name: "Medicinal Water in Waterskin",
    weight: 2,
    use: [UseType.Cure],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Medicinal, 2, 2],
            [ObjectType.PotableWaterskin, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Intermediate
    },
    durability: 20,
    returnOnUse: ObjectType.Waterskin
};
items[ObjectType.MedicinalWaterWaterskin].onUse[UseType.Cure] = [3, 8, 1, 9];

items[ObjectType.CharcoalBandage] = {
    id: 197,
    tX: 5,
    tY: 3,
    name: "A Charcoal Bandage",
    weight: 0.5,
    use: [UseType.Cure],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Bandage, 1, 1, 1],
            [ObjectType.Charcoal, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Advanced
    },
    disassemble: true
};
items[ObjectType.CharcoalBandage].onUse[UseType.Cure] = [14, 0, 0, 0];

items[ObjectType.WoodenTongs] = {
    id: 198,
    tX: 6,
    tY: 3,
    name: "Wooden Tongs",
    weight: 0.5,
    recipe: {
        requires: [
            [ObjectType.WoodenPole, 1, 1, 1],
            [ObjectType.String, 1, 1, 1],
            [ObjectType.SharpenedItem, 1, 0]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    group: [ObjectType.Tongs, ObjectType.Utensil],
    durability: 10
};

items[ObjectType.WroughtIronTongs] = {
    id: 199,
    tX: 7,
    tY: 3,
    name: "Wrought Iron Tongs",
    weight: 0.5,
    recipe: {
        requires: [
            [ObjectType.WroughtIron, 1, 1, 1],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    group: [ObjectType.Tongs, ObjectType.Utensil],
    durability: 15
};

items[ObjectType.SheetOfGlass] = {
    id: 200,
    tX: 8,
    tY: 3,
    name: "A Sheet of Glass",
    weight: 3,
    recipe: {
        requires: [
            [ObjectType.Tongs, 1, 0],
            [ObjectType.RefinedSand, 3, 3],
            [ObjectType.LimestonePowder, 1, 1]
        ],
        skill: SkillType.Glassblowing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.FurnaceLit
    }
};

items[ObjectType.SolarStill] = {
    id: 201,
    tX: 9,
    tY: 3,
    name: "A Solar Still",
    weight: 5,
    use: [UseType.Build],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.SheetOfGlass, 1, 1, 1],
            [ObjectType.Container, 1, 1, 1]
        ],
        skill: SkillType.Tinkering,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    durability: 10
};
items[ObjectType.SolarStill].onUse[UseType.Build] = ObjectType.SolarStill;

items[ObjectType.StoneWaterStill] = {
    id: 202,
    tX: 10,
    tY: 3,
    name: "A Stone Water Still",
    weight: 9,
    use: [UseType.Build],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.RockLike, 3, 3, 3],
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.String, 1, 1, 1],
            [ObjectType.PoleLike, 1, 1, 1],
            [ObjectType.Container, 1, 1, 1]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    durability: 15
};
items[ObjectType.StoneWaterStill].onUse[UseType.Build] = ObjectType.StoneWaterStillUnlit;

items[ObjectType.Sundial] = {
    id: 203,
    tX: 11,
    tY: 3,
    name: "A Sundial",
    weight: 2,
    use: [UseType.TellTime],
    recipe: {
        requires: [
            [ObjectType.SmoothRock, 1, 1],
            [ObjectType.LargeRock, 1, 1],
            [ObjectType.SharpenedRock, 1, 1]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Intermediate
    },
    durability: 50
};

items[ObjectType.AnimalFatTorchLit] = {
    id: 204,
    tX: 12,
    tY: 3,
    name: "A Lit Animal Fat Torch",
    weight: 1.5,
    durability: 25,
    equip: EquipType.Held,
    attack: 3,
    damageType: DamageType.Fire | DamageType.Blunt,
    use: [UseType.StartFire],
    onEquip: ["Light Source", 3],
    revert: ObjectType.AnimalFatTorch,
    decayable: [3500, ObjectType.AshPile],
    onBurn: ObjectType.Charcoal
};

items[ObjectType.Sinew] = {
    id: 205,
    tX: 13,
    tY: 3,
    name: "Sinew",
    weight: 0.4,
    group: [ObjectType.RopeLike],
    recipe: {
        requires: [
            [ObjectType.Offal, 1, 1],
            [ObjectType.SharpenedItem, 1, 0]
        ],
        skill: SkillType.Fletching,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.ShortBow] = {
    id: 206,
    tX: 14,
    tY: 3,
    name: "A Short Bow",
    weight: 1.2,
    durability: 25,
    use: [UseType.Shoot],
    equip: EquipType.Held,
    twoHanded: true,
    attack: 2,
    damageType: DamageType.Blunt,
    ranged:
    {
        range: 4,
        attack: 3
    },
    recipe: {
        requires: [
            [ObjectType.WoodenPole, 1, 1],
            [ObjectType.Sinew, 1, 1]
        ],
        skill: SkillType.Fletching,
        level: RecipeLevel.Advanced
    }
};

items[ObjectType.LongBow] = {
    id: 207,
    tX: 15,
    tY: 3,
    name: "A Long Bow",
    weight: 1.8,
    durability: 30,
    use: [UseType.Shoot],
    equip: EquipType.Held,
    twoHanded: true,
    attack: 2,
    damageType: DamageType.Blunt,
    ranged:
    {
        range: 8,
        attack: 5
    },
    recipe: {
        requires: [
            [ObjectType.WoodenPole, 1, 1],
            [ObjectType.Sinew, 2, 2],
            [ObjectType.Glue, 1, 1]
        ],
        skill: SkillType.Fletching,
        level: RecipeLevel.Advanced
    }
};

items[ObjectType.CompositeBow] = {
    id: 208,
    tX: 16,
    tY: 3,
    name: "A Composite Bow",
    weight: 2.2,
    durability: 65,
    use: [UseType.Shoot],
    equip: EquipType.Held,
    twoHanded: true,
    attack: 3,
    damageType: DamageType.Blunt,
    ranged:
    {
        range: 5,
        attack: 7
    },
    recipe: {
        requires: [
            [ObjectType.WoodenPole, 2, 2],
            [ObjectType.Sinew, 2, 2],
            [ObjectType.Glue, 1, 1],
            [ObjectType.Water, 1, 0]
        ],
        skill: SkillType.Fletching,
        level: RecipeLevel.Expert,
        requiredEnv: ObjectType.CampfireLit
    }
};

items[ObjectType.PurifiedFreshWaterWaterskin] = {
    id: 209,
    tX: 17,
    tY: 3,
    name: "Purified Fresh Water in Waterskin",
    weight: 2,
    use: [UseType.Drink, UseType.Pour],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.UnpurifiedFreshWaterWaterskin, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.CampfireLit
    },
    durability: 20,
    group: [ObjectType.Water, ObjectType.PotableWaterskin],
    returnOnUse: ObjectType.Waterskin
};
items[ObjectType.PurifiedFreshWaterWaterskin].onUse[UseType.Drink] = [2, 15, 1, 10];

items[ObjectType.UnpurifiedFreshWaterWaterskin] = {
    id: 210,
    tX: 18,
    tY: 3,
    name: "Unpurified Fresh Water in Waterskin",
    weight: 2,
    use: [UseType.Drink, UseType.Pour],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.PileOfSnow, 1, 1],
            [ObjectType.Waterskin, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple
    },
    durability: 20,
    group: [ObjectType.Water],
    returnOnUse: ObjectType.Waterskin
};
items[ObjectType.UnpurifiedFreshWaterWaterskin].onUse[UseType.Drink] = [-4, 8, 1, 8];

items[ObjectType.GlassBottle] = {
    id: 211,
    tX: 19,
    tY: 3,
    name: "A Glass Bottle",
    weight: 0.8,
    use: [UseType.FillWater],
    recipe: {
        requires: [
            [ObjectType.ClayBlowPipe, 1, 0],
            [ObjectType.RefinedSand, 2, 2],
            [ObjectType.LimestonePowder, 1, 1],
            [ObjectType.Cork, 1, 1]
        ],
        skill: SkillType.Glassblowing,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.FurnaceLit
    },
    durability: 15,
    group: [ObjectType.Container]
};

items[ObjectType.Cork] = {
    id: 212,
    tX: 20,
    tY: 3,
    name: "A Cork",
    weight: 0.2,
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.TreeBark, 1, 1]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.SeaWaterGlassBottle] = {
    id: 213,
    tX: 21,
    tY: 3,
    name: "Sea Water in Glass Bottle",
    weight: 2,
    use: [UseType.Drink, UseType.Pour],
    onUse: [],
    durability: 15,
    group: [ObjectType.Water],
    returnOnUse: ObjectType.GlassBottle
};
items[ObjectType.SeaWaterGlassBottle].onUse[UseType.Drink] = [0, -15, 1, -2];

items[ObjectType.DesalinatedWaterGlassBottle] = {
    id: 214,
    tX: 22,
    tY: 3,
    name: "Desalinated Water in Glass Bottle",
    weight: 2,
    use: [UseType.Drink, UseType.Pour],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Flask, 1, 0],
            [ObjectType.SeaWaterGlassBottle, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.CampfireLit
    },
    durability: 15,
    group: [ObjectType.Water, ObjectType.PotableBottle],
    returnOnUse: ObjectType.GlassBottle
};
items[ObjectType.DesalinatedWaterGlassBottle].onUse[UseType.Drink] = [2, 15, 1, 10];

items[ObjectType.MedicinalWaterGlassBottle] = {
    id: 215,
    tX: 23,
    tY: 3,
    name: "Medicinal Water in Glass Bottle",
    weight: 2,
    use: [UseType.Cure],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Medicinal, 2, 2],
            [ObjectType.PotableBottle, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Intermediate
    },
    durability: 15,
    returnOnUse: ObjectType.GlassBottle
};
items[ObjectType.MedicinalWaterGlassBottle].onUse[UseType.Cure] = [3, 8, 1, 9];

items[ObjectType.PurifiedFreshWaterGlassBottle] = {
    id: 216,
    tX: 24,
    tY: 3,
    name: "Purified Fresh Water in Glass Bottle",
    weight: 2,
    use: [UseType.Drink, UseType.Pour],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.UnpurifiedFreshWaterGlassBottle, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.CampfireLit
    },
    durability: 15,
    group: [ObjectType.Water, ObjectType.PotableBottle],
    returnOnUse: ObjectType.GlassBottle
};
items[ObjectType.PurifiedFreshWaterGlassBottle].onUse[UseType.Drink] = [2, 15, 1, 10];

items[ObjectType.UnpurifiedFreshWaterGlassBottle] = {
    id: 217,
    tX: 25,
    tY: 3,
    name: "Unpurified Fresh Water in Glass Bottle",
    weight: 2,
    use: [UseType.Drink, UseType.Pour],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.PileOfSnow, 1, 1],
            [ObjectType.GlassBottle, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple
    },
    durability: 15,
    group: [ObjectType.Water],
    returnOnUse: ObjectType.GlassBottle
};
items[ObjectType.UnpurifiedFreshWaterGlassBottle].onUse[UseType.Drink] = [-4, 8, 1, 8];

items[ObjectType.WroughtIronArrow] = {
    id: 218,
    tX: 26,
    tY: 3,
    name: "A Wrought Iron Arrow",
    weight: 0.9,
    group: [ObjectType.Arrow],
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1, 1],
            [ObjectType.Feather, 1, 1, 1],
            [ObjectType.WroughtIronArrowhead, 1, 1, 1],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Fletching,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    attack: 3,
    damageType: DamageType.Piercing,
    durability: 20
};

items[ObjectType.IronArrow] = {
    id: 219,
    tX: 27,
    tY: 3,
    name: "An Iron Arrow",
    weight: 1,
    group: [ObjectType.Arrow],
    recipe: {
        requires: [
            [ObjectType.PoleLike, 1, 1, 1],
            [ObjectType.Feather, 1, 1, 1],
            [ObjectType.IronArrowhead, 1, 1, 1],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Fletching,
        level: RecipeLevel.Expert
    },
    disassemble: true,
    attack: 4,
    damageType: DamageType.Piercing,
    durability: 50
};

items[ObjectType.StoneBullet] = {
    id: 220,
    tX: 28,
    tY: 3,
    name: "A Stone Bullet",
    weight: 0.2,
    group: [ObjectType.Bullet],
    recipe: {
        requires: [
            [ObjectType.SharpenedItem, 1, 0],
            [ObjectType.SmoothRock, 1, 1]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Intermediate
    },
    attack: 1,
    damageType: DamageType.Blunt,
    durability: 10
};

items[ObjectType.WroughtIronBullet] = {
    id: 221,
    tX: 29,
    tY: 3,
    name: "A Wrought Iron Bullet",
    weight: 0.3,
    group: [ObjectType.Bullet],
    recipe: {
        requires: [
            [ObjectType.WroughtIron, 1, 1],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    attack: 2,
    damageType: DamageType.Blunt,
    durability: 15
};

items[ObjectType.IronBullet] = {
    id: 222,
    tX: 30,
    tY: 3,
    name: "An Iron Bullet",
    weight: 0.4,
    group: [ObjectType.Bullet],
    recipe: {
        requires: [
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.WroughtIron, 1, 1],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    attack: 3,
    damageType: DamageType.Blunt,
    durability: 50
};

items[ObjectType.LeatherQuiver] = {
    id: 223,
    tX: 31,
    tY: 3,
    name: "A Leather Quiver",
    weight: 1.8,
    isContainer: true,
    maxWeight: 25,
    use: [UseType.OpenContainer],
    equip: EquipType.Back,
    recipe: {
        requires: [
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.TannedLeather, 2, 2, 2],
            [ObjectType.String, 2, 2, 2]
        ],
        skill: SkillType.Leatherworking,
        level: RecipeLevel.Intermediate
    }
};

items[ObjectType.Ectoplasm] = {
    id: 224,
    tX: 32,
    tY: 3,
    name: "Ectoplasm",
    weight: 0,
    decayable: [25]
};

items[ObjectType.MagicalEssence] = {
    id: 225,
    tX: 33,
    tY: 3,
    name: "Magical Essence",
    weight: 0.3,
    use: [UseType.Transmogrify],
    decayable: [100],
    recipe: {
        requires: [
            [ObjectType.AshPile, 1, 1],
            [ObjectType.Offal, 1, 1],
            [ObjectType.Ectoplasm, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Expert
    },
    group: [ObjectType.Transmogrify]
};

items[ObjectType.WoodenFence] = {
    id: 226,
    tX: 34,
    tY: 3,
    name: "A Wooden Fence",
    weight: 12.5,
    use: [UseType.Build],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Log, 3, 3],
            [ObjectType.SharpenedItem, 1, 0]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Intermediate
    },
    durability: 10
};
items[ObjectType.WoodenFence].onUse[UseType.Build] = ObjectType.WoodenFence;

items[ObjectType.MonsterIdol] = {
    id: 227,
    tX: 35,
    tY: 3,
    name: "A Monster Idol",
    weight: 3,
    use: [UseType.Build],
    onUse: []
};
items[ObjectType.MonsterIdol].onUse[UseType.Build] = ObjectType.MonsterIdol;

items[ObjectType.CordedSling] = {
    id: 228,
    tX: 36,
    tY: 3,
    name: "A Corded sling",
    weight: 0.5,
    durability: 20,
    use: [UseType.Sling],
    equip: EquipType.Held,
    twoHanded: true,
    attack: 1,
    damageType: DamageType.Blunt,
    ranged:
    {
        range: 4,
        attack: 1
    },
    recipe: {
        requires: [
            [ObjectType.String, 4, 4, 4]
        ],
        skill: SkillType.Fletching,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.LeatherSling] = {
    id: 229,
    tX: 37,
    tY: 3,
    name: "A Leather sling",
    weight: 0.9,
    durability: 40,
    use: [UseType.Sling],
    equip: EquipType.Held,
    twoHanded: true,
    attack: 2,
    damageType: DamageType.Blunt,
    ranged:
    {
        range: 5,
        attack: 2
    },
    recipe: {
        requires: [
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.TannedLeather, 1, 1, 1],
            [ObjectType.String, 4, 4, 4]
        ],
        skill: SkillType.Fletching,
        level: RecipeLevel.Advanced
    },
    disassemble: true
};

items[ObjectType.WroughtIronArrowhead] = {
    id: 230,
    tX: 38,
    tY: 3,
    name: "A Wrought Iron Arrowhead",
    weight: 0.4,
    group: [ObjectType.SharpenedItem],
    use: [UseType.Carve],
    recipe: {
        requires: [
            [ObjectType.WroughtIron, 1, 1],
            [ObjectType.HammerLike, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.IronArrowhead] = {
    id: 231,
    tX: 39,
    tY: 3,
    name: "An Iron Arrowhead",
    weight: 0.5,
    group: [ObjectType.SharpenedItem],
    use: [UseType.Carve],
    recipe: {
        requires: [
            [ObjectType.TalcumPowder, 1, 1],
            [ObjectType.WroughtIron, 1, 1, 1],
            [ObjectType.HammerLike, 1, 0],
            [ObjectType.SandCastFlask, 1, 0]
        ],
        skill: SkillType.Blacksmithing,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.ForgeAndAnvilLit
    },
    disassemble: true
};

items[ObjectType.Hammock] = {
    id: 232,
    tX: 40,
    tY: 3,
    name: "A Hammock",
    use: [UseType.Rest, UseType.Sleep],
    durability: 25,
    weight: 2.2,
    recipe: {
        requires: [
            [ObjectType.Rope, 3, 3, 3],
            [ObjectType.String, 2, 2, 2]
        ],
        skill: SkillType.Camping,
        level: RecipeLevel.Advanced
    },
    disassemble: true
};

items[ObjectType.CottonBedroll] = {
    id: 233,
    tX: 41,
    tY: 3,
    name: "A Cotton Bedroll",
    use: [UseType.Rest, UseType.Sleep],
    durability: 75,
    weight: 1,
    recipe: {
        requires: [
            [ObjectType.CottonFabric, 1, 1, 1],
            [ObjectType.Cotton, 4, 4, 4],
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Tailoring,
        level: RecipeLevel.Advanced
    },
    disassemble: true
};

items[ObjectType.FeatherBedroll] = {
    id: 234,
    tX: 42,
    tY: 3,
    name: "A Feather Bedroll",
    use: [UseType.Rest, UseType.Sleep],
    durability: 50,
    weight: 1.2,
    recipe: {
        requires: [
            [ObjectType.WovenFabric, 1, 1, 1],
            [ObjectType.Feather, 8, 8, 8],
            [ObjectType.NeedleLike, 1, 0],
            [ObjectType.String, 1, 1, 1]
        ],
        skill: SkillType.Tailoring,
        level: RecipeLevel.Intermediate
    },
    disassemble: true
};

items[ObjectType.RawTaintedMeat] = {
    id: 235,
    tX: 43,
    tY: 3,
    name: "Raw Tainted Meat",
    weight: 0.9,
    use: [UseType.Eat],
    onUse: [],
    decayable: [750, ObjectType.RottenMeat],
    onBurn: ObjectType.CookedTaintedMeat,
    group: [ObjectType.Meat]
};
items[ObjectType.RawTaintedMeat].onUse[UseType.Eat] = [-8, 1, 7, -3];

items[ObjectType.CookedTaintedMeat] = {
    id: 236,
    tX: 44,
    tY: 3,
    name: "Cooked Tainted Meat",
    weight: 0.9,
    use: [UseType.Eat],
    onUse: [],
    decayable: [1750, ObjectType.RottenMeat],
    recipe:
    {
        requires: [
            [ObjectType.RawTaintedMeat, 1, 1],
            [ObjectType.Utensil, 1, 0]
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.FireSource
    },
    group: [ObjectType.Meat]
};
items[ObjectType.CookedTaintedMeat].onUse[UseType.Eat] = [-4, 2, 8, -2];

items[ObjectType.StoneKnife] = {
    id: 237,
    tX: 45,
    tY: 3,
    name: "A Stone Knife",
    weight: 0.7,
    durability: 20,
    equip: EquipType.Held,
    attack: 1,
    damageType: DamageType.Slashing,
    group: [ObjectType.SharpenedItem],
    use: [UseType.Carve, UseType.Gather],
    recipe: {
        requires: [
            [ObjectType.SharpenedRock, 2, 2]
        ],
        skill: SkillType.Stonecrafting,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.RawBlindfish] = {
    id: 238,
    tX: 46,
    tY: 3,
    name: "A Raw Blindfish",
    weight: 0.8,
    use: [UseType.Eat],
    onUse: [],
    decayable: [2500, ObjectType.RottenMeat],
    onBurn: ObjectType.CookedBlindfish,
    group: [ObjectType.Meat]
};
items[ObjectType.RawBlindfish].onUse[UseType.Eat] = [0, 2, 4, -1];

items[ObjectType.CookedBlindfish] = {
    id: 239,
    tX: 47,
    tY: 3,
    name: "A Cooked Blindfish",
    weight: 0.7,
    use: [UseType.Eat],
    onUse: [],
    decayable: [4500, ObjectType.RottenMeat],
    recipe:
    {
        requires: [
            [ObjectType.RawBlindfish, 1, 1],
            [ObjectType.Utensil, 1, 0]
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.FireSource
    },
    group: [ObjectType.Meat, ObjectType.Food]
};
items[ObjectType.CookedBlindfish].onUse[UseType.Eat] = [1, 5, 5, -1];

items[ObjectType.Pemmican] = {
    id: 240,
    tX: 48,
    tY: 3,
    name: "Pemmican",
    weight: 0.3,
    recipe: {
        requires: [
            [ObjectType.Meat, 2, 2],
            [ObjectType.Utensil, 1, 0]
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.FireSource
    }
};

items[ObjectType.PreparedPemmican] = {
    id: 241,
    tX: 49,
    tY: 3,
    name: "Prepared Pemmican",
    weight: 0.6,
    use: [UseType.Eat],
    onUse: [],
    decayable: [5250, ObjectType.RottenMeat],
    recipe:
    {
        requires: [
            [ObjectType.Pemmican, 1, 1],
            [ObjectType.AnimalFat, 1, 1],
            [ObjectType.Utensil, 1, 0]
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Advanced,
        requiredEnv: ObjectType.FireSource
    },
    group: [ObjectType.Food]
};
items[ObjectType.PreparedPemmican].onUse[UseType.Eat] = [1, 6, 6, -2];

items[ObjectType.Sail] = {
    id: 242,
    tX: 50,
    tY: 3,
    name: "A Sail",
    weight: 0.8,
    recipe: {
        requires: [
            [ObjectType.FabricLike, 3, 3, 3],
            [ObjectType.String, 3, 3, 3],
            [ObjectType.NeedleLike, 1, 0]
        ],
        skill: SkillType.Tailoring,
        level: RecipeLevel.Advanced
    },
    disassemble: true
};

items[ObjectType.Sailboat] = {
    id: 243,
    tX: 51,
    tY: 3,
    name: "A Sailboat",
    weight: 18,
    use: [UseType.SailHome],
    recipe: {
        requires: [
            [ObjectType.Sail, 1, 1, 1],
            [ObjectType.BoatPaddle, 1, 1, 1],
            [ObjectType.Rope, 2, 2, 2],
            [ObjectType.Log, 3, 3, 3],
            [ObjectType.SharpenedItem, 1, 0]
        ],
        skill: SkillType.Woodworking,
        level: RecipeLevel.Expert
    },
    disassemble: true,
    onBurn: ObjectType.Charcoal
};

items[ObjectType.Egg] = {
    id: 244,
    tX: 52,
    tY: 3,
    name: "An Egg",
    weight: 0.1,
    use: [UseType.Eat],
    onUse: [],
    decayable: [9250],
    group: [ObjectType.Food]
};
items[ObjectType.Egg].onUse[UseType.Eat] = [-1, 6, 3, 1];

items[ObjectType.BoiledEgg] = {
    id: 245,
    tX: 53,
    tY: 3,
    name: "A Boiled Egg",
    weight: 0.1,
    use: [UseType.Eat],
    onUse: [],
    decayable: [5250],
    recipe:
    {
        requires: [
            [ObjectType.Egg, 1, 1],
            [ObjectType.Utensil, 1, 0],
            [ObjectType.Water, 1, 0]
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.FireSource
    },
    group: [ObjectType.Food]
};
items[ObjectType.BoiledEgg].onUse[UseType.Eat] = [2, 6, 3, 0];

items[ObjectType.GrassBlades] = {
    id: 246,
    tX: 54,
    tY: 3,
    name: "Grass Blades",
    weight: 0.1,
    group: [ObjectType.Compost, ObjectType.RopeLike],
    use: [UseType.StokeFire]
};

items[ObjectType.Niter] = {
    id: 247,
    tX: 55,
    tY: 3,
    name: "Nitre",
    weight: 0.4
};

items[ObjectType.Saltpeter] = {
    id: 248,
    tX: 56,
    tY: 3,
    name: "Saltpeter",
    use: [UseType.Preserve],
    group: [ObjectType.Preserve],
    weight: 0.3,
    recipe: {
        requires: [
            [ObjectType.Niter, 1, 1],
            [ObjectType.MortarAndPestle, 1, 0]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple
    }
};

items[ObjectType.BlackPowder] = {
    id: 249,
    tX: 57,
    tY: 3,
    name: "Black Powder",
    weight: 0.3,
    recipe: {
        requires: [
            [ObjectType.Saltpeter, 1, 1],
            [ObjectType.CarbonPowder, 1, 1],
            [ObjectType.MortarAndPestle, 1, 0]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Advanced
    }
};

items[ObjectType.FlintlockPistol] = {
    id: 250,
    tX: 58,
    tY: 3,
    name: "Flint Lock Pistol",
    weight: 0.9,
    durability: 40,
    use: [UseType.Fire],
    equip: EquipType.Held,
    attack: 3,
    damageType: DamageType.Blunt,
    ranged:
    {
        range: 8,
        attack:
            7
    }
};

items[ObjectType.Giblets] = {
    id: 251,
    tX: 59,
    tY: 3,
    name: "Giblets",
    group: [ObjectType.Compost, ObjectType.Meat],
    weight: 0.6,
    use: [UseType.Eat],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Offal, 1, 1],
            [ObjectType.Utensil, 1, 0]
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.FireSource
    },
    decayable: [1000, ObjectType.RottenMeat]
};
items[ObjectType.Giblets].onUse[UseType.Eat] = [0, -1, 4, -1];

items[ObjectType.ExplosiveTrap] = {
    id: 252,
    tX: 60,
    tY: 3,
    name: "An Explosive Trap",
    weight: 2,
    use: [UseType.Build],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Leaves, 4, 4, 4],
            [ObjectType.IronIngot, 1, 1, 1],
            [ObjectType.RockLike, 1, 1, 1],
            [ObjectType.BlackPowder, 1, 1, 1]
        ],
        skill: SkillType.Trapping,
        level: RecipeLevel.Expert
    },
    disassemble: true,
    durability: 5
};
items[ObjectType.Giblets].onUse[UseType.Build] = ObjectType.ExplosiveTrapSet;

items[ObjectType.SkeletalMageWand] = {
    id: 253,
    tX: 61,
    tY: 3,
    name: "A Skeletal Mage Wand",
    weight: 1,
    equip: EquipType.Held,
    attack: 3,
    damageType: DamageType.Blunt,
    use: [UseType.Teleport],
    durability: 5
};

items[ObjectType.RawClayJug] = {
    id: 254,
    tX: 62,
    tY: 3,
    name: "A Raw Clay Jug",
    weight: 1,
    recipe: {
        requires: [
            [ObjectType.RawClay, 1, 1, 1]
        ],
        skill: SkillType.Claythrowing,
        level: RecipeLevel.Advanced
    },
    disassemble: true
};

items[ObjectType.ClayJug] = {
    id: 255,
    tX: 63,
    tY: 3,
    name: "A Clay Jug",
    use: [UseType.FillWater],
    weight: 0.9,
    recipe: {
        requires: [
            [ObjectType.RawClayJug, 1, 1],
            [ObjectType.Cork, 1, 1]
        ],
        skill: SkillType.Claythrowing,
        level: RecipeLevel.Expert,
        requiredEnv: ObjectType.KilnLit
    },
    durability: 10,
    group: [ObjectType.Container]
};

items[ObjectType.SeaWaterClayJug] = {
    id: 256,
    tX: 0,
    tY: 4,
    name: "Sea Water in Clay Jug",
    weight: 2,
    use: [UseType.Drink, UseType.Pour],
    onUse: [],
    durability: 10,
    group: [ObjectType.Water],
    returnOnUse: ObjectType.ClayJug
};
items[ObjectType.SeaWaterClayJug].onUse[UseType.Drink] = [0, -15, 1, -2];

items[ObjectType.DesalinatedWaterClayJug] = {
    id: 257,
    tX: 1,
    tY: 4,
    name: "Desalinated Water in Clay Jug",
    weight: 2,
    use: [UseType.Drink, UseType.Pour],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Flask, 1, 0],
            [ObjectType.SeaWaterClayJug, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.CampfireLit
    },
    durability: 10,
    group: [ObjectType.Water, ObjectType.PotableBottle],
    returnOnUse: ObjectType.ClayJug
};
items[ObjectType.DesalinatedWaterClayJug].onUse[UseType.Drink] = [2, 15, 1, 10];

items[ObjectType.MedicinalWaterClayJug] = {
    id: 258,
    tX: 2,
    tY: 4,
    name: "Medicinal Water in Clay Jug",
    weight: 2,
    use: [UseType.Cure],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.Medicinal, 2, 2],
            [ObjectType.PotableBottle, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Intermediate
    },
    durability: 10,
    returnOnUse: ObjectType.ClayJug
};
items[ObjectType.MedicinalWaterClayJug].onUse[UseType.Cure] = [3, 8, 1, 9];

items[ObjectType.PurifiedFreshWaterClayJug] = {
    id: 259,
    tX: 3,
    tY: 4,
    name: "Purified Fresh Water in Clay Jug",
    weight: 2,
    use: [UseType.Drink, UseType.Pour],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.UnpurifiedFreshWaterClayJug, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple,
        requiredEnv: ObjectType.CampfireLit
    },
    durability: 10,
    group: [ObjectType.Water, ObjectType.PotableBottle],
    returnOnUse: ObjectType.ClayJug
};
items[ObjectType.PurifiedFreshWaterClayJug].onUse[UseType.Drink] = [2, 15, 1, 10];

items[ObjectType.UnpurifiedFreshWaterClayJug] = {
    id: 260,
    tX: 4,
    tY: 4,
    name: "Unpurified Fresh Water in Clay Jug",
    weight: 2,
    use: [UseType.Drink, UseType.Pour],
    onUse: [],
    recipe: {
        requires: [
            [ObjectType.PileOfSnow, 1, 1],
            [ObjectType.ClayJug, 1, 1]
        ],
        skill: SkillType.Chemistry,
        level: RecipeLevel.Simple
    },
    durability: 10,
    group: [ObjectType.Water],
    returnOnUse: ObjectType.ClayJug
};
items[ObjectType.UnpurifiedFreshWaterClayJug].onUse[UseType.Drink] = [-4, 8, 1, 8];

items[ObjectType.RawClayBrick] = {
    id: 261,
    tX: 5,
    tY: 4,
    name: "A Raw Clay Brick",
    weight: 2,
    recipe: {
        requires: [
            [ObjectType.RawClay, 1, 1, 1]
        ],
        skill: SkillType.Claythrowing,
        level: RecipeLevel.Simple
    },
    disassemble: true
};

items[ObjectType.ClayBrick] = {
    id: 262,
    tX: 6,
    tY: 4,
    name: "A Clay Brick",
    weight: 1.9,
    recipe: {
        requires: [
            [ObjectType.RawClayBrick, 1, 1]
        ],
        skill: SkillType.Claythrowing,
        level: RecipeLevel.Intermediate,
        requiredEnv: ObjectType.KilnLit
    }
};

items[ObjectType.ClayBrickWall] = {
    id: 263,
    tX: 7,
    tY: 4,
    name: "A Clay Brick Wall",
    use: [UseType.PlaceTile],
    onUse: [],
    weight: 16,
    recipe:
    {
        requires: [
            [ObjectType.ClayBrick, 8, 8, 8]
        ],
        skill: SkillType.Claythrowing,
        level: RecipeLevel.Advanced
    },
    disassemble: true,
    durability: 15
};
items[ObjectType.ClayBrickWall].onUse[UseType.PlaceTile] = TerrainType.ClayBrickWall;

items[ObjectType.ClayBrickFloor] = {
    id: 264,
    tX: 8,
    tY: 4,
    name: "Clay Brick Flooring",
    use: [UseType.PlaceTile],
    onUse: [],
    weight: 16,
    recipe:
    {
        requires: [
            [ObjectType.ClayBrick, 8, 8, 8]
        ],
        skill: SkillType.Claythrowing,
        level: RecipeLevel.Intermediate
    },
    disassemble: true,
    durability: 15
};
items[ObjectType.ClayBrickFloor].onUse[UseType.PlaceTile] = TerrainType.ClayBrickFloor;

items[ObjectType.PineappleSeeds] = {
    id: 265,
    tX: 9,
    tY: 4,
    name: "Pineapple Seeds",
    weight: 0.1,
    use: [UseType.Plant],
    skillUse: SkillType.Botany,
    onUse: []
};
items[ObjectType.PineappleSeeds].onUse[UseType.Plant] = ObjectType.PineapplePlant;

items[ObjectType.BerrySeeds] = {
    id: 266,
    tX: 10,
    tY: 4,
    name: "Berry Seeds",
    weight: 0.1,
    use: [UseType.Plant],
    skillUse: SkillType.Botany,
    onUse: []
};
items[ObjectType.BerrySeeds].onUse[UseType.Plant] = ObjectType.BerryBush;

items[ObjectType.CactiSeeds] = {
    id: 267,
    tX: 11,
    tY: 4,
    name: "Cacti Seeds",
    weight: 0.1,
    use: [UseType.Plant],
    skillUse: SkillType.Botany,
    onUse: []
};
items[ObjectType.CactiSeeds].onUse[UseType.Plant] = ObjectType.Cactus;

items[ObjectType.TreeVineSeeds] = {
    id: 268,
    tX: 12,
    tY: 4,
    name: "Tree Vine Seeds",
    weight: 0.1,
    use: [UseType.Plant],
    skillUse: SkillType.Botany,
    onUse: []
};
items[ObjectType.TreeVineSeeds].onUse[UseType.Plant] = ObjectType.Vines;

groups[ObjectType.SharpenedItem] = {
    name: "Sharpened"
};

groups[ObjectType.PoleLike] = {
    name: "Pole-like"
};

groups[ObjectType.RockLike] = {
    name: "Rock-like"
};

groups[ObjectType.FuelLike] = {
    name: "Fuel-like"
};

groups[ObjectType.NeedleLike] = {
    name: "Needle-like"
};

groups[ObjectType.HammerLike] = {
    name: "Hammer"
};

groups[ObjectType.TorchLike] = {
    name: "Light-source"
};

groups[ObjectType.BoneLike] = {
    name: "Bone"
};

groups[ObjectType.FabricLike] = {
    name: "Fabric"
};

groups[ObjectType.RopeLike] = {
    name: "Rope-like"
};

groups[ObjectType.Insect] = {
    name: "Insect"
};

groups[ObjectType.Carbons] = {
    name: "Carbon"
};

groups[ObjectType.Compost] = {
    name: "Compost"
};

groups[ObjectType.Medicinal] = {
    name: "Medicinal"
};

groups[ObjectType.Tongs] = {
    name: "Tongs"
};

groups[ObjectType.Water] = {
    name: "Water"
};

groups[ObjectType.PotableWaterskin] = {
    name: "Potable Water in Waterskin"
};

groups[ObjectType.PotableBottle] = {
    name: "Potable Water in Glass Bottle"
};

groups[ObjectType.Container] = {
    name: "Container"
};

groups[ObjectType.Arrow] = {
    name: "Arrow"
};

groups[ObjectType.Bullet] = {
    name: "Bullet"
};

groups[ObjectType.SharpenedRock] = {
    name: "Sharpened Rock"
};

groups[ObjectType.Utensil] = {
    name: "Utensil"
};

groups[ObjectType.Meat] = {
    name: "Meat"
};

groups[ObjectType.Treasure] = {
    name: "Treasure"
};

groups[ObjectType.Repair] = {
    name: "Repair"
};

groups[ObjectType.Transmogrify] = {
    name: "Transmogrify"
};

groups[ObjectType.Reinforce] = {
    name: "Reinforce"
};

groups[ObjectType.Preserve] = {
    name: "Preserve"
};

groups[ObjectType.Food] = {
    name: "Food"
};

useDescriptions[UseType.Rest] = {
    name: "Rest",
    description: "Used to rest for a period of time to regain health and stamina. Duration is based on Camping skill and will automatically stop when reaching full stamina."
};

useDescriptions[UseType.Sleep] = {
    name: "Sleep",
    description: "Used to sleep for a period of time to regain health and stamina. Duration is based on Camping skill and time of day. A bonus to to all effects (including length) will be granted if facing a fire or lit object. Hunger and dehydration increases slower while sleeping."
};

useDescriptions[UseType.Eat] = {
    name: "Eat",
    description: "Consumed on use. May provide benefits to hunger, thirst, health and stamina however, may reduce them as well."
};

useDescriptions[UseType.Drink] = {
    name: "Drink",
    description: "Consumed on use. Will reduce your thirst however, will provide negative effects when drinking sea/unpurified water."
};

useDescriptions[UseType.Carve] = {
    name: "Carve",
    description: "Used to carve creature corpses or to remove objects attached to the ground."
};

useDescriptions[UseType.Dig] = {
    name: "Dig",
    description: "Used to dig up resources and items from the ground."
};

useDescriptions[UseType.Fishing] = {
    name: "Cast",
    description: "Find a fish in a body of water and attempt to cast your line or net to catch it."
};

useDescriptions[UseType.Shoot] = {
    name: "Shoot",
    description: "You can shoot arrows with this item."
};

useDescriptions[UseType.PlaceTile] = {
    name: "Set Down",
    description: "Using this item will place it over top of what ever tile is present in your facing direction. This is different than just dropping the item. It can also be used to extinguish fires."
};

useDescriptions[UseType.Sling] = {
    name: "Sling",
    description: "You can sling bullets with this item."
};

useDescriptions[UseType.Raft] = {
    name: "Drift",
    description: "Used to fast travel across water to other islands in your current area in the direction used."
};

useDescriptions[UseType.StartFire] = {
    name: "Start Fire",
    description: "Used to start a fire. This cannot be used on some non-dry tiles without fuel. Use on Campfires, Furnaces, Kilns, etc. to light them. Using this action may require Kindling, Tinder and a Fuel-like item in your inventory depending on the circumstance."
};

useDescriptions[UseType.FillWater] = {
    name: "Gather Water",
    description: "Used to gather water into the item."
};

useDescriptions[UseType.LockPick] = {
    name: "LockPick",
    description: "Used to unlock locked chests."
};

useDescriptions[UseType.Repair] = {
    name: "Repair",
    description: "Use while facing a damaged item to attempt to repair it. Success based on skill used to make the item."
};

useDescriptions[UseType.Heal] = {
    name: "Heal",
    description: "Consumed on use. Used to restore a varied amount of health."
};

useDescriptions[UseType.Travel] = {
    name: "Travel",
    description: "Used to travel to new, unexplored lands, leaving behind your current surroundings."
};

useDescriptions[UseType.Look] = {
    name: "Look",
    description: "Used to look one full map away from you in the direction facing. Displayed on minimap."
};

useDescriptions[UseType.Decode] = {
    name: "Decode",
    description: "Used for attempting to read the map. Use by the treasure location to reveal how far or close you are. Use while facing the exact spot to dig up the treasure."
};

useDescriptions[UseType.LightItem] = {
    name: "Ignite",
    description: "Use this item on a fire source to start it on fire."
};

useDescriptions[UseType.Read] = {
    name: "Read",
    description: "Consumed on use. reading usually provides useful knowledge."
};

useDescriptions[UseType.Reinforce] = {
    name: "Reinforce",
    description: "Consumed on use. Use while facing a damaged item to attempt to increase the overall maximum and minimum durability. Success based on skill used to make the item."
};

useDescriptions[UseType.OpenContainer] = {
    name: "Open Container",
    description: "Using this will open it where you may drag and drop items to and from. Weight reduction and decay reduction bonuses may apply to items inside."
};

useDescriptions[UseType.OpenBottle] = {
    name: "Open",
    description: "Consumed on use. Using this will open it, providing new and unknown items."
};

useDescriptions[UseType.Cure] = {
    name: "Cure",
    description: "Consumed on use. Used to cure a poison or burning pain while sometimes providing other health benefits."
};

useDescriptions[UseType.TellTime] = {
    name: "Tell Time",
    description: "Used to measure the time of day or night."
};

useDescriptions[UseType.Transmogrify] = {
    name: "Transmogrify",
    description: "Use while facing an equippable item to attempt to infuse with magical properties."
};

useDescriptions[UseType.StokeFire] = {
    name: "Stoke Fire",
    description: "Used on a fire source to increase the flame's strength."
};

useDescriptions[UseType.Pour] = {
    name: "Pour",
    description: "Pour on fire to extinguish the flames, pour inside a water still to begin water filtration, pour on a suitable plant to increase it's health, or just simply empty out."
};

useDescriptions[UseType.Plant] = {
    name: "Plant",
    description: "Attempts to plant the item on the tile you are facing towards. Some plants may require certain ground types or conditions to be planted."
};

useDescriptions[UseType.Garden] = {
    name: "Garden",
    description: "Use on a plant to increase its fertility. Can only be used on some plant types."
};

useDescriptions[UseType.Build] = {
    name: "Build",
    description: "Attempt to construct or assemble the item on the tile you are facing towards."
};

useDescriptions[UseType.GatherTreasure] = {
    name: "Gather Treasure",
    description: "Attempt to gather a treasure in the vicinity of use based on a decoded treasure map. Range of gather is dependent on your Mining skill."
};

useDescriptions[UseType.SailHome] = {
    name: "Sail Home",
    description: "After collecting enough treasure, you can return home and bask in the glory of your riches and fame. And start a new adventure!"
};

useDescriptions[UseType.Preserve] = {
    name: "Preserve",
    description: "Used with food items to extend their life and decay rate."
};

useDescriptions[UseType.Fire] = {
    name: "Fire",
    description: "Using a mixture of Black Powder along with a bullet, you may fire this weapon."
};

useDescriptions[UseType.Gather] = {
    name: "Gather",
    description: "Can be used directly to gather from an adjacent resource tile. Equipping this allows it to be automatically used when walking into resource tiles."
};

useDescriptions[UseType.Teleport] = {
    name: "Teleport",
    description: "With a flick of the wand, teleport to a location in front of where you are facing."
};

lootGroup[LootGroupType.Low] = [
    ObjectType.StoneAxe,
    ObjectType.WoodenSpear,
    ObjectType.BarkTunic,
    ObjectType.BarkLeggings,
    ObjectType.BarkShield,
    ObjectType.SkullCap,
    ObjectType.Leather,
    ObjectType.String,
    ObjectType.StoneShovel,
    ObjectType.MessageInABottle,
    ObjectType.Tourniquet,
    ObjectType.WovenFabric,
    ObjectType.SmallBag,
    ObjectType.Bow,
    ObjectType.Amber,
    ObjectType.Fossil,
    ObjectType.StoneHammer,
    ObjectType.LockPick,
    ObjectType.Waterskin,
    ObjectType.WoodenArrow,
    ObjectType.StoneBullet,
    ObjectType.CordedSling
];

lootGroup[LootGroupType.High] = [
    ObjectType.GoldCoins,
    ObjectType.Rope,
    ObjectType.SpyGlass,
    ObjectType.LeatherBelt,
    ObjectType.LeatherCap,
    ObjectType.LeatherBoots,
    ObjectType.LeatherGorget,
    ObjectType.LeatherPants,
    ObjectType.LeatherTunic,
    ObjectType.LeatherGloves,
    ObjectType.Spear,
    ObjectType.TatteredMap,
    ObjectType.OldInstructionalScroll,
    ObjectType.BarkTorch,
    ObjectType.CottonFabric,
    ObjectType.Backpack,
    ObjectType.Suture, ObjectType.Bandage,
    ObjectType.TannedLeather, ObjectType.Arrow,
    ObjectType.GlassBottle
];

lootGroup[LootGroupType.Treasure] = [
    ObjectType.GoldenSword,
    ObjectType.GoldenRing,
    ObjectType.GoldenChalice,
    ObjectType.AnimalFatTorch,
    ObjectType.GoldCoins,
    ObjectType.WroughtIron,
    ObjectType.OldInstructionalScroll,
    ObjectType.TatteredMap,
    ObjectType.IronOre,
    ObjectType.Limestone,
    ObjectType.Talc,
    ObjectType.IronIngot,
    ObjectType.WroughtIronBoots,
    ObjectType.WroughtIronHelmet,
    ObjectType.WroughtIronGorget,
    ObjectType.WroughtIronGauntlets,
    ObjectType.WroughtIronGreaves,
    ObjectType.WroughtIronShield,
    ObjectType.WroughtIronPickAxe,
    ObjectType.WroughtIronDoubleAxe,
    ObjectType.WroughtIronShovel,
    ObjectType.WroughtIronSpear,
    ObjectType.WroughtIronHammer,
    ObjectType.WroughtIronLockPick,
    ObjectType.WroughtIronTongs,
    ObjectType.WroughtIronBreastPlate,
    ObjectType.WroughtIronSword,
    ObjectType.WroughtIronBullet,
    ObjectType.WroughtIronArrow,
    ObjectType.FlintlockPistol
];

lootGroup[LootGroupType.SeaTreasure] = [
    ObjectType.MessageInABottle,
    ObjectType.Seaweed,
    ObjectType.Seaweed,
    ObjectType.Seaweed,
    ObjectType.LeatherBoots,
    ObjectType.FishingNet,
    ObjectType.FishingRod,
    ObjectType.GoldCoins
];
