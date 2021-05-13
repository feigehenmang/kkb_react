export const sendUserInfo = (userInfo) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(userInfo.name === 'xm') {
                resolve(userInfo);
            } else {
                reject('用户名密码错误')
            }
        }, 1000)
    })
}