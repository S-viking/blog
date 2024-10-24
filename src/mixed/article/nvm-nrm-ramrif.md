---
icon: pen-to-square
date: 2024-10-16
category:
  - 技术圈
tag:
  - 前端
  - 技术
star: true
sticky: true
---

# 三大包管理工具
### nvm

#### 安装教程
- 1、如果已经安装过node，需要先卸载；如果没有，直接看第2点往下面操作
  - 打开控制面板 -> 打开程序和功能 -> 右上角搜索输入node -> 右键卸载
  - 找到node安装目录，确保删除干净，例如：C:\Program Files\nodejs
  - C:\Users\用户名 文件夹下有没有.npmrc以及.yarnrc等等统统删除。
  - 查看环境变量有没有node相关的，有也一起删除
- 2、下载 nvm-setup.zip；nvm 下载路径：https://github.com/coreybutler/nvm-windows/releases
- 3、解压后，双击安装，一直下一步，直到安装完成；选择nvm安装路径，注意路径不要有空格和中文
- 4、安装完成后，打开cmd，输入nvm version，显示版本号，则表示安装成功

#### nvm常见命令
- nvm list available 查看所有可用的版本
- nvm install 16.14.0 安装指定版本
- nvm use 16.14.0 使用指定版本
- nvm alias default 16.14.0 设置默认版本
- nvm uninstall 16.14.0 卸载指定版本
- nvm ls 查看已安装的版本

### nrm
- nrm 是一个 npm 的镜像源管理工具，用来管理 npm 的镜像源，可以让我们切换不同的npm镜像源，提高下载速度
- 在 nvm 输入 npm install -g nrm 进行安装
- nrm ls 查看可选的源，带*的是当前使用的源
- nrm use taobao 切换到 taobao 镜像源
- nrm test 测试镜像源的速度
- nrm add registry url 添加自定义的镜像源
- nrm del registry 删除自定义的镜像源

### ramrif
- rimraf 以包的形式包装rm -rf命令，用来删除文件和文件夹，不管文件夹是否为空，都可删除 
- 在 nvm 输入 npm install rimraf -g 进行安装
- rimraf node_modules 删除 node_modules 文件夹，可以提速