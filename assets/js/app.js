// 银龄就医指南 - 核心交互逻辑

// 1. 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    updateGreeting();
    setHealthTip();
    
    // 每60秒更新一次时间问候（可选）
    setInterval(updateGreeting, 60000);
});

// 2. 根据时间显示不同问候语（人文关怀）
function updateGreeting() {
    const hour = new Date().getHours();
    const greetingEl = document.getElementById('timeGreeting');
    let greetingText = '';
    
    if (hour >= 5 && hour < 9) {
        greetingText = '早上好，记得吃降压药';
    } else if (hour >= 9 && hour < 12) {
        greetingText = '上午好，就诊注意安全';
    } else if (hour >= 12 && hour < 14) {
        greetingText = '中午好，适当休息';
    } else if (hour >= 14 && hour < 18) {
        greetingText = '下午好，别太劳累';
    } else if (hour >= 18 && hour < 22) {
        greetingText = '晚上好，早点休息';
    } else {
        greetingText = '夜深了，注意血压';
    }
    
    if (greetingEl) {
        greetingEl.textContent = greetingText;
    }
}

// 3. 智能健康提示
function setHealthTip() {
    const tipEl = document.getElementById('healthTip');
    const month = new Date().getMonth() + 1; // 1-12月
    
    const tips = {
        winter: '天气寒冷，心血管患者注意头部保暖，避免清晨外出',
        summer: '天气炎热，就诊带好水和伞，防止中暑',
        spring: '花粉季节，戴口罩防过敏',
        autumn: '温差大，带件薄外套'
    };
    
    let tip = tips.autumn;
    if (month >= 12 || month <= 2) tip = tips.winter;
    else if (month >= 3 && month <= 5) tip = tips.spring;
    else if (month >= 6 && month <= 8) tip = tips.summer;
    
    if (tipEl) tipEl.textContent = tip;
}

// 4. 导航函数 - 跳转到导诊页面
function navigateTo(page) {
    if (page === 'guide') {
        window.location.href = 'pages/guide.html';
    } else {
        showLargeAlert('📋 功能开发中', '该功能将在完整版中呈现\n感谢您的关注');
    }
}

// 5. 紧急呼叫功能 - 跳转到紧急联系人页面
function triggerEmergency() {
    window.location.href = 'pages/emergency.html';
}

// 辅助函数：大字号弹窗
function showLargeAlert(title, message) {
    // 创建临时遮罩层
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.5); backdrop-filter: blur(5px);
        display: flex; align-items: center; justify-content: center;
        z-index: 9999;
    `;
    
    const box = document.createElement('div');
    box.style.cssText = `
        background: white; border-radius: 48px; padding: 40px; width: 80%;
        max-width: 450px; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    `;
    
    box.innerHTML = `
        <div style="font-size: 48px; margin-bottom: 20px;">📢</div>
        <h2 style="font-size: 32px; margin-bottom: 20px; color: #1A5276;">${title}</h2>
        <p style="font-size: 24px; color: #2C3E50; line-height: 1.8; white-space: pre-line;">${message}</p>
        <button id="closeAlertBtn" style="margin-top: 30px; padding: 20px 40px; font-size: 28px; background: #2980B9; color: white; border: none; border-radius: 60px; width: 100%;">确 定</button>
    `;
    
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    
    document.getElementById('closeAlertBtn').addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
}