<script setup>
import { VueWriter } from 'vue-writer';
const date = new Date();
const expYear = date.getFullYear() - 2021;
</script>

<template>
	<BackTop />
	<section class="hero is-fullheight">
		<div class="hero-body">
			<div class="container">
				<p class="subtitle">Hello! I am</p>
				<p class="title is-1 is-italic">Zhaolin Lau</p>
				<p class="subtitle is-3">
					<VueWriter :typeSpeed="50" :eraseSpeed="50" :array="['Developer From Malaysia']">
						A Passionate Web
					</VueWriter>
				</p>

				<div class="buttons">
					<SocialButtons />
				</div>
			</div>
		</div>
	</section>

	<section class="section" id="about">
		<div class="container">
			<p class="title mt-5 has-text-centered">
				<span class="icon-text">
					<span class="icon">
						<span class="mdi mdi-information-variant-circle-outline"></span>
					</span>
					<span>About Me</span>
				</span>
			</p>
			<div class="columns is-multiline is-vcentered">
				<div class="column is-4">
					<figure class="image">
						<NuxtImg class="is-rounded" src="img/me.jpg" alt="LAU ZHAO LIN" />
					</figure>
				</div>
				<div class="column is-8">
					<p class="subtitle has-text-centered">Jack of all trades, master of "some"</p>
					<p class="has-text-justified">
						Web developer with more than <b>{{ expYear }} years</b> of well-rounded hands-on experience in web
						technologies like <b>Vue</b>, <b>Nuxt</b>,
						and <b>Laravel</b>, and a passion for <b>Lemon Tea</b>. Currently in my final year as a <b>Software
							Engineering</b>
						student,
						seeking an <b>internship</b> opportunity with <b>6 months</b> of duration from <b>10 March 2025 to 22 August
							2025</b> to
						work
						and
						upgrade, as
						well as being involved in an organization that believes
						in gaining a competitive edge and giving back to the community.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section has-text-centered" id="skills">
		<div class="container">
			<p class="title mt-5">
				<span class="icon-text">
					<span class="icon">
						<span class="mdi mdi-code-tags"></span>
					</span>
					<span>My Skills</span>
				</span>
			</p>

			<SkillCards />
		</div>
	</section>

	<section class="section" id="projects">
		<div class="container">
			<p class="title has-text-centered mt-5">
				<span class="icon-text">
					<span class="icon">
						<span class="mdi mdi-folder-file"></span>
					</span>
					<span>My Projects</span>
				</span>
			</p>

			<ProjectCards />
		</div>
	</section>

	<section class="section" id="contact">
		<div class="container">
			<p class="title has-text-centered mt-5">
				<span class="icon-text">
					<span class="icon">
						<span class="mdi mdi-mailbox"></span>
					</span>
					<span>Contact Me</span>
				</span>
			</p>
			<div class="columns">
				<div class="column is-6 is-offset-3">
					<ContactForm />
				</div>
			</div>
		</div>
	</section>
</template>

<style>
.is-typed span.cursor {
	display: inline-block;
	width: 5px;
	animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
	animation: none;
}

@media (prefers-color-scheme: dark) {
	@keyframes blink {
		0%,

		100% {
			background-color: #f5f5f5;
		}

		50% {
			background-color: transparent;
		}
	}
}

@media (prefers-color-scheme: light) {
	@keyframes blink {
		0%,

		100% {
			background-color: #4a4a4a;
		}

		50% {
			background-color: transparent;
		}
	}
}
</style>