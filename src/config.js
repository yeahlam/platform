const envMaps = {
	'localhost': 'dev', // 本地连接测试环境
	'gyh.com.cn': 'dev', // 本地连接测试环境
	'pcenter.gf.com.cn': 'prd' // 生产环境
}

export function getEnvironment() {
	const hostname = location.hostname
	return envMaps[hostname] || 'dev'
}

export function isDev() {
	return getEnvironment() === 'dev'
}

export function isPrd() {
	return getEnvironment() === 'prd'
}
