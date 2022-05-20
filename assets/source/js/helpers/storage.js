const storage = (action, key, value) => {
  if(action == "SET") {

   localStorage.setItem(key, value)

  } else {

    return localStorage.getItem(key)
  }  
}