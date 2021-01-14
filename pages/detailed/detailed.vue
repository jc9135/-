<template>
	<view class="album">
		<scroll-view class="album_scroll" scroll-y @scrolltolower="handleToLower">
			<view class="album_list">
				<view class="album_item" v-for="(item,index) in albumList" :key="index"   v-if="albumList&&albumList.length>0">
					<view class="status">{{item.remark}}</view>
					<view class="top">
						<view>金额:{{item.money}}</view>
						<view>{{item.source_order_number}}</view>
					</view>
					<view class="bottom">
						<view>{{item.add_time}}</view>
						<view class="">来源：{{sourceList[item.type]}}</view>
					</view>
				</view>
				<view class="empty_box"   v-if="albumList.length === 0">
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
				sourceList: {
					1: '收入',
					2: '提现'
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
					url: "member/money_detail",
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
				left: 20rpx;
				top: 10rpx;
				width: 500rpx;
				height: 30rpx;
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
