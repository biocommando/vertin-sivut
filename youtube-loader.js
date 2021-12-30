
// Load the IFrame Player API code asynchronously.
var createdScriptTag = document.createElement('script');
createdScriptTag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(createdScriptTag, firstScriptTag);
var ytVidDimensions = { width: 320, height: 180 }

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
    vidLinks.forEach(function (linkObj, idx) {
        var parent = document.createElement('div')
        parent.style.display = 'inline-table'
        parent.style.marginBottom = '15px'
        parent.style.width = ytVidDimensions.width + 'px'
        parent.style.height = (ytVidDimensions.height + 40) + 'px'
        var el = document.createElement('div')
        parent.appendChild(el)
        el.id = 'ytvid-' + idx
        document.getElementById('ytplayer').appendChild(parent)
        player = new YT.Player('ytvid-' + idx, {
            height: ytVidDimensions.height,
            width: ytVidDimensions.width,
            videoId: linkObj.link.replace(/.*=/g, '')
        });
        var description = document.createElement('div')
        description.setAttribute('data-t', 'link_' + linkObj.key)
        description.style.height = '40px'
        parent.appendChild(description)
    })
    changeLanguage(currentLang)
}