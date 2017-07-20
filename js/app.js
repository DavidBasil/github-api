$(function(){

	// get input value on keyup and make ajax call to github
	$('#searchUser').on('keyup', function(e){
		let username = e.target.value
		// ajax
		$.ajax({
			url: 'https://api.github.com/users/' + username,
			data: {
				client_id: '63480937426bd084b97b',
				client_secret: '93c6936718fec3a1aa6534f27c97329700d90e22'
			}
		}).done(function(user){
			$('#profile').html(`
				${user.name}	
			`)
		})
	})


}) // end of main function
