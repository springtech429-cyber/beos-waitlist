# 🏷️ Brand Assets

Place your brand files here:

- `logo.png` — Main logo (used in navbar & hero)
- `logo-light.png` — Light/white variant (if needed)
- `logo-icon.png` — Icon-only version (used in footer)
- `favicon.svg` — Browser tab icon (also in /public/favicon.svg)

## How to use

In any component, import and use:

```jsx
import logo from '../assets/logo.png'

// Then in JSX:
<img src={logo} alt="Brand" className="hero-logo-img" />
```

Or reference by URL if hosted externally:

```jsx
<img src="https://your-cdn.com/logo.png" alt="Brand" className="hero-logo-img" />
```
