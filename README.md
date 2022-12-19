# site
Website. Random stuff.

## Credits
* I use [Hugo](https://gohugo.io/) to generate the website.
* I tried to imitate the [Gruvbox](https://github.com/morhetz/gruvbox) color scheme with my website.
* Last but not least, I use [this theme](https://github.com/rhazdon/hugo-theme-hello-friend-ng).

## Theme 
I made the following modifications to the theme
* Updated colors in `assets/scss/_variables.scss`
* Updated logo in `layouts/partials/logo.html`
* Updated footer in `layouts/partials/footer.html`
* Fixed code colors in `assets/scss/_main.scss`
* Fixed flickering issue whenever changing to light mode by moving code out of `assets/js/main.js` to `layouts/partials/head.html`
* Added mathjax code to `layouts/partials/javascript.html`
* Added a `notes.html` template 
* Moved the `post-info` properties such as "tags" and "gitinfo" to the top of the page for posts and notes
