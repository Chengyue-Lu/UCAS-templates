# 中国科学院大学 (UCAS) LaTeX 模板合集

本项目收集并重整制作了适用于中国科学院大学（UCAS）学生的各类 LaTeX 模板，涵盖课程论文、实验报告、课堂笔记、课后作业以及 Beamer 演示文稿等场景。

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

### 3. Beamer 演示模板 (`国科大___中国科学院大学中文模板UCAS_beamer`)

基于 SINTEF 主题的精美学术演示文稿模板。

- **主要文件**: `beamersapienza.tex`
- **特点**:
  - 现代化的扁平风格（SINTEF Theme）。
  - 已配置 `xeCJK` 支持中文显示。
  - 包含背景图与配色方案适配。
- **致谢**: 原主题来自 Federico Zenith，由 wzl-plasmid 进行样式适配。

### 4. 笔记模板 (`For 笔记`)

基于 ElegantNote 修改的美观笔记模板，适合整理课程复习资料。

- **主要文件**: `elegantnote-cn.tex`, `elegantnote.cls`
- **特点**:
  - **多设备适配**: 支持 Pad、Kindle、PC (双页)、Screen (幻灯片比例) 和 A4 纸张输出。
  - **颜色主题**: 内置 Blue (默认), Green, Cyan, Sakura, Black 五套配色。
  - 优雅的定理、定义与引用环境。

### 5. 通用作业模板 (`For 作业`)

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

3. **编译**:
   - 大多数模板推荐使用 **XeLaTeX** 进行编译以获得最佳的中文支持。
   - 参考文献通常需要配合 BibTeX 使用。

## ⚠️ 注意事项

- 部分模板使用了系统字体，Linux/macOS 用户可能需要调整字体配置。
