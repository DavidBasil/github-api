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
			$.ajax({
				url: 'https://api.github.com/users/' + username + '/repos',
				data: {
					client_id: '63480937426bd084b97b',
					client_secret: '93c6936718fec3a1aa6534f27c97329700d90e22',
					sort: 'created: asc',
				}
			}).done(function(repos){
				$.each(repos, function(index, repo){
					$('#repos').append(`
							<div>
								<div class="row">
									<div>
										<strong>${repo.name}</strong>: ${repo.description}
									</div>
									<div></div>
									<div></div>
								</div>
							</div>
					`)
				})
			})
			$('#profile').html(`
				<h4>${user.name}</h4>
				<div class="row">
					<div class="one-third column">
					 <img src="${user.avatar_url}" style="width: 100%;">
					 <a href="${user.html_url}" target="_blank">View Profile</a>
					</div>
					<div class="two-thirds column">
						<span>Public repos: ${user.public_repos}</span>	
						<span>Public gists: ${user.public_gists}</span>	
						<span>Followers: ${user.followers}</span>	
						<span>Following: ${user.following}</span>	
						<ul>
							<li>Company: ${user.company}</li>
							<li>Website: <a href="${user.blog}">${user.blog}</a></li>
							<li>Location: ${user.location}</li>
							<li>Member: ${user.created_at}</li>
						</ul>
					</div>
				</div> 
				<h3>Latest Repos</h3>
				<div id="repos"></div>
			`)
		})
	})


}) // end of main function
