<template>
	<div class="card" @click="goDetail(expert.expertPublicId)">
		<div
			class="avatar_wrap"
			:class="[expert.alarmActivationState === 'Y' ? 'active' : '']"
		>
			<div class="avatar_inside">
				<img
					:src="expert.profileImgPath"
					:alt="expert.profileImgPath"
					onError="
						this.src =
							'https://lh3.googleusercontent.com/proxy/rGZzVr51bstwaZx57V5dC7D3LRTFBL3FwATvE8bEt0U2hQZ1MBl4qSONxhLkDu4J-uJD_K2FkKI5OZk2Xrge1nEVIrYR66WsdkgCLwmjbnmW3y3lHLHOH_vtQa1doRoZX6wmeSyKzGebT7MfKP2wt5ctbcI'
					"
				/>
			</div>
		</div>
		<span class="expert_name"
			>{{ expert.name }} {{ expert.expertTypeName }}님</span
		>
		<span class="hospital_name">{{ hospitalName }}</span>
		<span class="like">♥ {{ expert.likeCnt }}</span>
	</div>
</template>

<script>
export default {
	name: 'professional-card',
	props: {
		expert: {
			type: Object,
		},
		hospitalName: {
			type: String,
		},
	},
	methods: {
		goDetail(value) {
			this.$router.push({
				path: `/${value}`,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
	width: 245px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border: 1px solid #12bb00;
	border-radius: 5px;
	padding: 10px;
	margin: 5px;
	height: 100%;

	.avatar_wrap {
		width: 100px;
		border-radius: 50%;
		height: 100px;
		padding: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #939393;

		&.active {
			background: #12bb00;
		}

		.avatar_inside {
			width: 90px;
			height: 90px;
			border-radius: 50%;
			background: #fff;

			img {
				width: 100%;
				border-radius: 50%;
				height: 100%;
			}
		}
	}

	.expert_name {
		font-size: 20px;
		margin-top: 10px;
	}
	.like {
		color: #ff7d00;
	}
	.hospital_name {
		font-weight: 500;
	}
}
</style>
