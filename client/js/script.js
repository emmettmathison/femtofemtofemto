let button = document.getElementById("generate");
let text = document.getElementById("text");

// form: verb + noun + preposition + noun

let imperativeVerbArray = [
  "dismantle",
  "resurrect",
  "transcend",
  "terraform",
  "compost",
  "obliterate",
  "annihilate",
  "dematerialize",
  "maximize",
  "digitize",
  "hybridize",
  "collectivize",
  "demilitarize",
  "sequence",
  "optimize",
  "globalize",
];
let nounArray = [
  "capital",
  "singularity",
  "disorder",
  "horizon",
  "sensorium",
  "commerce",
  "planetesimals",
  "signals",
  "noise",
  "fluxus",
  "cortices",
  "spasm",
  "primates",
  "paradise",
  "production",
  "utopia",
  "photons",
  "fleshbody",
  "computation",
  "phase",
  "assembly",
  "arms-races",
  "feminism",
  "synthesis",
  "praxis",
  "mass",
  "qubits",
  "matrioshka brains",
  "culture",
  "mitochondria",
  "eschatology",
  "logos",
  "time",
  "revolution",
  "introdus",
  "structure",
  "thresholds",
  "intelligence",
  "flesh",
  "silicon",
  "immunocrats",
  "love",
  "terrorism",
  "desire",
  "incarceration",
  "fetishism",
  "organs",
  "phalli",
  "machines",
  "aerogel",
  "bandwith",
  "computronium",
  "connectomes",
  "genomes",
  "function",
  "bitflips",
  "spheres",
  "gravity",
  "seconds",
  "automata",
  "apocalypse",
  "influx",
  "technics",
];
let nounSingularArray = [
  "capital",
  "singularity",
  "disorder",
  "horizon",
  "sensorium",
  "commerce",
  "planetesimal",
  "signal",
  "noise",
  "fluxus",
  "cortex",
  "spasm",
  "primate",
  "paradise",
  "utopia",
  "photon",
  "fleshbody",
  "computation",

  "phase",
  "assembly",
  "arms-race",
  "feminism",
  "production",
  "synthesis",
  "praxis",
  "mass",
  "qubit",
  "matrioshka brain",
  "culture",
  "mitochondria",
  "eschatology",
  "logos",
  "time",
  "revolution",
  "introdus",
  "structure",
  "threshold",
  "intelligence",
  "flesh",
  "silicon",
  "immunocrat",
  "love",
  "terrorism",
  "desire",
  "incarceration",
  "fetishism",
  "organ",
  "phalli",
  "machine",
  "aerogel",
  "bandwith",
  "computronium",
  "connectome",
  "genome",
  "function",
  "bitflip",
  "sphere",
  "gravity",
  "second",
  "automaton",
  "apocalypse",
  "influx",
  "technica",
];
verbSingularArray = [
  "needs",
  "wants",
  "eats",
  "marginalizes",
  "engulfs",
  "consumes",
  "synthesizes",
  "dismantles",
  "dislocates",
  "runs",
  "begets",
  "magicks",
  "explodes",
  "quantizes",
  "escapes",
  "transcends",
];
let prepositionArray = [
  "of",
  "for",
  "by",
  "with",
  "behind",
  "from",
  "against",
  "circa",
  "inside of",
  "below",
  "into",
  "onto",
  "between",
  "outside of",
  "via",
];
let verbDirectionalArray = [
  "walks into",
  "walks past",
  "walks by",
  "falls into",
  "runs into",
  "runs by",
];
let verbSensoryArray = [
  "see",
  "feel",
  "hear",
  "touch",
  "taste",
  "lick",
  "sniff",
  "smell",
  "fuck",
  "swallow",
  "engulf",
];
let gerundArray = [
  "collapsing",
  "resurrecting",
  "desiring",
  "sterilizing",
  "vaccinating",
  "uploading",
  "excreting",
  "downloading",
  "exploding",
  "hybridizing",
  "dreaming",
  "streaming",
  "accelerating",
];
let adjectiveArray = [
  "geologic",
  "chronic",
  "avian",
  "limbic",
  "corporate",
  "fleshy",
  "synaptic",
  "optic",
  "alien",
  "swarm",
  "neural",
  "aural",
  "erotic",
  "protocol",
  "maximum",
  "runaway",
  "sentient",
  "self-directed",
  "biological",
  "machinic",
  "automated",
  "adaptive",
  "luxury",
  "self-replicating",
  "cellular",
  "quantum",
];
let prefixArray = [
  "xeno",
  "nano",
  "micro",
  "femto",
  "auto",
  "not-",
  "anti",
  "meat-",
  "macro",
  "other-",
  "hyper",
  "neuro",
  "necro",
  "un-",
  "dis",
  "techno",
  "anthropo",
  "neo",
  "noo",
  "immuno",
  "post",
  "electro",
  "bio",
  "eco",
];
let suffixArray = [
  "spherics",
  "cide",
  "cracy",
  "ism",
  "logy",
  "netics",
  "technics",
  "tropics",
  "terror",
  "tronics",
  "sophy",
  "phany",
];
let posessivePronounArray = ["your", "their", "his", "my", "her", "our"];
let pronounArray = ["you", "i", "he", "she", "they", "it", "we"];
let conjunctionArray = ["and", "or"];
let canArray = [
  "can",
  "can't",
  "will",
  "won't",
  "should",
  "shouldn't",
  "could",
  "wanted to",
  "couldn't",
];
let conditionalArray2 = [
  "if",
  "when",
  "in the event that",
  "if ever",
  "where",
  "because",
  "and",
  "or",
];
let pronounIntroArray = ["it started with", ""];
let conditionalArray = ["without", "before", "while", "after"];
affirmNegateArray = ["yeah", "yes", "no", "nope"];

