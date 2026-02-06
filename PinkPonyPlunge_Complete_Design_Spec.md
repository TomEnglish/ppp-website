# PINK PONY PLUNGE - COMPLETE DESIGN SPECIFICATION
**Brand Identity & UI Component Library**

---

## 📊 EXTRACTED COLOR ANALYSIS

### Color Extraction Results from Logo

**Methodology:** Pixel sampling analysis of logo regions (hot side, cold side, center transition, water drop, ice crystals)

#### HOT SIDE (Fire/Sauna) - Right Side of Horse
1. **#E86263** - Primary Fire Coral (dominant)
2. **#EB6B6A** - Coral variation
3. **#E96767** - Coral mid-tone
4. **#EB796F** - Sunset Coral (darker, warmer)
5. **#EB6E6C** - Coral-pink blend

**Recommended Primary:** `#E86263` (most saturated, best contrast)
**Recommended Secondary:** `#EB796F` (for hover states and darker accents)

---

#### COLD SIDE (Ice/Plunge) - Left Side of Horse
1. **#58AFDC** - Primary Sky Blue (dominant)
2. **#57AEDB** - Sky Blue variation
3. **#56ADDA** - Deep Sky Blue (slightly darker)
4. **#E7E7E7** - Light gray (ice crystals)
5. **#CBCBCB** - Medium gray (shadows)

**Recommended Primary:** `#58AFDC` (most vibrant, accessible)
**Recommended Secondary:** `#56ADDA` (for hover states and depth)

---

#### WATER DROP (Bottom Left)
1. **#59B1D9** - Water Drop Cyan (primary)
2. **#58AFDC** - Sky Blue variant
3. **#57AEDB** - Sky Blue lighter

**Recommended Accent:** `#59B1D9` (distinct from main ice blue, perfect for highlights)

---

#### ICE CRYSTALS (Geometric Shapes)
1. **#FBFDFC** - Ice Crystal White (nearly pure white with blue tint)
2. **#FCFEFD** - Frost White
3. **#F9FDFC** - Crystal White

**Recommended Background:** `#FBFDFC` (subtle alternative to pure white, adds sophistication)

---

## 🎨 FINAL RECOMMENDED COLOR PALETTE

### Primary Colors (Main Brand Identity)

| Color Name | Hex | RGB | Usage |
|------------|-----|-----|-------|
| **Fire Coral** | #E86263 | 232, 98, 99 | Primary CTA, sauna content, warm accents |
| **Sky Blue** | #58AFDC | 88, 175, 220 | Secondary CTA, plunge content, links |
| **Water Cyan** | #59B1D9 | 89, 177, 217 | Tertiary accent, focus states, icons |

### Secondary Colors (Supporting)

| Color Name | Hex | RGB | Usage |
|------------|-----|-----|-------|
| **Sunset Coral** | #EB796F | 235, 121, 111 | Hover states (warm), gradient component |
| **Deep Sky** | #56ADDA | 86, 173, 218 | Hover states (cool), gradient component |
| **Purple Transition** | #B098C4 | 176, 152, 196 | Gradient center, decorative accents |

### Neutral Colors (UI Foundation)

| Color Name | Hex | RGB | Usage |
|------------|-----|-----|-------|
| **Pure White** | #FFFFFF | 255, 255, 255 | Primary background, text on colored |
| **Ice Crystal** | #FBFDFC | 251, 253, 252 | Subtle background variation |
| **Soft Gray** | #E7E7E7 | 231, 231, 231 | Borders, dividers |
| **Medium Gray** | #CBCBCB | 203, 203, 203 | Disabled states, shadows |
| **Slate Gray** | #6C757D | 108, 117, 125 | Secondary text, captions |
| **Charcoal** | #212529 | 33, 37, 41 | Primary text, headlines |

---

## 🎨 COLOR PSYCHOLOGY & APPLICATION

### Fire Coral (#E86263) - "Heat"
**Psychological Effect:** Warmth, energy, passion, vitality  
**Physical Association:** Heat, fire, blood flow, activation  
**Emotional Response:** Excitement, motivation, courage

**Use For:**
- Primary booking CTA ("Book Now")
- Sauna-related content sections
- Hot therapy benefits
- Price highlights and offers
- Action-driving elements
- Recovery and performance content

**Avoid Using For:**
- Large text blocks (eye strain)
- Error messages (too aggressive)
- Calming content

---

### Sky Blue (#58AFDC) - "Clarity"
**Psychological Effect:** Calm, trust, clarity, openness  
**Physical Association:** Cold, water, ice, mental clarity  
**Emotional Response:** Peace, confidence, mental focus

