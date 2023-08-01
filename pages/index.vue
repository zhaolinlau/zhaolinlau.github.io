<script setup>
import { ref } from 'vue'

const isLoading = ref(false)

const isSubmitted = ref(false)

const captcha = ref(false)

const isSending = ref(false)

function openNotification() {
	isSubmitted.value = true
}

function openLoading() {
	isLoading.value = true
}

function Sending() {
	isSending.value = true
}

function resetForm(form) {
	const captchaValue = form.elements['_captcha'].value
	form.reset()
	form.elements['_captcha'].value = captchaValue
}

function submitForm(event) {
	event.preventDefault()
	openLoading()
	Sending()

	const form = event.target
	const formData = new FormData(form)

	fetch('https://formsubmit.co/c771b3ea7ca4ec5d9aa6e7621c42027e', {
		method: 'POST',
		body: formData
	})
		.then(response => {
			console.log(response)
			if (response.ok) {
				resetForm(form)
			}
		})
		.catch(error => {
			console.error(error)
		})
		.finally(() => {
			openNotification()
			isLoading.value = false
			isSending.value = false
		})
}
</script>

<template>
	<section class="hero is-fullheight is-dark is-bold">
		<div class="hero-body">
			<div class="container">
				<p class="subtitle">Hello! I am</p>
				<p class="title is-1 is-italic">Zhaolin Lau</p>
				<p class="subtitle is-3">
					A Passionate Web Developer From Malaysia
				</p>
				<div class="buttons">
					<a class="button is-dark" href="https://github.com/zhaolinlau" target="_blank">
						<span class="icon-text">
							<span class="icon">
								<span class="mdi mdi-github mdi-24px"></span>
							</span>
							<span>GitHub</span>
						</span>
					</a>
					<a class="button is-link" href="https://www.facebook.com/zhaolinlau/" target="_blank">
						<span class="icon-text">
							<span class="icon">
								<span class="mdi mdi-facebook mdi-24px"></span>
							</span>
							<span>Facebook</span>
						</span>
					</a>
					<a class="button is-danger is-light" href="https://www.instagram.com/zhaolin_lau/" target="_blank">
						<span class="icon-text">
							<span class="icon">
								<span class="mdi mdi-instagram mdi-24px"></span>
							</span>
							<span>Instagram</span>
						</span>
					</a>
					<a class="button is-info" href="https://www.linkedin.com/in/zhaolinlau/" target="_blank">
						<span class="icon-text">
							<span class="icon">
								<span class="mdi mdi-linkedin mdi-24px"></span>
							</span>
							<span>LinkedIn</span>
						</span>
					</a>
					<a class="button is-info is-inverted" href="https://twitter.com/zhaolin_lau" target="_blank">
						<span class="icon-text">
							<span class="icon">
								<span class="mdi mdi-twitter mdi-24px"></span>
							</span>
							<span>Twitter</span>
						</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="section" id="about">
		<div class="container">
			<p class="title mt-3 has-text-centered">
				<span class="icon-text">
					<o-icon size="medium" icon="information-variant-circle-outline"></o-icon>
					<span>About Me</span>
				</span>
			</p>
			<div class="columns is-multiline is-vcentered">
				<div class="column is-4">
					<figure class="image">
						<nuxt-img class="is-rounded" src="img/me.jpg" alt="LAU ZHAO LIN" />
					</figure>
				</div>
				<div class="column is-8">
					<p class="subtitle has-text-centered">Jack of all trades, master of "some"</p>
					<p class="has-text-justified">
						Web developer with more than <b>3 years</b> of well-rounded experience with a diploma in the field of
						<b>Computer Science</b>, extensive knowledge of modern Web techniques and love for <b>Milo</b>. Looking for an
						opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a
						competitive edge and giving back to the community.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section has-text-centered" id="skills">
		<div class="container">
			<p class="title mt-3">
				<span class="icon-text">
					<o-icon size="medium" icon="code-tags"></o-icon>
					<span>My Skills</span>
				</span>
			</p>
			<div class="columns is-multiline">
				<div class="column is-4">
					<div class="box">
						<o-icon icon="language-html5" size="large"></o-icon>
						<p class="title is-4">HTML</p>
					</div>
				</div>

				<div class="column is-4">
					<div class="box">
						<o-icon icon="language-css3" size="large"></o-icon>
						<p class="title is-4">CSS</p>
					</div>
				</div>

				<div class="column is-4">
					<div class="box">
						<o-icon icon="language-javascript" size="large"></o-icon>
						<p class="title is-4">JavaScript</p>
					</div>
				</div>

				<div class="column is-4">
					<div class="box">
						<o-icon icon="language-php" size="large"></o-icon>
						<p class="title is-4">PHP</p>
					</div>
				</div>

				<div class="column is-4">
					<div class="box">
						<o-icon icon="dolphin" size="large"></o-icon>
						<p class="title is-4">MySQL</p>
					</div>
				</div>

				<div class="column is-4">
					<div class="box">
						<o-icon icon="bulma" size="large"></o-icon>
						<p class="title is-4">Bulma</p>
					</div>
				</div>

				<div class="column is-4">
					<div class="box">
						<o-icon icon="bootstrap" size="large"></o-icon>
						<p class="title is-4">Bootstrap</p>
					</div>
				</div>

				<div class="column is-4">
					<div class="box">
						<o-icon icon="vuejs" size="large"></o-icon>
						<p class="title is-4">Vue.js</p>
					</div>
				</div>

				<div class="column is-4">
					<div class="box">
						<o-icon icon="laravel" size="large"></o-icon>
						<p class="title is-4">Laravel</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="section" id="portfolio">
		<div class="container">
			<p class="title has-text-centered mt-3">
				<span class="icon-text">
					<o-icon size="medium" icon="folder-file"></o-icon>
					<span>My Portfolio</span>
				</span>
			</p>

			<div class="columns is-multiline is-centered">
				<div class="column is-4">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								<span>Zhaolin Lau</span>
							</p>
						</header>
						<div class="card-content">
							<figure class="image">
								<nuxt-img src="img/zhaolinlau.png" alt="zhaolinlau.png" />
							</figure>
						</div>
						<footer class="card-footer">
							<a href="https://zhaolinlau.vercel.app/" class="card-footer-item">
								<span class="icon-text">
									<o-icon icon="eye"></o-icon>
									<span>Preview</span>
								</span>
							</a>
							<a href="https://github.com/zhaolinlau/zhaolinlau.github.io" class="card-footer-item" target="_blank">
								<span class="icon-text">
									<o-icon icon="github"></o-icon>
									<span>Source Code</span>
								</span>
							</a>
						</footer>
					</div>
				</div>

				<div class="column is-4">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								<span>UTM Foundation & Diploma Consultation</span>
							</p>
						</header>
						<div class="card-content">
							<figure class="image">
								<nuxt-img src="img/utmfd.png" alt="utmfd.png" />
							</figure>
						</div>
						<footer class="card-footer">
							<a href="https://utmfd.vercel.app/" class="card-footer-item" target="_blank">
								<span class="icon-text">
									<o-icon icon="eye"></o-icon>
									<span>Preview</span>
								</span>
							</a>
							<a href="https://github.com/Luetify/UTM-FD" class="card-footer-item" target="_blank">
								<span class="icon-text">
									<o-icon icon="github"></o-icon>
									<span>Source Code</span>
								</span>
							</a>
						</footer>
					</div>
				</div>

				<div class="column is-4">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								<span>Huawei Open Day: Intelligent World 2030</span>
							</p>
						</header>
						<div class="card-content">
							<figure class="image">
								<nuxt-img src="img/huawei-intelligent-world-2030.png" alt="huawei-intelligent-world-2030.png" />
							</figure>
						</div>
						<footer class="card-footer">
							<a href="https://huawei-intelligent-world-2030.vercel.app/" class="card-footer-item" target="_blank">
								<span class="icon-text">
									<o-icon icon="eye"></o-icon>
									<span>Preview</span>
								</span>
							</a>
							<a href="https://github.com/zhaolinlau/huawei-intelligent-world-2030" class="card-footer-item"
								target="_blank">
								<span class="icon-text">
									<o-icon icon="github"></o-icon>
									<span>Source Code</span>
								</span>
							</a>
						</footer>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="section" id="contact">
		<o-loading v-model:active="isLoading">
			<o-icon pack="mdi" icon="loading" size="large"></o-icon>
		</o-loading>
		<div class="container">
			<p class="title has-text-centered mt-3">
				<span class="icon-text">
					<o-icon size="medium" icon="mailbox"></o-icon>
					<span>Contact Me</span>
				</span>
			</p>
			<div class="columns">
				<div class="column is-6 is-offset-3">
					<form class="box" @submit="submitForm" method="post">
						<o-notification autoClose v-model:active="isSubmitted" message="Your message has been sent successfully."
							iconSize="medium" duration="5000" type="success" closable variant="success"
							aria-close-label="Close notification"></o-notification>

						<o-field label="Captcha" class="is-hidden">
							<o-input name="_captcha" v-model="captcha" required></o-input>
						</o-field>

						<o-field label="Subject">
							<o-input icon="format-title" name="_subject" required></o-input>
						</o-field>

						<o-field label="Name">
							<o-input icon="account" name="name" required></o-input>
						</o-field>

						<o-field label="Email">
							<o-input icon="email" type="email" name="email" required></o-input>
						</o-field>

						<o-field label="Message">
							<o-input icon="message-text" type="textarea" name="message" required></o-input>
						</o-field>

						<o-field>
							<o-button nativeType="submit" icon-left="send" variant="primary" :loading="isSending" rounded
								expanded>Send</o-button>
						</o-field>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
html {
	scroll-behavior: smooth;
}
</style>