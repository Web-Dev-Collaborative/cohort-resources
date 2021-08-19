

### CSS Positioning

---

## Lecture Objectives

* Understand position property
* Make a dropdown menu

---

## Lecture Outline

* Position property
* Position demo
* Dropdown demo

---

### Position
+ static: default
+ relative:
  + relative to its normal position(works in tandem with top:, bottom:, etc.)
  + other elements will not fill in the space created by moving a relative element
+ absolute:
  + relative to nearest positioned ancestor
  + uses the document body if no positioned ancestors
+ fixed:
  + relative to the viewport, stays in same place even during scroll
  + still affected by top:, right:, etc.
+ sticky:
  + positioned based on the user's scroll position
  + toggles between relative and fixed depending on scroll position
  + will stay where it is placed until you start scrolling and then it just hangs out in one place

---

### Position: Static

* Default positioning and flow of elements
* not affected by the top, bottom, left, and right properties.
* things flow around each other
* things take up space

---

### Position: Relative

* _Relative_ to where it would be
* Think of it as _visually_ moving vs the element _physically_ moving on the page
* Flow remains the same
* Uses top, bottom, left, right properties

---

### Position: Absolute

* Positions relative to nearest _non-static_ ancestor
* Think of it as both _visually_ moving and _physically_ moving out of the page
* No longer takes up space in page
* Uses the document if everything is static
* Also uses top, bottom, left, right properties

---

### Position: Fixed

* Same as absolute, but relative to the viewport
* Good for navbars

---
5 minute Break
---

## Position Demo


---

### 5 minute Break

---

## Dropdowns

* Hover effect on an element displays a "dropdown" list of elements
* In reality, elements are merely hidden until the hover effect changes `display: none` to `display: block`
* The list of elements appears on top of the rest of the page due to `position: absolute`

Note:
* Dropdowns are important to almost every webpage, but can be tricky to figure out how to implement

---

## CSS Friends

[Live Solution!](http://appacademy.github.io/css-friends/solution/05-cats.html)

+ Show the solution and demonstrate how the notifications dropdown behaves 
+ Open inspect and use the tool that applies `:hov` to show them that display changes from `none` to `block` when the user hovers over it.

---

## Dropdowns Demo

---

### Dropdown





---

## All done! Questions?