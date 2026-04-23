/**
 * Enterprise Design System - Main JavaScript
 * Core functionality for enterprise applications
 */

(function() {
  'use strict';

  // ===== DOM Ready =====
  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initUserMenu();
    initNotifications();
    initModals();
    initToasts();
    initFormValidation();
  });

  // ===== Mobile Menu Toggle =====
  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (!toggle || !sidebar) return;
    
    toggle.addEventListener('click', function() {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      
      if (!isExpanded) {
        sidebar.style.transform = 'translateX(0)';
        document.body.style.overflow = 'hidden';
      } else {
        sidebar.style.transform = 'translateX(-100%)';
        document.body.style.overflow = '';
      }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        toggle.click();
      }
    });
  }

  // ===== User Menu Dropdown =====
  function initUserMenu() {
    const trigger = document.querySelector('.user-menu__trigger');
    if (!trigger) return;
    
    let menu = null;
    
    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', !isExpanded);
      
      if (!isExpanded && !menu) {
        menu = createUserMenu();
        document.body.appendChild(menu);
        positionMenu(menu, trigger);
      } else if (!isExpanded) {
        menu.style.display = 'block';
        positionMenu(menu, trigger);
      } else if (menu) {
        menu.style.display = 'none';
      }
    });
    
    // Close on outside click
    document.addEventListener('click', function(e) {
      if (menu && !trigger.contains(e.target) && !menu.contains(e.target)) {
        trigger.setAttribute('aria-expanded', 'false');
        menu.style.display = 'none';
      }
    });
    
    // Close on escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menu && menu.style.display !== 'none') {
        trigger.setAttribute('aria-expanded', 'false');
        menu.style.display = 'none';
        trigger.focus();
      }
    });
  }
  
  function createUserMenu() {
    const menu = document.createElement('div');
    menu.className = 'user-menu-dropdown';
    menu.setAttribute('role', 'menu');
    menu.innerHTML = `
      <a href="#" role="menuitem" class="user-menu-item">Profile</a>
      <a href="#" role="menuitem" class="user-menu-item">Settings</a>
      <hr class="user-menu-divider">
      <a href="#" role="menuitem" class="user-menu-item">Sign out</a>
    `;
    return menu;
  }
  
  function positionMenu(menu, trigger) {
    const rect = trigger.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.top = (rect.bottom + 8) + 'px';
    menu.style.right = (window.innerWidth - rect.right) + 'px';
    menu.style.zIndex = '400';
  }

  // ===== Notifications Bell =====
  function initNotifications() {
    const notificationBtn = document.querySelector('[aria-label="Notifications"]');
    if (!notificationBtn) return;
    
    notificationBtn.addEventListener('click', function() {
      showToast({
        type: 'info',
        title: 'Notifications',
        message: 'You have 3 new notifications'
      });
    });
  }

  // ===== Modal System =====
  function initModals() {
    // Handle data-modal triggers
    document.querySelectorAll('[data-modal]').forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        openModal(modalId);
      });
    });
  }
  
  function openModal(modalId) {
    const overlay = document.getElementById('modal-container');
    const modal = overlay.querySelector('.modal');
    
    if (!overlay || !modal) return;
    
    // Load modal content (would typically be fetched or templated)
    modal.innerHTML = `
      <div class="modal__header">
        <h2 class="modal__title">Modal Title</h2>
        <button class="modal__close" aria-label="Close modal">&times;</button>
      </div>
      <div class="modal__body">
        <p>Modal content goes here.</p>
      </div>
      <div class="modal__footer">
        <button class="btn btn--secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn--primary">Confirm</button>
      </div>
    `;
    
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus trap
    const closeBtn = modal.querySelector('.modal__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
      closeBtn.focus();
    }
    
    // Close on overlay click
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeModal();
      }
    });
    
    // Close on escape
    document.addEventListener('keydown', handleEscapeForModal);
  }
  
  function closeModal() {
    const overlay = document.getElementById('modal-container');
    if (!overlay) return;
    
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleEscapeForModal);
  }
  
  function handleEscapeForModal(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  // ===== Toast Notifications =====
  function initToasts() {
    // Auto-dismiss toasts after timeout
    setInterval(function() {
      const toastContainer = document.getElementById('toast-container');
      if (!toastContainer) return;
      
      const oldToasts = toastContainer.querySelectorAll('.toast[data-auto-dismiss]');
      oldToasts.forEach(function(toast) {
        const dismissTime = parseInt(toast.dataset.autoDismiss, 10);
        const createdTime = parseInt(toast.dataset.created, 10);
        
        if (Date.now() - createdTime > dismissTime) {
          dismissToast(toast);
        }
      });
    }, 1000);
  }
  
  function showToast(options) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const {
      type = 'info',
      title = '',
      message = '',
      autoDismiss = 5000
    } = options;
    
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', 'alert');
    toast.dataset.autoDismiss = autoDismiss;
    toast.dataset.created = Date.now();
    
    toast.innerHTML = `
      <div class="toast__content">
        ${title ? `<strong class="toast__title">${title}</strong>` : ''}
        <p class="toast__message">${message}</p>
      </div>
      <button class="toast__close" aria-label="Dismiss notification">&times;</button>
    `;
    
    const closeBtn = toast.querySelector('.toast__close');
    closeBtn.addEventListener('click', function() {
      dismissToast(toast);
    });
    
    container.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(function() {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(0)';
    });
  }
  
  function dismissToast(toast) {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    
    setTimeout(function() {
      toast.remove();
    }, 300);
  }

  // ===== Form Validation =====
  function initFormValidation() {
    document.querySelectorAll('form[data-validate]').forEach(function(form) {
      form.addEventListener('submit', function(e) {
        if (!validateForm(form)) {
          e.preventDefault();
        }
      });
      
      // Real-time validation
      form.querySelectorAll('input, select, textarea').forEach(function(input) {
        input.addEventListener('blur', function() {
          validateField(input);
        });
      });
    });
  }
  
  function validateForm(form) {
    let isValid = true;
    
    form.querySelectorAll('[required]').forEach(function(field) {
      if (!validateField(field)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  function validateField(field) {
    const value = field.value.trim();
    const isValid = field.checkValidity();
    
    if (!isValid || (field.hasAttribute('required') && !value)) {
      field.classList.add('input--error');
      showError(field, field.validationMessage || 'This field is required');
      return false;
    } else {
      field.classList.remove('input--error');
      clearError(field);
      return true;
    }
  }
  
  function showError(field, message) {
    clearError(field);
    
    const error = document.createElement('span');
    error.className = 'field-error';
    error.textContent = message;
    error.setAttribute('role', 'alert');
    
    field.parentNode.appendChild(error);
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', error.id || '');
  }
  
  function clearError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  }

  // ===== Utility Functions =====
  window.EnterpriseUI = {
    showToast: showToast,
    openModal: openModal,
    closeModal: closeModal,
    
    // Loading state helpers
    setLoading: function(element, isLoading) {
      if (isLoading) {
        element.classList.add('is-loading');
        element.disabled = true;
        element.setAttribute('aria-busy', 'true');
      } else {
        element.classList.remove('is-loading');
        element.disabled = false;
        element.removeAttribute('aria-busy');
      }
    },
    
    // Debounce utility
    debounce: function(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
  };

})();
