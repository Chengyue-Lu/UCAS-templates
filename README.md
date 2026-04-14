# 中国科学院大学 (UCAS) 模板合集

本项目收集并重整制作了适用于中国科学院大学（UCAS）学生的各类模板，涵盖课程论文、实验报告、课堂笔记、课后作业、Beamer 演示文稿，以及 HTML 展示模板等场景。

## 📂 模板列表

### 1. 课程论文模板 (`For 课程论文`)

功能全面的课程论文模板，支持高度自定义配置（原创）。

- **主要文件**: `main.tex`, `UCASPaper.sty`
- **特点**:
  - **中英文模式切换**: 通过参数 `english=true/false` 一键切换摘要、关键词等标签语言。
  - **封面/页眉选项**: 支持仅带页眉的紧凑模式（适合常规作业）和独立封面模式（适合期末大作业）。
  - **水印支持**: 可开启 "UCAS DRAFT" 水印用于草稿阶段。
  - **包含功能**: 代码高亮、数学公式优化、元信息自动生成。
- **用法**:

    ```latex
    % main.tex 配置示例
    \usepackage[english=false, withlogo=true, coverpage=false, watermark=false]{UCASPaper}
    ```

### 2. 报告撰写模板 (`For 报告撰写`)

适用于课程平时论文及期末报告，结构更加传统和正式。

- **主要文件**: `main.tex`, `UCASReport.sty`
- **特点**:
  - 默认包含封面页、摘要页和目录页。
  - `UCASReport.sty` 预设了页眉、标题、字号等格式（中文宋体、英文 Times New Roman）。
  - 编译流程推荐: `xelatex -> bibtex -> xelatex*2`。
- **致谢**: 基于 [jweihe/UCAS_Latex_Template](https://github.com/jweihe/UCAS_Latex_Template) 修改。

### 3. Beamer 演示模板 (`For beamer`)

基于 SINTEF 主题的精美学术演示文稿模板。

- **主要文件**: `beamersapienza.tex`
- **特点**:
  - 现代化的扁平风格（SINTEF Theme）。
  - 已配置 `xeCJK` 支持中文显示。
  - 包含背景图与配色方案适配。
- **致谢**: 原主题来自 Federico Zenith，由 wzl-plasmid 进行样式适配。

### 4. HTML 展示模板 (`For HTML Presentation`)

适用于课程汇报、论文展示、调研报告和项目展示的 HTML 演示模板集合。

- **主要文件**:
  - `presentation-template.html`：简洁版，偏传统 PPT 逐页展示
  - `sidebar-template.html`：目录栏版，偏章节式长内容展示
  - `styles.css`, `script.js`：简洁版配套样式与交互脚本
  - `README.md`：该子目录下的详细使用说明
- **特点**:
  - **简洁版**：支持单页切换、页码、进度条、全屏、fragment 逐步显示，适合标准课堂汇报。
  - **目录栏版**：左侧常驻目录，右侧页内滚动，支持主题切换、公式渲染与代码高亮，适合长内容和讲义式展示。
  - **图片占位符友好**：模板默认不绑定真实图片，方便后续直接替换成论文图、流程图、实验图或截图。
  - **可本地直接打开**：不需要构建工具，适合快速改稿与分发。
- **建议**:
  - 如果你要的是“像 PPT 一样一页一页讲”，优先用 `presentation-template.html`
  - 如果你要的是“带目录的章节式展示”，优先用 `sidebar-template.html`

### 5. 笔记模板 (`For 笔记`)

基于 ElegantNote 修改的美观笔记模板，适合整理课程复习资料。

- **主要文件**: `elegantnote-cn.tex`, `elegantnote.cls`
- **特点**:
  - **多设备适配**: 支持 Pad、Kindle、PC (双页)、Screen (幻灯片比例) 和 A4 纸张输出。
  - **颜色主题**: 内置 Blue (默认), Green, Cyan, Sakura, Black 五套配色。
  - 优雅的定理、定义与引用环境。

### 6. 通用作业模板 (`For 作业`)

轻量级的单文件模板，适合快速完成平时的数学或推导类作业（原创）。

- **主要文件**: `homework_template.tex`
- **特点**:
  - 单 `.tex` 文件，无额外依赖包。
  - 结构清晰（题号、解答、推导、结果）。
  - 头部自动生成课程信息与学生信息横幅。

---

## 🚀 如何使用

1. **环境准备**: 请确保本地已安装 TeX 发行版（如 TeX Live 或 MikTeX），并建议安装支持 XeLaTeX 编译引擎的环境。
2. **下载项目**:

   ```bash
   git clone https://github.com/Chengyue-Lu/templates.git
   ```

3. **使用方式**:
   - 对于 LaTeX 模板：大多数模板推荐使用 **XeLaTeX** 进行编译以获得最佳的中文支持。
   - 对于 HTML 模板：直接在浏览器中打开即可使用，无需构建工具。
4. **编译 / 打开**:
   - LaTeX 模板的参考文献通常需要配合 BibTeX 使用。
   - HTML 模板建议配合本地编辑器与浏览器实时预览。

## ⚠️ 注意事项

- 部分模板使用了系统字体，Linux/macOS 用户可能需要调整字体配置。
- 通过全局设置 "env" 变量 `TEXINPUTS` 可方便地管理自定义样式文件路径。设置后你无需把样式文件放在每个项目目录下。
- `For HTML Presentation` 中的 `sidebar-template.html` 默认通过 CDN 加载 `MathJax` 与 `highlight.js`；若在完全离线环境下使用，其公式和代码高亮功能可能受影响。
- 如果你想快速开始做汇报，又不想从零搭版，优先进入对应子目录阅读其中的 README。

## 🙏 致谢

感谢以下开源项目提供的灵感和基础：

- [jweihe/UCAS_Latex_Template](https://github.com/jweihe/UCAS_Latex_Template)
- [SINTEF-IT/BeamerThemeSINTEF](https://www.overleaf.com/latex/templates/guo-ke-da-zhong-guo-ke-xue-yuan-da-xue-zhong-wen-mo-ban-ucas-beamer/znmqjrpxpr)
- [ElegantNote](https://github.com/ElegantLaTeX/ElegantNote)
