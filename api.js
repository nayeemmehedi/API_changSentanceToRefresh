fetch('https://randomuser.me/api')
  .then(response => response.json())
  .then(json => {

    let json_result =json.results[0]


    let  final_work = json_result.name
    
    full_name = `${final_work.title} ${final_work.first} ${final_work.last}`

     let html_id = document.getElementById("name")
     let value = html_id.innerText = full_name

  })

 
  
  