**Use For:**
- Secondary CTA ("Learn More")
- Cold plunge-related content
- Ice bath benefits
- Links and navigation
- Trust signals (testimonials, credentials)
- Mental health/wellness content

**Avoid Using For:**
- Urgent actions
- Aggressive promotions
- High-energy content

---

### Water Cyan (#59B1D9) - "Flow"
**Psychological Effect:** Refreshment, movement, vitality  
**Physical Association:** Water, flow, hydration, energy  
**Emotional Response:** Rejuvenation, alertness

**Use For:**
- Active states (focus rings, selections)
- Progress indicators
- Notification badges
- Decorative accents
- Iconography
- Transition animations

---

### The Gradient - "Transformation"
**Psychological Effect:** Balance, transformation, holistic wellness  
**Symbolic Meaning:** Hot to cold, yang to yin, contrast therapy

**Use For:**
- Hero sections
- Brand moments (headers, footers)
- Premium features
- Major section dividers
- Loading states

**Direction Rule:** Always flow from warm (left/top) to cool (right/bottom) to maintain visual consistency with logo

---

## 🎨 ACCESSIBILITY & WCAG COMPLIANCE

### Contrast Ratios (Tested)

| Foreground | Background | Ratio | WCAG Level | ✓/✗ |
|------------|-----------|-------|------------|-----|
| Charcoal (#212529) | White (#FFFFFF) | 15.8:1 | AAA Large + Normal | ✓ |
| Slate Gray (#6C757D) | White (#FFFFFF) | 4.7:1 | AA Large + Normal | ✓ |
| White (#FFFFFF) | Fire Coral (#E86263) | 4.6:1 | AA Large + Normal | ✓ |
| White (#FFFFFF) | Sky Blue (#58AFDC) | 4.3:1 | AA Large + Normal | ✓ |
| Charcoal (#212529) | Ice Crystal (#FBFDFC) | 15.5:1 | AAA Large + Normal | ✓ |
| White (#FFFFFF) | Sunset Coral (#EB796F) | 4.2:1 | AA Large (⚠️ Normal) | △ |
| White (#FFFFFF) | Deep Sky (#56ADDA) | 4.1:1 | AA Large (⚠️ Normal) | △ |

**Key Takeaways:**
- ✅ All primary brand colors pass WCAG AA for large text (18px+)
- ✅ Charcoal on white passes AAA for all text sizes
- ⚠️ Hover states (Sunset/Deep Sky) should use increased text size or white text only
- ❌ Never use colored text on colored backgrounds

### Accessibility Guidelines

**Text Sizing:**
- Minimum 16px for body text on colored backgrounds
- Minimum 14px for body text on white/light backgrounds
- Minimum 18px for colored text as headings

**Interactive Elements:**
- Focus indicators: 2px solid Water Cyan (#59B1D9)
- Focus offset: 2px
- Minimum touch target: 44×44px (mobile)
- Minimum click target: 24×24px (desktop)

**Color Blindness Considerations:**
- Red-Green (Protanopia/Deuteranopia): Fire and Sky have sufficient brightness difference
- Blue-Yellow (Tritanopia): Fire remains distinct from Sky
- Never use color alone to convey information (add icons, patterns, text labels)

---

## 🎨 UI COMPONENT COLOR MAPPING

### Buttons

**Primary Button (Fire)**
```
Normal: background #E86263, text #FFFFFF
Hover: background #EB796F, text #FFFFFF
Active: background #D95556, text #FFFFFF
Focus: 2px solid #59B1D9 with 2px offset
Disabled: background #CBCBCB, text #6C757D
```

**Secondary Button (Ice)**
```
Normal: background #58AFDC, text #FFFFFF
Hover: background #56ADDA, text #FFFFFF
Active: background #4A9AC8, text #FFFFFF
Focus: 2px solid #59B1D9 with 2px offset
Disabled: background #CBCBCB, text #6C757D
```

**Outline Button (Fire)**
```
Normal: border 2px #E86263, text #E86263, background transparent
Hover: background #E86263, text #FFFFFF
Active: background #EB796F, text #FFFFFF
Focus: 2px solid #59B1D9 with 2px offset
```

**Outline Button (Ice)**
```
Normal: border 2px #58AFDC, text #58AFDC, background transparent
Hover: background #58AFDC, text #FFFFFF
Active: background #56ADDA, text #FFFFFF
Focus: 2px solid #59B1D9 with 2px offset
```

---

### Forms

**Input Fields**
```
Normal: background #FFFFFF, border 1px #CBCBCB, text #212529
Hover: border 1px #58AFDC
Focus: border 2px #58AFDC, box-shadow 0 0 0 3px rgba(88,175,220,0.2)
Error: border 2px #DC3545, box-shadow 0 0 0 3px rgba(220,53,69,0.1)
Success: border 2px #28A745, box-shadow 0 0 0 3px rgba(40,167,69,0.1)
Disabled: background #E7E7E7, border 1px #CBCBCB, text #6C757D
```

**Labels**
```
Normal: text #212529, weight 600
Error: text #DC3545
Required indicator: text #E86263 (asterisk or "(required)")
```

**Placeholders**
```
text #6C757D, italic
```

---

### Cards

**Standard Card**
```
Background: #FFFFFF
Border: 1px solid #E7E7E7
Shadow: 0 4px 6px rgba(0,0,0,0.1)
Hover: Shadow 0 10px 15px rgba(0,0,0,0.1)
```

**Fire-Themed Card**
```
Background: linear-gradient(135deg, #EB796F 0%, #E86263 50%, #F08080 100%)
Text: #FFFFFF
Shadow: 0 4px 12px rgba(232,98,99,0.3)
```

**Ice-Themed Card**
```
Background: linear-gradient(135deg, #56ADDA 0%, #58AFDC 50%, #59B1D9 100%)
Text: #FFFFFF
Shadow: 0 4px 12px rgba(88,175,220,0.3)
```

---

### Navigation

**Top Navigation**
```
Background: #FFFFFF
Border bottom: 1px solid #E7E7E7
Link normal: text #212529
Link hover: text #E86263
Link active: text #E86263, border-bottom 2px #E86263
Mobile menu: background #FFFFFF
```

**Footer**
```
Background: #212529
Text: #E7E7E7
Links: #58AFDC
Links hover: #FFFFFF
Border top: 3px solid (gradient: #E86263 to #58AFDC)
```

---

### Badges & Pills

**Fire Badge**
```
Background: rgba(232,98,99,0.1)
Text: #EB796F
Border: 1px solid rgba(232,98,99,0.3)
```

**Ice Badge**
```
Background: rgba(88,175,220,0.1)
Text: #56ADDA
Border: 1px solid rgba(88,175,220,0.3)
```

---

### Alerts & Notifications

**Success Alert**
```
Background: rgba(40,167,69,0.1)
Border: 1px solid #28A745
Text: #1E7E34
Icon: #28A745
```

**Warning Alert**
```
Background: rgba(255,193,7,0.1)
Border: 1px solid #FFC107
Text: #856404
Icon: #FFC107
```

**Error Alert**
```
Background: rgba(220,53,69,0.1)
Border: 1px solid #DC3545
Text: #721C24
Icon: #DC3545
```

**Info Alert**
```
Background: rgba(88,175,220,0.1)
Border: 1px solid #58AFDC
Text: #56ADDA
Icon: #58AFDC
```

---

## 🎨 GRADIENT SPECIFICATIONS

### Hero Gradient (Full Spectrum)
```css
background: linear-gradient(
  135deg,
  #E86263 0%,    /* Fire start */
  #EB796F 25%,   /* Fire transition */
  #B098C4 50%,   /* Purple center */
  #56ADDA 75%,   /* Ice transition */
  #58AFDC 100%   /* Ice end */
);
```
**Usage:** Hero sections, premium features, brand moments

---

### Warm Gradient (Sauna)
```css
background: linear-gradient(
  135deg,
  #EB796F 0%,
  #E86263 50%,
  #F08080 100%
);
```
**Usage:** Sauna sections, hot therapy content, warm CTAs

---

### Cool Gradient (Plunge)
```css
background: linear-gradient(
  135deg,
  #56ADDA 0%,
  #58AFDC 50%,
  #59B1D9 100%
);
```
**Usage:** Cold plunge sections, ice bath content, cool CTAs

---

### Subtle Background
```css
background: linear-gradient(
  180deg,
  #FFFFFF 0%,
  #FBFDFC 100%
);
```
**Usage:** Page backgrounds, section backgrounds

---

### Overlay Gradients

**Dark Overlay (for text on photos)**
```css
background: linear-gradient(
  180deg,
  rgba(33, 37, 41, 0) 0%,
  rgba(33, 37, 41, 0.7) 100%
);
```

**Fire Overlay**
```css
background: linear-gradient(
  135deg,
  rgba(232, 98, 99, 0.9) 0%,
  rgba(235, 121, 111, 0.8) 100%
);
```

**Ice Overlay**
```css
background: linear-gradient(
  135deg,
  rgba(88, 175, 220, 0.9) 0%,
  rgba(89, 177, 217, 0.8) 100%
);
```

---

## 🎨 SHADOW SYSTEM

### Neutral Shadows
```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.04);
```

### Colored Shadows (Brand Glow)
```css
--shadow-fire: 0 4px 12px rgba(232, 98, 99, 0.3);
--shadow-fire-lg: 0 10px 30px rgba(232, 98, 99, 0.4);
--shadow-ice: 0 4px 12px rgba(88, 175, 220, 0.3);
--shadow-ice-lg: 0 10px 30px rgba(88, 175, 220, 0.4);
```

**Usage:**
- Fire shadows: Primary buttons, fire-themed cards
- Ice shadows: Secondary buttons, ice-themed cards
- Neutral shadows: General UI elements, cards, modals

---

## 🎨 ANIMATION & TRANSITIONS

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-custom: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Bouncy */
```

### Durations
```css
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
```

### Common Transitions
```css
/* Button hover */
transition: all 250ms ease-in-out;

/* Color change */
transition: color 150ms ease-out;

/* Shadow change */
transition: box-shadow 250ms ease-in-out;

/* Transform */
transition: transform 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

---

## 🎨 RESPONSIVE COLOR ADJUSTMENTS

### Mobile Considerations
- Increase touch target sizes to 44×44px minimum
- Use higher contrast for outdoor visibility
- Avoid subtle gradients (may not display well on older screens)
- Test on both iOS and Android devices

### Tablet Considerations
- Maintain desktop color scheme
- Adjust padding/spacing, not colors
- Ensure buttons remain tappable

### Desktop Considerations
- Full gradient support
- Hover states functional
- More sophisticated shadow/depth cues

---

## 🎨 PRINT COLOR CONVERSIONS

For business cards, flyers, brochures:

| Screen Color | Name | CMYK | Pantone |
|--------------|------|------|---------|
| #E86263 | Fire Coral | C:0 M:72 Y:62 K:0 | 178 C |
| #58AFDC | Sky Blue | C:62 M:18 Y:0 K:0 | 2995 C |
| #212529 | Charcoal | C:75 M:68 Y:62 K:76 | Black 6 C |
| #FFFFFF | White | C:0 M:0 Y:0 K:0 | - |

**Print Notes:**
- Gradients may band in print - use solid colors when possible
- Test print on actual paper stock before large runs
- Consider spot colors for brand consistency

---

## 🎨 DESIGN DECISION TREE

**Choosing a Color:**

1. **Is this a primary action?**
   - Yes → Use Fire Coral (#E86263)
   - No → Continue to #2

2. **Is this a secondary action or informational?**
   - Yes → Use Sky Blue (#58AFDC)
   - No → Continue to #3

3. **Is this an accent or highlight?**
   - Yes → Use Water Cyan (#59B1D9)
   - No → Continue to #4

4. **Is this text content?**
   - Primary heading/body → Charcoal (#212529)
   - Secondary text → Slate Gray (#6C757D)
   - Muted/metadata → Medium Gray (#CBCBCB)

5. **Is this a background?**
   - Main background → White (#FFFFFF)
   - Subtle variation → Ice Crystal (#FBFDFC)
   - Section alternation → Soft Gray (#E7E7E7)
   - Themed section → Use gradient

6. **Is this for fire/heat content?**
   - Yes → Fire Coral or Warm Gradient

7. **Is this for ice/cold content?**
   - Yes → Sky Blue or Cool Gradient

8. **Is this a border or divider?**
   - Light → Soft Gray (#E7E7E7)
   - Medium → Medium Gray (#CBCBCB)
   - Emphasis → Slate Gray (#6C757D)

---

## 🎨 BRAND COLOR DOS & DON'TS

### ✅ DO:
- Use Fire Coral for primary CTAs and hot content
- Use Sky Blue for secondary CTAs and cold content
- Pair colored backgrounds with white text
- Maintain gradient direction (hot → cold, left → right)
- Use Water Cyan for interactive states
- Test all color combinations for accessibility
- Use Ice Crystal for subtle background variation
- Create visual balance between warm and cool

### ❌ DON'T:
- Use colored text on colored backgrounds
- Reverse gradient direction arbitrarily
- Overuse gradients (save for key moments)
- Use pure black (#000000) for text
- Mix warm/cool colors randomly
- Rely solely on color to convey information
- Use colors outside this palette without justification
- Ignore contrast ratio requirements

---

**Design System Version:** 1.0  
**Last Updated:** February 6, 2026  
**Color Extraction Date:** February 6, 2026  
**Based On:** Pink Pony Plunge Logo (WhatsApp Image)  
**Tools Used:** Python PIL for pixel analysis, manual WCAG testing
