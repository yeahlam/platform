<template>
    <div class="home">
        首页
        <div>环境:{{isDev?'测试':'生产'}}</div>
    </div>
</template>

<script>
	// @ is an alias to /src
	import {isDev} from "../config";
    
	export default {
		name: 'home',
		data() {
			return {
				isDev
			}
		},
		components: {}
	}
</script>
