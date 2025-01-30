<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useToast } from './ui/toast'

const loading = ref(false)
const mail = useMail()
const { toast } = useToast()

const formSchema = toTypedSchema(
	z.object({
		subject: z.string().min(1),
		name: z.string().min(1),
		email: z.string().email(),
		message: z.string().min(1)
	})
)

const { handleSubmit } = useForm({
	validationSchema: formSchema
})

const contact = handleSubmit(async (values, actions) => {
	try {
		loading.value = true

		await mail.send({
			subject: values.subject,
			text: `
			Name: ${values.name} 
			Email: ${values.email} 
			Message: ${values.message}
			`,
		})

		toast({
			title: 'Success',
			description: 'Your message has been sent successfully.',
			class: 'text-green-500'
		})

		actions.resetForm()
	} catch (error) {
		toast({
			title: 'Error',
			description: error.message,
			class: 'text-red-500'
		})
	} finally {
		loading.value = false
	}
})
</script>

<template>
	<div class="grid grid-cols-12 mt-3">
		<Card class="lg:col-start-4 lg:col-span-6 col-span-12">
			<form @submit="contact" class="mt-3">
				<CardContent>
					<FormField v-slot="{ componentField }" name="subject">
						<FormItem>
							<FormLabel for="subject">Subject</FormLabel>
							<FormControl>
								<div class="relative w-full max-w-sm items-center">
									<Input class="pl-10" :="componentField" :disabled="loading" id="subject" />

									<span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
										<Icon name="mdi:format-title" class="text-muted-foreground" />
									</span>
								</div>
							</FormControl>

							<FormMessage />
						</FormItem>
					</FormField>

					<FormField v-slot="{ componentField }" name="name">
						<FormItem>
							<FormLabel for="name">Name</FormLabel>
							<FormControl>
								<div class="relative w-full max-w-sm items-center">
									<Input class="pl-10" :="componentField" id="name" :disabled="loading" />
									<span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
										<Icon name="mdi:account" class="text-muted-foreground" />
									</span>
								</div>
							</FormControl>

							<FormMessage />
						</FormItem>
					</FormField>

					<FormField v-slot="{ componentField }" name="email">
						<FormItem>
							<FormLabel for="email">Email</FormLabel>
							<FormControl>
								<div class="relative w-full max-w-sm items-center">
									<Input class="pl-10" :="componentField" id="email" :disabled="loading" />
									<span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
										<Icon name="mdi:email" class="text-muted-foreground" />
									</span>
								</div>
							</FormControl>

							<FormMessage />
						</FormItem>
					</FormField>

					<FormField v-slot="{ componentField }" name="message">
						<FormItem>
							<FormLabel for="message">Message</FormLabel>
							<FormControl class="control">
								<Textarea :="componentField" id="message" :disabled="loading" />
							</FormControl>

							<FormMessage />
						</FormItem>
					</FormField>
				</CardContent>

				<CardFooter>
					<Button class="w-full" type="submit" :disabled="loading">
						<Icon name="mdi:send" /> Send
					</Button>
				</CardFooter>
			</form>
		</Card>
	</div>
</template>