
## CSS

### Cascading Style Sheets

---

## Learning Objectives

Understanding:

* The different ways of selecting elements
* How specificity affects styling
* What is the box model

---

## Lecture Outline

* Selectors
* Specificity
* Box Model
* CSS reset
* First Kahoot!

---

## HTML Refresher

* Hypertext Markup Language
* Structure

Note:
* This is like the bones of your webpage
* It would be a little boring if we couldn't style this

---

### How to think about LEARNING CSS

* Just gotta do it

Note:
* This lecture goes through lots of demo, but you learn CSS by doing it!
* It takes time.

---

## CSS

- Cascading Style Sheets
- Design

Note:
* If HTML is bones, this is like the skeleton's clothes (Javascript is what makes a webpage come alive)
* CSS _is_ important
* The only way to get good is to practice and experiment

---

##  Cascading Style Sheets
  * Cascading allows several style sheets to influence the presentation of a document.
  * CSS defines a priority scheme that resolves conflicts (specificity).
* Allows us to separate _content_ from _presentation_

---

### Structure of CSS

```css
selectors {
	property: value;
}
```

---

### Selectors

* Patterns used to select the elements you want to style

---

### Basic Selectors

* Type: `p`
* Class: `.some-class-name`
* ID: `#some-id`

```html
<p>A paragraph</p>
<p class="some-class-name">Classy</p>
<p id="some-id">What's the big idea?</p>
```

---

### Common Selectors

* Descendant: `a b`
* Selects all `b` inside of `a`

```css
div p {
	background-color: blue;
}
```
```html
<div>
  <p>Will be blue</p>
  <section>
    <p>Will also be blue<p>
  </section>
</div>
```

---

### Common Selectors

* Child: `a > b`
* Selects all `b` that are a direct child of `a`

```css
div > p {
	background-color: red;
}
```
```html
<div>
  <p>Will be red</p>
  <section>
    <p>Will not be red</p>
  </section>
  <span> HOWDY </span>
  <p>P TAG SIBLING </p>
</div>
```
---

### Other Common Selectors

* Comma-separated: `a, h1, p`
* Adjacent Sibling: `a + b`
* General Sibling: `a ~ b`
* First Child: `p:first-child`
* Last Child: `p:last-child`
* Nth-Child: `p:nth-child(2)`
* `:hover`, `:active`, `:focus`
* Attributes: `input[type="text"]`

---

### Distinction

* `p.highlight` vs `p .highlight`
* `h1#title` vs `h1 #title`

These are _different_ selector patterns.

---

### Selector References
* [List of Selectors](https://www.w3schools.com/cssref/css_selectors.asp)
* [CSS Diner](https://flukeout.github.io/)

---

### Specificity

* Determined by how specific a selection is
* CSS Specificity scoring
* Determines which rules apply
* General practice: avoid writing overly-specific rules

---

### Specificity

Least Specific

* Universal
* Elements/Psuedo-elements
* Classes/Attributes/Pseudo-classes
* IDs
* Inline
* Important

Most Specific

---

### Universal

```css
*
```

Has a score of `(0,0,0,0)`

---

### Elements/Psuedo-elements

```css
h1, div, ::after
```

Have a score of `(0,0,0,1)`

---

### Classes/Attributes/Pseudo-classes

```css
.cats, [type='text'], :hover
```

Have a score of `(0,0,1,0)`

---

### IDs

```css
#cool-cat
```

Have a score of `(0,1,0,0)`

---

### Inline

```html
<h1 style="color: red;">Red</h1>
```

Have a score of `(1,0,0,0)`

---

### `!important`

```css
h1 {
	color: red !important;
}
```

Important Note: avoid this as is _highly_ specific

---

## Examples!

```css
	div ~ p {} #(0,0,0,2)
  
  div#sidebar p {} #(0,1,0,2)
  
  div#sidebar p.bio {} #(0,1,1,2)
```

---

### Specificity (Again!)

Least Specific

* Universal
* Elements/Psuedo-elements
* Classes/Attributes/Pseudo-classes
* IDs
* Inline
* Important

Most Specific

---

### Selectors Demo

---

### Box Model

* It's all just boxes

![box-model](https://s3.amazonaws.com/viking_education/web_development/web_app_eng/css_box_model_chrome.png)

---

### content-box vs border-box

* content-box: width and height are set for the content.
	* padding and border added after
* border-box: width and height are set for the entire box
  * padding and border are included in the calculation

---

### Box Model Demo + Dev Tools (AKA UNLIMITED POWER) 

![power](https://media3.giphy.com/media/zCv1NuGumldXa/200.gif)

---

### CSS Reset

+ A good practice!
+ Removes styling given by browser
* Make sure to load this css file first
+ DEMO

---

### For today's project use [Ultimate CSS Help Desk](https://www.google.com/)

---

### CSS Resources

+ [MDN CSS documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
+ [W3C CSS Specifications](https://www.w3.org/Style/CSS/specs.en.html)

---

# [Kahoot](https://play.kahoot.it/v2/?quizId=5455d924-2ac5-4ee9-a331-56e1e3bf7e7d)

