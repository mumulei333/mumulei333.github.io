---
title:      IDEA使用代理的方式激活
date:       2020-09-09
isShowComments: true

tags:
 - IDEA

categories:
 - 学习
---

## IDEA使用代理的方式激活

**激活步骤**:

 1. 先下载压缩包解压后得到jetbrains-agent.jar。

 2. 启动你的IDE，如果上来就需要注册，选择：试用（Evaluate for free）进入IDE。
    如果你的IDE试用已过期可以使用reset_eval文件夹内的脚本重置一下。
 3. 将 jetbrains-agent.jar 拖进IDE窗口（或者当作IDE插件安装），点 "Restart" 按钮重启IDE。
    （事实上你拖 jetbrains-agent-latest.zip 进去IDE窗口也没问题）
 4. 在弹出的JetbrainsAgent Helper对话框中，选择激活方式，点击安装按钮。
 5. 重启IDE，搞定。
 x. 支持两种注册方式：License server 和 Activation code:
        
    - 选择License server方式，地址填入：https://fls.jetbrains-agent.com （HTTP也可用，网络不佳用第2种方式）
    - 选择Activation code方式离线激活，请使用：ACTIVATION_CODE.txt 内的注册码激活
        License key is in legacy format == Key invalid，表示agent配置未生效。
        如果你需要自定义License name，请访问：https://zhile.io/custom-license.html
    - 现在你可以使用jetbrains-agent + activation code/license server激活jetbrains平台的付费插件了！
    
        现在有这些付费插件：https://plugins.jetbrains.com/search?isPaid=true

 本项目在最新2020.1上测试通过。
 理论上适用于目前Jetbrains全系列所有新老版本

 IDE升级会从旧版本导入以上设置，导入配置后可能提示未注册（因为刚导入的vmoptions未生效），直接重启IDE即可，无需其他操作。

**注意事项**

1. 如果你下载的jetbrains-agent.jar小于2M，肯定是没有下载完全（可对照sha1sum.txt）

2. 请保留压缩包内的important.txt和jetbrains-agent.jar放在同一个目录，且不要改动内容！

3. 传统的vmoptions配置同样可用，但我还是推荐你按照本文档的方式配置！

4. > https://zhile.io/2018/08/17/jetbrains-license-server-crack.html 有问题找大佬

   