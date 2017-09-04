(function(){

  console.log('Hello Slack Clone!')

  var turbo = Turbo({site_id: '59ad89f7e6317e0011a24131'})

  $('#btn-sign-up').click(function(event){
  	event.preventDefault()

  	var email = $('#input-sign-up').val()
    if (email == null){
    	alert('Please Enter Your Email Address')
    	return
    }

    if (email.length == 0){
        alert('Please Enter Your Email Address')
        return
    }

  	console.log('SIGN UP!'+email)
  	

  	turbo.createUser({email: email}, function(err, data){
  	  if (err){
  	  	alert('Error: '+err.message)
  	  	return
  	  }

  	  console.log('USER REGISTERED: '+JSON.stringify(data))
  	  window.location.href = '/get-started'
  	})
  })

})()