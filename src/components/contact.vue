<script setup>
import { ref } from 'vue'

const isLoading = ref(false)

const isSubmitted = ref(false)

const captcha = ref('false')

function openNotification() {
	isSubmitted.value = true
}

function openLoading() {
	isLoading.value = true
}

function resetForm(form) {
	const captchaValue = form.elements['_captcha'].value
	form.reset()
	form.elements['_captcha'].value = captchaValue
}

function submitForm(event) {
	event.preventDefault()
	openLoading()

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
		})
}
</script>

<template>
	<o-loading v-model:active="isLoading">
		<o-icon pack="mdi" icon="loading" size="large"></o-icon>
	</o-loading>
	<section class="section" id="contact">
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
							<o-button nativeType="submit" icon-left="send" variant="primary" rounded expanded>Send</o-button>
						</o-field>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>