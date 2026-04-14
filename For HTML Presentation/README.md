# HTML Presentation Template
<!-- markdownlint-disable -->

## 简介

这是一个适合课程汇报、论文展示、项目路演初稿的 **HTML 幻灯片模板**。  

它的目标不是做成大型前端框架，而是提供一套：

- 本地双击即可打开
- 不依赖构建工具
- 样式清晰、学术感较强
- 支持翻页、全屏、进度条、逐步显示
- 容易直接复制修改

这次模板刻意采用了 **图片占位符**，不绑定任何现成图片或具体内容，方便其他人直接套用。

---

## 文件结构

```text
For HTML Presentation/
├── presentation-template.html
├── styles.css
├── script.js
├── example-advanced.html
├── sidebar-template.html
└── README.md
```

当前目录里建议重点保留并使用两个版本：

- `presentation-template.html`：简洁版，适合标准 PPT 式逐页展示
- `sidebar-template.html`：目录栏版，适合章节式长内容展示

另外两个文件：

- `styles.css`
- `script.js`

是 `presentation-template.html` 配套的样式与脚本文件。

其余文件：

- `example-advanced.html`

作为历史示例保留，不是当前主推入口。

---

## 两个模板怎么选

### 版本对照

| 版本 | 文件 | 更适合什么场景 | 主要特点 |
|------|------|----------------|----------|
| 简洁版 | `presentation-template.html` | 课程汇报、论文汇报、项目答辩、标准幻灯片展示 | 单页切换、节奏明确、支持 fragment、结构像传统 PPT |
| 目录栏版 | `sidebar-template.html` | 调研报告、章节式展示、内容偏长的讲解型汇报 | 左侧常驻目录、右侧页内滚动、适合图文混排和长内容 |

## 快速开始

### 1. 直接打开

直接在浏览器中打开对应文件即可：

- `presentation-template.html`
- 或 `sidebar-template.html`

### 2. 修改标题与内容

如果你使用简洁版，编辑 `presentation-template.html` 中的每一个：

```html
<section class="slide"> ... </section>
```

每个 `section.slide` 就是一页幻灯片。

如果你使用目录栏版，则编辑：

```html
<section class="page"> ... </section>
```

每个 `section.page` 对应左侧目录中的一页。

### 3. 替换占位图

简洁版模板里的图示页目前使用的是占位框：

```html
<div class="media-placeholder">
    <div class="placeholder-title">IMAGE / CHART PLACEHOLDER</div>
    <div class="placeholder-note">把这里替换成论文图、方法图、结果图或重绘图</div>
</div>
```

你可以把它直接换成真实图片，例如：

```html
<figure class="real-figure">
    <img src="images/figure1.png" alt="图 1">
    <figcaption>图注说明</figcaption>
</figure>
```

或者继续保留占位框，等内容最终定稿后再统一替换。

---

## 模板包含哪些页面

简洁版模板内置了 5 种最常用页面：

1. 封面页
2. 问题提出页
3. 图示解释页
4. 并列对照页
5. 总结页

这 5 页已经足够支撑大多数课程汇报或论文展示的初稿搭建。

---

## 交互功能

### 简洁版 `presentation-template.html`

支持以下交互：

### 键盘快捷键

| 按键 | 功能 |
|------|------|
| `→` / `PageDown` / `Space` / `Enter` | 下一步；若本页有 fragment，则优先展开 fragment |
| `←` / `PageUp` / `Backspace` | 上一步；若本页已展开 fragment，则优先回退 fragment |
| `Home` | 跳到第一页 |
| `End` | 跳到最后一页 |
| `F` | 切换全屏 |

### 鼠标点击

- 点击页面左侧区域：上一页 / 上一步
- 点击页面右侧区域：下一页 / 下一步

### 页面状态

底部工具栏会自动显示：

- 当前页码
- 总页数
- 进度条
- 全屏按钮

### 目录栏版 `sidebar-template.html`

支持以下交互：

| 按键/操作 | 功能 |
|-----------|------|
| `← / →` | 上一页 / 下一页 |
| `PageUp / PageDown` | 上一页 / 下一页 |
| `Home / End` | 跳到第一页 / 最后一页 |
| `F11` | 浏览器全屏 |
| 点击左侧目录 | 直接跳转到对应章节 |
| 滚轮 | 优先滚动当前页内容；到顶/到底后切上一页或下一页 |

目录栏版另外还有：

- 左侧章节导航
- 主题切换
- 页内长内容滚动
- 公式与代码展示支持

---

## 如何新增页面

如果你使用简洁版，最简单的方式，是复制一个现有的 `section.slide`：

```html
<section class="slide">
    <header class="slide-head">
        ...
    </header>

    <div class="slide-body">
        ...
    </div>

    <footer class="slide-foot">
        ...
    </footer>
</section>
```

然后粘贴到 `#stage` 内部即可。

脚本会自动：

- 统计总页数
- 更新页码
- 更新底部进度条

你不需要手动修改脚本逻辑。

如果你使用目录栏版，则复制：

```html
<section class="page" data-title="你的标题">
    <div class="page-body">
        ...
    </div>
</section>
```

