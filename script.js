const songs =[
"Family Matters.mp3",
"Fresh Prince of Bel Air.mp3",
"Kenan and Kel.mp3",
"Passions.mp3",
"Saved by the Bell.mp3",
"The Parkers.mp3"
]

const createsonglist = () => {
    const list = document.createElement('ol')

    for (let i = 0; i <songs.length; i++) {
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(songs[i]))

        list.appendChild(item)
    }
    return list 
}

document.getElementById('songlist').appendChild(createsonglist())

songlist.onclick = (e) => {
//console.log(e)
const clickedItem = e.target
const source = document.getElementById('source')
source.src = 'songs/' + clickedItem.innerText
//console.log(clickedItem.innerText)

document.getElementById('currentlyplaying').innerText = "Currently Playing:  "
document.getElementById('currentsong').innerText = clickedItem.innerText

player.load()
player.play()
}

const playAudio = () => {
    if (player.readyState) {
      player.play()  
    }
}

const pauseAudio = () => {
      player.pause()  

}

const slider = document.getElementById('volumeslider')
slider.oninput = (e) => {
    //console.log(e)
const volume = e.target.value
    //console.log(volume)
player.volume = volume
}

const updateprogress = () => {
    if (player.currentTime > 0) {
        const progressbar = document.getElementById('progress')
        //console.log(progressbar.value + "progress bar value")
        //console.log(player.currentTime + "current time")
        //console.log(player.duration + "duration")
        progressbar.value = (player.currentTime/player.duration)*100
    }
   
}