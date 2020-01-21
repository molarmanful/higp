let found = (x, xs)=> ~xs.indexOf(x)

onkeydown = e=>{
  let up = [37, 38]
  let down = [32, 39, 40]
  if(found(e.keyCode, [...up, ...down])){
    e.preventDefault()
    if(found(e.keyCode, down)){
      scrollBy(0, innerHeight)
    } else if(found(e.keyCode, up)){
      scrollBy(0, -innerHeight)
    }
  }
}

onbeforeunload = _=>{
  scrollTo(0, 0)
}
