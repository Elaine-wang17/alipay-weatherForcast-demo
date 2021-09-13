export function request(params) {
	return new Promise((resolve, reject) => {
  	my.request({
    	...params,
      success(data) {
      	resolve(data);
      },
      fail(err) {
    		reject(err);
    	}
    })
  });
}

export function getLocation() {
	return new Promise((resolve, reject) => {
  	my.getLocation({
      type: 1,
      success(data) {
        resolve(data);
      },
      fail(err) {
      	reject(err);
      },
      complete() {},
    })
  });
}