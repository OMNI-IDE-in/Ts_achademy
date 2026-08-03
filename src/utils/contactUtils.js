// ==========================================
// ACADEMY CONTACT PLACEHOLDERS & UTILITIES
// ==========================================

// WhatsApp number (default: 918884167163)
export const WHATSAPP_NUMBER = "918884167163";
export const WHATSAPP_DISPLAY = "+91 88841 67163";

// Admissions email (default: admissions@tsglobalacademy.in)
export const ADMISSIONS_EMAIL = "admissions@tsglobalacademy.in";

/**
 * Generate deep-link for WhatsApp with pre-filled message
 * @param {string} customMessage 
 * @returns {string}
 */
export const getWhatsAppUrl = (customMessage) => {
  const defaultMsg = "Hello TS Global Academy, I would like to inquire about your diploma programmes.";
  const text = customMessage || defaultMsg;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

/**
 * Generate mailto URL with pre-filled subject
 * @param {string} customSubject 
 * @returns {string}
 */
export const getMailtoUrl = (customSubject) => {
  const subject = customSubject || "Inquiry regarding TS Global Academy Diploma Programmes";
  return `mailto:${ADMISSIONS_EMAIL}?subject=${encodeURIComponent(subject)}`;
};

/**
 * Generate direct Gmail Webmail compose URL with pre-filled subject
 * @param {string} customSubject 
 * @returns {string}
 */
export const getGmailUrl = (customSubject) => {
  const subject = customSubject || "Inquiry regarding TS Global Academy Diploma Programmes";
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${ADMISSIONS_EMAIL}&su=${encodeURIComponent(subject)}`;
};

/**
 * Copy admissions email to clipboard with fallback
 * @returns {Promise<boolean>}
 */
export const copyEmailToClipboard = async () => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(ADMISSIONS_EMAIL);
      return true;
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = ADMISSIONS_EMAIL;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    }
  } catch (err) {
    console.error("Failed to copy email to clipboard", err);
    return false;
  }
};
