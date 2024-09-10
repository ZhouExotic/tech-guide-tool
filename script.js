// Data extracted from your Excel sheet up to R20
const techniquesData = [
    {
      "rank": "R1",
      "name": "LONGEVITY",
      "unlock": "Abode Aura +1%",
      "tier3": "Respira Attempts +1",
      "tier6": "",
      "tier9": "",
      "tier12": "",
      "tier15": ""
    },

    {
      "rank": "R2",
      "name": "ENERGY UNIFICATION",
      "unlock": "Respira +1%",
      "tier3": "Abode Aura +2%",
      "tier6": "Tech Stats +100%",
      "tier9": "",
      "tier12": "",
      "tier15": ""
    },
    {
      "rank": "R2",
      "name": "REJUVENATION",
      "unlock": "Abode Aura +1%",
      "tier3": "Pill Effect +2%",
      "tier6": "Tech Stats +100%",
      "tier9": "",
      "tier12": "",
      "tier15": ""
    },

    {
      "rank": "R3",
      "name": "YANG",
      "unlock": "Crit +100",
      "tier3": "DMG to Monsters +1%",
      "tier6": "Tech Stats +100%",
      "tier9": "",
      "tier12": "",
      "tier15": ""
    },
    {
      "rank": "R3",
      "name": "LIFEBLOOM",
      "unlock": "Pill Effect +1%",
      "tier3": "Respira Attempts +1",
      "tier6": "Tech Stats +100%",
      "tier9": "",
      "tier12": "",
      "tier15": ""
    },
    {
      "rank": "R3",
      "name": "COSMIC POWER",
      "unlock": "Respira Attempts +1",
      "tier3": "Respira +3%",
      "tier6": "Tech Stats +100%",
      "tier9": "",
      "tier12": "",
      "tier15": ""
    },

    {
      "rank": "R4",
      "name": "GOLDEN CORE",
      "unlock": "Respira +1%",
      "tier3": "Pill Effect +2%",
      "tier6": "Pill Effect +3%",
      "tier9": "Tech Stats +100%",
      "tier12": "",
      "tier15": ""
    },
    {
      "rank": "R4",
      "name": "ASTROLOGY",
      "unlock": "Abode Aura +1%",
      "tier3": "Respira +3%",
      "tier6": "Pill Attempts +1",
      "tier9": "Tech Stats +100%",
      "tier12": "",
      "tier15": ""
    },
    {
      "rank": "R4",
      "name": "FOCUS",
      "unlock": "Pill Effect +1%",
      "tier3": "Sense +1",
      "tier6": "Sense +2",
      "tier9": "Tech Stats +100%",
      "tier12": "",
      "tier15": ""
    },
    {
      "rank": "R4",
      "name": "SOUL DRAIN",
      "unlock": "Spiritum +1%",
      "tier3": "Monster DMG Reduction +1%",
      "tier6": "DMG to Monsters +1%",
      "tier9": "Tech Stats +100%",
      "tier12": "",
      "tier15": ""
    },

    {
      "rank": "R5",
      "name": "BLOODIZATION",
      "unlock": "Spiritum +1%",
      "tier3": "Relic DMG Reduction +2%",
      "tier6": "Abode Aura +3%",
      "tier9": "Tech Stats +100%",
      "tier12": "",
      "tier15": ""
    },
    {
      "rank": "R5",
      "name": "NINEFALL",
      "unlock": "Abode Aura +1%",
      "tier3": "Pill Effect +2%",
      "tier6": "Abode Aura +3%",
      "tier9": "Tech Stats +100%",
      "tier12": "",
      "tier15": ""
    },
    {
      "rank": "R5",
      "name": "SOLARICS",
      "unlock": "HP Regen +1%",
      "tier3": "Abode Aura +2%",
      "tier6": "P.ATK +10k",
      "tier9": "Tech Stats +100%",
      "tier12": "",
      "tier15": ""
    },
    {
      "rank": "R5",
      "name": "TAIYIN MERIDIAN",
      "unlock": "MP Regen +1%",
      "tier3": "Respira +3%",
      "tier6": "M.ATK +10K",
      "tier9": "Tech Stats +100%",
      "tier12": "",
      "tier15": ""
    },
    {
      "rank": "R5",
      "name": "LUNARICS",
      "unlock": "Control Chance Boost +5",
      "tier3": "DMG to Monsters +1%",
      "tier6": "Control Duration AMP +15",
      "tier9": "Tech Stats +100%",
      "tier12": "",
      "tier15": ""
    },

    {
      "rank": "R6",
      "name": "DRAGON FLIGHT",
      "unlock": "Sense +1",
      "tier3": "Pill Effect +2%",
      "tier6": "Abode Aura +2%",
      "tier9": "MSPD +20",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },
    {
      "rank": "R6",
      "name": "YIN'S GRASP",
      "unlock": "Spiritum +1%",
      "tier3": "Abode Aura +2%",
      "tier6": "Respira +5%",
      "tier9": "Pill Attempts +1",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },
    {
      "rank": "R6",
      "name": "CONFLAGRATION",
      "unlock": "HP +30k",
      "tier3": "Ability DMG +1%",
      "tier6": "Ability DMG Reduction +2%",
      "tier9": "Abode Aura +3%",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },
    {
      "rank": "R6",
      "name": "UNBOUND BLADE",
      "unlock": "MP +30k",
      "tier3": "Ability DMG Reduction +1%",
      "tier6": "Ability DMG +2%",
      "tier9": "Abode Aura +3%",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },
    {
      "rank": "R6",
      "name": "LION'S ROAR",
      "unlock": "Respira +1%",
      "tier3": "Spiritum +2%",
      "tier6": "Sense +2",
      "tier9": "DMG to Monsters +2%",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },
    {
      "rank": "R6",
      "name": "GALE",
      "unlock": "Sense +1",
      "tier3": "DMG to Monsters +1%",
      "tier6": "Crit Multiplier +5%",
      "tier9": "Crit Block +3%",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },

    {
      "rank": "R7",
      "name": "FLORAL ESSENCE",
      "unlock": "Abode Aura +1%",
      "tier3": "Respira +3%",
      "tier6": "Pill Effect +3%",
      "tier9": "Pill Attempts +1",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },
    {
      "rank": "R7",
      "name": "PURIFY & CLEANSE",
      "unlock": "Respira QoL",
      "tier3": "Respira +4%",
      "tier6": "Respira Attempts +1",
      "tier9": "Respira +7%",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },
    {
      "rank": "R7",
      "name": "GREAT YANG MANUAL",
      "unlock": "HP Regen +1%",
      "tier3": "Abode Aura +2%",
      "tier6": "Respira +5%",
      "tier9": "Pill Effect +4%",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },
    {
      "rank": "R7",
      "name": "AQUA POWER",
      "unlock": "MP Regen +1%",
      "tier3": "Ability DMG +1%",
      "tier6": "Ability DMG Reduction +2%",
      "tier9": "Spiritum +4",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },
    {
      "rank": "R7",
      "name": "NINEFALL HOARFROST",
      "unlock": "Manipulation +500",
      "tier3": "HP +200k",
      "tier6": "Ability DMG +2%",
      "tier9": "Ability DMG Reduction +4%",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },
    {
      "rank": "R7",
      "name": "SUNSET HALBERD DANCE",
      "unlock": "Physique +500",
      "tier3": "MP +200K",
      "tier6": "Ability DMG Reduction +2%",
      "tier9": "Ability DMG +4%",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },
    {
      "rank": "R7",
      "name": "VAJRA",
      "unlock": "Spiritum +1%",
      "tier3": "DMG to Monsters +1%",
      "tier6": "Relic DMG Reduction +2%",
      "tier9": "Relic DMG +4%",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },
    {
      "rank": "R7",
      "name": "DRAGONSOUND",
      "unlock": "Control Chance Boost +5",
      "tier3": "Control Chance Boost +10",
      "tier6": "DMG to Monsters +1%",
      "tier9": "DMG to Monsters +2%",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },
    {
      "rank": "R7",
      "name": "BULWARK",
      "unlock": "Control Chance Resist +5",
      "tier3": "Control Chance Resist +10",
      "tier6": "Monster DMG Reduction +1%",
      "tier9": "Monster DMG Reduction +2%",
      "tier12": "Tech Stats +100%",
      "tier15": ""
    },

    {
      "rank": "R8",
      "name": "TAO OF TAIQING",
      "unlock": "M.ATK +3000",
      "tier3": "MP +400k",
      "tier6": "Ability DMG Reduction +2%",
      "tier9": "Ability DMG +4%",
      "tier12": "Abode Aura +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R8",
      "name": "ASTRAL ARCANUM",
      "unlock": "Spiritum +1%",
      "tier3": "Pill Effect +2%",
      "tier6": "Sense +2",
      "tier9": "Abode Aura +3%",
      "tier12": "Abode Aura +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R8",
      "name": "CHROMA",
      "unlock": "Pill Effect +1%",
      "tier3": "Respira Attempts +1",
      "tier6": "Pill Effect +3%",
      "tier9": "Abode Aura +4%",
      "tier12": "Pill Attempts +1",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R8",
      "name": "ORIGIN SCRIPTURE",
      "unlock": "P.ATK +3000",
      "tier3": "HP +400k",
      "tier6": "Ability DMG +2%",
      "tier9": "Ability DMG Reduction +4%",
      "tier12": "Monster DMG Reduction +3%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R8",
      "name": "ZIXIAO SUTRA",
      "unlock": "Pill Effect +1%",
      "tier3": "Abode Aura +2%",
      "tier6": "Control Chance Boost +20",
      "tier9": "Control Chance Resist +30",
      "tier12": "Spiritium +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R8",
      "name": "NO-THOUGHT SUTRA",
      "unlock": "Control Chance Boost +5",
      "tier3": "Sense +1",
      "tier6": "Control Chance Boost +20",
      "tier9": "Control Chance Resist +30",
      "tier12": "Ability DMG +6%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R8",
      "name": "MOON MERU",
      "unlock": "Control Chance Resist +5",
      "tier3": "Sense +1",
      "tier6": "Control Duration AMP +10",
      "tier9": "Control Duration Resist +20",
      "tier12": "Respira +10%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R8",
      "name": "DRACOPHANT",
      "unlock": "Monster DMG Reduction +1%",
      "tier3": "Spiritum +2%",
      "tier6": "Relic DMG +2%",
      "tier9": "Relic DMG Reduction +4%",
      "tier12": "Monster DMG Reduction +3%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R8",
      "name": "CAULDRON REFINEMENT",
      "unlock": "DMG to Monsters +1%",
      "tier3": "Respira +3%",
      "tier6": "Relic DMG Reduction +2%",
      "tier9": "Relic DMG +4%",
      "tier12": "Sense +3",
      "tier15": "Tech Stats +100%"
    },

    {
      "rank": "R9",
      "name": "HARVEST GOD SECRET",
      "unlock": "Abode Aura +1%",
      "tier3": "Respira +3%",
      "tier6": "Abode Aura +3%",
      "tier9": "Abode Aura +4%",
      "tier12": "Pill Attempts +1",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R9",
      "name": "HONOURED ORIGIN",
      "unlock": "Abode Aura +1%",
      "tier3": "Control Chance Boost +5",
      "tier6": "Control Chance Resist +10",
      "tier9": "Abode Aura +3%",
      "tier12": "Control Duration Resist +30",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R9",
      "name": "HEARTLESS",
      "unlock": "Physique +2000",
      "tier3": "Ability DMG +1%",
      "tier6": "Ability DMG Reduction +2%",
      "tier9": "Ability DMG +4%",
      "tier12": "Respira +10%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R9",
      "name": "LAWS OF NATURE",
      "unlock": "Pill Effect +1%",
      "tier3": "Sense +1",
      "tier6": "Control Duration AMP +10",
      "tier9": "Control Duration Resist +20",
      "tier12": "Respira +10%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R9",
      "name": "ZHURONG MANTRA",
      "unlock": "M.ATK +10K",
      "tier3": "Ability DMG Reduction +1%",
      "tier6": "Ability DMG +2%",
      "tier9": "Ability DMG Reduction +4%",
      "tier12": "MSPD +50",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R9",
      "name": "DIVINE WATER",
      "unlock": "Manipulation +2000",
      "tier3": "Ability DMG +1%",
      "tier6": "Ability DMG Reduction +2%",
      "tier9": "Ability DMG +4%",
      "tier12": "Ability DMG Reduction +6%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R9",
      "name": "MARA INCARNATION",
      "unlock": "P.ATK +10K",
      "tier3": "Ability DMG Reduction +1%",
      "tier6": "Ability DMG +2%",
      "tier9": "Ability DMG Reduction +4%",
      "tier12": "Control Duration Resist +30",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R9",
      "name": "GOLD SMASHER",
      "unlock": "Spiritum +1%",
      "tier3": "Control Duration Resist +10",
      "tier6": "Relic DMG +2%",
      "tier9": "Relic DMG Reduction +4%",
      "tier12": "Control Duration AMP +30",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R9",
      "name": "SEVEN STAR BLADE",
      "unlock": "Sense +1",
      "tier3": "Spiritum +2%",
      "tier6": "Relic DMG Reduction +2%",
      "tier9": "Relic DMG +4%",
      "tier12": "Control Chance Boost +30",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R9",
      "name": "WAY OF CREATION",
      "unlock": "MP Regen +1%",
      "tier3": "Relic DMG +1%",
      "tier6": "Relic DMG Reduction +2%",
      "tier9": "MSPD +20",
      "tier12": "Ability DMG +6%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R9",
      "name": "EIGHT-NINE METHOD",
      "unlock": "HP Regen +1%",
      "tier3": "Relic DMG Reduction +1%",
      "tier6": "Relic DMG +2%",
      "tier9": "Ability DMG +4%",
      "tier12": "Ability DMG Reduction +6%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R9",
      "name": "WORDLESS SCRIPTURE",
      "unlock": "DMG to Monsters +1%",
      "tier3": "Control Chance Resist +5",
      "tier6": "Control Chance Boost +10",
      "tier9": "MSPD +20",
      "tier12": "Control Duration AMP +30",
      "tier15": "Tech Stats +100%"
    },

    {
      "rank": "R10",
      "name": "IMMORTAL ASCENSION",
      "unlock": "Base HP +2%",
      "tier3": "Base MP +2%",
      "tier6": "Abode Aura +3%",
      "tier9": "Spiritium +3%",
      "tier12": "Pill Attempts +1",
      "tier15": "Tech Stats +100%"
    },

    {
      "rank": "R11",
      "name": "MOON HOWL",
      "unlock": "Control Chance Resist +8",
      "tier3": "Respira +4%",
      "tier6": "Earth Law +6%",
      "tier9": "Fire Law +8%",
      "tier12": "Relic DMG +5%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R11",
      "name": "SOUL REFINER",
      "unlock": "Control Chance Boost +8",
      "tier3": "Relic DMG Reduction +1%",
      "tier6": "Relic DMG +2%",
      "tier9": "Relic DMG Reduction +3%",
      "tier12": "Relic DMG +5%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R11",
      "name": "THUNDER LORD INCANTATION",
      "unlock": "Metal Law +2%",
      "tier3": "Water Law +4%",
      "tier6": "Water Law +6%",
      "tier9": "Metal Law +8%",
      "tier12": "Earth Law +10%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R11",
      "name": "SQUARE INCH SCRIPTURE",
      "unlock": "DMG to Monsters +1%",
      "tier3": "Ability DMG +1%",
      "tier6": "Ability DMG Reduction +2%",
      "tier9": "Respira +7%",
      "tier12": "Monster DMG Reduction +3%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R11",
      "name": "PURE MYSTERIOUS AGREEMENT",
      "unlock": "Abode Aura +1%",
      "tier3": "Abode Aura +2%",
      "tier6": "Crit Multiplier +5%",
      "tier9": "Crit Block +3%",
      "tier12": "Fire Law +10%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R11",
      "name": "HEAVENLY RHYTHM",
      "unlock": "Respira +1%",
      "tier3": "Respira +3%",
      "tier6": "Respira Attempts +1",
      "tier9": "Respira +7%",
      "tier12": "Respira +9%",
      "tier15": "Tech Stats +100%"
    },

    {
      "rank": "R12",
      "name": "STAR BLADE",
      "unlock": "Crit Block +1%",
      "tier3": "Water Law  +4%",
      "tier6": "Crit Multiplier +3%",
      "tier9": "Ability DMG Reduction +3%",
      "tier12": "Fire Law +10%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R12",
      "name": "SPRING AUTUMN ANNALS",
      "unlock": "Spiritium +1%",
      "tier3": "Respira +4%",
      "tier6": "Crit Block +2%",
      "tier9": "Ability DMG +3%",
      "tier12": "Spiritium +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R12",
      "name": "SOUL DEVOURER",
      "unlock": "DMG to Monsters +1%",
      "tier3": "Spiritium +2%",
      "tier6": "Respira +5%",
      "tier9": "Metal Law +8%",
      "tier12": "Control Duration Resist +30",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R12",
      "name": "DRAGON HEAVEN ART",
      "unlock": "Control Duration Resist +8",
      "tier3": "Water Law  +4%",
      "tier6": "Control Chance Boost +10",
      "tier9": "Control Duration Resist +20",
      "tier12": "Control Duration AMP +30",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R12",
      "name": "SOLAR JADE",
      "unlock": "Control Chance Resist +8",
      "tier3": "Relic DMG +1%",
      "tier6": "Relic DMG Reduction +2%",
      "tier9": "Relic DMG +3%",
      "tier12": "Relic DMG Reduction +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R12",
      "name": "CLOUD SATCHEL",
      "unlock": "Fire Law +2%",
      "tier3": "Earth Law +4%",
      "tier6": "Earth Law +6%",
      "tier9": "Fire Law +8%",
      "tier12": "Earth Law +10%",
      "tier15": "Tech Stats +100%"
    },

    {
      "rank": "R13",
      "name": "DEMON ABYSS",
      "unlock": "Control Chance Boost +8",
      "tier3": "Relic DMG Reduction +1%",
      "tier6": "Water Law +6%",
      "tier9": "Earth Law +8%",
      "tier12": "Metal Law +10%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R13",
      "name": "QIAN MANTRA",
      "unlock": "Spiritium +1%",
      "tier3": "Relic DMG +1%",
      "tier6": "Respira Attempts +1",
      "tier9": "Respira +7%",
      "tier12": "Ability DMG Reduction +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R13",
      "name": "FIVE-THUNDER MANTRA",
      "unlock": "Abode Aura +1%",
      "tier3": "Ability DMG Reduction +1%",
      "tier6": "Ability DMG +2%",
      "tier9": "Ability DMG Reduction +3%",
      "tier12": "Ability DMG +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R13",
      "name": "YIN YANG OVERTURN",
      "unlock": "Monster DMG Reduction +3%",
      "tier3": "Relic DMG +1%",
      "tier6": "Relic DMG Reduction +2%",
      "tier9": "Relic DMG +3%",
      "tier12": "Relic DMG Reduction +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R13",
      "name": "DIVINE CODE",
      "unlock": "DMG to Monsters +1%",
      "tier3": "Ability DMG +1%",
      "tier6": "Ability DMG Reduction +2%",
      "tier9": "Ability DMG +3%",
      "tier12": "Ability DMG Reduction +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R13",
      "name": "PURE STARLIGHT",
      "unlock": "Spiritium +2%",
      "tier3": "Respira +3%",
      "tier6": "Crit Multiplier +3%",
      "tier9": "Wood Law +8%",
      "tier12": "Water Law +10%",
      "tier15": "Tech Stats +100%"
    },

    {
      "rank": "R14",
      "name": "IMMORTAL NINTH SECT",
      "unlock": "Control Duration AMP +30",
      "tier3": "Ability DMG +1%",
      "tier6": "Ability DMG Reduction +2%",
      "tier9": "Ability DMG +3%",
      "tier12": "Ability DMG Reduction +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R14",
      "name": "SECRET SAMSARA SCRIPTURE",
      "unlock": "Monster DMG Reduction +1%",
      "tier3": "Abode Aura +2%",
      "tier6": "DMG to Monsters +2%",
      "tier9": "Crit Block +3%",
      "tier12": "Spiritium +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R14",
      "name": "YIN YANG HARMONY",
      "unlock": "Water Law +2%",
      "tier3": "Fire Law +4%",
      "tier6": "Fire Law +6%",
      "tier9": "Water Law +8%",
      "tier12": "Fire Law +10%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R14",
      "name": "CHAOS ORIGIN",
      "unlock": "Respira +1%",
      "tier3": "Respira +3%",
      "tier6": "Respira Attempts +1",
      "tier9": "Respira +7%",
      "tier12": "Respira +9%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R14",
      "name": "BLOOD DEMON CORE",
      "unlock": "Wood Law +2%",
      "tier3": "Wood Law +4%",
      "tier6": "Control Chance Boost +20",
      "tier9": "Control Chance Resist +30",
      "tier12": "Relic DMG Reduction +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R14",
      "name": "UNDERWORLD REINCARNATION",
      "unlock": "Spiritium +1%",
      "tier3": "DMG to Monsters +1%",
      "tier6": "Control Duration AMP +10",
      "tier9": "Control Duration Resist +20",
      "tier12": "Ability DMG Reduction +4%",
      "tier15": "Tech Stats +100%"
    },

    {
      "rank": "R15",
      "name": "SUPREME DEMON",
      "unlock": "Crit Multiplier +2%",
      "tier3": "Relic DMG +1%",
      "tier6": "Relic DMG Reduction +2%",
      "tier9": "Relic DMG +3%",
      "tier12": "Relic DMG Reduction +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R15",
      "name": "TAISU SCRIPTURE",
      "unlock": "Abode Aura +1%",
      "tier3": "Wood Law +4%",
      "tier6": "Crit Block +2%",
      "tier9": "Wood Law +8%",
      "tier12": "Water Law +10%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R15",
      "name": "HEAVEN EXECUTION",
      "unlock": "Crit Block +1%",
      "tier3": "Ability DMG Reduction +1%",
      "tier6": "Ability DMG +2%",
      "tier9": "Ability DMG Reduction +3%",
      "tier12": "Ability DMG +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R15",
      "name": "DEMONIC DELUSION",
      "unlock": "DMG to Monsters +1%",
      "tier3": "Ability DMG +1%",
      "tier6": "Ability DMG Reduction +2%",
      "tier9": "Ability DMG +3%",
      "tier12": "Ability DMG Reduction +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R15",
      "name": "CELESTIAL CLOUD SEAL",
      "unlock": "Wood Law +2%",
      "tier3": "Metal Law +4%",
      "tier6": "Metal Law +6%",
      "tier9": "Wood Law +8%",
      "tier12": "Metal Law +10%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R15",
      "name": "DEMON SUPPRESSION",
      "unlock": "DMG to Monsters +1%",
      "tier3": "Crit Multiplier +3%",
      "tier6": "Monster DMG Reduction +2%",
      "tier9": "Crit Block +3%",
      "tier12": "Earth Law +10%",
      "tier15": "Tech Stats +100%"
    },

    {
      "rank": "R16",
      "name": "SUPREME HEAVENLY TAO",
      "unlock": "Respira +1%",
      "tier3": "Spiritium +2%",
      "tier6": "Respira Attempts +1",
      "tier9": "Ability DMG Reduction +3%",
      "tier12": "Ability DMG +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R16",
      "name": "QIAN KUN METHOD",
      "unlock": "Water Law +2%",
      "tier3": "Relic DMG +1%",
      "tier6": "Relic DMG Reduction +2%",
      "tier9": "Respira +7%",
      "tier12": "Spiritium +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R16",
      "name": "IMMORTALITY CLOUD",
      "unlock": "Earth Law +2%",
      "tier3": "Wood Law +4%",
      "tier6": "Wood Law +6%",
      "tier9": "Earth Law +8%",
      "tier12": "Wood Law +10%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R16",
      "name": "PURE JADE ONE",
      "unlock": "Abode Aura +1%",
      "tier3": "Abode Aura +2%",
      "tier6": "Ability DMG +2%",
      "tier9": "Ability DMG Reduction +3%",
      "tier12": "Ability DMG +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R16",
      "name": "LIMITLESS SCRIPTURE",
      "unlock": "Wood Law +2%",
      "tier3": "Relic DMG Reduction +1%",
      "tier6": "Relic DMG +2%",
      "tier9": "Relic DMG Reduction +3%",
      "tier12": "Relic DMG +5%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R16",
      "name": "ENIGMA",
      "unlock": "Crit Block +1%",
      "tier3": "Spiritium +2%",
      "tier6": "Control Chance Resist +10",
      "tier9": "Respira +7%",
      "tier12": "Metal Law +10%",
      "tier15": "Tech Stats +100%"
    },

    {
      "rank": "R17",
      "name": "REJUVENATING SPELLL",
      "unlock": "Wood Law +2%",
      "tier3": "Respira +3%",
      "tier6": "Voidbreak Relic DMG Limit +3%",
      "tier9": "Voidbreak Relic DMG Limit +3%",
      "tier12": "Voidbreak Relic DMG Limit +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R17",
      "name": "BOOK OF LIFE CYCLES",
      "unlock": "Voidbreak Relic DMG Limit +2%",
      "tier3": "Qiyun Cultivation +1%",
      "tier6": "Daemonfae Relic DMG +2%",
      "tier9": "Divine Taoist DMG Reduction +2%",
      "tier12": "DMG to Divine Taoists +3%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R17",
      "name": "AQUATIC SWORDIUM MANEUVER",
      "unlock": "Water Law +2%",
      "tier3": "Relic DMG +1%",
      "tier6": "Relic DMG Reduction +2%",
      "tier9": "Relic DMG +3%",
      "tier12": "Relic DMG Reduction +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R17",
      "name": "MYSTIC ARMOR MANEUVER",
      "unlock": "Control Chance Boost +8",
      "tier3": "Relic DMG Reduction +1%",
      "tier6": "Voidbreak Relic DMG Limit +3%",
      "tier9": "Voidbreak Relic DMG Limit +3%",
      "tier12": "Spiritum +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R17",
      "name": "ZEN LOTUS TECHNIQUE",
      "unlock": "DMG to Demonic Taoists +1%",
      "tier3": "Demonic Taoist DMG Reduction +1%",
      "tier6": "Qiyun Cultivation +2%",
      "tier9": "Demonic Taoist DMG Reduction +2%",
      "tier12": "DMG to Demonic Taoists +3%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R17",
      "name": "DEMONBANE TECHNIQUE",
      "unlock": "DMG to Divine Taoists +1%",
      "tier3": "Divine Taoist DMG Reduction +1%",
      "tier6": "Qiyun Cultivation +2%",
      "tier9": "Divine Taoist DMG Reduction +2%",
      "tier12": "DMG to Divine Taoists +3%",
      "tier15": "Tech Stats +100%"
    },

    {
      "rank": "R18",
      "name": "BRIGHT HALO SPELL",
      "unlock": "Daemonfae Relic DMG +1%",
      "tier3": "Demonic Taoist DMG Reduction +1%",
      "tier6": "Daemonfae Rellic DMG Dealt +2%",
      "tier9": "DMG to Divine Taoists +2%",
      "tier12": "Daemonfae Relic DMG Reduction +3%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R18",
      "name": "SANSKRIT CHANT",
      "unlock": "Crit Block +1%",
      "tier3": "Crit Multiplier +3%",
      "tier6": "Crit Block +3%",
      "tier9": "Crit Multiplier +5%",
      "tier12": "Spiritum +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R18",
      "name": "BRIGHT MOON INDEX",
      "unlock": "Water Law +2%",
      "tier3": "Spiritum +2%",
      "tier6": "Control Chance Boost +20",
      "tier9": "Control Chance Resist +30",
      "tier12": "Ability DMG Reduction +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R18",
      "name": "ACHALA'S DEMON-TAMING CHANT",
      "unlock": "DMG to Demonic Taoists +1%",
      "tier3": "Daemonfae M.ATK +1%",
      "tier6": "Daemonfae M.DEF +2%",
      "tier9": "Daemonfae P.ATK +2%",
      "tier12": "Daemonfae Relic DMG Reduction +3%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R18",
      "name": "MAGNETIC LIGHT MANEUVER",
      "unlock": "Monster DMG Reduction +1%",
      "tier3": "Qiyun Cultivation +1%",
      "tier6": "Qiyun Cultivation +2%",
      "tier9": "Respira +7%",
      "tier12": "Ability DMG +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R18",
      "name": "SOUTHERN FLAME COLLECTION",
      "unlock": "Fire Law +2%",
      "tier3": "Spiritum +2%",
      "tier6": "Voidbreak Relic DMG Limit +3%",
      "tier9": "Spiritum +3%",
      "tier12": "Spiritum +4%",
      "tier15": "Tech Stats +100%"
    },

    {
      "rank": "R19",
      "name": "MIRAGE CHANT",
      "unlock": "Daemonfae Relic DMG +1%",
      "tier3": "Daemonfae Relic DMG Reduction +1%",
      "tier6": "Divine Taoist DMG Reduction +2%",
      "tier9": "DMG to Demonic Taoists +2%",
      "tier12": "Demonic Taoist DMG Reduction +3%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R19",
      "name": "BOOK OF INFINITY",
      "unlock": "Daemonfae Relic DMG Reduction +1%",
      "tier3": "Daemonfae Relic DMG +1%",
      "tier6": "Daemonfae M.DEF +2%",
      "tier9": "Daemonfae HP +2%",
      "tier12": "Divine Taoist DMG Reduction +3%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R19",
      "name": "DRACONIC DEMON-TAMING TECHNIQUE",
      "unlock": "DMG to Demonic Taoists +1%",
      "tier3": "DMG to Demonic Taoists +1%",
      "tier6": "Qiyun Cultivation +2%",
      "tier9": "Daemonfae M.ATK +2%",
      "tier12": "Daemonfae M.DEF +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R19",
      "name": "JADE REINCARNATION TECHNIQUE",
      "unlock": "Demonic Taoist DMG Reduction +1%",
      "tier3": "Demonic Taoist DMG Reduction +1%",
      "tier6": "Daemonfae M.ATK +2%",
      "tier9": "Daemonfae P.ATK +2%",
      "tier12": "Daemonfae P.DEF +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R19",
      "name": "ETHEREAL MANTRA",
      "unlock": "Control Duration AMP +8",
      "tier3": "Control Chance Resist +8",
      "tier6": "Spiritum +2%",
      "tier9": "DMG to Monsters +2%",
      "tier12": "Daemonfae Relic DMG Reduction +3%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R19",
      "name": "GOLD INCARNATION CHANT",
      "unlock": "Metal Law +2%",
      "tier3": "Spiritum +2%",
      "tier6": "Control Duration AMP +10",
      "tier9": "Monster DMG Reduction +2%",
      "tier12": "Spiritum +4%",
      "tier15": "Tech Stats +100%"
    },

    {
      "rank": "R20",
      "name": "ONYX BRAHMA",
      "unlock": "Crit Multiplier +2%",
      "tier3": "Demonic Taoist DMG Reduction +1%",
      "tier6": "Daemonfae Relic DMG +2%",
      "tier9": "Demonic Taoist DMG Reduction +2%",
      "tier12": "DMG to Divine Taoists +3%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R20",
      "name": "DEMON RAZE",
      "unlock": "Daemonfae Relic DMG +1%",
      "tier3": "Daemonfae Relic DMG +1%",
      "tier6": "Crit Block +3%",
      "tier9": "Crit Multiplier +5%",
      "tier12": "Daemonfae HP +4%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R20",
      "name": "THE WORLD OF MIRAGE",
      "unlock": "DMG to Demonic Taoists +1%",
      "tier3": "Control Chance Boost +5",
      "tier6": "Daemonfae M.DEF +2%",
      "tier9": "DMG to Demonic Taoists +2%",
      "tier12": "Daemonfae Relic DMG +3%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R20",
      "name": "GREAT FUDO SUTRA",
      "unlock": "Monster DMG Reduction +1%",
      "tier3": "Demonic Taoist DMG Reduction +1%",
      "tier6": "Divine Taoist DMG Reduction +2%",
      "tier9": "Daemonfae M.ATK +2%",
      "tier12": "Relic DMG +5%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R20",
      "name": "MAHABODHI",
      "unlock": "Qiyun Cultivation +1%",
      "tier3": "Spiritum +2%",
      "tier6": "Daemonfae P.DEF +2%",
      "tier9": "Crit Multiplier +5%",
      "tier12": "Relic DMG Reduction +5%",
      "tier15": "Tech Stats +100%"
    },
    {
      "rank": "R20",
      "name": "BOOK OF FORGOTTEN WISHES",
      "unlock": "DMG to Monsters +1%",
      "tier3": "Qiyun Cultivation +1%",
      "tier6": "Control Duration AMP +10",
      "tier9": "Daemonfae P.ATK +2%",
      "tier12": "Daemonfae MP +4%",
      "tier15": "Tech Stats +100%"
    }
  ];

