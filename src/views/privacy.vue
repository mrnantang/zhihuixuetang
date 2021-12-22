<template>
  <div id="bodyBoxes">
    <div id="bodtyBox" v-cloak class="loginBg">
      <!-- 这是隐私弹出层的开始 -->
      <div class="popup" v-show="privacy">
        <!--关闭按钮结束-->
        <!--隐私的标题开始-->
        <div class="p_title">新华智慧学堂隐私政策</div>
        <!--隐私的标题结束-->
        <div class="message_box rows">
          <div class="msg">
            <text
              >欢迎使用新华智慧学堂APP!在您使用新华智慧学堂APP前，请认真阅读并充分理解以下</text
            >
          </div>
        </div>
        <!--详情按钮的开始-->
        <div class="detail_btn">
          <label for="label" >
            <input
              type="checkbox"
              style="transform: scale(1.2)"
              v-model="ckeckVal"
            />
          </label>
          <text @click="PrivacyPolicy">《新华智慧学堂隐私政策》</text>
        </div>
        <!--详情按钮的结束-->

        <!--同意按钮的开始-->
        <div class="agree clickEffict" @click="agree('/login')">同意</div>
        <!--同意按钮的结束-->
      </div>
      <!-- 这是弹出层隐私政策详情的start -->
      <div class="detail-box" v-show="policy">
        <div class="close_button">
          <text
            class="iconfont close_button_span"
            style="margin-top: 1.6vw"
            @click="cancel"
            ><svg
              t="1640153886166"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2046"
              width="20"
              height="20"
            >
              <path
                d="M1004.032007 907.639505l-395.605202-395.605201 395.605202-395.673468c12.902396-12.902396 19.967993-30.037323 19.967993-48.298651 0-18.158927-7.099731-35.259722-19.93386-48.059717A67.583977 67.583977 0 0 0 955.938156 0.000341c-18.295461 0-35.430388 7.099731-48.298651 19.967994L512.000171 415.573536 116.360836 19.968335A67.720511 67.720511 0 0 0 68.164585 0.000341C49.971525 0.000341 32.87073 7.100072 19.968335 19.968335A67.549844 67.549844 0 0 0 0.000341 68.096319c0 18.227194 7.065598 35.362122 19.967994 48.264517l395.673468 395.673468L19.968335 907.605372A67.720511 67.720511 0 0 0 0.000341 955.835756c0 18.193061 7.099731 35.327988 19.967994 48.196251 12.902396 12.868262 30.00319 19.967993 48.19625 19.967993 18.193061 0 35.327988-7.099731 48.196251-19.967993l395.673468-395.605202 395.605201 395.605202c12.868262 12.868262 30.037323 19.967993 48.230384 19.967993 18.227194 0 35.293855-7.099731 48.127984-19.93386a68.266644 68.266644 0 0 0 0-96.426635z"
                p-id="2047"
                fill="#ffffff"
              ></path></svg
          ></text>
        </div>
        <div class="detail_title">
          <text style="text-align: center">新华智慧学堂隐私政策</text>
        </div>
        <div class="detail-msg-box">
          <div class="detail-msg rows">
            <text
              >新华智慧学堂(以及下文提到的“我们”、“我们的”或“本APP”)是由主体公司四川新华乐知教育科技有限公司提供的网络产品。<br />
              产品名称:新华智慧学堂<br />
              产品类别:app
            </text>
          </div>
        </div>
      </div>
      <!-- 这是弹出层隐私政策详情的end -->
      <!-- 没勾选隐私弹出框start -->
      <div class="big-box" v-show="isShow">
        <div class="alert">
          <div class="big-alert">
            <div class="a-title">隐私协议提示</div>
            <div class="alert-box" style="margin-top: 3vh">
              <text class="alert-text"
                >请勾选隐私协议复选框，确定你已经了解协议内容</text
              >
            </div>
            <div class="yes clickEffict" @click="hideAlert">确定</div>
          </div>
        </div>
      </div>
      <!-- 没勾选隐私弹出框end -->
    </div>
  </div>
  <router-div />
</template>

<script>
export default {
  name: "privacy",
  data() {
    return {
      ckeckVal: false,
      isShow: false,
      // 隐私页面
      privacy: true,
      // 政策页面
      policy: false,
    };
  },
  methods: {
    agree(path) {
      if (this.ckeckVal) {
        this.$router.push({
          path: path,
        });
      } else {
        this.isShow = true;
      }
    },
    hideAlert() {
      this.isShow = false;
    },
    // 开启隐私政策
    PrivacyPolicy() {
      this.privacy = false;
      this.policy = true;
    },
    cancel() {
      this.policy = false;
      this.privacy = true;
    },
  },
};
</script>

<style scoped>
@import "../static/css/animation.css";
@import "../static/css/login.css";
@import "../static/css/user_infor.css";
@import "../static/css/public.css";
@import "../static/css/privacy.css";
</style>
