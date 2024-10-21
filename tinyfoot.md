---
layout: default
permalink: /tinyfoot
description: Footnotes are getting simpler.
---

# Tinyfoot

With the recent plugins, the way we perceive footnotes has changed. Footnotes have become this non-intrusive way to  add extra information to a text without breaking the flow. They are no longer relegated to the bottom of  the page, but instead, they are displayed inline, allowing the reader to quickly access the additional information.

With Tinyfoot, we take this idea forward by adding many more customization features to allow users to create  the perfect footnote experience for their content. Imagination is the limit!

Building from the success of Littlefoot, we have added these key features to enhance the user experience:
- **Highlights** -  Add a highlight to the footnote text to make it stand out.
- **Copy-button** - A simple yet useful feature to  copy the footnote text.

With many more features in the pipeline, we are excited to see how users will utilize Tinyfoot to create engaging content.


Read more about our take on the predecessor libraries here
- [Bigfoot](./bigfoot)
- [Littlefoot](./littlefoot)

# Links for demos
- [BigFoot demo](https://8xengineers.github.io/bigfoot#our-modifications)
- [Littlefoot demo](https://8xengineers.github.io/littlefoot#code-modifications)

# Our Modifications

- Refactored the code to map individual function calls for better modularity.
- Simplified various parts of the code to improve readability and overall performance.
- Removed redundant files, such as the element file, to streamline the codebase.
- Introduced a new highlight feature for enhanced footnote visibility and to mark important notes.
- Added a copy button feature, which allows users to easily copy the footnote content. 

# Demo of Tinyfoot
<article>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. In cursus turpis massa tincidunt dui. Tortor at auctor urna nunc id cursus metus. Neque
            ornare aenean euismod elementum nisi quis eleifend quam. Consectetur adipiscing elit duis tristique.
            Sagittis vitae et leo duis ut diam. Morbi blandit cursus risus at ultrices. <sup id="fnref:1"><a
                    href="#fn:1" class="footnote">[1]</a></sup> Vulputate enim nulla aliquet porttitor lacus. Aliquam
            ultrices
            sagittis orci a scelerisque. Placerat in egestas erat imperdiet sed euismod nisi porta. In hac habitasse
            platea dictumst. Proin fermentum leo vel orci porta non pulvinar. <sup id="fnref:2"><a href="#fn:2"
                    class="footnote">[2]</a></sup>
        </p>
        <aside class="footnotes">
            <hr>
            <ol>
                <li id="fn:1">
                    <p>This is footnote number 1.
                        <a href="#fnref:1" class="reversefootnote">&#160;&#8617;</a>
                    </p>
                </li>
                <li id="fn:2">
                    <p>This is footnote number 2.
                        <a href="#fnref:2" class="reversefootnote">&#160;&#8617;</a>
                    </p>
                </li>
            </ol>
        </aside>
    </article>


<script>
    // Initialize tinyfoot
    document.addEventListener("DOMContentLoaded", function () {
        tinyfoot.default();
    });
</script>