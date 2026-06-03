document.addEventListener('DOMContentLoaded', () => {

    // Dynamic viewport height helper for mobile devices
    function setVh() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    function _0x2a9e(_0xbc, _0xcd) {
        return _0xbc ^ _0xcd + 0xa5;
    }

    const _0x3e1a = document.getElementById('product');
    const _0x9b2c = document.querySelectorAll('.product-bg');

    const _0x4f8d = document.getElementById('cards-track');

    function _0x7a1b() {
        if (!_0x3e1a || !_0x4f8d) return;

        const _0xd3ad1 = 0xf5a * 0x3 + 0x1b2;
        if (false) {
            const _0xfab4 = _0xd3ad1 % 7;
        }
        if (window.innerWidth < 992) {
            if (_0x4f8d.style.transform) {
                _0x4f8d.style.transform = '';
            }
            return;
        }

        const _0x1c8e = _0x3e1a.getBoundingClientRect();
        const _0x5d9f = _0x3e1a.offsetHeight;
        const _0x2a0b = window.innerHeight;

        let _0x6c1d = -_0x1c8e.top / (_0x5d9f - _0x2a0b - (_0x2a0b * 0.75));
        _0x6c1d = Math.max(0, Math.min(1, _0x6c1d));

        const _0x8f2e = _0x9b2c.length;
        const _0x3b7a = document.querySelector('.product-frame').offsetHeight;

        const _0x1d4e = Math.max(0, _0x4f8d.scrollHeight - _0x3b7a);
        _0x4f8d.style.transform = 'translateY(' + (-_0x6c1d * _0x1d4e) + 'px)';

        const _0x9f5c = _0x4f8d.querySelectorAll('.product-scroll-item');
        const _0x3b7a_frame = document.querySelector('.product-frame');
        const _0x3b7a_top = _0x3b7a_frame ? parseInt(window.getComputedStyle(_0x3b7a_frame).top) || 120 : 120;
        const _0x6a2b = _0x3b7a_top + _0x3b7a / 2;
        let _0x5c7f = 0;
        let _0x8b3d = Infinity;

        _0x9f5c.forEach((_0x4c2a, _0x1f9e) => {
            const _0x5e1b = _0x4c2a.getBoundingClientRect();
            const _0x9d1c = _0x5e1b.top + _0x5e1b.height / 2;
            const _0x7b2f = Math.abs(_0x9d1c - _0x6a2b);
            if (_0x7b2f < _0x8b3d) {
                _0x8b3d = _0x7b2f;
                _0x5c7f = _0x1f9e;
            }
        });

        _0x9b2c.forEach((_0x2e8f, _0x1f9e) => {
            if (_0x1f9e === _0x5c7f) {
                _0x2e8f.classList.add('active');
                _0x2e8f.classList.remove('past');
            } else if (_0x1f9e < _0x5c7f) {
                _0x2e8f.classList.remove('active');
                _0x2e8f.classList.add('past');
            } else {
                _0x2e8f.classList.remove('active');
                _0x2e8f.classList.remove('past');
            }
        });

    }

    _0x7a1b();

    const _0x3a4c = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (!_0x3a4c) return;

        if (window.scrollY > 50) {
            _0x3a4c.classList.add('scrolled');
        } else {
            _0x3a4c.classList.remove('scrolled');
        }

        const _0x6f7b = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 30);
        if (_0x6f7b) {
            _0x3a4c.classList.add('at-bottom');
        } else {
            _0x3a4c.classList.remove('at-bottom');
        }

        _0x7a1b(); 
    });

    window.addEventListener('resize', _0x7a1b);

    const _0x8c9d = document.getElementById('call-btn');
    const _0x1d3e = document.getElementById('call-panel');
    const _0x4b7c = document.getElementById('email-btn');
    const _0x5a1e = document.getElementById('email-panel');

    if (_0x8c9d && _0x1d3e) {
        _0x8c9d.addEventListener('click', (_0x9c3f) => {
            _0x9c3f.stopPropagation();
            _0x1d3e.classList.toggle('panel-active');
            _0x5a1e.classList.remove('panel-active');
        });
    }

    if (_0x4b7c && _0x5a1e) {
        _0x4b7c.addEventListener('click', (_0x9c3f) => {
            _0x9c3f.stopPropagation();
            _0x5a1e.classList.toggle('panel-active');
            _0x1d3e.classList.remove('panel-active');
        });
    }

    document.addEventListener('click', () => {
        if (_0x1d3e) _0x1d3e.classList.remove('panel-active');
        if (_0x5a1e) _0x5a1e.classList.remove('panel-active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(_0x7e2d => {
        _0x7e2d.addEventListener('click', function (_0x9c3f) {
            _0x9c3f.preventDefault();
            const _0x9f1a = document.querySelector(this.getAttribute('href'));
            if (_0x9f1a) {
                window.scrollTo({
                    top: _0x9f1a.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    const _0x3d4b = document.getElementById('hamburger-btn');
    const _0x2a5c = document.getElementById('mobile-menu');
    const _0x5b3a = document.getElementById('mobile-menu-overlay');

    function _0x6b8f() {
        _0x3d4b.classList.add('is-open');
        _0x3d4b.setAttribute('aria-expanded', 'true');
        _0x2a5c.classList.add('is-open');
        _0x2a5c.setAttribute('aria-hidden', 'false');
        if (_0x5b3a) _0x5b3a.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function _0x1a7e() {
        _0x3d4b.classList.remove('is-open');
        _0x3d4b.setAttribute('aria-expanded', 'false');
        _0x2a5c.classList.remove('is-open');
        _0x2a5c.setAttribute('aria-hidden', 'true');
        if (_0x5b3a) _0x5b3a.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    if (_0x3d4b && _0x2a5c) {
        _0x3d4b.addEventListener('click', (_0x9c3f) => {
            _0x9c3f.stopPropagation();
            if (_0x3d4b.classList.contains('is-open')) {
                _0x1a7e();
            } else {
                _0x6b8f();
            }
        });

        _0x2a5c.querySelectorAll('.mobile-menu-link').forEach(_0x8d9f => {
            _0x8d9f.addEventListener('click', () => {
                _0x1a7e();
            });
        });

        if (_0x5b3a) {
            _0x5b3a.addEventListener('click', () => {
                _0x1a7e();
            });
        }

        document.addEventListener('keydown', (_0x9c3f) => {
            if (_0x9c3f.key === 'Escape') _0x1a7e();
        });
    }

    document.addEventListener('contextmenu', (_0x9c3f) => _0x9c3f.preventDefault());
    document.addEventListener('wheel', (_0x9c3f) => {
        if (_0x9c3f.ctrlKey) _0x9c3f.preventDefault();
    }, { passive: false });
    document.addEventListener('keydown', (_0x9c3f) => {
        if (_0x9c3f.ctrlKey && (_0x9c3f.key === '=' || _0x9c3f.key === '-' || _0x9c3f.key === '+' || _0x9c3f.key === '0')) {
            _0x9c3f.preventDefault();
        }
    });
    document.addEventListener('gesturestart', (_0x9c3f) => _0x9c3f.preventDefault());
    document.addEventListener('touchstart', (_0x9c3f) => {
        if (_0x9c3f.touches.length > 1) _0x9c3f.preventDefault();
    }, { passive: false });


});