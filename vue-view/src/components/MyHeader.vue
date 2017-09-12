<template>
  <header class="header is-fixed">
  	<div class="header-inner">
  		<a href="/" aria-label="汪世界" class="header-title">汪卷</a>
  		<nav role="navigation" class="header-nav">
  			<a class="header-navItem is-active" href="/">首页</a>
  			<a class="header-navItem" href="/">发现</a>
  			<a class="header-navItem" href="/">话题</a>
  		</nav>
  		<div class="SearchBar" role="search">
  			<div class="SearchBar-toolWrapper">
  				<form class="SearchBar-tool">
  					<div>
  						<div class="Popover">
  							<div class="SearchBar-input Input-wrapper Input-wrapper--grey" :class="{'SearchBar-focusedInput': focused, 'is-focus': focused}">
  								<input type="text" class="Input" id="" value="" placeholder="搜索你感兴趣的内容..." @focus="inputFocused(1)" @focusout="inputFocused(2)"/>
  								<div class="Input-after">
  									<button class="Button SearchBar-searchIcon Button--primary">
  										Go
  									</button>
  								</div>
  							</div>
  						</div>
  					</div>
  				</form>
  			</div>
  			<button class="Button QuestionAskButton SearchBar-askButton Button--primary Button--blue" :class="{'SearchBar-hiddenAskButton': focused}">提问</button>
  		</div>
  		<div class="header-userInfo">
  			<div class="Popover PushNotifications header-notifications">
  				<button class="Button PushNotifications-icon Button--plain">消息</button>
  			</div>
  			<div class="Popover Messages header-messages">
  				<button class="Button Messages-icon Button--plain">私信</button>
  			</div>
  			<div class="header-profile">
  				<div class="Popover header-menu">
  					<button class="Button header-profileEntry Button--plain">
  						<img class="Avatar header-profileAvatar" src="../assets/head.png"/>
  					</button>
  				</div>
  			</div>
  		</div>
  	</div>
  </header>
</template>
<script>
export default {
  name: 'myHeader',
  data () {
    return {
      username: '',
      userhead: '../assets/head.png',
      focused: false
    }
  },
  methods: {
    inputFocused (num) {
      if (num === 1) {
        this.focused = true
      } else {
        this.focused = false
      }
    }
  }
}
</script>
