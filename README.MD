## 图片压缩脚本说明

##  安装依赖

	npm install

##  修改gulpfile.js
填入tinypng development key，官网自行申请，[点我申请](https://tinypng.com/developers)

##  执行压缩图片命令
    npm start
脚本会检索当前根目录，img, image目录下所有的图片资源，压缩完成后的图片存放在根目录下的publish文件夹下  

如已有规则无法匹配图片资源，请自行修改gulpfile.js配置文件

