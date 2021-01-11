<template>
	<view id="shareM">
		<ul class="button_wrap">
			<li class="button_item" v-for="item , index in buttonList" :class="{active:activeIndex === index}" :key="index"
			 @click="changeTab(index)">{{item}}</li>
		</ul>
		<view class="box_one" v-if="activeIndex === 0">
			<view class="bg_wrap">

			</view>
			<view class="content_wrap">
				<view class="content">
					<view class="top">
						<view class="bg_one">
							<img src="@/static/img_13.png" alt="">
							<text>先领券</text>
						</view>
						<view class="bg_two">
							<img src="@/static/img_21.png" alt="">
						</view>
						<view class="bg_three">
							<img src="@/static/img_14.png" alt="">
							<text>再下单</text>
						</view>
						<view class="bg_four">
							<img src="@/static/img_21.png" alt="">
						</view>
						<view class="bg_five">
							<img src="@/static/img_15.png" alt="">
							<text>拿返利</text>
						</view>
					</view>
					<view class="cicle_one"></view>
					<view class="cicle_two"></view>
					<view class="bottom">
						<div class="qrCode"></div>
						<wx-open-launch-weapp id="launch-btn" :username="appid" :path="pathOne" v-if="showtplBtn">
							<script type="text/wxtag-template">
								<div class="label1">领红包点外卖</div>
							</script>
						</wx-open-launch-weapp>
					</view>
				</view>
				<view class="content_btn_wrap">
					<text class="content_btn content_btn_one" @click="sharePoster">我的海报</text>
					<text class="content_btn content_btn_two" @click="copy">复制文案</text>
				</view>
				<view class="text_wrap">
					<text class="text">返利注意事项：</text>
					<text class="text">1.领券下单均有返利，返利按照订单实际金额为准；</text>
					<text class="text">2.必须使用本页获得的红包码领券，领券后使用红包下单才有返利；</text>
					<text class="text">3.领券后在红包有效期内下单均有返利；</text>
					<text class="text">4.饿了么绑定的手机号，需与领券登陆的手机号一致；</text>
					<text class="text">5.下单后30分钟内会有订单返现提醒；</text>
					<text class="text">6.无论饿了么新老客户，每个手机号每天可领一次，红包金额随机发放；</text>
				</view>
			</view>
		</view>
		<view class="box_two" v-if="activeIndex === 1">
			<view class="bg_wrap">

			</view>
			<view class="content_wrap">
				<view class="content">
					<view class="top">
						<view class="bg_one">
							<img src="@/static/img_17.png" alt="">
							<text>先领券</text>
						</view>
						<view class="bg_two">
							<img src="@/static/img_20.png" alt="">
						</view>
						<view class="bg_three">
							<img src="@/static/img_18.png" alt="">
							<text>再下单</text>
						</view>
						<view class="bg_four">
							<img src="@/static/img_20.png" alt="">
						</view>
						<view class="bg_five">
							<img src="@/static/img_19.png" alt="">
							<text>拿返利</text>
						</view>
					</view>
					<view class="cicle_one"></view>
					<view class="cicle_two"></view>
					<view class="bottom">
						<div class="qrCode"></div>
						<wx-open-launch-weapp id="launch-btn" :username="appid" :path="pathTwo">
							<script type="text/wxtag-template">
								<div class="label2" >领红包点外卖</div>
							</script>
						</wx-open-launch-weapp>
					</view>
				</view>
				<view class="content_btn_wrap">
					<text class="content_btn content_btn_one" @click="sharePoster">我的海报</text>
					<text class="content_btn content_btn_two" @click="copy">复制文案</text>
				</view>
				<view class="text_wrap">
					<text class="text">返利注意事项：</text>
					<text class="text">1.领券下单均有返利，返利按照订单实际金额为准；</text>
					<text class="text">2.必须使用本页获得的红包码领券，领券后使用红包下单才有返利；</text>
					<text class="text">3.领券后在红包有效期内下单均有返利；</text>
					<text class="text">4.饿了么绑定的手机号，需与领券登陆的手机号一致；</text>
					<text class="text">5.下单后30分钟内会有订单返现提醒；</text>
					<text class="text">6.无论饿了么新老客户，每个手机号每天可领一次，红包金额随机发放；</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js'
	export default {
		data() {
			return {
				buttonList: ['外卖', '果蔬'],
				activeIndex: 0,
				showtplBtn: false,
				appid: 'gh_870576f3c6f9',
				pathOne: '/index/pages/h5/h5?weburl=https%3A%2F%2Frunion.meituan.com%2Furl%3Fkey%3Dab018ac27a2ca837f6982f19abcaf06d%26url%3Dhttps%253A%252F%252Fi.meituan.com%252Fawp%252Fhfe%252Fblock%252Fa13b87919a9ace9cfab4%252F89400%252Findex.html%253Fappkey%253Dab018ac27a2ca837f6982f19abcaf06d%253A0005%26sid%3D0005&lch=cps:waimai:5:ab018ac27a2ca837f6982f19abcaf06d:0005&f_token=1&f_userId=1',
				pathTwo: '',
				pathThree: '',
				canvasId: 'testShareType',
			};
		},
		onLoad() {
			this.getPushUrl();
			this.shareFun();
		},
		methods: {
			sharePoster() {

			},
			async getPushUrl() {
				const {
					data: res
				} = await this.$myRquest({
					url: "member/mt_push_url",
					method: "POST"
				})
				this.appid = res.data.mt_xcx_id;
				this.pathOne = res.data.mt_wm_xcx;
				this.pathTwo = res.data.mt_sg_xcx;
				this.pathThree = res.data.mt_wm_xcx;
			},
			// 跳转小程序
			async shareFun() {
				let that = this;
				const {
					data: res
				} = await this.$myRquest({
					url: "member/get_sign",
					method: "POST",
					data: {
						url: window.location.href
					}
				})
				let apiList = [
					'onMenuShareAppMessage',
					'onMenuShareTimeline',
					'hideOptionMenu',
					'showOptionMenu',
					'chooseWXPay',
					'checkJsApi',
					'openLocation',
					'getLocation'
				];
				let info = {
					debug: true,
					appId: res.data.appId,
					nonceStr: res.data.nonceStr,
					timestamp: res.data.timestamp,
					signature: res.data.signature,
					jsApiList: apiList,
					openTagList: ["wx-open-launch-weapp"],
				};
			},
			changeTab(i) {
				this.activeIndex = i;
			},
			// 触发方法
			copy() {
				let content = '扫码关注-天天省钱拿返利\n早餐便宜5块！\n午餐便宜4块！\n下午茶便宜5块！\n夜宵便宜10块！\n别犹豫，别控制！\n喜欢订餐—越吃越省\n喜欢买货—越买越省' // 复制内容，必须字符串，数字需要转换为字符串
				const result = h5Copy(content)
				if (result === false) {
					uni.showToast({
						title: '不支持',
					})
				} else {
					uni.showToast({
						title: '复制成功',
						icon: 'none'
					})
				}

			}
		}
	}
