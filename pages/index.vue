<script setup>
import VueWriter from "vue-writer";
</script>

<template>
	<BackTop />
	<section class="hero is-fullheight">
		<div class="hero-body">
			<div class="container">
				<p class="subtitle">Hello! I am</p>
				<p class="title is-1 is-italic">Zhaolin Lau</p>
				<p class="subtitle is-3">
					A Passionate Web
					Dev<VueWriter class="is-inline-block" :array="['eloper From Malaysia']" />
				</p>

				<SocialButtons />
			</div>
		</div>
	</section>

	<section class="section" id="about">
		<div class="container">
			<p class="title mt-5 has-text-centered">
				<span class="icon-text">
					<OIcon size="medium" icon="information-variant-circle-outline" />
					<span>About Me</span>
				</span>
			</p>
			<div class="columns is-multiline is-vcentered">
				<div class="column is-4">
					<figure class="image">
						<NuxtImg class="is-rounded" src="img/me.jpg" alt="LAU ZHAO LIN" />
					</figure>
				</div>
				<div class="column is-8">
					<p class="subtitle has-text-centered">Jack of all trades, master of "some"</p>
					<p class="has-text-justified">
						Web developer with more than <b>2 years</b> of well-rounded experience with a diploma in the field of
						<b>Computer Science</b>, extensive knowledge of modern Web techniques and love for <b>Milo</b>. Looking for an
						opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a
						competitive edge and giving back to the community.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section has-text-centered" id="skills">
		<div class="container">
			<p class="title mt-5">
				<span class="icon-text">
					<OIcon size="medium" icon="code-tags" />
					<span>My Skills</span>
				</span>
			</p>

			<SkillCards />
		</div>
	</section>

	<section class="section" id="portfolio">
		<div class="container">
			<p class="title has-text-centered mt-5">
				<span class="icon-text">
					<OIcon size="medium" icon="folder-file" />
					<span>My Portfolio</span>
				</span>
			</p>

			<PortfolioCards />
		</div>
	</section>

	<section class="section" id="contact">
		<div class="container">
			<p class="title has-text-centered mt-5">
				<span class="icon-text">
					<OIcon size="medium" icon="mailbox" />
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
</template>

<style>
.is-typed span.cursor {
	display: inline-block;
	width: 5px;
	background-color: #4a4a4a;
	animation: blink 1s infinite;
}

.is-typed span.underscore {
	display: inline-flex;
	width: 10px;
	height: 1px;
	align-items: flex-end;
	background-color: #4a4a4a;
	animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
	animation: none;
}

@keyframes blink {

	0%,
	100% {
		background-color: #4a4a4a;
	}

	50% {
		background-color: transparent;
	}
}
</style>