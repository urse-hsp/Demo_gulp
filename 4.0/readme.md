# Gulp task公开任务和私有任务
-公开任务
-私有任务


##创建任务

- 每个gulp任务都是一个异步的js函数，函数是一个可以接收callback为参数的函数
    - callback
    -  promise
    - ...
- gulp async/await


## 公开任务
从gulpfile中被导出的，可以通过gulp命令直接调用的，这种叫公开任务

## 私有任务

没有gulpfile中被导出的，在内部可以使用的，通常作为。 seres、parellel



gulp --help 查看命令的命令，滑稽



## gulp 任务顺序执行
series
-a
  -b
    -c

## gulp 提供了俩个组合方法
- series
- parallel


## 并发执行
parallel



## 任务的重构



## gulp watch 文件监控
`watch()`
-匹配到的文件
-对应需要执行的任务

## 可监控的事件
-- 创建，更新，删除
 如果想指定不同的事件，可以调用watch方法的时候，使用 ·events· 参数

 ## events的分类
一 all
- add
- addDir
- change
- untink
- ready
- error


## 初次执行
关联的任务是不会被立即执行的，而是等到第一次文件修改之后才 会执行
