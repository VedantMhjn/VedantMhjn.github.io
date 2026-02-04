# Comprehensive GitHub Flavored Markdown (GFM) Guide

This single document explains the most commonly used Markdown syntax on GitHub.

---

## 1. Text Styling
*   **Bold:** `**text**` or `__text__` -> **Bold**
*   *Italic:* `*text*` or `_text_` -> *Italic*
*   ***Bold & Italic:*** `***text***` -> ***Bold & Italic***
*   ~~Strikethrough:~~ `~~text~~` -> ~~Strikethrough~~

## 2. Headings
Use `#` for headings (1-6 levels). GitHub generates an "Outline" menu for these.
# H1 (Largest)
## H2
### H3 (Smaller)

## 3. Lists
### Unordered
* Item 1
* Item 2
    * Sub-item (use 4 spaces to indent)

### Ordered
1. First item
2. Second item
3. Third item

### Task Lists (Checkboxes)
- [x] Finished task
- [ ] Unfinished task

## 4. Code and Syntax Highlighting
### Inline Code
Use single backticks: `` `code` ``. Example: `npm install`.

### Code Blocks
Use triple backticks `` ``` ``. Add a language name (e.g., `javascript`, `python`, `bash`) for syntax highlighting.

```javascript
// This is a comment
function sayHello() {
  console.log("Hello, GitHub!");
}
