<template>
	<view class="album">
		<scroll-view class="album_scroll" scroll-y @scrolltolower="handleToLower">
			<view class="album_list">
				<view class="album_item" v-for="(item,index) in albumList" :key="index" v-if="albumList&&albumList.length>0">
					<view  :class="{'status':true,'err':item.status==='0','war':item.status==='1','succ':item.status==='2',}">{{statusList[item.status]}}</view>
					<view class="top">
						<view>{{!!item.title&&item.title.length<=14?item.title:item.title.substring(0,14)+'...'}}</view>
						<view>金额:{{item.direct_money}}</view>
					</view>
					<view class="bottom">
						<view>{{item.order_time}}</view>
						<view class="">来源：{{sourceList[item.source]}}</view>
					</view>
				</view>
				<view class="empty_box"  v-if="albumList.length === 0">
					<text>暂无数据</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				albumList: [],
				requestData: {
					limit: 10,
					page: 1
				},
				hasMore: true,
				statusList: ['退款', '已付款', '完成'],
				sourceList: {
					1: '美团',
					2: '饿了么'
				}
			};
		},
		onLoad() {},
		mounted() {
			// 设置页面的标题
			this.getData();
		},
		methods: {
			async getData() {
				const {
					data: res
				} = await this.$myRquest({
					url: "member/order_list_level1",
					method: "POST",
					data: this.requestData
				});
				if (res.data.data.length === 0) {
					this.hasMore = false;
					uni.showToast({
						title: "没有更多数据了",
						icon: "none"
					})
					return;
				}
				this.albumList = [...this.albumList, ...res.data.data];
			},
			handleToLower() {
				if (this.hasMore) {
					this.requestData.page++;
					this.getData();
				} else {
					uni.showToast({
						title: "没有数据了",
						icon: "none"
					})
				}
			}
		}
	};
</script>
<style lang="scss" scoped>
	.album_scroll {
		height: calc(100vh - 36px);
	}

	.empty_box {
		width: 100%;
		text-align: center;
		height: 300rpx;
		line-height: 300rpx;
	}

	.album_list {
		width: 90%;
		margin: 0 auto;
		padding: 30rpx;

		.album_item {
			padding: 60rpx 20rpx 20rpx;
			display: flex;
			justify-content: space-between;
			position: relative;
			font-size: 26rpx;
			border: 1px solid #eee;
			box-shadow: 0px 0px 12px 5px #eee;
			border-radius: 10rpx;
			margin: 15rpx;

			.status {
				position: absolute;
				left: -40rpx;
				top: 10rpx;
				width: 80rpx;
				height: 50rpx;
				text-align: center;
				line-height: 50rpx;
				border-radius: 10rpx;
				font-size: 24rpx;
				color: #fff;
				&.succ {
					background-color: rgb(158,234,106);
				}
				&.err {
					background-color: rgb(241,190,41);
				}
				&.war {
					background-color: rgb(212,17,2);
				}
			}

			.top {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 80rpx;
			}

			.bottom {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 80rpx;
				font-size: 24rpx;
			}
		}
	}
</style>
