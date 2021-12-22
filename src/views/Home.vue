<template>
  <div id="boxes" class="fadeIn" @click="pathTo('/privacy')">
		<div id="boxes_body" v-cloak style="opacity: 1;">
			<div class="logo">
				<img src="../assets/img/logoT.png"/>
			</div>
			<div class="bodty" id="middle_bot">
				<div class="inforBox" style="opacity: 1;">
					<div class="inforBoxB" id="scrolldIV" v-html="content"></div>
				</div>
				<div class="progress_bar" style="opacity: 1;">
					<div class="progress_bar_box"  style="width:progressWidth + 'vw';">
					</div>
				</div>
				<div class="progress_msg">{{showBottomMessage}}</div>
			</div>
		</div>
	</div>
   <router-view/>
</template>

<script>


export default {
  name: 'Home',
  data() {
			return {
				showBottomMessage: "正在加载...", //底部显示文字提示
				progressWidth: 0, //百分比宽度值
				progressValue: "开始更新数据",
				isCode: false,
				updatePath: "",
				progress_val: 0,
				progress_int: 0,
				version_data: null, //本地版本号
				content: "",
				downCount: 0,
				checkDataArr: [], //存储数据版本的数组
				endVal: false, //结束标志
				cB: 0,
				type: "",
				taNum: 0,
				benDb: [],
				fwDb: [],
				j: -1,
				r: -1,
				resList: [],
				root: [], //存储权限
				coursePermission: "", //course对应的权限
				CON: "",
				CON1: ''
			}
		},
    methods:{
      pathTo(path){
        this.$router.push({
          path:path
        })
      }
    }
}
</script>
<style>
  @import "../static/css/index_x.css";
   @import "../static/css/public.css";
  @import "../static/css/animation.css"; 
</style>
