<template>
	<div class="drop-card">
		<p class="title">Vote Now</p>
		<div class="avatar-group">
			<img src="../../assets/imgs/avatar-group.png" alt="vote now">
			<p class="des">You decide who can get IN</p>
		</div>
		<a href="https://itunes.apple.com/US/app/id873518909?mt=8">
			<button id="btn-click" class="icon-button">Join Now!</button>
		</a>
	</div>
</template>

<script>
	import {Indicator} from 'mint-ui'

	export default {
		name: 'card',
	}
</script>


<style lang="scss">
	$primaryColor: #d1ae82;
	.drop-card {
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translateX(-50%) translateY(-50%);

	    width: 330px;
	    height: 500px;
	    background: linear-gradient(#232323, #404040);
	    text-align: center;
	    line-height: 60px;
	    color: $primaryColor;
	    border: 1px solid #333;
	    border-radius: 6px;
	    z-index: 20;

	    animation: dropDown 0.6s cubic-bezier(0.4, -0.59, 0.58, 1.55);

	    @keyframes dropDown {
	        0% {
	            transform: translateX(-50%) translateY(-200%);
	            opacity: 0;
	        }
	        100% {
	            transform: translateX(-50%) translateY(-50%);
	            opacity: 1;
	        }
	    }

	    .title {
	        font-family: 'MinionPro-Bold';
	        font-size: 24px;
	    }
	    .avatar-group {
	        text-align: center;
	        overflow: hidden;
	        img {
	            display: inline-block;
	            width: 112%;
	            position: relative;
	            top: 30px;
	            left: 50%;
	            transform: translateX(-51%);
	        }
	        .des {
	            position: relative;
	            margin: 0;
	            top: -50px;
	        }
	    }
		a {
			display: block;
		}
	    .icon-button {
	        position: relative;
	        width: 150px;
	        height: 40px;
	        text-align: left;
	        padding-left: 26px;
	        font-size: 16px;
	        top: 0;
	        background: url(../../assets/imgs/icon-button.png) no-repeat 100% / cover;
	    }
	}
	.mint-indicator {
	    z-index: 30;
	    position: relative;
	}
</style>