// Function to initialize the table and make cells clickable
function initializeTable() {
  const tbody = document.querySelector('#techniques-table tbody');
  let previousGroup = ""; // To track the current group (e.g., R3, R4, etc.)

  techniquesData.forEach((tech, rowIndex) => {
      const row = document.createElement('tr');

      // Check if the current row starts a new group (e.g., based on 'rank' value)
      if (tech.rank && tech.rank !== previousGroup) {
          row.classList.add('group-divider');
          previousGroup = tech.rank;
      }

      // Create cells for rank and name
      row.innerHTML = `
          <td>${tech.rank}</td>
          <td>${tech.name}</td>
      `;

      // Create cells for unlock and tiers, making them clickable
      ['unlock', 'tier3', 'tier6', 'tier9', 'tier12', 'tier15'].forEach((tier, tierIndex) => {
          const cell = document.createElement('td');
          if (tech[tier]) {
              cell.textContent = tech[tier];
              cell.addEventListener('click', () => {
                  cell.classList.toggle('marked'); // Toggle the marked state
                  updateSummary(); // Update the summary based on marked cells
                  saveMarkedState(); // Save the marked state to localStorage
              });
              // Check localStorage for previously marked cells
              const markedCells = JSON.parse(localStorage.getItem('markedCells') || '[]');
              if (markedCells.includes(`${rowIndex}-${tierIndex}`)) {
                  cell.classList.add('marked'); // Reapply marked class if previously saved
              }
          } else {
              cell.textContent = ''; // No content in the cell
          }
          row.appendChild(cell);
      });

      // Add the "Select All" button
      const selectAllCell = document.createElement('td');
      const selectAllButton = document.createElement('button');
      selectAllButton.textContent = 'Select All'; // Add label for the button
      selectAllButton.addEventListener('click', () => {
          toggleSelectRow(row); // Call the function to mark all cells in the row
          updateSummary(); // Update the summary based on marked cells
          saveMarkedState(); // Save the marked state to localStorage
      });
      selectAllCell.appendChild(selectAllButton); // Append the button to the cell
      row.appendChild(selectAllCell);

      tbody.appendChild(row);
  });
}

