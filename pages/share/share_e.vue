<template>
	<view>
		<view>
			<text v-for="item , index in buttonList" :key="index">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buttonList:['外卖','商超','酒店']
			};
		}
	}
</script>

<style lang="scss">

</style>