其中：

- `data-title` 会显示在左侧目录里
- `.page-body` 是这一页真正的内容区

---

## 如何做“逐步出现”

如果你想让某个元素在简洁版演示时逐步出现，只需要给它加上：

```html
class="fragment"
```

例如：

```html
<div class="card fragment">
    <h3>逐步显示的卡片</h3>
    <p>这张卡片不会在进入页面时立即出现。</p>
</div>
```

运行时：

- 第一次按下一步，先出现第一个 fragment
- 再按下一步，出现下一个 fragment
- 当前页 fragment 全部显示后，才进入下一页

这对于课堂展示特别有用，因为可以控制信息展开节奏，避免一页内容同时砸给听众。

说明：

- `fragment` 主要用于简洁版
- 目录栏版当前更偏“章节讲义式阅读”，不以内建 fragment 为主

---

## 如何修改样式

### 1. 改整体颜色

如果你使用简洁版，优先修改 `styles.css` 顶部的变量：

```css
:root {
    --bg: #f3eee5;
    --text: #21313d;
    --primary: #0f5c5b;
    --accent: #b55d43;
}
```

最常改的是：

- `--bg`：整体背景
- `--text`：正文颜色
- `--primary`：主强调色
- `--accent`：辅助强调色

### 2. 改页面尺寸

简洁版默认是 16:9：

```css
#stage {
    width: 1600px;
    height: 900px;
}
```

如果你要做 4:3 或其他比例，可以改这里。

### 3. 改页面布局

简洁版常见布局类在 `styles.css` 中已经定义好：

- `.hero`
- `.two-col`
- `.media-layout`
- `.card-grid`
- `.three-col`
- `.stack`

通常只需要组合这些类，而不必每次重写布局。

---

## 推荐写作方式

两份模板都适合以下内容组织方式：

- 封面页：给出问题定位，而不是只写标题
- 背景页：先讲问题场景，再讲为什么原方法不够
- 方法页：少堆术语，多解释“为什么需要这一设计”
- 图示页：图负责给直觉，文字负责给结论
- 总结页：强调“真正推进了什么”，而不是简单复述模块

不太推荐：

- 每页塞满大段文字
- 把副标题写成“提醒自己怎么讲”的备忘录
- 图很多但没有解释它们为什么出现

---

## 把占位图换成真实内容的建议

你后续替换图时，建议优先考虑这几种内容：

1. 论文原图
2. 自己重绘的流程图
3. 对照图或结构图
4. 实验曲线图
5. 截图或界面示意图

建议避免：

- 只为了“看起来丰富”而插图
- 放很复杂但又来不及讲清楚的原图
- 一页塞多个没有主次关系的图

---

## 常见修改任务

### 任务 1：替换封面信息

改 `presentation-template.html` 中第一页：

- `你的展示标题`
- 副标题
- 主题卡片
- 关键词

### 任务 2：增加一页实验结果

复制第 3 页或第 4 页结构，替换为：

- 一张图
- 三条解释

### 任务 3：做文献综述页

复制第 4 页的并列卡片布局，每块卡片写：

- 论文名
- 做了什么
- 留下了什么问题

### 任务 4：做方法总览页

复制第 2 页结构，左边写步骤递进，右边写解释卡片。

---

## 浏览器兼容性

推荐浏览器：

- Chrome
- Edge
- Firefox

本模板使用的是常规 HTML/CSS/JS，不依赖外部库，现代浏览器都可以正常运行。

---

## 导出与分享

### 本地演示

直接打开目标文件即可：

- `presentation-template.html`
- `sidebar-template.html`

### 导出 PDF

可使用浏览器打印功能：

1. 打开页面
2. `Ctrl + P`
3. 选择“另存为 PDF”

注意：如果你使用了 fragment，打印时会显示全部内容。

### 发给别人

最简单的方式是把整个文件夹打包发送，因为：

- `presentation-template.html` 依赖 `styles.css`
- `presentation-template.html` 依赖 `script.js`
- `sidebar-template.html` 虽然是单文件，但如果你后续加入本地图片，也依然需要保持相对路径

额外提醒：

- `sidebar-template.html` 默认使用外部 CDN 加载 `highlight.js` 和 `MathJax`
- 如果你在完全离线环境中使用它，代码高亮和公式渲染功能可能受影响
- 简洁版 `presentation-template.html` 没有这个问题，更适合离线直接分发

---

## 如果你想进一步扩展

这份模板现在保持“轻量优先”。如果后续要增强，可以继续加：

- MathJax 数学公式支持
- 代码高亮
- 演讲者备注区
- 主题切换
- 自动目录页
- Markdown 转幻灯片

---

## 最后建议

如果你是第一次用 HTML 做 PPT，最好的方式不是从零写，而是：

1. 先确定你要用“简洁版”还是“目录栏版”
2. 先搭出 5 到 8 页基本结构
3. 再逐页替换内容
4. 最后统一调整颜色、字体和图片

这样会比一开始就追求复杂动效更稳定，也更适合课程汇报与论文展示。


