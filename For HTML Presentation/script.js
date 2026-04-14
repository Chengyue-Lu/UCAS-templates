/*
  这份脚本负责：
  1. 缩放 16:9 舞台
  2. 控制翻页
  3. 控制 fragment 逐步显示
  4. 更新页码与进度条
  5. 切换全屏
*/

const stage = document.getElementById('stage');
const slides = [...document.querySelectorAll('.slide')];
const progressFill = document.getElementById('progressFill');
const pageCounter = document.getElementById('pageCounter');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const prevZone = document.getElementById('prevZone');
const nextZone = document.getElementById('nextZone');

let current = 0;

/*
  fragmentState[i] 表示第 i 页已经展开了多少个 fragment
  这样每页都能有独立的逐步显示进度
*/
const fragmentState = slides.map(() => 0);

function scaleStage() {
    const availableHeight = window.innerHeight - 120;
    const scale = Math.min(window.innerWidth / 1600, availableHeight / 900);
    stage.style.transform = `scale(${scale})`;
}

function drawFragments(index) {
    const fragments = [...slides[index].querySelectorAll('.fragment')];
    fragments.forEach((item, itemIndex) => {
        item.classList.toggle('revealed', itemIndex < fragmentState[index]);
    });
}

function updateHud() {
    const text = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    pageCounter.textContent = text;

    const currentSlideNo = slides[current].querySelector('.slide-no');
    if (currentSlideNo) {
        currentSlideNo.textContent = text;
    }

    progressFill.style.width = `${((current + 1) / slides.length) * 100}%`;
}

function showSlide(index) {
    current = Math.max(0, Math.min(index, slides.length - 1));
    slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    drawFragments(current);
    updateHud();
}

function nextStep() {
    const fragments = slides[current].querySelectorAll('.fragment');

    if (fragmentState[current] < fragments.length) {
        fragmentState[current] += 1;
        drawFragments(current);
        return;
    }

    if (current < slides.length - 1) {
        showSlide(current + 1);
    }
}

function prevStep() {
    if (fragmentState[current] > 0) {
        fragmentState[current] -= 1;
        drawFragments(current);
        return;
    }

    if (current > 0) {
        const previous = current - 1;
        fragmentState[previous] = slides[previous].querySelectorAll('.fragment').length;
        showSlide(previous);
    }
}

async function toggleFullscreen() {
    if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen().catch(() => {});
    } else {
        await document.exitFullscreen().catch(() => {});
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(key)) {
        event.preventDefault();
        nextStep();
    } else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(key)) {
        event.preventDefault();
        prevStep();
    } else if (key === 'Home') {
        event.preventDefault();
        showSlide(0);
    } else if (key === 'End') {
        event.preventDefault();
        fragmentState[slides.length - 1] = slides[slides.length - 1].querySelectorAll('.fragment').length;
        showSlide(slides.length - 1);
    } else if (key.toLowerCase() === 'f') {
        event.preventDefault();
        toggleFullscreen();
    }
});

prevZone.addEventListener('click', prevStep);
nextZone.addEventListener('click', nextStep);
fullscreenBtn.addEventListener('click', toggleFullscreen);

document.addEventListener('fullscreenchange', () => {
    fullscreenBtn.textContent = document.fullscreenElement ? '退出全屏' : '全屏';
});

window.addEventListener('resize', scaleStage);

scaleStage();
slides.forEach((_, index) => drawFragments(index));
updateHud();
