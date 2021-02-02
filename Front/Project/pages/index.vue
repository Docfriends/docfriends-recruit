<template>
	<div class="main">
		<slider :imagePathList="hospital.imagePathList"></slider>
		<h1 class="hospital_name">{{ hospital.name }}</h1>
		<div class="container">
			<div class="tabArea">
				<button
					type="button"
					@click="setActiveTab('info')"
					:class="[ativeTab === 'info' ? 'active' : '']"
				>
					소속정보
				</button>
				<button
					type="button"
					:class="[ativeTab === 'pro' ? 'active' : '']"
					@click="setActiveTab('pro')"
				>
					소속 전문가
				</button>
			</div>
			<div class="content_area_wrap" v-if="ativeTab === 'info'">
				<dl class="content_area">
					<dt>알림 키워드</dt>
					<dd
						class="keyword"
						v-for="(keyword, index) in hospital.alarmKeywordList"
						:key="index"
					>
						#{{ keyword }}
					</dd>
					<dt>병원 홈페이지</dt>
					<dd>{{ hospital.homepageUrl }}</dd>
					<dt>병원 전화번호</dt>
					<dd>{{ hospital.tel | phoneNum }}</dd>
					<dt>주소</dt>
					<dd class="load_name">
						<span>도로명 주소 : {{ hospital.addrRoad }}</span>
						<span>지번 주소:{{ hospital.addrJibun }}</span>
					</dd>
					<GmapMap
						:center="{
							lat: Number(hospital.lat),
							lng: Number(hospital.lon),
						}"
						:zoom="17"
						style="width: 100%; height: 500px"
					>
						<GmapMarker
							:position="{
								lat: Number(hospital.lat),
								lng: Number(hospital.lon),
							}"
						/>
					</GmapMap>
				</dl>
			</div>
			<div class="pro" v-else>
				<professionalWrap :hospitalName="hospital.name"></professionalWrap>
			</div>
		</div>
	</div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps';
import slider from '../components/common/slider';
import professionalWrap from '../components/professional/professional-wrap';

export default {
	components: {
		slider,
		professionalWrap,
	},
	data() {
		return {
			ativeTab: 'info',
			hospital: {
				publicId: 'zhdBz3zX-8C3K-59w2-alNv-IZUkiiWX7PQZ',
				name: '닥프렌즈 병원',
				imagePathList: [
					'https://img.doctalk.co.kr/dev/company/image/20210127/4EqCAMnN-4BCd-4R4A-buhw-gpuSU8SMMuPp.png',
					'https://img.doctalk.co.kr/dev/company/image/20210127/3NI5f2Cw-1eVt-4r3C-bPIy-IqJUvQPgaYMX.png',
					'https://img.doctalk.co.kr/dev/company/image/20210127/2Bl7F8Jo-c6If-4KbJ-9sRJ-1gP9BdRfkeG8.png',
					'https://img.doctalk.co.kr/dev/company/image/20210127/2oBI0EP9-3oR5-5cQ9-atbf-12R9beEcERMG.png',
				],
				alarmKeywordList: [
					'한방소아청소년과',
					'한방재활의학과',
					'한방내과',
					'감기',
					'여드름',
				],
				homepageUrl: 'http://www.docfriends.com',
				tel: '0235428607',
				addrRoad: '서울특별시 강남구 논현로 164 (도곡동)',
				addrJibun: '서울특별시 강남구 도곡동 514-2 유니북스빌딩',
				addrEtc: '10층',
				lat: '37.484288',
				lon: '127.042315',
			},
			swiperOption: {
				slidesPerView: 4,
				spaceBetween: 20,
				centeredSlides: true,
				loop: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				Observer: true,
				ObserveParents: true,
			},
		};
	},
	methods: {
		setActiveTab(value) {
			this.ativeTab = value === 'info' ? 'info' : 'pro';
		},
	},
	filters: {
		phoneNum(num) {
			let number = 0;
			if (num.length === 11) {
				number = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
			} else if (num.length === 8) {
				number = num.replace(/(\d{4})(\d{4})/, '$1-$2');
			} else {
				if (num.indexOf('02') === 0) {
					number = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
				} else {
					number = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
				}
			}
			return number;
		},
	},
	computed: {
		google: gmapApi,
		swiper() {
			return this.$refs.curriculumSwiper.$swiper;
		},
	},
};
</script>
<style lang="scss" scoped>
.main {
	.pro {
		margin-top: 50px;
		margin-bottom: 30px;
	}
	.hospital_name {
		font-size: 25px;
		text-align: center;
		font-weight: bold;
		margin-top: 20px;
	}

	.container {
		max-width: 800px;
		width: 100%;
		margin: 0 auto;

		.tabArea {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;

			button {
				border: 1px solid #12bb00;
				background: #fff;
				color: #12bb00;
				width: 200px;
				padding: 15px;
				outline: none;
				border-radius: 20px;

				&:first-child {
					margin-right: 20px;
				}

				&.active {
					background: #12bb00;
					color: #fff;
				}
			}
		}

		.content_area_wrap {
			margin-top: 50px;
			display: flex;
			flex-direction: column;

			.content_area {
				display: flex;
				flex-wrap: wrap;
				border: 1px solid #12bb00;
				padding: 20px;
				border-radius: 15px;

				dt {
					width: 100%;
					margin-bottom: 10px;
					font-size: 20px;
					color: #12bb00;
				}

				dd {
					display: flex;
					margin-right: 10px;
					color: #797979;
					margin-bottom: 20px;

					&.keyword {
						cursor: pointer;
					}
				}

				.load_name {
					display: flex;
					flex-direction: column;

					span {
						&:first-child {
							margin-bottom: 5px;
						}
					}
				}
			}
		}
	}
}
</style>
