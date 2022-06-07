function changePic(pic, credits) {
    document.getElementById('bio-pic').src = pic
    if (credits) {
      document.getElementById('photo-by-container').style.display = ''
    } else {
      document.getElementById('photo-by-container').style.display = 'none'
    }
    document.getElementById('photo-by').innerText = credits
}