// Function to toggle selection for all cells in a row, but skip empty cells and non-tier cells
function toggleSelectRow(row) {
  const cells = row.querySelectorAll('td');
  cells.forEach((cell, colIndex) => {
      // Skip the first two cells (Rank, Name), the last cell (Select All button), and empty cells
      if (colIndex > 1 && !cell.querySelector('button') && cell.textContent.trim() !== '') {
          cell.classList.toggle('marked');  // Toggle the "marked" class for cells with content
      }
  });
}

// Function to update the total stats summary based on marked cells
function updateSummary() {
  const effectsSummary = {};
  const markedCells = document.querySelectorAll('#techniques-table td.marked');

  markedCells.forEach(cell => {
      const effect = cell.textContent;
      const match = effect.match(/(.+?)\s\+([\d.]+)(K|%?)/i);

      if (match) {
          const effectName = match[1].trim();
          let numericValue = parseFloat(match[2]);
          const unit = match[3];

          // Adjust the value if it's in thousands (K)
          if (unit.toLowerCase() === 'k') {
              numericValue *= 1000;
          }

          if (!isNaN(numericValue)) {
              if (!effectsSummary[effectName]) {
                  effectsSummary[effectName] = { value: 0, unit: unit };
              }
              effectsSummary[effectName].value += numericValue;
          }
      }
  });

  // Format numbers with "K" for clarity if they are in the thousands
  const formatValue = (value, unit) => {
      if (value >= 1000 && !unit.includes('%')) {
          return `${(value / 1000).toFixed(1)}K`;
      }
      return `${value}${unit}`;
  };

  // Display the formatted summary
  const summaryElement = document.getElementById('total-stats');
  summaryElement.innerHTML = Object.keys(effectsSummary).length
      ? Object.entries(effectsSummary)
          .map(([key, { value, unit }]) => `${key}: +${formatValue(value, unit)}`)
          .join('<br>')
      : "No effects selected or parsed.";
}

