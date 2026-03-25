function changePic(pic, credits) {
    document.getElementById('bio-pic').src = pic
    if (credits) {
      document.getElementById('photo-by-pre').style.display = ''
      document.getElementById('photo-by').innerText = credits
    } else {
      document.getElementById('photo-by-pre').style.display = 'none'
      document.getElementById('photo-by').innerHTML = '&nbsp;'
    }
}