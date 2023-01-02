<template>
	<HeroSection></HeroSection>

	<NavBar></NavBar>

	<AboutSection></AboutSection>

	<SkillsSection></SkillsSection>

	<PortfolioSection></PortfolioSection>

	<ContactSection></ContactSection>

	<AppFooter></AppFooter>
</template>

<script>
	import NavBar from "./components/navbar.vue";
	import HeroSection from "./components/hero.vue"
	import AppFooter from "./components/footer.vue";
	import AboutSection from "./components/about.vue";
	import SkillsSection from "./components/skills.vue";
	import PortfolioSection from "./components/portfolio.vue";
	import ContactSection from "./components/contact.vue";

	export default {
		components: {
			NavBar,
			HeroSection,
			AboutSection,
			SkillsSection,
			PortfolioSection,
			ContactSection,
			AppFooter
		},
	};
</script>

<style>
	html {
		scroll-behavior: smooth;
	}

	img {
		pointer-events: none;
	}
</style>

<style>
	html {
		scroll-behavior: smooth;
	}

	img {
		pointer-events: none;
	}
</style>