// Function to save marked cells to localStorage, but skip non-tier cells
function saveMarkedState() {
  const markedCells = [];
  const rows = document.querySelectorAll('#techniques-table tbody tr');
  rows.forEach((row, rowIndex) => {
      const cells = row.querySelectorAll('td');
      cells.forEach((cell, colIndex) => {
          // Skip the first two cells (Rank, Name) and the last cell (Select All button)
          if (colIndex > 1 && !cell.querySelector('button') && cell.classList.contains('marked')) {
              markedCells.push(`${rowIndex}-${colIndex - 2}`); // Adjust column index for the tiers
          }
      });
  });
  localStorage.setItem('markedCells', JSON.stringify(markedCells));
}

// Function to reset all marked cells
function resetAllMarkedCells() {
  // Remove the 'marked' class from all cells
  document.querySelectorAll('#techniques-table td.marked').forEach(cell => {
      cell.classList.remove('marked');
  });

  // Clear the localStorage as well
  localStorage.removeItem('markedCells');

  // Reset the summary
  updateSummary();
}

// Attach the reset function to the Reset All button
document.getElementById('reset-all').addEventListener('click', resetAllMarkedCells);

// Call the initialization and populate the effects list on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeTable();
  populateEffectsList(); // Populate the effects list for highlighting functionality
  updateSummary(); // Ensure summary is calculated after loading marked cells
});



