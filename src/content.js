(() => {
  'use strict';

  const button = document.createElement('button');
  button.className = 'gmail-conversation-copy-button';
  button.type = 'button';
  button.textContent = 'Copy';
  button.setAttribute('aria-label', 'Copy visible conversation messages');
  button.hidden = true;
  document.body.appendChild(button);

  let resetTimer;

  function visibleMessages() {
    // Gmail renders expanded message bodies with these classes. Its interface
    // can change, so keep message extraction isolated for future refinement.
    return Array.from(document.querySelectorAll('.a3s.aiL'))
      .filter((message) => message.getClientRects().length > 0);
  }

  function updateButton() {
    button.hidden = visibleMessages().length === 0;
  }

  button.addEventListener('click', async () => {
    const text = visibleMessages()
      .map((message) => message.innerText.trim())
      .filter(Boolean)
      .join('\n\n---\n\n');

    if (!text) {
      button.textContent = 'Nothing to copy';
    } else {
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = 'Copied!';
      } catch (error) {
        console.error('Could not copy the conversation:', error);
        button.textContent = 'Copy failed';
      }
    }

    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => { button.textContent = 'Copy'; }, 2000);
  });

  const observer = new MutationObserver(updateButton);
  observer.observe(document.body, { childList: true, subtree: true });
  updateButton();
})();
