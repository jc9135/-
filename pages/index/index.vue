<template>
	<view class="content">
		<view class="user_info">
			<view class="info_box">
				<image class="avatar" :src="avatarUrl"></image>
				<view class="info">
					<text>{{!!userName&&userName.length<=10?userName:userName.substring(0,10)+'...'}}</text><br />
					<text>推荐人：{{!!pidNickName&&pidNickName.length<=10?pidNickName:pidNickName.substring(0,10)+'...'}}</text>
				</view>
			</view>
			<view class="money_box">
				<view class="money_top">
					<text>{{totalMoney}}</text>
					<text>{{todayMoney}}</text>
					<text>{{yesterdayMoney}}</text>
					<text>{{money}}</text>
				</view>
				<view class="money_bottom">
					<text>累计收益</text>
					<text>今日收益</text>
					<text>昨日收益</text>
					<text>余额</text>
				</view>
			</view>
			
			<view class="list_box">
				
			</view>
		</view>
		
		<view class="user_click">
			<view class="click_item" @click="goOrder">
				<view>
					<image src="@/static/inde_1.png"></image>
					<text>团队订单</text>
				</view>
				<text>></text>
			</view>
			<view class="click_item" @click="goTeam">
				<view>
					<image src="@/static/jifen.jpeg"></image>
					<text>我的团队</text>
				</view>
				<text>></text>
			</view>
			<view class="click_item" @click="beginCanvas">
				<view>
					<image src="@/static/index_4.png"></image>
					<text>我的海报</text>
				</view>
				<text>></text>
			</view>
			<view class="click_item" @click="goWithDrawal">
				<view>
					<image src="@/static/inde_4.png"></image>
					<text>提现</text>
				</view>
				<text>></text>
			</view>
			<view class="click_item"  @click="goDetailed">
				<view>
					<image src="@/static/index_1.png"></image>
					<text>收入明细</text>
				</view>
				<text>></text>
			</view>
			<view class="click_item">
				<view>
					<image src="@/static/message.png"></image>
					<text>推送提醒</text>
				</view>
				<view>
					<switch style="transform:scale(0.7)" checked @change="switchChange" />
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
	export default {
		data() {
			return {
				userName: '',
				money: '',
				avatarUrl: '',
				registerTime: '',
				pidNickName: '',
				totalMoney: '',
				todayMoney: '',
				yesterdayMoney: '',
				lists:[]
			}
		},
		onLoad() {
			this.getUserInfo();
			this.getQrCode();
		},
		methods: {
			goTeam () {
				uni.navigateTo({
					url: '/pages/team/team'
				})
			},
			goDetailed () {
				uni.navigateTo({
					url: '/pages/detailed/detailed'
				})
			},
			goOrder () {
				uni.navigateTo({
					url: '/pages/order/order'
				})
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
			async switchChange (e) {
				const {
					data: res
				} = await this.$myRquest({
					url: "member/push_switch",
					method: "POST",
					data:{
						switch: e.target.value?1:0
					}
				});
				if (res.code == 1) {
					uni.showToast({
						title: res.message,
						icon: "none"
					})
				}
			},
			beginCanvas() {
				this.$refs.mosoweCanvasComponents.createCanvas();
			},
			_canvasImage(e) {
				this.canvasUrl = e;
			},
			async getUserInfo(){
				const {
					data: res
				} = await this.$myRquest({
					url: "member/member_info",
					method: "POST"
				});
				this.userName = res.data.nick_name;
				this.money = res.data.money;
				this.avatarUrl = res.data.avatar_url;
				this.registerTime = res.data.register_time;
				this.pidNickName = res.data.pid_nick_name;
				this.totalMoney = res.data.total_money;
				this.todayMoney = res.data.today_money;
				this.yesterdayMoney = res.data.yesterday_money;
			}
		}
	}
</script>

<style lang="scss">
	.content {
		.user_info {
			background:  url(https://hsm.aylzwl.com/wmq/static/index_bg.jpg) no-repeat center top;
			background-size: 100% 100%;
			width: 90%;
			height: 350rpx;
			border-radius: 10rpx;
			margin: 20rpx auto;
			.info_box {
				padding: 50rpx;
				display: flex;
				.avatar {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
				}
				.info {
					color: #fff;
					font-size: 30rpx;
					margin-left: 15rpx;
					line-height: 50rpx;
				}
			}
			.money_box {
				padding: 10rpx 50rpx;
				text {
					display: inline-block;
					width: 25%;
					text-align: center;
					color: #fff;
					
				}
				.money_top {
					text {
						font-weight: 600;
						font-size: 34rpx;
					}
				}
				.money_bottom {
					text {
						font-size: 26rpx;
					}
				}
			}
		}
		.user_click {
			padding: 20rpx;
			width: 90%;
			margin: 0 auto;
			.click_item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 15rpx 0;
				padding: 15rpx;
				border-bottom: 1px solid #eee;
				text {
					color: #eee;
					font-size: 30rpx;
				}
				view {
					display: flex;
					align-items: center;
					image {
						width: 60rpx;
						height: 60rpx;
					}
					text {
						font-size: 30rpx;
						margin-left: 20rpx;
						color: #000;
					}
				}
			}
		}
	}
</style>
