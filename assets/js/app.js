(function(){

  console.log('Hello Slack Clone!')

  var turbo = Turbo({site_id: '59ad89f7e6317e0011a24131'})

  $('#btn-sign-up').click(function(event){
  	event.preventDefault()
  	console.log('SIGN UP!')
  })

})()