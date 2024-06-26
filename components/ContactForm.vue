<script setup>
const contactError = ref('');
const contactSuccess = ref('');
const contacting = ref(false);
const name = ref('');
const email = ref('');
const message = ref('');
const subject = ref('');
const mail = useMail();

const contact = async () => {
	try {
		contacting.value = true;

		await mail.send({
			subject: subject.value,
			text: `
			Name: ${name.value} 
			Email: ${email.value} 
			Message: ${message.value}
			`,
		});

		email.value = '';
		name.value = '';
		message.value = '';
		subject.value = '';
		contactSuccess.value = 'Your message has been sent successfully.';
		contactError.value = '';
	} catch (error) {
		contactError.value = error.message;
		contactSuccess.value = '';
	} finally {
		contacting.value = false;
		setTimeout(() => {
			contactSuccess.value = '';
			contactError.value = '';
		}, 3000);
	};
};
</script>

<template>
	<form class="box" @submit.prevent="contact()">
		<div class="notification is-success" v-if="contactSuccess">
			<button class="delete" @click="contactSuccess = ''"></button>
			{{ contactSuccess }}
		</div>

		<div class="notification is-danger" v-if="contactError">
			<button class="delete" @click="contactError = ''"></button>
			{{ contactError }}
		</div>

		<div class="field">
			<label for="subject" class="label">Subject</label>
			<div class="control has-icons-left">
				<input type="text" class="input" v-model="subject" id="subject" required>
				<span class="icon is-left">
					<span class="mdi mdi-format-title"></span>
				</span>
			</div>
		</div>

		<div class="field">
			<label for="name" class="label">Name</label>
			<div class="control has-icons-left">
				<input type="text" class="input" v-model="name" id="name" required>
				<span class="icon is-left">
					<span class="mdi mdi-account"></span>
				</span>
			</div>
		</div>

		<div class="field">
			<label for="email" class="label">Email</label>
			<div class="control has-icons-left">
				<input type="email" class="input" v-model="email" id="email" required>
				<span class="icon is-left">
					<span class="mdi mdi-email"></span>
				</span>
			</div>
		</div>

		<div class="field">
			<label for="message" class="label">Message</label>
			<div class="control">
				<textarea class="textarea" v-model="message" id="message" required></textarea>
			</div>
		</div>

		<div class="field">
			<div class="control is-expanded">
				<button class="button is-primary is-rounded is-fullwidth" type="submit">
					<span class="icon">
						<Icon name="mdi:send" />
					</span>
					<span>Send</span>
				</button>
			</div>
		</div>
	</form>
</template>