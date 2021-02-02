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
			expertList: [
				{
					profileImgPath:
						'https://img.doctalk.co.kr/dev/user/image/20210127/1J2NSFVD-70bs-4A1n-b7DZ-WuC0qgTMV7lF.png',
					alarmActivationState: 'N',
					name: '김관호',
					expertTypeName: '의사',
					likeCnt: 9,
					expertPublicId: '24oiQH0C-endN-5iFm-bMbL-xZmEjRujQdwf',
				},
				{
					profileImgPath:
						'https://img.doctalk.co.kr/dev/user/image/20210127/3hJ0vec0-69lr-4NCv-aXyi-kKfpyuP4BX8p.png',
					alarmActivationState: 'Y',
					name: '이수진',
					expertTypeName: '의사',
					likeCnt: 0,
					expertPublicId: '1BQ7iIQk-7BCg-5dNh-ag8s-p5OwYgrvucZR',
				},
				{
					profileImgPath:
						'https://img.doctalk.co.kr/dev/user/image/20210127/1bXPjgkN-fPO7-4QW6-9siw-I08BKuXWlof9.png',
					alarmActivationState: 'Y',
					name: '이민정',
					expertTypeName: '의사',
					likeCnt: 17,
					expertPublicId: '2bbwJpmf-3Vta-58Dn-9dy9-JiTl9neNYQoJ',
				},
				{
					profileImgPath:
						'https://img.doctalk.co.kr/dev/user/image/20210127/1By5BXOa-1BOu-4QjY-cAZz-pv0F4aErHUCN.png',
					alarmActivationState: 'Y',
					name: '김경식',
					expertTypeName: '치의사',
					likeCnt: 0,
					expertPublicId: '2OluqMLF-5r6c-51rT-ayNP-yhM7FfemUpY3',
				},
				{
					profileImgPath: '',
					alarmActivationState: 'Y',
					name: '박규민',
					expertTypeName: '치의사',
					likeCnt: 0,
					expertPublicId: 'RUSKCqmf-7YhR-4voq-azwZ-TlKnmo5em49a',
				},
			],
		};
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