console.log("by Tau Dolly");

let gerundFind = function () {
  return gerundArray[Math.floor(Math.random() * (gerundArray.length - 1))];
};
let pronounIntroFind = function () {
  return pronounIntroArray[
    Math.floor(Math.random() * (pronounIntroArray.length - 1))
  ];
};
let affirmNegateFind = function () {
  return affirmNegateArray[
    Math.floor(Math.random() * (affirmNegateArray.length - 1))
  ];
};
let nounFind = function () {
  return nounArray[Math.floor(Math.random() * (nounArray.length - 1))];
};
let prepositionFind = function () {
  return prepositionArray[
    Math.floor(Math.random() * (prepositionArray.length - 1))
  ];
};
let adjectiveFind = function () {
  return adjectiveArray[
    Math.floor(Math.random() * (adjectiveArray.length - 1))
  ];
};
let verbSensoryFind = function () {
  return verbSensoryArray[
    Math.floor(Math.random() * (verbSensoryArray.length - 1))
  ];
};
let imperativeVerbFind = function () {
  return imperativeVerbArray[
    Math.floor(Math.random() * (imperativeVerbArray.length - 1))
  ];
};
let prefixFind = function () {
  return prefixArray[Math.floor(Math.random() * (prefixArray.length - 1))];
};
let suffixFind = function () {
  return suffixArray[Math.floor(Math.random() * (suffixArray.length - 1))];
};

let pronounFind = function () {
  return pronounArray[Math.floor(Math.random() * (pronounArray.length - 1))];
};
let posessivePronounFind = function () {
  return posessivePronounArray[
    Math.floor(Math.random() * (pronounArray.length - 1))
  ];
};
let canFind = function () {
  return canArray[Math.floor(Math.random() * (canArray.length - 1))];
};
let conditionalFind = function () {
  return conditionalArray[
    Math.floor(Math.random() * (conditionalArray.length - 1))
  ];
};
let verbSingularFind = function () {
  return verbSingularArray[
    Math.floor(Math.random() * (verbSingularArray.length - 1))
  ];
};
let nounSingularFind = function () {
  return nounSingularArray[
    Math.floor(Math.random() * (nounSingularArray.length - 1))
  ];
};
let verbDirectionalFind = function () {
  return verbDirectionalArray[
    Math.floor(Math.random() * (verbDirectionalArray.length - 1))
  ];
};
let conditional2Find = function () {
  return conditionalArray2[
    Math.floor(Math.random() * (conditionalArray2.length - 1))
  ];
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$(button).on("click", function () {
  let line1 = `${gerundFind()} ${prefixFind()}${nounFind()} ${prepositionFind()} ${nounFind()}.`;
  let line2 = `${pronounFind()} ${canFind()} ${imperativeVerbFind()} ${adjectiveFind()} ${nounFind()} ${conditionalFind()} ${gerundFind()} ${prefixFind()}${nounFind()}.`;
  let line3 = `${imperativeVerbFind()} ${nounFind()}! ${prefixFind()}${imperativeVerbFind()} ${prefixFind()}${suffixFind()}! `;
  let line4 = `${prefixFind()}${nounFind()}.`;
  let line5 = `The ${nounSingularFind()} ${verbSingularFind()} ${nounFind()}.`;
  let line6 = `${conditional2Find()} ${prefixFind()}${nounSingularFind()} ${verbDirectionalFind()} ${nounSingularFind()}: ${adjectiveFind()} ${nounFind()}.`;
  let line7 = `${nounFind()} ${gerundFind()} ${nounFind()}. ${nounFind()} ${gerundFind()} ${nounFind()}. `;
  let line8 = `${verbSensoryFind()} ${prefixFind()}${prefixFind()}${nounSingularFind()}.`;

  let lineArray = [line1, line2, line3, line4, line5, line6, line7, line8];

  shuffle(lineArray);

  text.innerHTML = `${lineArray[0]} <br> ${lineArray[1]} <br> ${lineArray[2]} <br> ${lineArray[3]} <br> ${lineArray[4]} <br> ${lineArray[5]} <br> ${lineArray[6]} <br> ${lineArray[7]}`;
  // text.innerHTML = `${line1} <br>${line2} <br>${line3}<br> ${line4}<br> ${line5}`;

  // console.log(numberArray);
  // console.log(text.innerHTML);
});