// Function to extract unique effects, consolidate by base name, and sort alphabetically
function populateEffectsList() {
  const effectsSet = new Set();

  techniquesData.forEach((tech) => {
      ['unlock', 'tier3', 'tier6', 'tier9', 'tier12', 'tier15'].forEach((tier) => {
          if (tech[tier]) {
              // Extract the base effect name while preserving proper formatting
              const effectName = tech[tier]
                  .replace(/\s*\+\s*[\d.]+(K|%)?\s*/gi, '') // Remove quantities and units, keeping spaces intact
                  .replace(/\s+/g, ' ') // Normalize spaces to single spaces
                  .trim();

              effectsSet.add(effectName);
          }
      });
  });

  // Convert the set to an array and sort alphabetically
  const sortedEffects = Array.from(effectsSet).sort();

  const effectsList = document.getElementById('effects-list');
  sortedEffects.forEach((effect) => {
      const listItem = document.createElement('li');
      listItem.textContent = effect;
      listItem.addEventListener('click', () => toggleHighlightEffect(effect, listItem));
      effectsList.appendChild(listItem);
  });
}

// Function to toggle highlight and indicate active effect in the sidebar with exact matching
function toggleHighlightEffect(effect, listItem) {
  // Toggle the active class on the sidebar item
  listItem.classList.toggle('active');

  // Use a regex to match the base effect name and include any trailing quantities
  const regex = new RegExp(`^${effect}\\s*\\+?\\d*(K|%|\\s+)?$`, 'i');

  // Toggle highlight of matching cells based on the base effect name
  const cells = document.querySelectorAll('#techniques-table td');
  cells.forEach(cell => {
      // Match the base effect name allowing for any percentage or quantity
      if (regex.test(cell.textContent.trim())) {
          cell.classList.toggle('effect-highlight'); // Toggle highlight state
      }
  });
}

