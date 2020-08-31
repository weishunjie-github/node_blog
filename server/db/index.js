/*
 * @description: 
 * @author: shunjie
 * @github: 此处 写git项目地址
 * @lastEditors: shunjie
 * @LastEditTime: 2020-08-26 15:32:31
 * @Copyright: 此处写项目版本号
 */
const mysql = require('mysql')
const dbOption = require('./config')
//创建连接池
const pool = mysql.createPool(dbOption)
function query (sql,params) {
 return new Promise((resolve, reject) => {
 //获取连接
 pool.getConnection((err, conn) => {
 if (err){
 reject(err)
 return
 }
 //执⾏sql语句
 conn.query(sql, params, (err, result) => {
 conn.release()
 if (err) {
 reject(err)
 return
 }
 resolve(result)
 })
 })
 })
}
module.exports = query