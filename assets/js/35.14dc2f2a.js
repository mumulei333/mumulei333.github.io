(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{481:function(t,n,a){"use strict";a.r(n);var i=a(2),e=Object(i.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("转载自"),n("a",{attrs:{href:"http://qiubaiying.vip/2017/02/15/Git%E6%8C%87%E4%BB%A4%E6%95%B4%E7%90%86/",target:"_blank",rel:"noopener noreferrer"}},[t._v("By"),n("OutboundLink")],1)]),t._v(" "),n("blockquote",[n("p",[t._v("随便整理的一些自用的Git指令")])]),t._v(" "),n("h1",{attrs:{id:"github创建仓库提示代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github创建仓库提示代码"}},[t._v("#")]),t._v(" GitHub创建仓库提示代码")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('echo "# 项目名" >> README.md\ngit init\ngit add README.md\ngit commit -m "first commit"\ngit remote add origin git@github.com:qiubaiying/项目名.git\ngit push -u origin master\n')])])]),n("p",[t._v("若仓库存在直接push")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("git remote add origin git@github.com:qiubaiying/test.git\ngit push -u origin master\n")])])]),n("h1",{attrs:{id:"常用操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用操作"}},[t._v("#")]),t._v(" 常用操作")]),t._v(" "),n("h4",{attrs:{id:"创建仓库-初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库-初始化"}},[t._v("#")]),t._v(" 创建仓库（初始化）")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("在当前指定目录下创建\ngit init\n\n新建一个仓库目录\ngit init [project-name]\n\n克隆一个远程项目\ngit clone [url]\n")])])]),n("h4",{attrs:{id:"添加文件到缓存区"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加文件到缓存区"}},[t._v("#")]),t._v(" 添加文件到缓存区")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("添加所有变化的文件\ngit add .\n\n添加名称指定文件\ngit add text.txt\n")])])]),n("h4",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('设置提交代码时的用户信息\ngit config [--global] user.name "[name]"\ngit config [--global] user.email "[email address]"\n')])])]),n("h4",{attrs:{id:"提交"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提交"}},[t._v("#")]),t._v(" 提交")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('提交暂存区到仓库区\ngit commit -m "msg"\n\n# 提交暂存区的指定文件到仓库区\n$ git commit [file1] [file2] ... -m [message]\n\n# 提交工作区自上次commit之后的变化，直接到仓库区\n$ git commit -a\n\n# 提交时显示所有diff信息\n$ git commit -v\n\n# 使用一次新的commit，替代上一次提交\n# 如果代码没有任何新变化，则用来改写上一次commit的提交信息\n$ git commit --amend -m [message]\n\n# 重做上一次commit，并包括指定文件的新变化\n$ git commit --amend [file1] [file2] ...\n')])])]),n("h4",{attrs:{id:"远程同步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#远程同步"}},[t._v("#")]),t._v(" 远程同步")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("# 下载远程仓库的所有变动\n$ git fetch [remote]\n\n# 显示所有远程仓库\n$ git remote -v\n\n# 显示某个远程仓库的信息\n$ git remote show [remote]\n\n# 增加一个新的远程仓库，并命名\n$ git remote add [shortname] [url]\n\n# 取回远程仓库的变化，并与本地分支合并\n$ git pull [remote] [branch]\n\n# 上传本地指定分支到远程仓库\n$ git push [remote] [branch]\n\n# 强行推送当前分支到远程仓库，即使有冲突\n$ git push [remote] --force\n\n# 推送所有分支到远程仓库\n$ git push [remote] --all\n")])])]),n("h4",{attrs:{id:"分支"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("# 列出所有本地分支\n$ git branch\n\n# 列出所有远程分支\n$ git branch -r\n\n# 列出所有本地分支和远程分支\n$ git branch -a\n\n# 新建一个分支，但依然停留在当前分支\n$ git branch [branch-name]\n\n# 新建一个分支，并切换到该分支\n$ git checkout -b [branch]\n\n# 新建一个分支，指向指定commit\n$ git branch [branch] [commit]\n\n# 新建一个分支，与指定的远程分支建立追踪关系\n$ git branch --track [branch] [remote-branch]\n\n# 切换到指定分支，并更新工作区\n$ git checkout [branch-name]\n\n# 切换到上一个分支\n$ git checkout -\n\n# 建立追踪关系，在现有分支与指定的远程分支之间\n$ git branch --set-upstream [branch] [remote-branch]\n\n# 合并指定分支到当前分支\n$ git merge [branch]\n\n# 选择一个commit，合并进当前分支\n$ git cherry-pick [commit]\n\n# 删除分支\n$ git branch -d [branch-name]\n\n# 删除远程分支\n$ git push origin --delete [branch-name]\n$ git branch -dr [remote/branch]\n")])])]),n("h4",{attrs:{id:"标签tags"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标签tags"}},[t._v("#")]),t._v(" 标签Tags")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("添加标签 在当前commit\ngit tag -a v1.0 -m 'xxx' \n\n添加标签 在指定commit\ngit tag v1.0 [commit]\n\n查看\ngit tag\n\n删除\ngit tag -d V1.0\n\n删除远程tag\ngit push origin :refs/tags/[tagName]\n\n推送\ngit push origin --tags\n\n拉取\ngit fetch origin tag V1.0\n\n新建一个分支，指向某个tag\ngit checkout -b [branch] [tag]\n")])])]),n("h4",{attrs:{id:"查看信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看信息"}},[t._v("#")]),t._v(" 查看信息")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('# 显示有变更的文件\n$ git status\n\n# 显示当前分支的版本历史\n$ git log\n\n# 显示commit历史，以及每次commit发生变更的文件\n$ git log --stat\n\n# 搜索提交历史，根据关键词\n$ git log -S [keyword]\n\n# 显示某个commit之后的所有变动，每个commit占据一行\n$ git log [tag] HEAD --pretty=format:%s\n\n# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件\n$ git log [tag] HEAD --grep feature\n\n# 显示某个文件的版本历史，包括文件改名\n$ git log --follow [file]\n$ git whatchanged [file]\n\n# 显示指定文件相关的每一次diff\n$ git log -p [file]\n\n# 显示过去5次提交\n$ git log -5 --pretty --oneline\n\n# 显示所有提交过的用户，按提交次数排序\n$ git shortlog -sn\n\n# 显示指定文件是什么人在什么时间修改过\n$ git blame [file]\n\n# 显示暂存区和工作区的差异\n$ git diff\n\n# 显示暂存区和上一个commit的差异\n$ git diff --cached [file]\n\n# 显示工作区与当前分支最新commit之间的差异\n$ git diff HEAD\n\n# 显示两次提交之间的差异\n$ git diff [first-branch]...[second-branch]\n\n# 显示今天你写了多少行代码\n$ git diff --shortstat "@{0 day ago}"\n\n# 显示某次提交的元数据和内容变化\n$ git show [commit]\n\n# 显示某次提交发生变化的文件\n$ git show --name-only [commit]\n\n# 显示某次提交时，某个文件的内容\n$ git show [commit]:[filename]\n\n# 显示当前分支的最近几次提交\n$ git reflog\n')])])]),n("h4",{attrs:{id:"撤销"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#撤销"}},[t._v("#")]),t._v(" 撤销")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("# 恢复暂存区的指定文件到工作区\n$ git checkout [file]\n\n# 恢复某个commit的指定文件到暂存区和工作区\n$ git checkout [commit] [file]\n\n# 恢复暂存区的所有文件到工作区\n$ git checkout .\n\n# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变\n$ git reset [file]\n\n# 重置暂存区与工作区，与上一次commit保持一致\n$ git reset --hard\n\n# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变\n$ git reset [commit]\n\n# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致\n$ git reset --hard [commit]\n\n# 重置当前HEAD为指定commit，但保持暂存区和工作区不变\n$ git reset --keep [commit]\n\n# 新建一个commit，用来撤销指定commit\n# 后者的所有变化都将被前者抵消，并且应用到当前分支\n$ git revert [commit]\n\n# 暂时将未提交的变化移除，稍后再移入\n$ git stash\n$ git stash pop\n")])])]),n("h4",{attrs:{id:"其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("# 生成一个可供发布的压缩包\n$ git archives")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);