---
title:      记录一次jenkins构建是失败案例
date:       2020-09-09
isShowComments: true

tags:
 - Jenkins
 - 疑难杂症
 
categories:
  - 记录
---

### Jenkins构建异常 Build step 'Execute shell script on remote host using ssh' changed build result to UNSTABLE



#### 错误信息

  ```shell
  [SSH] No SSH site found - this is likely a configuration problem!
  Build step 'Execute shell script on remote host using ssh' changed build result to UNSTABLE
  Finished: UNSTABLE
  ```

![image](/img/blog/202009092105.png)

#### 导致异常的原因

  因为Jenkins远程登入的SSH服务器地址改变了原xxx.xx.xxx.15，后调整为了xxx.xx.xxx.201，但是账号密码都是没有变更的，因此在该项目引用的SSH site更改服务器地址就行了，登入凭证是不需要更改也行的，所以就没有重新添加一个SSH site而是直接在原有的上面更改了(**这也是导致问题的所在**)，导致构建是发生了异常。

#### 解决

  经过各种搜索以及尝试以后，发现在更改了SSH site信息以后，之前有引用这个SSH site也需要需要重新拉取选择一次(点开项目构建配置，选择SSH site列表 将经过修改的SSH site替换掉，然后保存，在重新进行见原本选择的SSH site又选中，再保存退出)，这样就可以重新获取一遍SSH site的最新构建信息了，本人猜测可能是Jenkins项目成功构建一次后会见上一次成功构建的信息缓存下来，然后在下次需要构建时就不重新拉去最新信息了，基本是原本的SSH site信息已经更改。

  