const path = require('path');
const resolve = (dir) => path.join(__dirname, '', dir);

module.exports = {
	devServer: {
		// host: 'gyh.com.cn',
		disableHostCheck: true,
		// proxy: 'http://pcenterdev.gf.com.cn',
		open: true,
		// public: 'gyh.com.cn',
		port: 8080
	},
	// configureWebpack: {
	// 	resolve: {
	// 		// 自动解析确定的扩展
	// 		extensions: ['.js', '.vue', '.json'],
	// 		// 别名
	// 		alias: {
	// 			'views': resolve('src/views')
	// 		}
	// 	}
	// },
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].chunksSortMode = 'none'
			return args
		})
	}
}
