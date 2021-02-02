<template>
	<div v-if="newList.length > 0" class="total_wrap">
		<div class="content_wrap">
			<div
				class="avatar_wrap"
				:class="[newList[0].alarmActivationState === 'Y' ? 'active' : '']"
			>
				<div class="avatar_inside">
					<img
						:src="newList[0].profileImgPath"
						:alt="newList[0].profileImgPath"
						onError="
								this.src =
									'https://lh3.googleusercontent.com/proxy/rGZzVr51bstwaZx57V5dC7D3LRTFBL3FwATvE8bEt0U2hQZ1MBl4qSONxhLkDu4J-uJD_K2FkKI5OZk2Xrge1nEVIrYR66WsdkgCLwmjbnmW3y3lHLHOH_vtQa1doRoZX6wmeSyKzGebT7MfKP2wt5ctbcI'
							"
					/>
				</div>
			</div>
			<div class="infor_wrap">
				<span class="expert_name"
					>{{ newList[0].name }} {{ newList[0].expertTypeName }}님</span
				>
				<span class="like">♥ {{ newList[0].likeCnt }}</span>
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
//디테일 같은경우 데이터가 하나밖에 없어서, 밑에는 고정 나머지는 유동적으로 변경됩니다.
//API 가 나온상태라면 한 객체에서 컨트롤 해야합니다 현재는 그러지 못하여, 별도의 데이터를 취합했습니다.
export default {
	name: 'index',
	data() {
		return {
			newList: [],
			detailInformation: {
				ability:
					'[경력] 2018 .03 ~ 현재 | 서울아산병원 중환자ㆍ외상외과 진료전담의사\n\n[경력] 2016 .03 ~ 2018 .02 | 동강병원 대장항문외과 과장\n\n[학력] 2013 .03 ~ 2016 .08 | 울산대학교 (의학 석사)\n\n[학력] 1999 .03 ~ 2005 .02 | 부산대학교 (의학 학사)',
				career:
					'최선을 다하지 않는 것은...\n\n복잡 다원한 현대 사회에서는 자신에게 주어진 일을 다른 사람이 바라보는 시선만을 의식하여 적당하게 처리한다는 것은 현상 유지가 아니라 퇴보를 의미합니다. 또한 짧은 기간 내에 의사결정을 내려야 하는 순간에도 적절한 대안을 신중하게 만들어 내는 편입니다.\n\n성격intro - 항상 환한 모습과 적극적인 모습으로...\n\n주위의 사람들의 기분을 좋아하게 하는 명쾌하고 활발한 성격을 지니고 있어 주어진 일만을 하는 소극적인 모습보다 스스로 찾아서 할 수 있는 적극적인 모습을 많이 지니고 있습니다. (일반기업) - 프리뷰를 참고 바랍니다. 지금까지 제가 가진 전부를 집중하여 최선을 다해 온 것을 기초로 하여 앞으로도 매순간 최선을 다하는 모습만을 항상 기억하고 반복해 나갈 것입니다. 매사에 한결같은 성실함이 사람이 가져야 할 가장 중요한 자세라는 것을 부모님에게서 어린 시절부터 가슴 깊이 배워 왔기 때문에 집에서는 물론이고 학교에서도 항상 많은 칭찬과 다른 친구들의 사랑을 받으면서 자랐습니다. 더욱이 1분, 1초를 다투는 수술실의 경우는 매순간 자신이 가진 전부를 던져 집중하여 한 치의 실수도 용납하지 않아야 할 것입니다.',
				subject: '이비인후과',
				alarmKeywordList: ['감기', '가래', '기침', '인후염', '인후통'],
				companyName: '닥프렌즈 병원',
				companyAddr: '서울특별시 강남구 논현로 164 (도곡동)',
				companyJibun: '서울특별시 강남구 도곡동 514-2 유니북스빌딩',
				companyAddrEtc: '10층',
			},
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
	mounted() {
		this.getItem();
		console.log(this.$route.params.id);
	},
	filters: {
		splitItems(item) {
			return item.replace(/\n/g, '<br/>');
		},
	},
	methods: {
		getItem() {
			this.newList = this.expertList.filter(v => {
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
