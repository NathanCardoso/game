
const ajax = (obj) => { 
  //  action, method, data={}, callback,  
  let args = {}
  args.url = CONFIG.apiURL+obj.action
  args.type = obj.method
  args.contentType = "application/json"
  args.dataType = "json"
  args.success = function(data){ // 200 OK
    obj.callback (data) 
  }
  args.error = function(jqXhr, err, msg){
    obj.callback (jqXhr.responseJSON)
    if(obj.action !== 'login' && obj.action !== 'register') {
      $.Toast("Desculpe", jqXhr.responseJSON.data, 'error')
    }
    if(jqXhr.status === 401 && JSON.parse(jqXhr.responseText).message === "Token has expired") {
      obj.action = 'refresh'
      obj.method = 'post'
      ajax(obj)
    }
  }
  if(obj.data) {
    args.data = JSON.stringify(obj.data)
  }
  if(obj.headers) {
    args.headers = obj.headers
  }
  $.ajax(args);
}   