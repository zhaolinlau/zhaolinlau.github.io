<template>
	<div class="fixed-grid has-1-cols-mobile">
		<div class="grid">
			<div class="cell" v-for="portfolio in portfolios">
				<div class="card">
					<header class="card-header">
						<p class="card-header-title">
							<span>{{ portfolio.title }}</span>
						</p>
					</header>

					<div class="card-image">
						<figure class="image">
							<NuxtImg :src="`img/${portfolio.src}`" placeholder />
						</figure>
					</div>

					<div class="card-content">
						<div class="media">
							<div class="media-content">
								<span class="tag m-1 is-info" v-for="tag in portfolio.tags">
									{{ tag }}
								</span>
							</div>
						</div>
					</div>

					<footer class="card-footer">
						<NuxtLink :to="portfolio.domain" class="card-footer-item has-text-primary" target="_blank">
							<span class="icon-text">
								<span class="icon">
									<Icon name="mdi:eye" />
								</span>
								<span>Preview</span>
							</span>
						</NuxtLink>

						<NuxtLink :to="portfolio.repo" class="card-footer-item has-text-info" target="_blank"
							v-if="portfolio.public">
							<span class="icon-text">
								<span class="icon">
									<Icon name="mdi:github" />
								</span>
								<span>Source Code</span>
							</span>
						</NuxtLink>

						<div class="card-footer-item is-unselectable" v-if="!portfolio.public">
							<span class="icon-text">
								<span class="icon">
									<Icon name="mdi:lock" />
								</span>
								<span>Private</span>
							</span>
						</div>
					</footer>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const portfolios = ref([
	{
		title: 'To-dos',
		src: 'to-dos.png',
		domain: 'https://to-dos-self.vercel.app/',
		public: true,
		repo: 'https://github.com/zhaolinlau/to-dos',
		tags: [
			'Bulma',
			'Buefy',
			'Nuxt',
			'Supabase'
		]
	},
	{
		title: 'UMPSA x Huawei AppGallery Mobile App Competition',
		src: 'uxhmac.png',
		domain: 'https://uxhmac.vercel.app/',
		public: false,
		repo: '',
		tags: [
			'Bulma',
			'PrimeVue',
			'Nuxt'
		]
	},
	{
		title: 'MLBB: Rise of Champions Tournament',
		src: 'mlbb-roct.png',
		domain: 'https://umpsaesport.vercel.app/',
		public: false,
		repo: '',
		tags: [
			'Vuetify',
			'Nuxt'
		]
	},
	{
		title: 'Huawei Open Day: Intelligent World 2030',
		src: 'huawei-intelligent-world-2030.png',
		domain: 'https://huawei-intelligent-world-2030.vercel.app/',
		public: true,
		repo: 'https://github.com/zhaolinlau/huawei-intelligent-world-2030',
		tags: [
			'Bulma',
			'Oruga',
			'Nuxt'
		]
	},
	{
		title: 'Zhaolin Lau',
		src: 'zhaolinlau.png',
		domain: 'https://zhaolinlau.vercel.app/',
		public: true,
		repo: 'https://github.com/zhaolinlau/zhaolinlau.github.io',
		tags: [
			'Bulma',
			'Nuxt'
		]
	},
])
</script>