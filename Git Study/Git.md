# Git

## 基本概念

### 工作区

就是你在电脑里能看到的目录

### 版本库

版本库（仓库），可以理解成一个目录，在这个目录里面的所有文件都可以被Git管理起来，每个文件的修改、删除、Git都能追踪到，以便任何时刻都可以追踪历史。

工作区里面有一个隐藏的文件 `.git` ，这个不算工作区，而是git的版本库。

版本库里面存了很多东西，其中最为重要的称为 stage （或者 index ）的暂存区，git会为我们自动创建第一个分区 `master` ，以及指向 `master` 的一个指针 `HEAD` 。

### 暂存区

一个中间区域，可以在提交之前格式化和检查提交。

1. 使用 git add 将内容添加到缓存区。
2. 使用 git commit 将暂存区的内容提交到当前分支

<img src="/Users/rendenghui/Library/Application Support/typora-user-images/image-20240729221514086.png" alt="image-20240729221514086" style="zoom:50%;" />



### 分支管理

每次提交文件，Git 都会把提交的相关信息串成一条时间线，这条时间线就是分支。从开始创建的时候，Git会默认生成一个分支，这个分支就叫做主分支。

​	提交信息：一开始主分支是一条线，当提交内容的时候，Git指向最新的提交，再用`HEAD`指向主分支。

​	当创建分支的时候，例如 `dev` ， 指向 主分支的相同提交，再把 `HEAD` 指向 `dev`，就表示当前分支在 dev 上。

<img src="/Users/rendenghui/Library/Application Support/typora-user-images/image-20240729234305178.png" alt="image-20240729234305178" style="zoom:50%;" />

- 创建、合并、删除分支

  | 命令                  | 作用                                                         |
  | --------------------- | ------------------------------------------------------------ |
  | `git branch dev`      | 创建分支，分支名为 dev                                       |
  | `git checkout dev`    | 切换分支到 dev                                               |
  | `git checkout -b dev` | 创建并切换分支，想当于`git branch dev`和`git checkout dev`的合并 |
  | `git merge dev`       | 合并分支指定分支到当前分支                                   |
  | `git branch -d dev`   | 删除指定分支                                                 |