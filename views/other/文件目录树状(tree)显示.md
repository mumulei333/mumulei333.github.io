---
title:      文件目录树状(tree)显示
date:       2017-03-07
isShowComments: true

tags:
 - Mac
 - 效率
 - 开发技巧
 
categories:
 - 学习
---

转载自[By](http://qiubaiying.vip/2017/03/07/%E6%96%87%E4%BB%B6%E7%9B%AE%E5%BD%95%E6%A0%91%E7%8A%B6(tree)%E6%98%BE%E7%A4%BA/)

> 使用 **tree** 在终端显示树状文件结构

![](https://ww4.sinaimg.cn/large/006tKfTcgy1fdhotefcb5j315s0ugjwk.jpg)

#### 安装 tree
使用 **brew** 进行安装

	$ brew install tree

#### 使用
- 直接使用 `tree` 命令，会在当前文件目录下，递归输出所有文件层级
	
		$ tree

- 限制层级

		$ tree -L 2

- 指定当前目录下的某个文件夹

		$ tree Desktop
	
#### 导出文件  
用`> 文件名.格式` 的形式导出

	$ tree -L 1 > tree.md