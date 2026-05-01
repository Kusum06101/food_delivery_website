let storedData=JSON.parse(localStorage.getItem('userData'))
console.log(storedData)

let personImage=storedData.imageUrl
console.log(personImage)

let userImage=document.getElementById('userImage')
userImage.src=`${personImage}`