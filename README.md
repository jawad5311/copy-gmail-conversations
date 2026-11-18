# Copy Gmail Conversations

A starter Chrome extension that adds a floating **Copy** button when expanded message text is visible in Gmail. Clicking it copies the visible message bodies as plain text, separated by `---`.

This is an initial implementation: expand the messages you want to copy first. Sender names, dates, attachments, and collapsed messages are not yet included. Gmail's interface may change, so extraction will need refinement as the desired workflow is defined.

## Install for development

1. Open Chrome and visit `chrome://extensions`.
2. Turn on **Developer mode**.
3. Select **Load unpacked** and choose this project folder (the folder containing `manifest.json`).
4. Open or refresh Gmail, open a conversation, and expand its messages. Select **Copy**, then paste the result wherever you need it.
5. After changing the extension files, select the extension's reload button on `chrome://extensions` and refresh Gmail.

The extension runs locally in Gmail and does not send conversation content to a server. It needs clipboard permission to copy the text.

## Project environment

The extension itself uses JavaScript and does not require Python. A Python virtual environment (`.venv`) is provided for future development tools. In PowerShell, activate it with `.\.venv\Scripts\Activate.ps1` and leave it with `deactivate`. To recreate it with an installed Python, run `python -m venv .venv`.
