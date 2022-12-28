<template>
	<section class="hero is-fullheight-with-navbar is-dark is-bold">
		<div class="hero-body">
			<div class="container">
				<p class="subtitle">Hello! I am</p>
				<p class="title is-1 is-italic">Zhaolin Lau</p>
				<p class="subtitle is-3">
					A Passionate Web Developer From Malaysia
				</p>
			</div>
		</div>
	</section>

	<NavBar></NavBar>

	<section class="section has-text-centered" id="about">
		<div class="container">
			<p class="title mt-3">About Me</p>
			<p class="subtitle">Jack of all trades, master of "some"</p>
			<p>
				Web developer with more than <b>3 years</b> of well-rounded experience with a diploma in the field of <b>Computer Science</b>, extensive knowledge of modern Web techniques and love for <b>Milo</b>. Looking for an opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community.
			</p>
		</div>
	</section>

	<section class="section has-text-centered" id="skills">
		<div class="container">
			<p class="title mt-3">My Skills</p>
			<div class="columns is-multiline is-mobile">
				<div class="column is-4">
					<p>HTML</p>
				</div>

				<div class="column is-4">
					<p>CSS</p>
				</div>

				<div class="column is-4">
					<p>JavaScript</p>
				</div>

				<div class="column is-4">
					<p>PHP</p>
				</div>

				<div class="column is-4">
					<p>MySQL</p>
				</div>

				<div class="column is-4">
					<p>Bulma</p>
				</div>

				<div class="column is-4">
					Bootstrap
				</div>

				<div class="column is-4">
					<p>Vue.js</p>
				</div>

				<div class="column is-4">
					<p>Laravel</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section" id="portfolio">
		<div class="container">
			<p class="title has-text-centered mt-3">Portfolio</p>

			<div class="columns is-multiline is-centered">
				<div class="column is-4">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								<span>University Counselling Website</span>
							</p>
						</header>
						<div class="card-content">
							<figure class="image">
								<img
									src="./assets/utmfd.png"
									alt="工大Foundation & Diploma升学辅导站"/>
							</figure>
						</div>
						<footer class="card-footer">
							<a
								href="https://utmfd.github.io/"
								class="card-footer-item"
								target="_blank">
								Preview
							</a>
							<a
								href="https://github.com/UTMFD/utmfd.github.io"
								class="card-footer-item"
								target="_blank">
								Source Code
							</a>
						</footer>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="section" id="contact">
		<div class="container">
			<p class="title has-text-centered mt-3">Contact Me</p>
			<div class="columns">
				<div class="column is-6 is-offset-3">
					<form class="box" action="" method="post">
						<o-field label="Subject">
							<o-input required hasCounter></o-input>
						</o-field>

						<o-field label="Name">
							<o-input required></o-input>
						</o-field>

						<o-field label="Email">
							<o-input type="email" required></o-input>
						</o-field>

						<o-field label="Message">
							<o-input type="textarea" required></o-input>
						</o-field>

						<o-field grouped>
							<o-button nativeType="submit" variant="primary" rounded disabled>Send</o-button>
							<o-button nativeType="reset" rounded>Reset</o-button>
						</o-field>
					</form>
				</div>
			</div>
		</div>
	</section>

	<AppFooter></AppFooter>
</template>

<script>
	import NavBar from "./components/navbar.vue";
	import AppFooter from "./components/footer.vue";
	export default {
		components: {
			NavBar,
			AppFooter,
		},
	};
</script>

<style>
	html {
		scroll-behavior: smooth;
	}

	img {
		pointer-events: none;
	}
</style>

<style>
	html {
		scroll-behavior: smooth;
	}

	img {
		pointer-events: none;
	}
</style>
