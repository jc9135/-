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
					<view class="bottom">
						<div class="qrCode">
							<ayQrcode ref="qrcodeone" :modal="modal_qrOne" :url="qrCodeUrlOne" @hideQrcode="hideQrcodeOne" />
						</div>
						<wx-open-launch-weapp id="launch-btn" :username="appid" :path="pathOne" v-if="showtplBtn">
							<script type="text/wxtag-template">
								<div class="label1">领红包点外卖</div>
							</script>
						</wx-open-launch-weapp>
					</view>
				</view>
				<view class="content_btn_wrap">
					<text class="content_btn content_btn_one" @click="beginCanvas">我的海报</text>
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
							<img src="@/static/img_6.png" alt="">
							<text>先领券</text>
						</view>
						<view class="bg_two">
							<img src="@/static/img_11.png" alt="">
						</view>
						<view class="bg_three">
							<img src="@/static/img_7.png" alt="">
							<text>再下单</text>
						</view>
						<view class="bg_four">
							<img src="@/static/img_11.png" alt="">
						</view>
						<view class="bg_five">
							<img src="@/static/img_8.png" alt="">
							<text>拿返利</text>
						</view>
					</view>
					<view class="cicle_one"></view>
					<view class="cicle_two"></view>
					<view class="bottom">
						<div class="qrCode">
							<ayQrcode ref="qrcodetwo" :modal="modal_qrTwo" :url="qrCodeUrlTwo" @hideQrcode="hideQrcodeTwo" />
						</div>
						<wx-open-launch-weapp id="launch-btn" :username="appid" :path="pathTwo">
							<script type="text/wxtag-template">
								<div class="label2" >领红包点外卖</div>
							</script>
						</wx-open-launch-weapp>
					</view>
				</view>
				<view class="content_btn_wrap">
					<text class="content_btn content_btn_one" @click="beginCanvas">我的海报</text>
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
					<view class="bottom">
						<div class="qrCode"></div>
						<wx-open-launch-weapp id="launch-btn" :username="appid" :path="pathThree">
							<script type="text/wxtag-template">
								<div class="label1">领红包订酒店</div>
							</script>
						</wx-open-launch-weapp>
					</view>
				</view>
				<view class="content_btn_wrap">
					<text class="content_btn content_btn_one" @click="beginCanvas">我的海报</text>
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
		<!-- <image :src="canvasUrl" mode="widthFix"></image> -->
		<mosowe-canvas-image 
			ref="mosoweCanvasComponents" 
			@canvasImage="_canvasImage" 
			:lists="lists" 
			height="500" 
			width="300"
			showPreview />
	</view>
</template>

