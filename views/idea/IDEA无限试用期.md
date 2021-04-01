---
title:      无限试用期IDEA
date:       2020-09-09
isShowComments: true

catalog: true
tags:
 - IDEA
 - Mac
categories:
  - 记录
---

IntelliJIdea ：idea的包名，不同的版本有不同的名称(如: IntelliJIdea2020.2)，idea2020版以后的mac安装路径会多一层JetBrains

```shell
rm -rf ~/Library/Application\ Support/JetBrains/"IntelliJIdea"*/eval
sed -i '' '/name="evlsprt.*"/d' ~/Library/Application\ Support/JetBrains/"IntelliJIdea"*/options/other.xml >/dev/null 2>&1
```

