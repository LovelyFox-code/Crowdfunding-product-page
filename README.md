# Frontend Mentor - Crowdfunding product page

![Design preview for the Crowdfunding product page coding challenge](./design/desktop-preview.jpg)

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**HTML, CSS and JavaScript.**

## The challenge

Your should be able to:

- Responsive layout depending on device's screen size
- Hover states for interactive elements

## Screenshots

![](./src/assets/images/screenshots/Crowdfunding%20product%20page.png)
![](./src/assets/images/screenshots/Crowdfunding%20product%20page%20(1).png)

### Links
-
## My process

### Built with

- Semantic HTML% markup
- SASS custom properties
- Flexbox
- Mobile-first workflow
- Implement BEM metodologies
- Use JavaScript

### What I learned

```SCSS
Placeholder selector
.btn-active {
  @extend %btn;
  background: $moderateCyan;
  border: none;
  color: $white;

  &:hover {
    background: $darkCyan;
  }
}
```
```SCSS
extend method and fallback function clamp()
.modal__success {
  @extend .modal__content;
  display: none;
  text-align: center;
  bottom: 125rem;
  width: clamp(17.4375rem, 31.25rem, 60%);
  margin-top: 20%;
}
```
```SCSS
parent selector
.section-menu__item &{
    padding: 15px 32px;
}
```


### Continued development

- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked


## Author

- Website - [Alina](#)
- Frontend Mentor - [@frontentmentor](https://www.frontendmentor.io/profile/yourusername)