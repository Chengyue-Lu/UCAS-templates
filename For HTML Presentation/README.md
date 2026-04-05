# HTML 演示模板
<!-- markdownlint-disable -->
## 简介

一个简单但功能完整的 HTML 演示文稿框架，提供全屏沉浸式展示体验。相比 LaTeX Beamer，HTML 提供了更灵活的排版和更容易集成新图形的能力。

## 快速开始

### 1. 在浏览器中打开
直接在浏览器中打开 `index.html` 文件即可开始演示。

### 2. 修改内容
编辑 `index.html` 中的 `<section class="slide">` 块来添加你的内容。

### 3. 自定义样式
修改 `styles.css` 来调整颜色、字体大小、背景等样式。

## 快捷键

| 快捷键 | 功能 |
|--------|------|
| `→` 或 `D` | 下一张幻灯片 |
| `←` 或 `A` | 上一张幻灯片 |
| `Home` | 跳到首页 |
| `End` | 跳到末页 |
| `F` | 切换演讲者备注（屏幕下部） |
| `F5` | 全屏播放 |
| 点击 | 左侧前一张，右侧下一张 |

## 文件结构

```
For HTML Presentation/
├── index.html       # 主文件，包含幻灯片内容
├── styles.css       # 样式表
├── script.js        # 交互逻辑
├── sidebar-outline-presentation.html  # 左侧目录栏 + 页面内滚动版本
└── README.md        # 本文件
```

如果你更想要“左侧目录栏 + 每页可滚动”的展示方式，直接打开 `sidebar-outline-presentation.html` 即可，它是独立的一份新实现。

这个版本优先支持数学公式和代码展示，并内置了几套整体配色主题，方便你保持全文风格一致，而不是在每一页里手写散乱的 RGB 值。

数学公式可以直接写成 `$...$` 和 `$$...$$`，代码块可以直接写在 `<pre><code>` 里；页面左侧也提供了 `Aurora`、`Midnight`、`Paper` 三套主题切换按钮。

## 内容编写指南

### 基础幻灯片结构

```html
<section class="slide">
    <div class="slide-content">
        <h2>标题</h2>
        <p>内容</p>
    </div>
</section>
```

### 常用元素

#### 标题页
```html
<section class="slide active">
    <div class="slide-content">
        <h1>你的展示标题</h1>
        <h2 class="subtitle">副标题</h2>
        <p class="author">作者名称 | 日期</p>
    </div>
</section>
```

#### 内容页（列表）
```html
<section class="slide">
    <div class="slide-content">
        <h2>标题</h2>
        <ul class="content-list">
            <li>要点一</li>
            <li>要点二</li>
            <li>要点三</li>
        </ul>
    </div>
</section>
```

#### 两列布局
```html
<section class="slide">
    <div class="slide-content">
        <h2>标题</h2>
        <div class="two-column">
            <div class="column">
                <h3>左列标题</h3>
                <p>左列内容</p>
            </div>
            <div class="column">
                <h3>右列标题</h3>
                <p>右列内容</p>
            </div>
        </div>
    </div>
</section>
```

#### 图片
```html
<img src="path/to/image.jpg" alt="描述" class="slide-image">
```

#### 演讲者备注
在幻灯片的 `section` 标签上添加 `data-notes` 属性：

```html
<section class="slide" data-notes="这里是仅演讲者能看到的备注">
    <div class="slide-content">
        ...
    </div>
</section>
```

## 自定义主题

目录栏版本支持三套预置主题：
- Aurora：默认深色渐变
- Midnight：更冷的蓝紫色深色主题
- Paper：浅色纸面主题

你可以直接在页面左侧切换主题，系统会记住上次选择。

编辑 `styles.css` 中的主题颜色：

```css
/* 当前配色（紫色渐变） */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

常用颜色组合：
- 蓝色 → 紫色：`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- 绿色 → 青色：`linear-gradient(135deg, #11998e 0%, #38ef7d 100%)`
- 橙色 → 红色：`linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
- 深灰 → 黑色：`linear-gradient(135deg, #2c3e50 0%, #000000 100%)`

## 高级功能

### 添加新幻灯片
在 `index.html` 中的 `</section>` 之前添加：

```html
<section class="slide">
    <div class="slide-content">
        <!-- 你的内容 -->
    </div>
</section>
```

然后脚本会自动更新总页数计数器。

### 修改动画时间
在 `styles.css` 中编辑：

```css
.slide {
    transition: opacity 0.6s ease-in-out;  /* 改为 0.3s 可以更快 */
}
```

### 禁用点击切换
在 `script.js` 中注释掉鼠标事件：

```javascript
// document.addEventListener('click', (e) => { ... });
```

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 推荐用法

1. **实时编辑**：用代码编辑器和浏览器并排显示
2. **导出 PDF**：使用浏览器打印功能（Ctrl+P）并选择"另存为 PDF"
3. **分享**：将整个文件夹压缩后分发，不需要任何依赖

## 后续功能扩展建议

- [ ] Markdown 支持（使用 marked.js）
- [ ] 幻灯片过渡动画库
- [ ] 演讲计时器
- [ ] 主题切换器
- [ ] 代码高亮支持
- [ ] 数学公式支持（MathJax）
- [ ] 视频/音频嵌入
- [ ] 演讲者视图（双屏显示）

## 常见问题

**Q: 如何在幻灯片上插入代码？**
A: 在 `index.html` 中添加 `<pre><code class="language-python">...</code></pre>` 即可。可选择添加代码高亮库（如 Highlight.js）。

**Q: 能否支持 Markdown 格式？**
A: 可以添加 marked.js 库来支持，在后续版本中会提供。

**Q: 如何在演讲时隐藏控制栏？**
A: 按 F5 进入全屏）或修改 CSS 中的 `.controls` 样式。

## 许可证

自由使用和修改。

---

祝演示顺利！如有问题欢迎改进。
