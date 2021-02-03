<template>
	<div>
		<div class="professional_wrap">
			<div
				v-for="(items, index) in expertList"
				:key="index"
				class="expert_item"
			>
				<professionalCard
					:hospitalName="hospitalName"
					:expert="items"
				></professionalCard>
			</div>
		</div>
	</div>
</template>

<script>
import professionalCard from './professional-card';

export default {
	name: 'professional-wrap',
	props: {
		hospitalName: {
			type: String,
		},
	},
	components: {
		professionalCard,
	},
	data() {
		return {
			expertList: [],
		};
	},
	mounted() {
		this.getProList();
	},
	methods: {
		getProList() {
			this.$axios
				.$get(
					'https://raw.githubusercontent.com/Docfriends/docfriends-recruit/master/Front/Project/data/companyExpert.json',
				)
				.then(res => {
					this.expertList = res.data.expertList;
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.professional_wrap {
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	gap: 10px;

	.expert_item {
		margin-bottom: 5px;
		width: 32.3%;
		@media only screen and (max-width: 768px) {
			width: 32%;
		}
		@media only screen and (max-width: 420px) {
			margin-bottom: 10px;
			width: 48.5%;
		}
		@media only screen and (max-width: 360px) {
			margin-bottom: 10px;
			width: 48%;
		}
	}
}
</style>
