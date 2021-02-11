fetch('http://www.boredapi.com/api/activity/')
  .then(response => response.json())
  .then(json => namebd (json))

  let namebd = data =>{
      
      let a = data.activity

      let b = document.getElementById("bored_bd")
      b.innerText = a
  
  }

