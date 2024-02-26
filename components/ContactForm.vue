<script setup>
const contactError = ref('')
const contactSuccess = ref('')
const contacting = ref(false)
const _captcha = ref('false')
const name = ref('')
const email = ref('')
const message = ref('')
const _subject = ref('')

const contact = async () => {
	contacting.value = true
	const formData = new FormData();
	formData.append('_captcha', _captcha.value);
	formData.append('name', name.value);
	formData.append('message', message.value);
	formData.append('email', email.value);
	formData.append('_subject', _subject.value);

	await $fetch('https://formsubmit.co/c771b3ea7ca4ec5d9aa6e7621c42027e', {
		method: 'post',
		body: formData
	})
		.then(response => {
			if (response.ok) {
				contacting.value = false
				contactSuccess.value = 'Your message has been sent successfully.'
				contactError.value = ''
			}
		})
		.catch(error => {
			contactError.value = error
			contactSuccess.value = ''
		})
		.finally(() => {
			setTimeout(() => {
				contactSuccess.value = ''
				contactError.value = ''
			}, 3000);
		})
}
</script>

<template>
	<OLoading v-model:active="isLoading">
		<OIcon pack="mdi" icon="loading" size="large"></OIcon>
	</OLoading>

	<form class="box" @submit.prevent="contact()">
		<ONotification v-if="contactSuccess" :message="contactSuccess" iconSize="medium" variant="success" closable
			aria-close-label="Close notification" />

		<ONotification v-if="contactError" :message="contactError" iconSize="medium" variant="danger" closable
			aria-close-label="Close notification" />

		<OInput name="_captcha" type="hidden" v-model="_captcha" required />

		<OField label="Subject">
			<OInput icon="format-title" name="_subject" v-model="_subject" required />
		</OField>

		<OField label="Name">
			<OInput icon="account" name="name" v-model="name" required />
		</OField>

		<OField label="Email">
			<OInput icon="email" type="email" name="email" v-model="email" required />
		</OField>

		<OField label="Message">
			<OInput icon="message-text" type="textarea" v-model="message" name="message" required />
		</OField>

		<OField>
			<OButton nativeType="submit" icon-left="send" variant="primary" :disabled="contacting" :loading="contacting"
				label="Send" rounded expanded />
		</OField>
	</form>
</template>