<script setup>
const contactError = ref('')
const contactSuccess = ref('')
const contacting = ref(false)
const name = ref('')
const email = ref('')
const message = ref('')
const subject = ref('')
const mail = useMail()

const contact = async () => {
	try {
		contacting.value = true

		await mail.send({
			subject: subject.value,
			text: `
			Name: ${name.value} 
			Email: ${email.value} 
			Message: ${message.value}
			`,
		})

		email.value = ''
		name.value = ''
		message.value = ''
		subject.value = ''
		contactSuccess.value = 'Your message has been sent successfully.'
		contactError.value = ''
	} catch (error) {
		contactError.value = error.message
		contactSuccess.value = ''
	} finally {
		contacting.value = false
		setTimeout(() => {
			contactSuccess.value = ''
			contactError.value = ''
		}, 3000);
	}
}
</script>

<template>
	<form class="box" @submit.prevent="contact()">
		<ONotification v-if="contactSuccess" :message="contactSuccess" iconSize="medium" variant="success" closable
			aria-close-label="Close notification" />

		<ONotification v-if="contactError" :message="contactError" iconSize="medium" variant="danger" closable
			aria-close-label="Close notification" />

		<OField label="Subject">
			<OInput icon="format-title" v-model="subject" required />
		</OField>

		<OField label="Name">
			<OInput icon="account" v-model="name" required />
		</OField>

		<OField label="Email">
			<OInput icon="email" type="email" v-model="email" required />
		</OField>

		<OField label="Message">
			<OInput icon="message-text" type="textarea" v-model="message" required />
		</OField>

		<OField>
			<OButton nativeType="submit" icon-left="send" variant="primary" :disabled="contacting" :loading="contacting"
				label="Send" rounded expanded />
		</OField>
	</form>
</template>