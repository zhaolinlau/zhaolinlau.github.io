<script setup>
import { VueWriter } from 'vue-writer'
const date = new Date()
const expYear = date.getFullYear() - 2021
</script>

<template>
	<div>
		<div class="h-[calc(100vh-61px)] flex items-center">
			<div class="w-full">
				<p class="text-2xl">Hello! I am</p>
				<p class="text-5xl italic font-bold">Zhaolin Lau</p>
				<p class="text-4xl">
					<VueWriter :typeSpeed="50" :eraseSpeed="50" :array="['Developer From Malaysia']">
						A Passionate Web
					</VueWriter>
				</p>

				<div class="buttons">
					<SocialButtons />
				</div>
			</div>
		</div>

		<div class="flex" id="about">
			<div class="w-full">
				<p class="text-3xl flex items-center justify-center font-bold mt-16">
					<Icon name="mdi:information-variant-circle-outline" /> About Me
				</p>
				<div class="grid grid-cols-12 gap-3 mt-3">
					<div class="lg:col-span-4 col-span-12">
						<NuxtImg class="rounded-full" src="/img/me.jpg" alt="LAU ZHAO LIN" />
					</div>

					<div class="lg:col-span-8 col-span-12 p-3 flex items-center">
						<div>
							<p class="text-center text-2xl">Jack of all trades, master of "some"</p>
							<p class="text-justify mt-5 text-lg">
								Web developer with more than <b>{{ expYear }} years</b> of well-rounded hands-on
								experience in web technologies like <b>Vue</b>, <b>Nuxt</b>, and <b>Laravel</b>, and a
								passion for <b>Milo & Milk Tea</b>. Currently building something awesome with
								<b>Nuxt</b>, exploring innovative web solutions and pushing the boundaries of modern web
								development. A big fan of open source.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="flex" id="skills">
			<div class="w-full">
				<p class="text-3xl flex items-center justify-center font-bold mt-16">
					<Icon name="mdi:code-tags" /> My Skills
				</p>

				<SkillCards />
			</div>
		</div>

		<div class="flex" id="projects">
			<div class="w-full">
				<p class="text-3xl flex items-center justify-center font-bold mt-16">
					<Icon name="mdi:folder-file" /> My Projects
				</p>

				<ProjectCards />
			</div>
		</div>

		<div class="flex" id="contact">
			<div class="w-full">
				<p class="text-3xl flex items-center justify-center font-bold mt-16">
					<Icon name="mdi:mailbox" /> Contact Me
				</p>

				<ContactForm />
			</div>
		</div>
	</div>
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