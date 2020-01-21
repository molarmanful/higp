let win = $(window)
let slides = $('.slide')

let s_ind = 0

let found = (x, xs)=> ~xs.indexOf(x)
let update = _=>{
  let nxt = slides.eq(s_ind)
  win.scrollTop(nxt.offset().top)
  slides.removeClass('active full')
  nxt.addClass('active')
  if($('.active video').length){
    $('.active video').get(0).currentTime = 0
  }
}

onkeydown = e=>{
  let up = [37, 38]
  let down = [32, 39, 40]
  let size = [13]
  let rsize = [8]

  if(found(e.keyCode, [...up, ...down, ...size])){
    e.preventDefault()
    if(found(e.keyCode, down) && s_ind < slides.length - 1){
      s_ind++
      update()
    }
    else if(found(e.keyCode, up) && s_ind){
      s_ind--
      update()
    }
    else if(found(e.keyCode, size)){
      $('.active').toggleClass('full')
    }
    else if(found(e.keyCode, rsize)){
      slides.removeClass('full')
    }
  }
}

onbeforeunload = _=>{
  scrollTo(0, 0)
}
