<template>
  <div class="content">
        <div class="title">欢迎使用恶意程序检测工具</div>
        <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传可执行文件，且不超过100Mb</div>
        </el-upload>
        <el-button type="primary" class="btn" @click="start">开始检测</el-button>
        <el-progress :text-inside="true" :stroke-width="26" :percentage="num" v-if="showProgress" class="progress"></el-progress>
        <div class="title" v-else-if="showWord" style="margin-top: 20px;">该程序为恶意程序</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            showProgress: false,
            num: 0,
            code: '',
            showWord: false
        }
    },
    watch: {
        num(val) {
            if (val == 100) {
                clearInterval(this.code)
                this.showProgress = false
                this.showWord = true
            }
        }
    },
    methods: {
        start(){
            this.num = 0
            this.showWord = false
            this.showProgress = true
            this.code = setInterval(() => {
                this.num += 1
            }, 500)
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
        font-size: 20px;
        font-weight: 500;
    }
    .upload-demo {
        margin-top: 100px;
    }
    .btn {
        margin-top: 40px;
        width: 200px;
    }
    .progress{
        width: 400px;
        margin-top: 20px;
    }
}
</style>