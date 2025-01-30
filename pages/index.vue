<script setup>
import { VueWriter } from 'vue-writer'
const date = new Date()
const expYear = date.getFullYear() - 2021
</script>

<template>
	<div>
		<div class="h-[calc(100vh-61px)] flex items-center">
			<div>
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

		<div class="flex h-screen items-center" id="about">
			<div>
				<p class="text-3xl flex items-center justify-center font-bold">
					<Icon name="mdi:information-variant-circle-outline" /> About Me
				</p>
				<div class="grid grid-cols-12 gap-3 mt-3">
					<div class="col-span-4">
						<NuxtImg class="rounded-full" src="/img/me.jpg" alt="LAU ZHAO LIN" />
					</div>

					<div class="col-span-8 p-3 flex items-center">
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

		<section class="section has-text-centered" id="skills">
			<div class="container">
				<p class="title mt-5">
					<span class="icon-text">
						<span class="icon">
							<span class="mdi mdi-code-tags"></span>
						</span>
						<span>My Skills</span>
					</span>
				</p>

				<SkillCards />
			</div>
		</section>

		<section class="section" id="projects">
			<div class="container">
				<p class="title has-text-centered mt-5">
					<span class="icon-text">
						<span class="icon">
							<span class="mdi mdi-folder-file"></span>
						</span>
						<span>My Projects</span>
					</span>
				</p>

				<ProjectCards />
			</div>
		</section>

		<section class="section" id="contact">
			<div class="container">
				<p class="title has-text-centered mt-5">
					<span class="icon-text">
						<span class="icon">
							<span class="mdi mdi-mailbox"></span>
						</span>
						<span>Contact Me</span>
					</span>
				</p>
				<div class="columns">
					<div class="column is-6 is-offset-3">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
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