<template>
  <view>
    <view>
      <view class="home_tab">
        <view class="home_tab_title">
          <view class="home_inner">
            <uni-segmented-control
              :current="current"
              :values="items.map(v=>v.title)"
              @clickItem="onClickItem"
              style-type="text"
              active-color="#d4237a"
            ></uni-segmented-control>
          </view>
          <view class="iconfont iconsearch"></view>
        </view>
        <view class="home_content">
          <view v-if="current === 0">
            <home-album></home-album>
          </view>
          <view v-if="current === 1">
            <home-categroy></home-categroy>
          </view>
          <view v-if="current === 2">
            <home-recommend></home-recommend>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import homeAlbum from "@/pages/team/teamOne.vue";
import homeCategroy from "@/pages/team/teamTwo.vue";
export default {
  components: {
    homeAlbum,
    homeCategroy,
  },
  data() {
    return {
      items: [
        { title: "一级" },
        { title: "二级" }
      ],
      current: 0
    };
  },
  methods: {
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    }
  },
  onLoad(){
  }
};
</script>
<style lang="scss" scoped>
.home_tab {
  .home_tab_title{
    position: relative;
    .home_inner {
      width: 60%;
      margin: 0 auto;
    }
    .iconsearch {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 5%;
    }
  }
}
</style>
