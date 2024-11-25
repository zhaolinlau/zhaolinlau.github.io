<script setup>
const skills = useSkill()
</script>

<template>
	<div class="columns is-multiline">
		<div class="column is-4" v-for="skill in skills">
			<div class="box">
				<Icon :name="skill.icon" class="icon is-large" />
				<p class="title is-4">{{ skill.title }}</p>
			</div>
		</div>
	</div>
</template>