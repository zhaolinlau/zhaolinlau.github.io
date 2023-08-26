<script setup>
const isSubmittedModal = ref(false)

const isLoading = ref(false)

const isSubmitted = ref(false)

const captcha = ref(false)

const isSending = ref(false)

function openNotification() {
	isSubmitted.value = true
	isSubmittedModal.value = true
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

function refreshPage() {
	isSubmittedModal.value = false
	openLoading()
	location.reload()
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
	<o-loading v-model:active="isLoading">
		<o-icon pack="mdi" icon="loading" size="large"></o-icon>
	</o-loading>

	<o-modal v-model:active="isSubmittedModal" canCancel="[]">
		<div class="card">
			<div class="card-content has-text-centered">
				<o-icon icon="check-circle-outline" variant="success" size="large" />
				<p class="title">
					Your message has been sent successfully.
				</p>
			</div>
			<div class="card-footer">
				<o-button class="card-footer-item" icon-left="hand-okay" variant="primary" @click="refreshPage">OK</o-button>
			</div>
		</div>
	</o-modal>

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
</template>