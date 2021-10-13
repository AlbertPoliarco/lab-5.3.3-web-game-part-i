function newImage() {
    
    let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

let tree = document.createElement('img')
tree.src = 'assets/tree.png'
tree.style.position = 'fixed'
tree.style.left = '200px'
tree.style.bottom = '300px'
document.body.append(tree)

let pillar = document.createElement('img')
pillar.src = 'assets/pillar.png'
pillar.style.position = 'fixed'
pillar.style.left = '350px'
pillar.style.bottom = '100px'
document.body.append(pillar)

let crate = document.createElement('img')
crate.src = 'assets/crate.png'
crate.style.position = 'fixed'
crate.style.left = '150px'
crate.style.bottom = '200px'
document.body.append(crate)

let well = document.createElement('img')
well.src = 'assets/well.png'
well.style.position = 'fixed'
well.style.left = '500px'
well.style.bottom = '425px'
document.body.append(well)
}

newImage()
function newItem(){
    let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.style.position = 'fixed'
sword.style.left = '500px'
sword.style.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})

let shield = document.createElement('img')
shield.src = 'assets/sheild.png'
shield.style.position = 'fixed'
shield.style.left = '165px'
shield.style.bottom = '600px'
document.body.append(shield)

let staff = document.createElement('img')
staff.src = 'assets/staff.png'
staff.style.position = 'fixed'
staff.style.left = '600px'
staff.style.bottom = '100px'
document.body.append(staff)
}
newItem()


// let grass = document.createElement('img')
// grass.src = 'assets/grass.png'
// window.innerWidth = '100px'
// window.innerHeight = '100px'
// document.body.append(grass)


function myGrass() {
    let grass = document.createElement('img')
var w = window.innerWidth
var h = window.innerHeight
grass.src = 'assets/grass.png'
document.getElementById("demo").innerHTML = "Width: 100 " + w + "<br>Height: 100" + h;
document.body.append(grass)
myGrass()