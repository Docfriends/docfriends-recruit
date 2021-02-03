<template>
	<swiper ref="curriculumSwiper" :options="swiperOption">
		<swiper-slide v-for="(items, index) in imagePathList" :key="index">
			<div class="imgArea">
				<img :src="items" alt="items" style="width: 100%;height: 100%" />
			</div>
		</swiper-slide>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
	</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
	name: 'slider',
	props: {
		imagePathList: {
			type: Array,
		},
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			swiperOption: {
				slidesPerView: 4,
				spaceBetween: 20,
				centeredSlides: true,
				loop: true,
				breakpoints: {
					1024: {
						slidesPerView: 4,
					},
					768: {
						slidesPerView: 3,
					},
					640: {
						slidesPerView: 2,
					},
					320: {
						slidesPerView: 1,
					},
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				Observer: true,
				ObserveParents: true,
			},
		};
	},
};
</script>

<style lang="scss" scoped>
.imgArea {
	height: 300px;

	img {
		width: 100%;
		height: 100%;
	}
}

.swiper-button-prev,
.swiper-button-next {
	color: azure;
}
</style>
