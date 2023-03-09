function introduction(name) {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name,language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}`
}

function introduction(name = "Aki") {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language = "Ember.js") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introduction(name = "Gracie") {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

