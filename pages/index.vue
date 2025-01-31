<script setup>
const date = new Date()
const expYear = date.getFullYear() - 2021
</script>

<template>
	<div>
		<div class="h-[calc(100vh-61px)] flex items-center">
			<AuroraBackground class="-z-[1]">
				<div class="z-0 grid-cols-12">
					<div class="col-span-12">
						<p class="text-2xl">Hello! I am</p>
						<p class="text-5xl italic font-bold">Zhaolin Lau</p>
						<p class="text-4xl">
							A Passionate
							<TextHighlight class="rounded-lg bg-gradient-to-r from-pink-500 to-violet-500">
								<Flipwords :words="['Web Developer', 'Nuxt Enthusiast']" />
							</TextHighlight>
							From Malaysia
						</p>
					</div>

					<div class="col-span-12 mt-3">
						<SocialButtons />
					</div>
				</div>
			</AuroraBackground>
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