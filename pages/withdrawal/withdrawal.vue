<template>
	<view>
		<view class="input_wrap">
			<text class="tip">请输入提现金额</text>
			<input class="uni-input input" @input="onKeyInput" type="number" placeholder="" />
			<text class="num">账户余额：{{money}}</text>
		</view>
		<view class="text_box">
			<text class="text_tit">提现规则:</text>
			<text class="text">1.提现1-9999元，1元整数</text>
			<text class="text">2.提现时间为9:00-22:00，每日可提现3次</text>
			<text class="text">3.提现秒到，0手续费</text>
		</view>
		<view class="btn_wrap">
			<button class="btn" size="mini" @click="withDrawal" :disabled="isClick">确定提现</button>
		</view>
		<view class="list">
			<text class="list_tit">最近提现</text>
			<view v-for="(item,index) in dataList" :key="index" class="list_item">
				<text>提现金额：{{item.money}}</text>
				<text>提现时间：{{item.add_time}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money:'',
				inputValue:'',
				dataList:[],
				pageindex: 1,
				pageLimit: 10,
				flag: false,
				isClick:false
			}
		},
		onLoad() {
			this.getUserInfo();
			this.getMoneyList();
		},
		onReachBottom() {
			if(this.dataList.length<this.pageindex*this.pageLimit) return this.flag = true;
			this.pageindex++;
			this.getMoneyList();
		},
		onPullDownRefresh() {
			console.log('下拉刷新了');
			this.pageindex = 1;
			this.dataList = [];
			this.flag = false;
			setTimeout(()=>{
			  this.getMoneyList(()=>{
					uni.stopPullDownRefresh();
				});	
			},1000);
		},
		methods: {
			onKeyInput: function(event) {
				if(!event.target.value){
					uni.showToast({
						title: '请输入提现金额',
						icon:'none'
					})
					this.inputValue = '';
					return false;
				}
				this.inputValue = event.target.value
			},
			async getUserInfo(){
				const {
					data: res
				} = await this.$myRquest({
					url: "member/member_info",
					method: "POST"
				});
				this.money = res.data.money;
			},
			async getMoneyList(callBack){
				const {
					data: res
				} = await this.$myRquest({
					url: "member/pick_money_list",
					method: "POST",
					data:{
						page:this.pageindex,
						limit:this.pageLimit,
					}
				});
				this.dataList = [...this.dataList,...res.data.data]
				callBack && callBack()
			},
			async withDrawal(){
				if(!this.inputValue){
					uni.showToast({
						title: '请输入提现金额',
						icon:'none'
					})
					return false;
				}
				if (!!this.inputValue && this.inputValue % 1 === 0) {
					this.isClick = true;
					const {
						data: res
					} = await this.$myRquest({
						url: "member/pick_money",
						method: "POST",
						data:{
							money:this.inputValue
						}
					});
					uni.showToast({
						title: res.message,
						icon:'none'
					});
					this.isClick = false;
			    } else {
					uni.showToast({
						title: '请输入整数',
						icon:'none'
					})
					return false;
			    }
			}
		}
	}
</script>

<style lang="scss">
.input_wrap {
	width: 90%;
	height: 300rpx;
	box-shadow: 0px 0px 12px 5px #eee;
	margin: 20rpx auto;
	border-radius: 10rpx;
	overflow: hidden;
	.tip {
		color: #ccc;
		margin: 40rpx;
		display: block;
	}
	.num {
		color: #ccc;
		margin: 40rpx;
		display: block;
	}
	.input {
		width: 90%;
		height: 50rpx;
		margin: 50rpx auto 20rpx;
		border-bottom: 2rpx solid #ccc;
	}
}
.text_box {
	width: 90%;
	margin: 20rpx auto;
	padding: 10rpx 0;
	.text {
		display: block;
		font-size: 26rpx;
		margin: 10rpx 0;
	}
	.text_tit {
		
	}
}
.btn_wrap {
	width: 90%;
	margin: 0 auto;
	.btn {
		width: 100%;
		text-align: center;
		background-color: rgb(93,105,243);
		border-radius: 40rpx;
		margin: 0 auto;
		color: #fff;
		padding: 10rpx;
	}
}
.list {
	width: 90%;
	margin: 0 auto;
	.list_tit {
		display: block;
		width: 100%;
		border-bottom: 2rpx solid #ccc;
		padding: 15rpx 0;
	}
	.list_item {
		height: 50rpx;
		padding: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text {
			font-size: 24rpx;
		}
	}
}
</style>
