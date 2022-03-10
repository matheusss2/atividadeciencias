const reference = document.querySelector("#base")
reference.addEventListener("input", () => {
  reference.value = reference.value.toUpperCase()
})
const possibles = "abcdefghijklmnopqrstuvwxyz".split("")
var selectLetter = "a"
const change = document.querySelector("input")
const allTd = document.querySelectorAll("td")
///////////////////////////////////////////////////////////////////
change.addEventListener("input", updateCeil)
allTd.forEach(e => {
  e.addEventListener("click", update)
})

allTd.forEach((e, i) => {
  const p = [1, 2, 3, 6]
  if (p.indexOf(i) > -1) {
    e.addEventListener("click", updateString)
  }
})
allTd.forEach((e, i) => {
  e.addEventListener("click", update)
})
function sup(l) {
  return `${l}<sup>${selectLetter.toUpperCase()}</sup>${l}<sup>${selectLetter.toLowerCase()}</sup>`
}
function supl(l) {
  return `${l}<sup>${selectLetter.toLowerCase()}</sup>${l}<sup>${selectLetter.toLowerCase()}</sup>`
}
function supu(l) {
  return `${l}<sup>${selectLetter.toUpperCase()}</sup>${l}<sup>${selectLetter.toUpperCase()}</sup>`
}
///////////////////////////////////////////////////////////////////
function prepare(element1, element2) {
  if (element1.innerText == `X${selectLetter.toLowerCase()}` &&
    element2.innerText == `X${selectLetter.toUpperCase()}` ||
    element1.innerText == `X${selectLetter.toUpperCase()}` &&
    element2.innerText == `X${selectLetter.toLowerCase()}`
  ) {
    return sup("X")
  }
  if (element1.innerText == `X${selectLetter.toLowerCase()}` &&
    element2.innerText == `X${selectLetter.toLowerCase()}`) {
    return supl("X")
  }
  if (element1.innerText == `X${selectLetter.toUpperCase()}` &&
    element2.innerText == `X${selectLetter.toUpperCase()}`) {
    return supu("X")
  } if (element1.innerText == `X${selectLetter.toLowerCase()}` &&
    element2.innerText == `X` ||
    element1.innerText == `X` &&
    element2.innerText == `X${selectLetter.toLowerCase()}`
  ) {
    return `X<sup>${selectLetter.toLowerCase()}</sup>X<sup></sup>`
  } if (element1.innerText == `X${selectLetter.toUpperCase()}` &&
    element2.innerText == `X` ||
    element1.innerText == `X` &&
    element2.innerText == `X${selectLetter.toUpperCase()}`
  ) {
    return `X<sup>${selectLetter.toUpperCase()}</sup>X<sup></sup>`
  } if (element1.innerText == `X` &&
    element2.innerText == `X`
  ) {
    return `X<sup></sup>X<sup></sup>`
  }


  /////////////////////////////////////////////////////////////
  if (element1.innerText == `Y` &&
    element2.innerText == `X`) {
    return "XY"
  }
  if (element1.innerText == `Y${selectLetter.toLowerCase()}` &&
    element2.innerText == `X`) {
    return `X<sup></sup>Y<sup>${selectLetter.toLowerCase()}</sup>`
  }
  if (element1.innerText == `Y${selectLetter.toUpperCase()}` &&
    element2.innerText == `X`) {
    return `X<sup></sup>Y<sup>${selectLetter.toUpperCase()}</sup>`
  }
  if (element1.innerText == `Y${selectLetter.toLowerCase()}` &&
    element2.innerText == `X${selectLetter.toLowerCase()}`) {
    return `X<sup>${selectLetter.toLowerCase()}</sup>Y<sup>${selectLetter.toLowerCase()}</sup>`
  }
  if (element1.innerText == `Y${selectLetter.toUpperCase()}` &&
    element2.innerText == `X`) {
    return `X<sup></sup>Y<sup>${selectLetter.toUpperCase()}</sup>`
  }

  if (element1.innerText == `Y${selectLetter.toUpperCase()}` &&
    element2.innerText == `X${selectLetter.toUpperCase()}`
  ) {
    return `X<sup>${selectLetter.toUpperCase()}</sup>Y<sup>${selectLetter.toUpperCase()}</sup>`
  }
  if (element1.innerText == `Y` &&
    element2.innerText == `X${selectLetter.toUpperCase()}`
  ) {
    return `X<sup>${selectLetter.toUpperCase()}</sup>Y<sup></sup>`
  }
  if (element1.innerText == `Y` &&
    element2.innerText == `X${selectLetter.toLowerCase()}`
  ) {
    return `X<sup>${selectLetter.toLowerCase()}</sup>Y<sup></sup>`
  }
  if (element1.innerText == `Y${selectLetter.toUpperCase()}` &&
    element2.innerText == `X${selectLetter.toLowerCase()}`
  ) {
    return `X<sup>${selectLetter.toLowerCase()}</sup>Y<sup>${selectLetter.toUpperCase()}</sup>`
  }
  if (element1.innerText == `Y${selectLetter.toLowerCase()}` &&
    element2.innerText == `X${selectLetter.toUpperCase()}`
  ) {
    return `X<sup>${selectLetter.toUpperCase()}</sup>Y<sup>${selectLetter.toLowerCase()}</sup>`
  }
  
  

}
///////////////////////////////////////////////////////////////////
function update() {
  allTd[4].innerHTML = prepare(allTd[1], allTd[3])
  allTd[7].innerHTML = prepare(allTd[1], allTd[6])
  allTd[5].innerHTML = prepare(allTd[2], allTd[3])
  allTd[8].innerHTML = prepare(allTd[2], allTd[6])
}
///////////////////////////////////////////////////////////////////
function updateCeil(e) {
  try {
    if (possibles.indexOf(e.data.toLowerCase()) < 0) {
      alert("please select a valid character")
      reference.value = "A"
      return
    }
  } catch { }
  if (e.inputType == "insertText") {
    selectLetter = e.data.toLowerCase()
    allTd[1].innerHTML = `X<sup>${selectLetter}</sup>`
    allTd[2].innerHTML = `Y<sup></sup>`
    allTd[3].innerHTML = `X<sup>${selectLetter.toUpperCase()}</sup>`
    allTd[6].innerHTML = `X<sup>${selectLetter.toUpperCase()}</sup>`
    update()
  } else {
    return
  }
}
///////////////////////////////////////////////////////////////////


function updateString(e) {
  const st = e.path[0]
  if (st.innerText == `X${selectLetter.toLowerCase()}`) {
    st.innerHTML = `X<sup>${selectLetter.toUpperCase()}</sup>`
    return
  }
  if (st.innerText == `X${selectLetter.toUpperCase()}`) {
    st.innerHTML = `X`
    return
  }
  if (st.innerText == `X`) {
    st.innerHTML = `X<sup>${selectLetter.toLowerCase()}</sup>`
    return
  }




  if (st.innerText == `Y${selectLetter.toLowerCase()}`) {
    st.innerHTML = `Y<sup>${selectLetter.toUpperCase()}</sup>`
    return
  }
  if (st.innerText == `Y${selectLetter.toUpperCase()}`) {
    st.innerHTML = `Y`
    return
  }
  if (st.innerText == `Y`) {
    st.innerHTML = `Y<sup>${selectLetter.toLowerCase()}</sup>`
    return
  }

}
update()
setInterval(() => {
  update()
}, 300);