<script>
	import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js'
	import ayQrcode from "@/components/ay-qrcode/ay-qrcode.vue"
	import jweixin from 'jweixin-module'
	export default {
		data() {
			return {
				buttonList: ['外卖', '商超'],//, '酒店'
				activeIndex: 0,
				showtplBtn: false,
				appid: 'gh_870576f3c6f9',
				pathOne: '/index/pages/h5/h5?weburl=https%3A%2F%2Frunion.meituan.com%2Furl%3Fkey%3Dab018ac27a2ca837f6982f19abcaf06d%26url%3Dhttps%253A%252F%252Fi.meituan.com%252Fawp%252Fhfe%252Fblock%252Fa13b87919a9ace9cfab4%252F89400%252Findex.html%253Fappkey%253Dab018ac27a2ca837f6982f19abcaf06d%253A0005%26sid%3D0005&lch=cps:waimai:5:ab018ac27a2ca837f6982f19abcaf06d:0005&f_token=1&f_userId=1',
				pathTwo: '',
				pathThree: '',
				canvasUrl: '',
				lists: [],
				//二维码相关参数
				modal_qrOne: false,
				qrCodeUrlOne: '', // 要生成的二维码值
				modal_qrTwo: false,
				qrCodeUrlTwo: '', // 要生成的二维码值
			};
		},
		components: {
			ayQrcode,
		},
		onLoad() {
			this.getPushUrl();
			// this.shareFun();
			this.getQrCode();
			switch(this.activeIndex) {
				case 0:
					this.showQrcodeOne();//一加载生成二维码
				break;
				case 1:
					this.showQrcodeTwo();//一加载生成二维码
				break;
				default:
					this.showQrcodeOne();//一加载生成二维码
				break;
			}
		},
		methods: {
			// 展示二维码
			showQrcodeOne() {
				let _this = this;
				this.modal_qrOne = true;
				// uni.showLoading()
				setTimeout(function() {
					// uni.hideLoading()
					_this.$refs.qrcodeone.couponQrCode()
				}, 50)
			},

			//传入组件的方法
			hideQrcodeOne() {
				this.modal_qrOne = false;
			},
			// 展示二维码
			showQrcodeTwo() {
				let _this = this;
				this.modal_qrTwo = true;
				// uni.showLoading()
				setTimeout(function() {
					// uni.hideLoading()
					_this.$refs.qrcodetwo.couponQrCode()
				}, 50)
			},

			//传入组件的方法
			hideQrcodeTwo() {
				this.modal_qrTwo = false;
			},
			async getQrCode(){
				const {
					data: res
				} = await this.$myRquest({
					url: "member/member_info",
					method: "POST"
				});
				const qrCode = res.data.invite_code_url;
				this.lists = [{
						type: 'image',
						content: '../../static/posterBg.jpg',
						width: 300,
						height: 500,
						x: 0,
						y: 0,
					},
					{
						type: 'qr',
						content: qrCode,
						width: 80,
						height: 80,
						x: 20,
						y: 380,
						arc: true,
						arcX: 250,
						arcY: 250,
						arcR: 50
					}]
			},
			beginCanvas() {
				this.$refs.mosoweCanvasComponents.createCanvas();
			},
			_canvasImage(e) {
				this.canvasUrl = e;
			},
			async getPushUrl() {
				const {
					data: res
				} = await this.$myRquest({
					url: "member/mt_push_url",
					method: "POST"
				})
				console.log(res)
				this.appid = res.data.mt_xcx_id;
				this.pathOne = res.data.mt_wm_xcx;
				this.pathTwo = res.data.mt_sg_xcx;
				this.pathThree = res.data.mt_wm_xcx;
				this.qrCodeUrlOne = res.data.mt_wm_h5;
				this.qrCodeUrlTwo = res.data.mt_sg_h5;
				this.showtplBtn = true;
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
				jweixin.config(info);
				jweixin.ready(function (res) {
					// config信息验证失败会执行error函数，如签名过期导致验证失败，  
					// 具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，  
					//对于SPA可以在这里更新签名。   
					// alert("好像成功了！！");
				});
				jweixin.error(function (res) {
					// config信息验证失败会执行error函数，如签名过期导致验证失败，  
					// 具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，  
					//对于SPA可以在这里更新签名。   
					// alert("好像出错了！！");
				});
			},
			changeTab(i) {
				this.activeIndex = i;
				switch(this.activeIndex) {
					case 0:
						this.showQrcodeOne();//一加载生成二维码
					break;
					case 1:
						this.showQrcodeTwo();//一加载生成二维码
					break;
					default:
						this.showQrcodeOne();//一加载生成二维码
					break;
				}
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
			width: 35%;
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
				width: 48%;
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
				background: url(https://hsm.aylzwl.com/wmq/static/img_1.jpg) no-repeat center top;
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

				.bottom {
					display: flex;
					flex-direction: column;

					.qrCode {
						height: 200rpx;
						width: 200rpx;
						margin: 20rpx auto 0;
						#couponQrcode {
							height: 200rpx !important;
							width: 200rpx !important;
						}
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
			background-color: #59de21;
			min-height: calc(100vh);

			.bg_wrap {
				background: url(https://hsm.aylzwl.com/wmq/static/img_5.png) no-repeat center top;
				height: 348rpx;
				background-size: 100%;
			}

			.cicle_one {
				background-color: #59de21 !important;
			}

			.cicle_two {
				background-color: #59de21 !important;
			}

			.top {
				border-bottom: 1px dashed #59de21 !important;
			}
		}

		.box_three {
			background-color: #ff3c3c;
			min-height: calc(100vh);

			.bg_wrap {
				background: url(https://hsm.aylzwl.com/wmq/static/img_9.jpg) no-repeat center top;
				height: 348rpx;
				background-size: 100%;
			}

			.cicle_one {
				background-color: #ff3c3c !important;
			}

			.cicle_two {
				background-color: #ff3c3c !important;
			}

			.top {
				border-bottom: 1px dashed #ff3c3c !important;
			}

			.content_btn_one {
				background-color: #fff !important;
				color: #000 !important;
			}
		}
	}
</style>
