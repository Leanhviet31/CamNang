document.addEventListener('DOMContentLoaded', function() {

  // 1. Category Tab Click
  const catTabs = document.querySelectorAll('.cat-tab');
  catTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      catTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      // Placeholder filter effect
    });
  });

  // 2. Mobile Menu
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('mobile-nav-overlay');
  const closeBtn = document.getElementById('mobile-close');
  if (hamburger && overlay && closeBtn) {
    hamburger.addEventListener('click', () => overlay.classList.add('active'));
    closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  }

  // 3. Sticky Header
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { header.classList.add('scrolled'); }
    else { header.classList.remove('scrolled'); }
  });

  // 4. Back to Top
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { backToTop.classList.add('show'); }
    else { backToTop.classList.remove('show'); }
  });
  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // 5. Email Subscribe
  const emailSubmit = document.getElementById('email-submit');
  const emailInput = document.getElementById('email-input');
  if (emailSubmit && emailInput) {
    emailSubmit.addEventListener('click', () => {
      const val = emailInput.value.trim();
      if (val && val.includes('@')) {
        showToast('Đăng ký thành công! Cảm ơn bạn.');
        emailInput.value = '';
      } else {
        showToast('Vui lòng nhập email hợp lệ.');
      }
    });
  }

  // 6. Pagination
  const pageBtns = document.querySelectorAll('.page-btn:not(.page-next)');
  pageBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      pageBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // 7. Toast helper
  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'crb-toast';
    toast.textContent = msg;
    toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#333;color:#fff;padding:12px 24px;border-radius:6px;font-size:14px;z-index:9999;opacity:0;transition:opacity 0.3s;';
    document.body.appendChild(toast);
    requestAnimationFrame(() => { toast.style.opacity = '1'; });
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 2800);
  }

});
