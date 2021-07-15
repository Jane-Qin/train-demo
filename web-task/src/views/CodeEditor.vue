<template>
	<div class="code-editor">
		<section>编辑保存</section>
		<section class="code-editor-operate" >
			<input type="file" value="选择文件" @change="handleFiles"/>
			<a class="btn" @click="save">保存文档</a>
		</section>
		<div id="monaco" style="height:500px"></div>
	</div>

</template>
<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';

export default {
	name:"CodeEditor",
	data(){
		return {
			code:`console.log("hello,world")`,
			language:"javascript",
			monacoInstance:null,
			fileName:'editorFile.txt',
			type:'text/plain'
		}
	},
	methods:{
		handleFiles(e){
			let self=this;
			if(e.target.files.length>0){
				let file=e.target.files[0];
				console.log(file);
				self.fileName=file.name;
				self.type=file.type;
				let reader = new FileReader();
				if(file.type.indexOf('text/')>-1){
					reader.onload=function(e){
						self.code=e.target.result;
						self.monacoInstance.setValue(self.code);
					};
					reader.readAsText(file);
				}
			}
		},
		save(){
			let self=this;
			let content=this.monacoInstance.getValue();
			var reader = new FileReader();
			reader.readAsDataURL(new File([content],this.fileName, {type:self.type}));
			reader.onload = function (e) {
				var a = document.createElement('a');
				a.download = self.fileName;
				a.className="download";
				a.href = e.target.result;
				document.querySelector("body").append(a);
				a.click();
				document.querySelector('.download').remove();
			}
			console.log(content);
		},
		init(){
			let self = this;
			this.monacoInstance=monaco.editor.create(document.getElementById("monaco"),{
				value: self.code,
				language: self.language
			})
			//monacoInstance.dispose(); //使用完成销毁实例
		}
	},
	mounted(){
		this.init();
	}
}
</script>
<style lang="scss"  scoped>
.code-editor{
	height: 100%;
	width: 50%;
	margin: 40px auto;
	.code-editor-operate{
		height:30px;
		.btn{
			width: 80px;
			height: 30px;
			border: 1px solid #8f8c8d;
			float: right;
			border-radius: 5px;
			padding: 3px 6px;
			cursor: pointer;
		}
	}
}

</style>
