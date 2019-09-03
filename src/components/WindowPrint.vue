<template>
    <div class="window-print">
        <div class="print-content">
            <input type="file" ref="file" class="upload-file" @change="previewImg">
            <!--startprint-->
            <img :src="uploadFile" alt="" class="preview-img" ref="printImg">
            <!--endprint-->
        </div>
        <div class="print-btn">
            <span @click="upload">上传图片</span>
            <span @click="print">打印</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WindowPrint',
    data() {
        return {
            // 图片 地址
            uploadFile: '',

            // 开始打印位置
            startprint: '<!--startprint-->',

            // 结束打印位置
            endprint: '<!--endprint-->',

            // 备份页面
            bHtml: '',

        }
    },
    methods: {
        // 上传
        upload() {
            this.$refs.file.click();

        },
        // 打印预览
        print() {
            this.bHtml = window.document.body.innerHTML;
            let selectHtml = this.bHtml.slice(this.bHtml.indexOf(this.startprint));
            selectHtml = selectHtml.slice(0, selectHtml.indexOf(this.endprint));
            window.document.body.innerHTML = selectHtml
            window.print();
            window.document.body.innerHTML = this.bHtml;

        },
        // 上传预览
        previewImg(e) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                this.uploadFile = e.target.result;
            }

        }
    }
}
</script>
<style scoped>
.window-print {
    width: 1000px;
    text-align: center;
}
/* 打印内容 */
.print-content {
    width: 1000px;
    height: 600px;
    background-color: darkslategrey;
}
/* 上传 */
.upload-file {
    display: none;
}
/* 图片预览 */
.preview-img {
    width: 100%;
    height: 100%;
}
/* 按钮 */
.print-btn {
    margin-top: 10px;
}
.print-btn > span {
    display: inline-block;
    width: 100px;
    height: 30px;
    background-color: #8989af;
    border-radius: 15px;
    font-size: 15px;
    line-height: 30px;
    color: #fff;
    cursor: pointer;
}
</style>
