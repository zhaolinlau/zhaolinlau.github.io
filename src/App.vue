<template>
	<NavBar></NavBar>

	<section
		class="hero is-fullheight-with-navbar is-dark has-text-white"
	>
		<div class="hero-body">
			<div class="container">
				<p class="subtitle">Hello! I am</p>
				<p class="title is-1 has-text-white is-italic">Zhaolin Lau</p>
				<p class="subtitle is-3 has-text-white">
					A Passionate Web Developer From Malaysia
				</p>
			</div>
		</div>
	</section>

	<section class="section" id="about">
		<div class="container">
			<p class="title has-text-centered">About Me</p>
		</div>
	</section>

	<section class="section" id="skills">
		<div class="container">
			<p class="title has-text-centered mt-3">My Skills</p>
		</div>
	</section>

	<section class="section" id="portfolio">
		<div class="container">
			<p class="title has-text-centered">Portfolio</p>

			<div class="columns is-multiline">
				<div class="column is-4">
					<div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  <span>University Counselling Website</span>
                </p>
              </header>
              <div class="card-content">
                <figure class="image">
                  <img src="./assets/utmfd.png" alt="工大Foundation & Diploma升学辅导站">
                </figure>
              </div>
              <footer class="card-footer">
                <a href="https://utmfd.github.io/" class="card-footer-item" target="_blank">Preview</a>
              </footer>
            </div>
				</div>
			</div>
		</div>
	</section>

	<section class="section" id="contact">
		<div class="container">
			<p class="title has-text-centered">Contact Me</p>
		</div>
	</section>
</template>

<script>
	import NavBar from "./components/NavBar.vue";
	export default {
		components: {
			NavBar,
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