// Function to filter the effects list based on search input
document.getElementById('effects-search').addEventListener('input', function () {
  const searchValue = this.value.toLowerCase();
  const effectsItems = document.querySelectorAll('#effects-list li');

  effectsItems.forEach((item) => {
      const effectName = item.textContent.toLowerCase();
      // Show or hide the list item based on the search query
      if (effectName.includes(searchValue)) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });
});


// Function to reset all selected cells and clear filters
document.getElementById('reset-all').addEventListener('click', function () {
  // Clear all marked cells
  document.querySelectorAll('#techniques-table td.marked').forEach(cell => {
      cell.classList.remove('marked');
  });

  // Reset the effects search input
  document.getElementById('effects-search').value = '';

  // Reset all filtered effects and show all items
  document.querySelectorAll('#effects-list li').forEach(item => {
      item.style.display = 'block';
  });

  // Optionally, uncheck any checkboxes or other reset actions if needed
  document.querySelectorAll('#techniques-table input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
  });

  // Clear any highlights or other visual effects
  document.querySelectorAll('#techniques-table td.effect-highlight').forEach(cell => {
      cell.classList.remove('effect-highlight');
  });

  // Reset the total stats summary if applicable
  document.getElementById('total-stats').textContent = 'No effects selected or parsed.';
});

