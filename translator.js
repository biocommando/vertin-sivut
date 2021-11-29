
function changeLanguage(language) {
    currentLang = language
    document.querySelectorAll('[data-t]').forEach(function (el) {
        var transKey = el.getAttribute('data-t')
        if (translators[transKey]) {
            translators[transKey](language)
        }
        else {
            el.innerText = t[transKey][language]
        }
    })
    document.title = t.title[language]
}

function fillContent(language, contentElement) {
    var parent = document.getElementById(contentElement)
    var paragraphs = content[language].split('\n')
    var html = ''
    paragraphs.forEach(function (p) {
        html += '<p>' + p + '</p>'
    })
    parent.innerHTML = html
}

function initTranslator(initialLang, contentElements) {
    if (!window.translators)
        translators = {}
    contentElements.forEach(function (contentElement) {
        translators[contentElement] = function (lang) { fillContent(lang, contentElement) }
    })
    changeLanguage(initialLang)
}