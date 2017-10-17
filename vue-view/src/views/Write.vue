<template>
	<div class="write">
		<header class="header is-fixed">
			<div class="header-inner">
				<a href="/" aria-label="汪世界" class="header-title">汪</a>
				<div class="header-littleTitle">写文章</div>
				<div class="header-pub">
					<button class="Button Button--blue" :class="{'Button-disabled': disabled}" :disabled="disabled" @click="publish">发布</button>
				</div>
			</div>
		</header>
		<div class="write-view Card">
			<div class="write-title">
				<input type="text" class="Input" placeholder="输入标题" v-model="title" @input="hasContent"/>
			</div>
			<hr />
			<div class="write-content">
				<textarea rows="50" class="Input" placeholder="输入正文" @input="hasContent" v-model="content"></textarea>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'write',
		data() {
			return {
				title: '',
				content: '',
				disabled: true
			}
		},
		methods: {
			hasContent () {
				if(this.content != '' && this.title != ''){
					this.disabled = false
				} else{
					this.disabled = true
				}
			},
			publish () {
				
			}
		}
	}
</script>

<style>

</style>