</script>

<style lang="scss">
	#shareM {
		position: relative;

		.button_wrap {
			position: absolute;
			top: 20rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 30%;
			height: 60rpx;
			margin: 0 auto;
			background-color: #fff;
			display: flex;
			justify-content: space-around;
			align-items: center;
			border-radius: 60rpx;
			font-size: 24rpx;
			list-style: none;
			padding: 0;

			.button_item {
				width: 49%;
				height: 56rpx;
				text-align: center;
				line-height: 56rpx;
				margin: 5rpx;
				color: #46e099;
				border-radius: 50rpx;

				&.active {
					background-color: #109cde;
					color: #fff;
				}
			}
		}

		.box_one {
			background-color: #057bdb;
			min-height: calc(100vh);

			.bg_wrap {
				background: url(https://hsm.aylzwl.com/wmq/static/img_12.jpg) no-repeat center top;
				height: 348rpx;
				background-size: 100% 100%;
			}
		}

		.content_wrap {
			padding: 0 15px;

			.content {
				height: 465rpx;
				width: 100%;
				background-color: #fff;
				margin: 0 auto;
				border-radius: 10px;
				position: relative;
				box-sizing: border-box;

				.bottom {
					display: flex;
					flex-direction: column;

					.qrCode {
						height: 200rpx;
						width: 200rpx;
						margin: 0 auto;
					}

					.label1 {
						color: #Fff;
						display: block;
						width: 250rpx;
						height: 60rpx;
						line-height: 60rpx;
						text-align: center;
						border-radius: 20px;
						background-color: #fe7000;
						margin: 0 auto;
					}

					.label2 {
						color: #Fff;
						display: block;
						width: 250rpx;
						height: 60rpx;
						line-height: 60rpx;
						text-align: center;
						border-radius: 20px;
						background-color: #31b768;
						margin: 0 auto;
					}
				}

				.cicle_one {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					background-color: #057bdb;
					position: absolute;
					left: -25rpx;
					top: 158rpx;
				}

				.cicle_two {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					background-color: #057bdb;
					position: absolute;
					right: -25rpx;
					top: 158rpx;
				}

				.top {
					height: 160rpx;
					border-bottom: 1px dashed #057bdb;
					padding: 10rpx 50rpx;
					margin: 0 auto;
					display: flex;
					justify-content: space-around;

					.bg_one {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-around;

						img {
							width: 80rpx;
							height: 80rpx;
						}

						text {
							font-size: 24rpx;
						}
					}

					.bg_two {
						margin-top: 30rpx;

						img {
							width: 50rpx;
							height: 15rpx;
						}
					}

					.bg_three {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-around;

						img {
							width: 80rpx;
							height: 80rpx;
						}

						text {
							font-size: 24rpx;
						}
					}

					.bg_four {
						margin-top: 30rpx;

						img {
							width: 50rpx;
							height: 15rpx;
						}
					}

					.bg_five {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-around;

						img {
							width: 80rpx;
							height: 80rpx;
						}

						text {
							font-size: 24rpx;
						}
					}
				}

			}

			.content_btn_wrap {
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				padding: 20rpx 0;

				.content_btn {
					display: inline-block;
					width: 300rpx;
					height: 80rpx;
					line-height: 80rpx;
					background-color: #fff;
					color: #000;
					border-radius: 10rpx;
					text-align: center;

					&.content_btn_one {
						background-color: #f03408;
						color: #fff;
					}
				}
			}

			.text_wrap {
				padding: 20rpx;

				.text {
					display: block;
					color: #fff;
					font-size: 24rpx;
					margin: 10rpx 0;
				}

				.red {
					color: #dd3b00;
				}
			}
		}

		.box_two {
			background-color: #4cdca9;
			min-height: calc(100vh);

			.bg_wrap {
				background: url(https://hsm.aylzwl.com/wmq/static/img_16.png) no-repeat center top;
				height: 348rpx;
				background-size: 100% 100%;
			}

			.cicle_one {
				background-color: #4cdca9 !important;
			}

			.cicle_two {
				background-color: #4cdca9 !important;
			}

			.top {
				border-bottom: 1px dashed #4cdca9 !important;
			}
		}
	}
</style>
