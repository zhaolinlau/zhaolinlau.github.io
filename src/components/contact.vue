<script setup>
import { ref } from 'vue'

const isLoading = ref(false)

const isSubmitted = ref(false)

function openNotification() {
	isSubmitted.value = true
}

function openLoading() {
	isLoading.value = true
}

function resetForm() {
	document.getElementsByName('_subject')[0].value = ''
	document.getElementsByName('name')[0].value = ''
	document.getElementsByName('email')[0].value = ''
	document.getElementsByName('message')[0].value = ''
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
				resetForm()
				openNotification()
			}
		})
		.catch(error => {
			console.error(error)
		})
		.finally(() => {
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
			<p class="title has-text-centered mt-3">Contact Me</p>
			<div class="columns">
				<div class="column is-6 is-offset-3">
					<form class="box" @submit="submitForm" method="post">
						<o-notification autoClose v-model:active="isSubmitted" duration="3000" closable variant="success"
							aria-close-label="Close notification">
							Your message has been sent successfully.
						</o-notification>
						<input type="hidden" name="_captcha" value="false">

						<o-field label="Subject">
							<o-input name="_subject" required></o-input>
						</o-field>

						<o-field label="Name">
							<o-input name="name" required></o-input>
						</o-field>

						<o-field label="Email">
							<o-input type="email" name="email" required></o-input>
						</o-field>

						<o-field label="Message">
							<o-input type="textarea" name="message" required></o-input>
						</o-field>

						<o-field grouped>
							<o-button nativeType="submit" variant="primary" rounded>Send</o-button>
							<o-button nativeType="reset" rounded>Reset</o-button>
						</o-field>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>