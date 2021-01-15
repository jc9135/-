const BASE_URL = 'https://gfyhqserve.aylzwl.com/v1/'
export const myRquest = (ops) => {
	let token;
	uni.getStorage({
		key: 'token',
		success: function (res) {
			token = res.data;
		}
	});
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + ops.url,
			method: ops.method || 'GET',
			data: ops.data || {},
			header: {
				'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEsImlzcyI6IiIsImF1ZCI6IiIsImlhdCI6MTYxMDQ1MjAxNCwibmJmIjoxNjEwNDUyMDE0LCJleHAiOjE2MTA3MTEyMTR9.5fqwVzGWwAepIYEhbQOmzrqKRIuaBDbWjG3OIuPzeus', 
			},
			success: (res) => {
				switch (res.data.code) {
					case 400:
						getCode();
						break;
					case 1:
						resolve(res)
						break;
					default:
						resolve(res)
						break;
				}
			},
			fail:(err)=> {
				reject(err)
			}
		})
	})
}
const getCode = () => {
	let origin = location.href; //网页授权的回调域名，这里设置的是本地端口
	let urlNow = encodeURIComponent(origin); //处理域名
	let scope = "snsapi_userinfo"; //弹框显示授权
	let appid = "gh_f1ab99b9f5b5";
	// 截取code
	if(!getUrlCode().code){
		let url =`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlNow}&response_type=code&scope=${scope}&state=123#wechat_redirect`;
		window.location.href = url;
	}else {
		uni.request({
			url: BASE_URL + 'member/login',
			method: 'POST',
			data: {
				code:getUrlCode().code
			},
			success: (res) => {
				uni.setStorage({key: 'token',data: res.data.token});
			},
			fail:(err)=> {
			}
		})
	}
}
const getUrlCode = () => { // 截取url中的code方法
	let url = location.search
	let theRequest = new Object()
	if (url.indexOf("?") != -1) {
		let str = url.substr(1)
		let strs = str.split("&")
		for (let i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1])
		}
	}
	return theRequest;
}