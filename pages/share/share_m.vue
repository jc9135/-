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
							<img src="@/static/img_1.png" alt="">
							<text>先领券</text>
						</view>
						<view class="bg_two">
							<img src="@/static/img_10.png" alt="">
						</view>
						<view class="bg_three">
							<img src="@/static/img_3.png" alt="">
							<text>再下单</text>
						</view>
						<view class="bg_four">
							<img src="@/static/img_10.png" alt="">
						</view>
						<view class="bg_five">
							<img src="@/static/img_4.png" alt="">
							<text>拿返利</text>
						</view>
					</view>
					<view class="cicle_one"></view>
					<view class="cicle_two"></view>
					<view class="bottom"></view>
				</view>
				<view class="content_btn_wrap">
					<text class="content_btn content_btn_one">我的海报</text>
					<text class="content_btn content_btn_two" @click="copy">复制文案</text>
				</view>
				<view class="text_wrap">
					<text class="text">返利注意事项：</text>
					<text class="text">1.美团外卖，必须使用带 <text class="red">【专享】</text> 标记的优惠券才有返利；</text>
					<text class="text">2.领券后在红包有效期内下单均有返利；</text>
					<text class="text">3.美团绑定的手机号，需与领券登陆的手机号一致；</text>
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
							<img src="@/static/img_1.png" alt="">
							<text>先领券</text>
						</view>
						<view class="bg_two">
							<img src="@/static/img_10.png" alt="">
						</view>
						<view class="bg_three">
							<img src="@/static/img_3.png" alt="">
							<text>再下单</text>
						</view>
						<view class="bg_four">
							<img src="@/static/img_10.png" alt="">
						</view>
						<view class="bg_five">
							<img src="@/static/img_4.png" alt="">
							<text>拿返利</text>
						</view>
					</view>
					<view class="cicle_one"></view>
					<view class="cicle_two"></view>
					<view class="bottom"></view>
				</view>
				<view class="content_btn_wrap">
					<text class="content_btn content_btn_one">我的海报</text>
					<text class="content_btn content_btn_two" @click="copy">复制文案</text>
				</view>
				<view class="text_wrap">
					<text class="text">返利注意事项：</text>
					<text class="text">1.美团外卖，必须使用带 <text class="red">【专享】</text> 标记的优惠券才有返利；</text>
					<text class="text">2.领券后在红包有效期内下单均有返利；</text>
					<text class="text">3.美团绑定的手机号，需与领券登陆的手机号一致；</text>
				</view>
			</view>
		</view>
		<view class="box_three" v-if="activeIndex === 2">
			<view class="bg_wrap">

			</view>
			<view class="content_wrap">
				<view class="content">
					<view class="top">
						<view class="bg_one">
							<img src="@/static/img_1.png" alt="">
							<text>先领券</text>
						</view>
						<view class="bg_two">
							<img src="@/static/img_10.png" alt="">
						</view>
						<view class="bg_three">
							<img src="@/static/img_3.png" alt="">
							<text>再下单</text>
						</view>
						<view class="bg_four">
							<img src="@/static/img_10.png" alt="">
						</view>
						<view class="bg_five">
							<img src="@/static/img_4.png" alt="">
							<text>拿返利</text>
						</view>
					</view>
					<view class="cicle_one"></view>
					<view class="cicle_two"></view>
					<view class="bottom"></view>
				</view>
				<view class="content_btn_wrap">
					<text class="content_btn content_btn_one">我的海报</text>
					<text class="content_btn content_btn_two" @click="copy">复制文案</text>
				</view>
				<view class="text_wrap">
					<text class="text">返利注意事项：</text>
					<text class="text">1.美团外卖，必须使用带 <text class="red">【专享】</text> 标记的优惠券才有返利；</text>
					<text class="text">2.领券后在红包有效期内下单均有返利；</text>
					<text class="text">3.美团绑定的手机号，需与领券登陆的手机号一致；</text>
				</view>
			</view>
		</view>
		<wx-open-launch-weapp id="launch-btn" :username="appid" path="pages/personalInfoSub/personalInfoSub.html?type=active"
		 v-if="showtplBtn">
			<script type="text/wxtag-template">
				<style>
						.label {
							color: #448ce1;
							font-size: 15px;
							display:block;
							text-align:center;
							 margin-top: 10px;
							}
					</style>
				<div class="label">跳转小程序div>
			   
			</script>
		</wx-open-launch-weapp>
	</view>
</template>

<script>
	import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js'
	const jweixin = require('jweixin-module')
	export default {
		data() {
			return {
				buttonList: ['外卖', '商超', '酒店'],
				activeIndex: 0,
				showtplBtn: false,
				appid: ''
			};
		},
		onLoad() {
			this.shareFun()
		},
		methods: {
			// 跳转小程序
			async shareFun() {
				let that = this;
				const {
					data: res
				} = await this.$myRquest({
					url: "member/get_sign",
					method: "POST",
					data: {
						url: "https://hsm.aylzwl.com"
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
				this.appid = res.data.appId
				let info = {
					debug: true,
					appId: res.data.appId,
					nonceStr: res.data.nonceStr,
					timestamp: res.data.timestamp,
					signature: res.data.signature,
					jsApiList: apiList,
					openTagList: ["wx-open-launch-weapp"],
				};
				jweixin.config(info);
				jweixin.error(err => {
					console.log('config fail:', err);
				});

				jweixin.ready(res => {
					that.showtplBtn = true;
					that.$nextTick(() => {
						try {
							var btn = document.getElementById('launch-btn');
							btn.addEventListener('launch', function(e) {
								console.log('success');
								console.log(e);
							});
							btn.addEventListener('error', function(e) {
								console.log('fail', e);
							})
						} catch (error) {}
					})
				});
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
			width: 45%;
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
				width: 33%;
				height: 56rpx;
				text-align: center;
				line-height: 56rpx;
				margin: 5rpx;
				color: #fdc319;
				border-radius: 50rpx;

				&.active {
					background-color: #fdc319;
					color: #fff;
				}
			}
		}

		.box_one {
			background-color: #f9cc1d;
			min-height: calc(100vh);

			.bg_wrap {
				background: url(../../static/img_1.jpg) no-repeat center top;
				height: 348rpx;
				background-size: 100%;
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

				.cicle_one {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					background-color: #f9cc1d;
					position: absolute;
					left: -25rpx;
					top: 158rpx;
				}

				.cicle_two {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					background-color: #f9cc1d;
					position: absolute;
					right: -25rpx;
					top: 158rpx;
				}

				.top {
					height: 160rpx;
					border-bottom: 1px dashed #f9cc1d;
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
					width: 320rpx;
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
			.bg_wrap {
				background: url(../../static/img_5.png) no-repeat center top;
				height: 348rpx;
				background-size: 100%;
			}
		}

		.box_three {
			.bg_wrap {
				background: url(../../static/img_9.jpg) no-repeat center top;
				height: 348rpx;
				background-size: 100%;
			}
		}
	}
</style>
