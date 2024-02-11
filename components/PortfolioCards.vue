<script setup>
const portfolios = [
	{
		title: 'To-Do List',
		src: 'to-do-list.png',
		domain: 'https://zhaolinlau-to-do-list.vercel.app/',
		public: true,
		repo: 'https://github.com/zhaolinlau/to-do-list',
	},
	{
		title: 'UMPSA x Huawei Mobile App Competition',
		src: 'uxhmac.png',
		domain: 'https://uxhmac.vercel.app/',
		public: false,
		repo: '',
	},
	{
		title: 'MLBB: Rise of Champions Tournament',
		src: 'mlbb-roct.png',
		domain: 'https://umpsaesport.vercel.app/',
		public: false,
		repo: '',
	},
	{
		title: 'Huawei Open Day: Intelligent World 2030',
		src: 'huawei-intelligent-world-2030.png',
		domain: 'https://huawei-intelligent-world-2030.vercel.app/',
		public: true,
		repo: 'https://github.com/zhaolinlau/huawei-intelligent-world-2030',
	},
	{
		title: 'Zhaolin Lau',
		src: 'zhaolinlau.png',
		domain: 'https://zhaolinlau.vercel.app/',
		public: true,
		repo: 'https://github.com/zhaolinlau/zhaolinlau.github.io',
	},
	{
		title: 'UTM Foundation & Diploma Consultation',
		src: 'utmfd.png',
		domain: 'https://utmfd.vercel.app/',
		public: true,
		repo: 'https://github.com/Luetify/UTM-FD',
	},
]
</script>

<template>
	<div class="columns is-multiline is-centered">

		<div class="column is-4" v-for="portfolio in portfolios">
			<div class="card has-background-dark">
				<header class="card-header">
					<p class="card-header-title has-text-light">
						<span>{{ portfolio.title }}</span>
					</p>
				</header>

				<div class="card-content">
					<figure class="image">
						<nuxt-img :src="`img/${portfolio.src}`" :alt="portfolio.src" />
					</figure>
				</div>

				<footer class="card-footer">
					<a :href="portfolio.domain" class="card-footer-item has-text-primary" target="_blank">
						<span class="icon-text">
							<o-icon icon="eye"></o-icon>
							<span>Preview</span>
						</span>
					</a>

					<a :href="portfolio.repo" class="card-footer-item has-text-info" target="_blank" v-if="portfolio.public">
						<span class="icon-text">
							<o-icon icon="github"></o-icon>
							<span>Source Code</span>
						</span>
					</a>

					<div class="card-footer-item is-unselectable" v-if="!portfolio.public">
						<span class="icon-text has-text-light">
							<o-icon icon="lock"></o-icon>
							<span>Private</span>
						</span>
					</div>
				</footer>
			</div>
		</div>

	</div>
</template>