/* ============================================================
   FIFI HAIR SALON — Interactive JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Sticky Navbar ───────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    // Back to top visibility
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile Nav Toggle ───────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });
    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Back to Top ─────────────────────────────────────── */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Scroll-reveal ───────────────────────────────────── */
  const revealEls = () => {
    const candidates = document.querySelectorAll(
      '.service-card, .gallery-card, .review-card, .about-content, .about-visual, ' +
      '.booking-info, .booking-form-wrap, .section-header, .stat-box, .credential'
    );
    candidates.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  };
  revealEls();

  /* ── Gallery Filter ──────────────────────────────────── */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.opacity    = '0';
        card.style.transform  = 'scale(.92)';
        card.style.transition = 'opacity .25s, transform .25s';
        if (!show) {
          card.style.display = 'none';
        } else {
          card.style.display = '';
          setTimeout(() => {
            card.style.opacity   = '1';
            card.style.transform = '';
          }, 30);
        }
      });
    });
  });

  /* ── Reviews Slider ──────────────────────────────────── */
  const track   = document.getElementById('reviewsTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsWrap = document.getElementById('sliderDots');

  if (track && prevBtn && nextBtn) {
    const cards = Array.from(track.querySelectorAll('.review-card'));
    let current = 0;
    let autoSlideTimer;

    const getVisible = () => {
      if (window.innerWidth <= 768) return 1;
      if (window.innerWidth <= 1024) return 2;
      return 3;
    };

    const totalSlides = () => Math.ceil(cards.length / getVisible());

    // Build dots
    const buildDots = () => {
      dotsWrap.innerHTML = '';
      for (let i = 0; i < totalSlides(); i++) {
        const dot = document.createElement('button');
        dot.className = 'dot' + (i === current ? ' active' : '');
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
      }
    };

    const updateDots = () => {
      dotsWrap.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    };

    const goTo = (idx) => {
      const total = totalSlides();
      current = (idx + total) % total;
      const visible = getVisible();
      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = 24;
      const offset = current * visible * (cardWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;
      updateDots();
    };

    prevBtn.addEventListener('click', () => { goTo(current - 1); resetAutoSlide(); });
    nextBtn.addEventListener('click', () => { goTo(current + 1); resetAutoSlide(); });

    const startAutoSlide = () => {
      autoSlideTimer = setInterval(() => goTo(current + 1), 5000);
    };
    const resetAutoSlide = () => {
      clearInterval(autoSlideTimer);
      startAutoSlide();
    };

    // Touch/swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? goTo(current + 1) : goTo(current - 1);
        resetAutoSlide();
      }
    });

    buildDots();
    startAutoSlide();
    window.addEventListener('resize', () => { buildDots(); goTo(current); });
  }

  /* ── Minimum date for booking ────────────────────────── */
  const apptDate = document.getElementById('apptDate');
  if (apptDate) {
    const today = new Date();
    const yyyy  = today.getFullYear();
    const mm    = String(today.getMonth() + 1).padStart(2, '0');
    const dd    = String(today.getDate()).padStart(2, '0');
    apptDate.min = `${yyyy}-${mm}-${dd}`;
    // Default to tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const ty = tomorrow.getFullYear();
    const tm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const td = String(tomorrow.getDate()).padStart(2, '0');
    apptDate.value = `${ty}-${tm}-${td}`;
  }

  /* ── Phone formatting ────────────────────────────────── */
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      let digits = phoneInput.value.replace(/\D/g, '').slice(0, 10);
      if (digits.length >= 7) {
        phoneInput.value = `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
      } else if (digits.length >= 4) {
        phoneInput.value = `(${digits.slice(0,3)}) ${digits.slice(3)}`;
      } else if (digits.length > 0) {
        phoneInput.value = `(${digits}`;
      }
    });
  }

  /* ── Booking Form Validation & Submit ────────────────── */
  const form        = document.getElementById('bookingForm');
  const successBox  = document.getElementById('bookingSuccess');
  const submitBtn   = document.getElementById('submitBtn');
  const submitText  = document.getElementById('submitText');
  const submitSpinner = document.getElementById('submitSpinner');
  const bookAnother = document.getElementById('bookAnother');

  const validators = {
    firstName: { el: 'firstName',  err: 'firstNameError',  msg: 'Please enter your first name.' },
    lastName:  { el: 'lastName',   err: 'lastNameError',   msg: 'Please enter your last name.'  },
    phone:     { el: 'phone',      err: 'phoneError',      msg: 'Please enter a valid 10-digit phone number.' },
    email:     { el: 'email',      err: 'emailError',      msg: 'Please enter a valid email address.' },
    service:   { el: 'service',    err: 'serviceError',    msg: 'Please select a service.' },
    apptDate:  { el: 'apptDate',   err: 'apptDateError',   msg: 'Please choose a date.' },
    apptTime:  { el: 'apptTime',   err: 'apptTimeError',   msg: 'Please choose a preferred time.' },
    agreePolicy:{ el: 'agreePolicy', err: 'agreePolicyError', msg: 'Please agree to the cancellation policy.' },
  };

  const showError = (errId, msg) => {
    const el = document.getElementById(errId);
    if (el) el.textContent = msg;
  };
  const clearErrors = () => {
    Object.values(validators).forEach(v => {
      showError(v.err, '');
      const el = document.getElementById(v.el);
      if (el) el.classList.remove('error');
    });
  };

  const validateField = (key) => {
    const v  = validators[key];
    const el = document.getElementById(v.el);
    if (!el) return true;
    const val = el.type === 'checkbox' ? el.checked : el.value.trim();
    let valid = true;

    if (!val || val === '') {
      valid = false;
    } else if (key === 'email') {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    } else if (key === 'phone') {
      valid = /^\(\d{3}\) \d{3}-\d{4}$/.test(val);
    }

    if (!valid) {
      showError(v.err, v.msg);
      el.classList.add('error');
    }
    return valid;
  };

  // Real-time inline validation
  Object.keys(validators).forEach(key => {
    const el = document.getElementById(validators[key].el);
    if (el) {
      el.addEventListener('blur', () => validateField(key));
      el.addEventListener('input', () => {
        showError(validators[key].err, '');
        el.classList.remove('error');
      });
    }
  });

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      clearErrors();

      const allValid = Object.keys(validators).map(validateField).every(Boolean);
      if (!allValid) {
        // Scroll to first error
        const firstError = form.querySelector('.error');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // Simulate async submission
      submitBtn.disabled = true;
      submitText.classList.add('hidden');
      submitSpinner.classList.remove('hidden');

      await new Promise(resolve => setTimeout(resolve, 1800));

      // Show success
      form.classList.add('hidden');
      successBox.classList.remove('hidden');
    });
  }

  if (bookAnother) {
    bookAnother.addEventListener('click', () => {
      form.reset();
      form.classList.remove('hidden');
      successBox.classList.add('hidden');
      submitBtn.disabled = false;
      submitText.classList.remove('hidden');
      submitSpinner.classList.add('hidden');
      clearErrors();
      // Reset date to tomorrow
      if (apptDate) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const ty = tomorrow.getFullYear();
        const tm = String(tomorrow.getMonth() + 1).padStart(2, '0');
        const td = String(tomorrow.getDate()).padStart(2, '0');
        apptDate.value = `${ty}-${tm}-${td}`;
      }
    });
  }

  /* ── Active nav link on scroll ───────────────────────── */
  const sections   = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  const activateNav = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY + 120 >= sec.offsetTop) current = sec.id;
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', activateNav, { passive: true });

  /* ── Smooth anchor scrolling with offset ─────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight + 16;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  /* ── Service card price highlight on hover ───────────── */
  document.querySelectorAll('.price-row').forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.background = 'rgba(201,168,76,.08)';
      row.style.borderRadius = '6px';
      row.style.padding = '2px 6px';
      row.style.margin = '0 -6px';
    });
    row.addEventListener('mouseleave', () => {
      row.style.background = '';
      row.style.padding = '';
      row.style.margin = '';
    });
  });

  /* ── Gallery card lightbox hint ──────────────────────── */
  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const name = card.querySelector('h4')?.textContent || 'Style';
      const price = card.querySelector('.gallery-tag')?.textContent || '';
      // Simple toast notification
      showToast(`${name} — ${price}. Book this style!`);
    });
  });

  /* ── Toast notification ──────────────────────────────── */
  const showToast = (msg) => {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.style.cssText = `
        position:fixed; bottom:90px; left:50%; transform:translateX(-50%) translateY(20px);
        background:var(--plum); color:#fff; padding:12px 28px; border-radius:50px;
        font-size:.87rem; font-weight:500; box-shadow:0 8px 24px rgba(0,0,0,.3);
        z-index:9999; opacity:0; transition:all .35s cubic-bezier(.4,0,.2,1);
        white-space:nowrap; max-width:90vw; text-align:center;
        border:1px solid rgba(201,168,76,.3);
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
    }, 3000);
  };

  /* ── Announcement bar pause on hover ─────────────────── */
  const marquee = document.querySelector('.marquee-track');
  if (marquee) {
    marquee.addEventListener('mouseenter', () => {
      marquee.style.animationPlayState = 'paused';
    });
    marquee.addEventListener('mouseleave', () => {
      marquee.style.animationPlayState = 'running';
    });
  }

  /* ── Add CSS for active nav link ─────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active { color: var(--gold) !important; }
  `;
  document.head.appendChild(style);

});
