<template>
	<div v-if="render" class="total_wrap">
		<div class="content_wrap">
			<div
				class="avatar_wrap"
				:class="[
					detailInformation.alarmActivationState === 'Y' ? 'active' : '',
				]"
			>
				<div class="avatar_inside">
					<img
						:src="detailInformation.profileImgPath"
						:alt="detailInformation.profileImgPath"
						onError="
								this.src =
									'https://lh3.googleusercontent.com/proxy/rGZzVr51bstwaZx57V5dC7D3LRTFBL3FwATvE8bEt0U2hQZ1MBl4qSONxhLkDu4J-uJD_K2FkKI5OZk2Xrge1nEVIrYR66WsdkgCLwmjbnmW3y3lHLHOH_vtQa1doRoZX6wmeSyKzGebT7MfKP2wt5ctbcI'
							"
					/>
				</div>
			</div>
			<div class="infor_wrap">
				<span class="expert_name"
					>{{ detailInformation.name }}
					{{ detailInformation.expertTypeName }}님</span
				>
				<span class="like">♥ {{ detailInformation.likeCnt }}</span>
			</div>
		</div>
		<div class="custom_container">
			<div class="detail_wrap ">
				<dl class="content">
					<dt>학력 및 자격면허</dt>
					<dd
						v-html="$options.filters.splitItems(detailInformation.ability)"
					></dd>

					<dt>경력</dt>
					<dd
						v-html="$options.filters.splitItems(detailInformation.career)"
					></dd>

					<dt>진료과</dt>
					<dd>{{ detailInformation.subject }}</dd>

					<dt>알림키워드</dt>
					<div class="alarm">
						<dd
							v-for="(alarm, index) in detailInformation.alarmKeywordList"
							:key="index"
						>
							#{{ alarm }}
						</dd>
					</div>
					<dt>소속 정보</dt>
					<dd>{{ detailInformation.companyName }}</dd>
					<dd>{{ detailInformation.companyAddr }}</dd>
					<dd>{{ detailInformation.companyJibun }}</dd>
				</dl>
				<div class="goHome">
					<nuxt-link :to="'/'">
						<button>{{ detailInformation.companyName }} 바로가기 ></button>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'index',
	data() {
		return {
			newList: [],
			detailInformation: [],
			expertList: [],
			render: false,
		};
	},
	mounted() {
		this.getItem();
		this.getDetail();
	},
	filters: {
		splitItems(item) {
			return item.replace(/\n/g, '<br/>');
		},
	},
	methods: {
		getDetail() {
			this.$axios
				.$get(
					'https://raw.githubusercontent.com/Docfriends/docfriends-recruit/master/Front/Project/data/expert.json',
				)
				.then(res => {
					this.detailInformation = res.data;
					this.render = true;
				});
		},
		getItem() {
			this.expertList.filter(v => {
				return v.expertPublicId === this.$route.params.id;
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.total_wrap {
	padding-bottom: 30px;

	.content_wrap {
		margin-top: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

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

		.infor_wrap {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.expert_name {
				font-size: 18px;
				margin-top: 10px;
			}

			.like {
				color: #ff7d00;
			}

			margin-bottom: 20px;
		}
	}

	.custom_container {
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 0 20px;

		.detail_wrap {
			width: 100%;
			border: 1px solid #12bb00;
			margin-bottom: 40px;
			border-radius: 15px;
			padding: 40px;

			.content {
				dt {
					font-size: 25px;
					font-weight: bold;
					color: #12bb00;
					margin-bottom: 5px;
				}

				dd {
					margin-bottom: 10px;
				}

				.alarm {
					display: flex;
					justify-content: flex-start;

					dd {
						margin-right: 5px;
					}
				}
			}

			.goHome {
				display: flex;
				align-items: center;
				justify-content: center;

				button {
					height: 40px;
					color: #fff;
					background: #12bb00;
					width: 200px;
					border-radius: 10px;
				}
			}
		}
	}
}
</style>
