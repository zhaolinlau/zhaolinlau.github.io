<script setup>
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const contactError = ref('');
const contactSuccess = ref('');
const contacting = ref(false);
const mail = useMail();

const validationSchema = toTypedSchema(
	zod.object({
		subject: zod.string().min(1),
		name: zod.string().min(1),
		email: zod.string().min(1).email(),
		message: zod.string().min(1)
	})
);

const { handleSubmit, errors, defineField, } = useForm({
	validationSchema
});

const [email, emailAttrs] = defineField('email');
const [name, nameAttrs] = defineField('name');
const [subject, subjectAttrs] = defineField('subject');
const [message, messageAttrs] = defineField('message');

const contact = handleSubmit(async (values, actions) => {
	try {
		contacting.value = true;

		await mail.send({
			subject: values.subject,
			text: `
			Name: ${values.name} 
			Email: ${values.email} 
			Message: ${values.message}
			`,
		});

		actions.resetForm();
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
});
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
				<input type="text" class="input" :class="errors.subject ? 'is-danger' : ''" v-model="subject" :subjectAttrs
					id="subject" :disabled="contacting">
				<span class="icon is-left">
					<Icon name="mdi:format-title" />
				</span>
			</div>
			<p class="help is-danger" v-if="errors.subject">
				{{ errors.subject }}
			</p>
		</div>

		<div class="field">
			<label for="name" class="label">Name</label>
			<div class="control has-icons-left">
				<input type="text" class="input" :class="errors.name ? 'is-danger' : ''" v-model="name" :nameAttrs id="name"
					:disabled="contacting">
				<span class="icon is-left">
					<Icon name="mdi:account" />
				</span>
			</div>
			<p class="help is-danger" v-if="errors.name">
				{{ errors.name }}
			</p>
		</div>

		<div class="field">
			<label for="email" class="label">Email</label>
			<div class="control has-icons-left">
				<input type="email" class="input" :class="errors.email ? 'is-danger' : ''" v-model="email" :emailAttrs
					id="email" :disabled="contacting">
				<span class="icon is-left">
					<Icon name="mdi:email" />
				</span>
			</div>
			<p class="help is-danger" v-if="errors.email">
				{{ errors.email }}
			</p>
		</div>

		<div class="field">
			<label for="message" class="label">Message</label>
			<div class="control">
				<textarea class="textarea" :class="errors.message ? 'is-danger' : ''" v-model="message" :messageAttrs
					id="message" :disabled="contacting"></textarea>
			</div>
			<p class="help is-danger" v-if="errors.message">
				{{ errors.message }}
			</p>
		</div>

		<div class="field">
			<div class="control is-expanded">
				<button class="button is-primary is-rounded is-fullwidth" :class="contacting ? 'is-loading' : ''" type="submit">
					<span class="icon">
						<Icon name="mdi:send" />
					</span>
					<span>Send</span>
				</button>
			</div>
		</div>
	</form>
</template>