/*
 * @description: 
 * @author: shunjie
 * @github: 此处 写git项目地址
 * @lastEditors: shunjie
 * @LastEditTime: 2020-08-27 16:25:43
 * @Copyright: 此处写项目版本号
 */

 const crypto = require('crypto')
function md5(s) {
    return crypto.createHash('md5').update(String(s)).digest('hex')
}

module.exports = {
    md5
}