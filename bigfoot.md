---
layout: default
title: Bigfoot (no, not the creature that is very real)
description: Our take on the original library
permalink: /bigfoot
---

# Bigfoot.js Overview

## Introduction
[**Bigfoot.js**](https://bigfootjs.com) is a lightweight JavaScript library designed to enhance the handling of footnotes in web applications. By enabling users to view footnotes through interactive, clickable buttons, Bigfoot.js significantly improves both readability and aesthetic appeal.

## Design Decisions
Developed over 9 years ago, Bigfoot relies on **[Coffeescript]coffeesc…)** and **[SCSS](https://sass-lang.com)** for its core functionality. These files generate the necessary CSS and JavaScript code for the library. It must be noted that these pipelines have now been replaced with more convenient and modern tools. For example, [Littlefoot](http://littlefoot.js.org/) uses Typescript to build the required files and can be built using [`npm`](https://www.npmjs.com).

Furthermore, we note the following points -
- **Dependency on jQuery**: Bigfoot.js leverages jQuery for efficient DOM manipulation, event handling, and traversal.
- **Customizability**: The library allows for extensive customization through CSS/SCSS overrides, enabling users to tailor the appearance of footnotes to fit their specific design needs.

The main scripts for the plugin have been written in a _single file_ (not a great decision for modularity) and have been [heavily documented](). 
## Code Organization and Quality
- **Modular Layout**: Bigfoot.js is organized in a modular structure, facilitating ease of interpretation and maintenance.
- **Consistent Naming Conventions**: The well-maintained naming conventions within the codebase help users understand the contents and purpose of each file.
- **Cross-Browser Compatibility**: The library is designed to function seamlessly across various web browsers, ensuring a wide user base can utilize its features.
- **Aesthetic Design**: The combination of CSS and JavaScript provides a consistent and visually pleasing style for footnote display.

## Language Usage
- **JavaScript**: Utilized for enabling footnotes to appear upon user interaction (button clicks).
- **HTML**: Used for positioning footnotes alongside their references on the webpage, enhancing interactive functionality.
- **CSS**: Controls visual attributes such as fonts, spacing, colors, and styles for the footnotes.
- **SCSS**: Organizes and creates reusable styles for footnotes, which are compiled into CSS to meet browser requirements.
- **jQuery**: This JavaScript library facilitates HTML element manipulation, event management, and animations, playing a crucial role in footnote display and content updates.

## Repository Organization and Quality
The root folder of Bigfoot.js contains the following files:
- **`README.md`**: Provides essential information about the Bigfoot.js library, including installation instructions and relevant details for users.
- **`bower.json`**: Manages library dependencies using Bower, specifying the required jQuery version and containing project metadata.
- **`readme-dev.md`**: Offers guidance for developers on how to contribute to or modify the Bigfoot.js library.
- **`disc` folder**: Contains the following files:
  - **`bigfoot.js`**: The source code for the library.
  - **`bigfoot.min.js`**: A minified version of `bigfoot.js`, optimized by removing whitespace and comments to reduce file size.
  - **`bigfoot-default.css`**: Contains the default styles for footnote display on webpages.
  - **`bigfoot-default.scss`**: The SCSS version of the default CSS file, allowing users to utilize SASS features like variables and nesting for better style customization.
- **`src` folder**: Houses the source files for CoffeeScript and SCSS, which are compiled into JavaScript and CSS files using Grunt.

## Tool Quality
Bigfoot.js employs Grunt for automating repetitive tasks, including:
- **Compiling CoffeeScript**: Converts `bigfoot.coffee` into JavaScript (`bigfoot.js`).
- **Compiling SCSS**: Transforms SCSS files into CSS, mapping source files to their compiled counterparts.
- **Concatenation**: Combines multiple SCSS files, including base styles and variants.
- **Autoprefixing**: Automatically adds vendor prefixes to the compiled CSS for broader compatibility.
- **Minification**: Uses Uglify to compress the compiled JavaScript (`bigfoot.js`) into a smaller file (`bigfoot.min.js`), enhancing performance.

### Modernization Considerations
- **Dependency Management**: Currently utilizing Bower for dependency management, specifically for jQuery. However, Bower has been deprecated and is no longer maintained. Transitioning to more modern tools like NPM or Yarn for dependency management is advisable.
- **`bower.json`**: Specifies a dependency on jQuery version 1.8.0 or higher and organizes project metadata, defining the entry point as `bigfoot.coffee`. It also includes an 'ignore' section to prevent unnecessary files from being installed.

### Code Modifications 
```html
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test Bigfoot Experiment</title>
    <link rel="stylesheet" href="bigfoot-default_New.css"> <!-- Link to Bigfoot CSS -->
    <!-- Include jQuery 1.8.3 -->
    <script src="https://code.jquery.com/jquery-1.8.3.min.js"></script>
</head>
<body>
    <h1>Bigfoot</h1>

    <!-- Footnote reference in the text -->
    <p>The message is hidden in the footnote.<sup id="fnref:1"><a href="#fn:1" rel="footnote">"FootNote"</a></sup></p>

    <!-- Hidden footnote content -->
    <div style="display:none;">
        <ol>
            <li id="fn:1">
                <p>CSE 210 is an interesting course. <a href="#fnref:1" rev="footnote">↩</a></p>
            </li>
        </ol>
    </div>

    <!-- Include Bigfoot.js -->
    <script src="bigfoot_New.js"></script>

    <script type="text/javascript">
        // Initialize Bigfoot.js with a custom hoverDelay
        $(document).ready(function() {
            $.bigfoot({
                popoverCreateDelay: 5000,
                hoverDelay:500

            });

            setTimeout(function() {
                $('.bigfoot-footnote__button').text('FT');
             }, 100);
        });
    </script>
</body>
</html>
```

## Conclusion
Bigfoot.js presents a well-structured and modular approach to footnote management in web applications. While it effectively serves its purpose, transitioning to modern tools for dependency management and build processes could enhance its performance and maintainability.

