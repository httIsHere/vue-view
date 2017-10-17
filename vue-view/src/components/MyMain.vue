<template>
<div>
	<div class="main">
		<div class="Topstory">
			<div class="Topstory-container">
				<div class="Topstory-mainColumn">
					<div class="Card Topstory-header">
						<div class="Topstory-header-nav">
							<button class="Button QuestionAskButton Topstory-header-navItem Button--plain" @click="ask=true">提问</button>
							<a href="/#/question" class="Topstory-header-navItem">回答</a>
							<a href="/#/write" class="Topstory-header-navItem">写文章</a>
						</div>
						<a href="/#/draft" class="Topstory-header-rightItem">草稿</a>
					</div>
					<div class="Topstory-main" v-for="article in articles">
						<div>
							<div class="Card Topstory-item"v-show="article.show">
								<button class="Button Topstory-item-rightButton Button--plain" @click="article.show=false">×</button>
								<div class="Feed">
									<div class="Feed-title">
										<div class="Feed-meta">
											<span class="Feed-meta-item">来自社区：</span>
										</div>
									</div>
									<div class="Content-item Answer-item">
										<h5 class="Content-item-title">{{article.title}}</h5>
										<div class="Content-item-meta">
											<div class="AuthorInfo AuthorInfo--plain">
												<span class="UserLink AuthorInfo-avatarWrapper">
													<div class="Popover">
														<div id="Popover-toggle">
															<a href="" class="UserLink-link">
																<img src="" alt="" class="Avatar AuthorInfo-avatar" width="24" height="24"/>
															</a>
														</div>
													</div>
												</span>
												<div class="AuthorInfo-content">
													<div class="AuthorInfo-head">
														<span class="UserLink AuthorInfo-name">{{article.author}}</span>
													</div>
													<div class="AuthorInfo-detail">hhhh~</div>
												</div>
											</div>
										</div>
										<div class="RichContent is-collapsed">
											<div class="RichContent-inner">
												<span class="RichText CopyrightRichText-richText">{{article.content}}</span>
												<button class="Button Content-item-more Button--plain">阅读全文▽</button>
											</div>
											<div class="Content-item-actions">
												<span>
													<button class="Button VoteButton VoteButton--up">▲ 25</button>
													<button class="Button VoteButton VoteButton--down">▼</button>
													<button class="Button Content-item-action Button--plain">☀ 15条评论</button>
													<button class="Button Content-item-action Button--plain">※ 分享</button>
													<button class="Button Content-item-action Button--plain">★ 收藏</button>
													<button class="Button Content-item-action Button--plain">❤ 感谢</button>
													<div class="Popover Content-item-action">
														<button class="Button Button--plain">more</button>
													</div>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="Topstory-slideBar">
					<div>
						<div class="Sticky">
							<div class="Card">
								<ul class="Topstory-slideBar-categoryList">
									<li class="Topstory-slideBar-categoryItem">
										<a href="/lives" class="Button Button--plain">
											<span class="Topstory-slideBar-categoryIcon">*</span>
											<span class="Topstory-slideBar-categoryLabel">Live</span>
										</a>
									</li>
									<li class="Topstory-slideBar-categoryItem">
										<a href="/pub" class="Button Button--plain">
											<span class="Topstory-slideBar-categoryIcon">*</span>
											<span class="Topstory-slideBar-categoryLabel">Pub</span>
										</a>
									</li>
									<li class="Topstory-slideBar-categoryItem">
										<a href="/circle" class="Button Button--plain">
											<span class="Topstory-slideBar-categoryIcon">*</span>
											<span class="Topstory-slideBar-categoryLabel">Circle</span>
										</a>
									</li>
								</ul>
							</div>
							<div class="Card">
								<ul class="Topstory-slideBar-navList">
									<li class="Topstory-slideBar-navItem">
										<a href="/like" class="Button Button--plain">
											<span class="Topstory-slideBar-navIcon">+</span>
											<button class="Topstory-slideBar-navLink">我的收藏</button>
										</a>
									</li>
									<li class="Topstory-slideBar-navItem">
										<a href="/focus" class="Button Button--plain">
											<span class="Topstory-slideBar-navIcon">+</span>
											<button class="Topstory-slideBar-navLink">我的关注</button>
										</a>
									</li>
									<li class="Topstory-slideBar-navItem">
										<a href="/invite" class="Button Button--plain">
											<span class="Topstory-slideBar-navIcon">+</span>
											<button class="Topstory-slideBar-navLink">我的邀请</button>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="Modal-Wrapper" v-if="ask">
		<div class="Modal-backdrop" @click="ask=false"></div>
		<div class="Modal Modal--large QuestionAsk-Modal">
			<div class="Modal-inner">
				<h3 class="Modal-title">Your question</h3>
				<div class="Modal-content">
					<div class="QuestionAsk">
						<div class="QuestionAsk-section">
							<div class="QuestionAsk-title">
								<div class="Input-wrapper Input-wrapper--spread Input-wrapper--multiline Input-wrapper--large">
									<textarea class="Input" rows="2" placeholder="问题标题" v-model="title"></textarea>
								</div>
							</div>
						</div>
						<div class="QuestionAsk-section" v-if="error">
							<div class="QuestionAsk-sectionHeader">
								<div class="QuestionAsk-sectionHeaderRight">
									<span class="QuestionAsk-error">问题标题不能为空</span>
								</div>
							</div>
						</div>
						<div class="QuestionAsk-section">
							<div class="QuestionAsk-title">
								<div class="Input-wrapper Input-wrapper--spread Input-wrapper--multiline Input-wrapper--large">
									<textarea class="Input" rows="1" placeholder="问题话题" v-model="tag"></textarea>
								</div>
							</div>
						</div>
						<div class="QuestionAsk-section" v-if="error">
							<div class="QuestionAsk-sectionHeader">
								<div class="QuestionAsk-sectionHeaderRight">
									<span class="QuestionAsk-error">至少添加一个话题</span>
								</div>
							</div>
						</div>
						<div class="QuestionAsk-section QuestionAsk-DetailSection">
							<div class="QuestionAsk-sectionHeader">
								<span class="QuestionAsk-label">问题描述（可选）：</span>
								<div class="QuestionAsk-sectionHeaderRight">
									<button class="Button Editable-control Button--plain"><strong>B</strong></button>
									<button class="Button Editable-control Button--plain"><strong>♫</strong></button>
								</div>
							</div>
							<div class="QuestionAsk-title">
								<div class="Input-wrapper Input-wrapper--spread Input-wrapper--multiline Input-wrapper--large">
									<textarea class="Input" rows="3" placeholder="问题背景、条件等详情信息" v-model="desp"></textarea>
								</div>
							</div>
						</div>
						<div class="ModalButtonGroup QuestionAsk-buttonGroup ModalButtonGroup--vertical">
							<button class="Button Button--primary Button--blue" @click="commit">提交问题</button>
						</div>
					</div>
				</div>
			</div>
			<button class="Button Modal-closeButton Button--plain"></button>
		</div>
	</div>
</div>
</template>

<script>
  export default {
	name: "mymain",
	  data () {
		return {
		  ask: false,
		  error: false,
		  articles: this.$store.state.articles,
		  title: '',
		  tag: '',
		  desp: ''
		}
	  },
	  methods:{
	  	commit () {
	  		if(this.title == '' || this.tag == ''){
	  			this.error = true
	  		} else {
	  			var tags = this.tag.split(' ')
	  			this.axios.post('/question',{
	  				title: this.title,
	  				tag: tags,
	  				desp: this.desp
	  			}).then(function(res){
	  				console.log(res)
	  			})
	  		}
	  	}
	  }
  }
</script>