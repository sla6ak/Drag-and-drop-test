const bear1 = document.querySelector('.bear1')
const portals = document.querySelectorAll('.portal1')

bear1.addEventListener('dragstart', dragstart1)
bear1.addEventListener('dragend', dragend1)

for (const portal of portals){
    portal.addEventListener('dragover',dragover1)
    portal.addEventListener('dragenter', dragenter1)
    portal.addEventListener('dragleave', dragleave1)
    portal.addEventListener('drop', drop1)
}

function dragstart1 (event){
    event.target.classList.add('active')
    setTimeout(()=>event.target.classList.add('none'),0)
}
function dragend1 (event){
    event.target.classList.remove('active')
    event.target.classList.remove('none')
}
function dragover1(event){
    event.preventDefault()
}
function dragenter1(event){
    event.target.classList.add('plase')
}
function dragleave1(event){
    event.target.classList.remove('plase')
}
function drop1(event){
    event.target.append(bear1)
    event.target.classList.remove('plase')
}
// ******************************************************
const bear2 = document.querySelector('.bear2')
const portals2 = document.querySelectorAll('.portal2')

bear2.addEventListener('dragstart', dragstart2)
bear2.addEventListener('dragend', dragend2)

for (const portal2 of portals2){
    portal2.addEventListener('dragover',dragover2)
    portal2.addEventListener('dragenter', dragenter2)
    portal2.addEventListener('dragleave', dragleave2)
    portal2.addEventListener('drop', drop2)
}

function dragstart2 (event){
    event.target.classList.add('active')
    setTimeout(()=>event.target.classList.add('none'),0)
}
function dragend2 (event){
    event.target.classList.remove('active')
    event.target.classList.remove('none')
}
function dragover2(event){
    event.preventDefault()
}
function dragenter2(event){
    event.target.classList.add('plase')
}
function dragleave2(event){
    event.target.classList.remove('plase')
}
function drop2(event){
    event.target.append(bear2)
    event.target.classList.remove('plase')
}
