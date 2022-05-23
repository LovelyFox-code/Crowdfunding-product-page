# Crowdfunding product page

### Converting Figma design with HTML / SASS / Vanilla JS. 
My learning goals were: 
- Pixel-pretty-close implementation;
- Working with responsive design;
- Setting up my build process

## Way of working

Frontend mentor is a platform where you can acces to professional designs. So I took one from the `junior` section and implemented in HTML / CSS initially.
Then, since I was doing SASS course on LinkedIn, I desided to practice my studies on it. 
Add a build proccess to project envoirment.
Commited my changes by using git, but I didn't use branches yet. 

![Design preview](./design/desktop-preview.jpg)

[Design on Figma](https://www.figma.com/file/f0ydxeaYnkeYh2k5AZ1uDQ/crowdfunding-product-page?node-id=0%3A1)

**HTML, SASS and JavaScript.**

## The challenge were to create

- Responsive layout depending on device's screen size
- Hover states for interactive elements
- Selection of which pledge to make
- Updated progress bar and total money raised based on their pledge total after confirming a pledge
- Number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

## Screenshots

![](./src/assets/images/screenshots/Crowdfunding%20product%20page.png)
![](./src/assets/images/screenshots/Crowdfunding%20product%20page%20(1).png =250x)

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