// Function to remove all active filters and highlighted cells
function removeFilters() {
// Remove the 'active' class from all effects list items
document.querySelectorAll('#effects-list li.active').forEach(item => {
    item.classList.remove('active');
});

// Remove the 'effect-highlight' class from all table cells
document.querySelectorAll('#techniques-table td.effect-highlight').forEach(cell => {
    cell.classList.remove('effect-highlight');
});
}

// Attach the removeFilters function to the Remove Filters button
document.getElementById('remove-filters').addEventListener('click', removeFilters);

// Function to get selected techniques
function getSelectedTechniques() {
  const selected = [];
  const rows = document.querySelectorAll('#techniques-table tbody tr');

  rows.forEach((row, rowIndex) => {
      const cells = row.querySelectorAll('td:not(:first-child):not(:nth-child(2))'); // Exclude Rank and Technique Name
      cells.forEach((cell, colIndex) => {
          if (cell.classList.contains('marked')) {
              selected.push({ row: rowIndex, col: colIndex + 2 }); // Store row index and actual column index (adjusted for excluded columns)
          }
      });
  });

  return selected;
}


// Function to apply selected techniques from decoded state
function applyStateToTool(state) {
  const rows = document.querySelectorAll('#techniques-table tbody tr');

  // Apply marked cells
  state.selectedTechniques.forEach(({ row, col }) => {
      const cell = rows[row].querySelectorAll('td')[col]; // Access the specific cell
      if (cell) {
          cell.classList.add('marked'); // Mark the specific cell
      }
  });

  // Recalculate the total stats after applying selections
  recalculateTotalStats();
}
// Function to recalculate total stats
function recalculateTotalStats() {
  let totalStats = 0;
  const markedCells = document.querySelectorAll('#techniques-table td.marked');
  
  markedCells.forEach(cell => {
      // Placeholder logic to add stats based on marked cells
      totalStats += 1; // Example logic
  });
  
  // Update the total stats UI
  const statsElement = document.getElementById('total-stats');
  statsElement.innerText = `Total Stats: ${totalStats}`;
}

// Function to generate a shareable link
function generateShareableLink() {
  const currentState = {
      selectedTechniques: getSelectedTechniques(),
  };
  const jsonString = JSON.stringify(currentState);
  const encodedState = encodeURIComponent(jsonString);
  const shareableLink = `${window.location.origin}${window.location.pathname}?state=${encodedState}`;
  
  // Display the link (you can customize how to display it)
  alert(`Share this link: ${shareableLink}`);
}

// Function to load state from the URL if present
function loadStateFromURL() {
  const params = new URLSearchParams(window.location.search);
  const encodedState = params.get('state');
  
  if (encodedState) {
      try {
          const jsonString = decodeURIComponent(encodedState);
          const state = JSON.parse(jsonString);
          applyStateToTool(state);
      } catch (error) {
          console.error("Error decoding state from URL:", error);
      }
  }
}

// Event listener for the "Generate Shareable Link" button
document.getElementById('generate-shareable-link').addEventListener('click', generateShareableLink);

// Ensure state is loaded from the URL when the page loads
window.onload = loadStateFromURL;