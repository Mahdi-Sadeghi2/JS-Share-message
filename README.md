# Secret Message Sharing App 🔒✉️

A lightweight web application that enables secure message sharing through encrypted URLs using Base64 encoding.

## Features ✨

- **URL-based Encryption**: Messages encoded directly in the URL hash
- **Zero Storage**: No server-side storage or database required
- **One-Click Sharing**: Automatic link generation and copying
- **Instant Decoding**: Messages decode automatically when URL is opened
- **Mobile Optimized**: Works seamlessly across all devices

## How It Works ⚙️

### Message Sending

1. User enters a secret message
2. Message is encoded with `btoa()` (Base64)
3. Encrypted string is appended to URL after `#`
4. Shareable link is generated and auto-copied

### Message Receiving

1. Recipient opens the shared URL
2. App detects hash fragment (`#...`)
3. Message is decoded with `atob()`
4. Original message is displayed

## Usage Guide 📖

### For Senders:

```bash
1. Visit the app URL
2. Type your message in the input box
3. Click "Create Link"
4. Share the generated URL with your recipient
```
