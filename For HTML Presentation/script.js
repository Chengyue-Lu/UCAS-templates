// ========== 幻灯片管理 ==========
class PresentationManager {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;
        this.speakerNotesActive = false;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateCounter();
        this.addSpeakerNotes();
    }

    setupEventListeners() {
        // 按钮事件
        document.querySelector('.prev').addEventListener('click', () => this.prevSlide());
        document.querySelector('.next').addEventListener('click', () => this.nextSlide());

        // 键盘事件
        document.addEventListener('keydown', (e) => this.handleKeydown(e));

        // 鼠标事件（可选）
        document.addEventListener('click', (e) => {
            if (e.target.closest('.slide')) {
                if (e.clientX > window.innerWidth / 2) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
    }

    handleKeydown(event) {
        const key = event.key.toLowerCase();
        
        // 导航键
        if (key === 'arrowright' || key === 'd') {
            event.preventDefault();
            this.nextSlide();
        } else if (key === 'arrowleft' || key === 'a') {
            event.preventDefault();
            this.prevSlide();
        }
        // 首尾键
        else if (key === 'home') {
            event.preventDefault();
            this.goToSlide(0);
        } else if (key === 'end') {
            event.preventDefault();
            this.goToSlide(this.totalSlides - 1);
        }
        // 演讲者备注
        else if (key === 'f') {
            event.preventDefault();
            this.toggleSpeakerNotes();
        }
        // 全屏
        else if (key === 'f5') {
            event.preventDefault();
            this.toggleFullscreen();
        }
    }

    goToSlide(index) {
        // 边界检查
        if (index < 0) index = 0;
        if (index >= this.totalSlides) index = this.totalSlides - 1;

        // 移除当前活跃幻灯片
        this.slides[this.currentIndex].classList.remove('active');
        
        // 设置新的活跃幻灯片
        this.currentIndex = index;
        this.slides[this.currentIndex].classList.add('active');
        
        this.updateCounter();
        this.updateSpeakerNotes();
    }

    nextSlide() {
        this.goToSlide(this.currentIndex + 1);
    }

    prevSlide() {
        this.goToSlide(this.currentIndex - 1);
    }

    updateCounter() {
        document.querySelector('.current').textContent = this.currentIndex + 1;
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log('全屏请求失败:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }

    toggleSpeakerNotes() {
        const notes = document.getElementById('speakerNotes');
        notes.classList.toggle('active');
        this.speakerNotesActive = notes.classList.contains('active');
    }

    addSpeakerNotes() {
        const slides = this.slides;
        slides.forEach((slide, index) => {
            const notes = slide.getAttribute('data-notes') || `第 ${index + 1} 页的演讲者备注`;
            slide.dataset.speakerNotes = notes;
        });
    }

    updateSpeakerNotes() {
        const notes = this.slides[this.currentIndex].dataset.speakerNotes || '无备注';
        document.getElementById('notesText').textContent = notes;
    }
}

// ========== 页面加载完成后初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    const presentation = new PresentationManager();

    // 显示帮助信息（可选）
    console.log(`
    %c HTML 演示发布系统 v1.0
    %c
    快捷键：
    ➜ 右箭头 / D：下一张
    ➜ 左箭头 / A：上一张
    ➜ Home：首页
    ➜ End：末页
    ➜ F：切换演讲者备注
    ➜ F5：全屏播放
    ➜ 鼠标点击：左边前一张，右边下一张
    `,
    'color: #667eea; font-size: 14px; font-weight: bold;',
    'color: #999; font-size: 12px;'
    );
});

// ========== 响应式调整 ==========
window.addEventListener('resize', () => {
    // 可在此添加响应式调整逻辑
});
