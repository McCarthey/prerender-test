<template>
	<div class="swiper-section">
		<div class="header">
			Luxy
		</div>
		<div class="swiper-wrap">
			<div class="swiper-bar pos" :class="`pos${cur}`">
				<div class="swiper-item">
					<img :src="imgNotShow[0].src">
				</div>
				<div class="swiper-item" v-for="(item,index) in imgs">
					<img :src="item.src" alt="" :class="index === cur? 'current-img' : ''">
					<div class="little-circle little-circle-out" v-show="index === cur && item.op === 'out'">{{item.out}} OUT</div>
					<div class="little-circle little-circle-in" v-show="index === cur && item.op === 'in'">{{item.in}} IN</div>
				</div>
				<div class="swiper-item">
					<img :src="imgNotShow[1].src">
				</div>
			</div>
		</div>
		<div class="text-profile">
			<p class="name">{{imgs[cur].name}}</p>
			<p class="info">{{imgs[cur].info}}</p>
		</div>
		<div class="swiper-btn-wrap">
			<p class="text-des">You decide who can get IN</p>
			<div class="swiper-btn-group">
				<button class="swiper-btn" @click="btnClick('out')" :disabled='imgs[cur].op'>OUT</button>
				<button class="swiper-btn" @click="btnClick('in')" :disabled='imgs[cur].op'>IN</button>
			</div>
		</div>
		<card v-if="cardShow"></card>
	</div>
</template>

<script>
	import card from '../dropCard/card'

	export default {
		name: 'swiperComponent',
		data() {
			return {
				imgNotShow: [
					{
						src: require('../../assets/imgs/Carolann.png')
					},
					{
						src: require('../../assets/imgs/linda.png')
					}
				],
				imgs: [
					{
						src: require('../../assets/imgs/linda.png'),
						name: 'Linda',
						info: '24 / Model',
						out: '23%',
						in: '52%',
						op: false
					},
					{
						src: require('../../assets/imgs/vera D.png'),
						name: 'Vera D',
						info: '28 / Writer',
						out: '12%',
						in: '62%',
						op: false
					},
					{
						src: require('../../assets/imgs/Jacqueline.png'),
						name: 'Jacqueline',
						info: '25 / Designer',
						out: '15%',
						in: '73%',
						op: false
					},
					{
						src: require('../../assets/imgs/Carolann.png'),
						name: 'Carolann',
						info: '27 / Lawyer',
						out: '7%',
						in: '54%',
						op: false
					},
					// {src: require('../../assets/imgs/5.png')},
					// {src: require('../../assets/imgs/6.png')},
				],
				cur: 0,
				cardShow: false
			}
		},
		methods: {
			async btnClick(type) {
				// 如果cur大于图片数组长度 按钮置灰
				if (this.cur >= this.imgs.length) return
				// if (type === 'out') {
				// 	console.log('out', this.cur)
				// } else if (type === 'in') {
				// 	console.log('in', this.cur)
				// }
				// 记录当前操作 并显示一定时间 再轮播至下一个
				this.imgs[this.cur].op = type
				await setTimeout(() => {
					if (this.cur === this.imgs.length - 1) {
						console.log('done')
						this.cardShow = true
					} else {
						++this.cur
					}
				}, 500)
			}
		},
		components: {
			card
		},
		watch: {
			cardShow(val) {
				const timer = setInterval(() => {
					try {
						const btnClick = document.querySelector('#btn-click')
						btnClick.addEventListener('click', () => {
							FbPlayableAd.onCTAClick()
						})
						console.log('ok')
						clearInterval(timer)
					} catch (e) {
						console.log('try again', e)
					}
				}, 500)
			}
		}
	}
</script>

<style lang="scss">
	$imgSize: 125px;
	$moveDistance: 125px;
	$primaryColor: #d1ae82;
	.swiper-section {
	    .header {
	        height: 48px;
	        text-align: center;
	        font-size: 18px;
	        line-height: 48px;
	        width: 100%;
	    }
	    .swiper-wrap {
	        width: $imgSize * 3;
	        height: $imgSize * 2;
	        overflow: hidden;
	        position: relative;
	        padding-top: $imgSize * 0.5;
	        margin: 20px auto 10px;
	        .swiper-bar {
	            height: $imgSize * 1.3;
	            width: 1000px;
	            position: absolute;
	            .swiper-item {
	                display: inline-block;
	                // margin-left: -$moveDistance;
	                // width: $imgSize * 0.8;
	                // height: $imgSize * 0.8;
	                position: relative;
	                img {
	                    width: $imgSize;
	                    height: $imgSize;
	                    border-radius: $imgSize * 0.5;
	                    position: relative;
	                    filter: blur(3px);
	                    transition: 0.3s transform;
	                    opacity: 0.4;
	                }
	                .current-img {
	                    transform: scale(1.8);
	                    z-index: 10;
	                    filter: blur(0px);
	                    opacity: 1;
	                    box-sizing: border-box;
	                    border: 1px solid #999;
	                }
	                $circleSize: 54px;
	                .little-circle {
	                    height: $circleSize;
	                    width: $circleSize;
	                    border-radius: $circleSize / 2;
	                    position: absolute;
	                    z-index: 11;
	                    padding: 10px;
	                    color: #fff;
	                    // font-weight: bold;
	                    text-align: center;
	                    box-sizing: border-box;
	                }
	                .little-circle-out {
	                    background-color: #c23138;
	                    bottom: -50px;
	                    left: -40px;
	                }
	                .little-circle-in {
	                    background-color: #339917;
	                    bottom: -50px;
	                    right: -40px;
	                }
	            }
	        }
	        // 位置锚点
	        .pos {
	            transition: 0.3s;
	        }
	        .pos0 {
	            left: $moveDistance * 0;
	        }
	        .pos1 {
	            left: $moveDistance * -1;
	        }
	        .pos2 {
	            left: $moveDistance * -2;
	        }
	        .pos3 {
	            left: $moveDistance * -3;
	        }
	        .pos4 {
	            left: $moveDistance * -4;
	        }
	        .pos5 {
	            left: $moveDistance * -5;
	        }
	    }
	    .text-profile {
	        color: #d4d4d4;
	        text-align: center;
			position: relative;
			top: -40px;
	        .name {
	            font-size: 24px;
	        }
	        .info {
	            font-size: 15px;
	        }
	    }
	    .swiper-btn-wrap {
	        background-color: #242424;
	        opacity: 0.9;
	        width: 100vw;
	        height: 167px;
	        position: fixed;
	        bottom: 0;
	        color: $primaryColor;
	        padding: 6px 0;
	        .text-des {
	            height: 30px;
	            line-height: 30px;
	            text-align: center;
	            font-size: 14px;
	        }
	        .swiper-btn-group {
	            display: flex;
	            height: 120px;
	            .swiper-btn {
	                width: 50%;
	                background-color: transparent;
	                font-size: 20px;
	                color: $primaryColor;
	                &:first-child {
	                    border-right: 1px solid #333;
	                }
	            }
	        }
	    }
	}
</style>

