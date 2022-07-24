# Welcome to cfGroup!

# Project folder structures

- src
  - components
    - xxx.jsx
    - shared
      - xxx.jsx - components (可以被其它 components 反复借用的内部 components)
  - styles
    - xx.scss (import from here)
  - pages (Router 需要导向的页面）
    - xxxPage.jsx
  - const.js (any data/objects or hardCode will be put here)
  - actions/reducers
