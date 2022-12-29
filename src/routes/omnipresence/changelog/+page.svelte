<script>
    import PageHeading from "$lib/components/PageHeading.svelte";
</script>

<PageHeading title="changelog" subtitle="a 21st-century time machine" />

<article>
    <div class="box animate-enter" style="--stagger: 1">
        <p>
            A minimal changelog page. Updates are listed
            chronologically, from latest to earliest. For an extensive commit
            history, check out the
            <a href="https://github.com/fwyr/website"
                >GitHub repository for this website.</a
            >
        </p>
    </div>
    <div class="box animate-enter" style="--stagger: 2">
        <h2>2022</h2>
        <h3>December 2022</h3>
        <p><strong>29th.</strong></p>
        <ul>
            <li>Changed styling of logo animation to use more aesthetically pleasing colours.</li>
            <li>Edited about page to include achievements.</li>
        </ul>
        <p><strong>27th.</strong></p>
        <ul>
            <li>Further integration of SvelteKit 1.0.
                <ul>
                    <li>Created +layout.js.</li>
                    <li>Tweaked Header component.</li>
                    <li>Added Footer component (unused).</li>
                    <li>Removed Article component.</li>
                    <li>Removed mdsvex.</li>
                </ul>
            </li>
            <li>Major styling changes:
                <ul>
                    <li>Changed from plain CSS to SASS.</li>
                    <li>Used the Rose Pine theme. Changed colours of everything.</li>
                    <li>Added cards/boxes for each section in main page content.</li>
                    <li>Made pages wider.</li>
                    <li>Added staggered fade-in and fade-out page transitions using CSS and the built-in Svelte transition directive.</li>
                    <li>Fixed font sizes.</li>
                    <li>Styled scrollbar to match page theme.</li>
                </ul>
            </li>

        </ul>
        <p>
            <strong>25th.</strong>
        </p>
        <ul>
            <li>Merry Christmas!</li>
            <li>Performed a major rehaul of website infrastructure.
                Migrated from Jekyll to SvelteKit 1.0. 
                Still a work in progress, some features have been removed for now.
            </li>
        </ul>
        <h3>November 2022</h3>
        <p><strong>23rd.</strong></p>
        <ul>
            <li>Edited typos.</li>
        </ul>
        <p><strong>22nd.</strong></p>
        <ul>
            <li>Added "Stronger Within" to works section in 'me' page.</li>
            <li>More updates to easter egg.</li>
        </ul>
        <p><strong>21st.</strong></p>
        <ul>
            <li>Some minor CNAME changes.</li>
        </ul>
        <p><strong>20th.</strong></p>
        <ul>
            <li>Added more content to the index page.</li>
            <li>Bumped nokogiri from 1.13.8 to 1.13.9.</li>
            <li>Made some minor edits in the first couple sections of the 'me' page.
                Updated projects section to include REALISER, an AI project that I had worked on.
                Put together some CSS to make a glassmorphism card along with vanilla-tilt.js.
            </li>
            <li>Changed email address.</li>
            <li>Created this changelog page.</li>
        </ul>
        <h3>October 2022</h3>
        <p><strong>20th.</strong></p>
        <ul>
            <li>Changed the table of contents font to Roboto Mono.
                This is because the numbers on the table of contents 
                would not align vertically when using certain sans-serif fonts.</li>
            <li>Fixed GitHub link.</li>
        </ul>
        <h3>September 2022</h3>
        <p><strong>17th.</strong></p>
        <ul>
            <li>Finished CSS rehaul. Removed unused CSS.</li>
        </ul>
        <p><strong>16th.</strong></p>
        <ul>
            <li>Updated CSS for table of contents.</li>
        </ul>
        <p><strong>15th.</strong></p>
        <ul>
            <li>Updates to easter egg.</li>
        </ul>
        <p><strong>14th.</strong></p>
        <ul>
            <li>Minor edits to 'me' page, mostly just link fixes.</li>
        </ul>
        <p><strong>13th.</strong></p>
        <ul>
            <li>Starting CSS redesign. Thoroughly reviewed styling.</li>
            <li>Fixed issue with logo not redirecting to the index page.</li>
            <li>Updated easter egg.</li>
        </ul>
        <p><strong>10th.</strong></p>
        <ul>
            <li>Implemented CSS variables.</li>
            <li>Added an easter egg.</li>
        </ul>
        <p><strong>9th.</strong></p>
        <ul>
            <li>Attempted to tweak the styling of table of contents.</li>
            <li>Added an abstract for some pages.</li>
            <li>Updated GitHub workflow so that GitHub Pages
                could host the website using prebuilt files.
                Commits were made to fix Ruby bundling issues.
            </li>
        </ul>
        <p><strong>8th.</strong></p>
        <ul>
            <li>Added SEO.</li>
        </ul>
        <p><strong>7th.</strong></p>
        <ul>
            <li>Resumed development of website following hiatus since January.</li>
            <li>I created a new GitHub account in May, so I had to transfer 
                this repository between accounts.
            </li>
            <li>Fixes regarding domain names.</li>
            <li>Updated about page and internal links to reflect current online accounts.</li>
            <li>Did a lot of minor cleaning and polishing. Clearing dust and cobwebs.</li>
            <li>Added an essay about social issues in Singapore.</li>
        </ul>
        <h3>January 2022.</h3>
        <p><strong>2nd.</strong></p>
        <ul>
            <li>Minor edits to about page.</li>
            <li>Mentally distressed around this period,
                and thus lost interest in development for 
                personal reasons. Went on a 9-month hiatus.
            </li>
        </ul>
    </div>
    <div class="box animate-enter" style="--stagger: 3">
        <h2>2021</h2>
        <h3>December 2021</h3>
        <p><strong>31st.</strong></p>
        <ul>
            <li>Happy New Year's Eve!</li>
            <li>Configured site titles,
                heaers, and metadata to reflect
                domain name changes.
            </li>
        </ul>
        <p><strong>30th.</strong></p>
        <ul>
            <li>Fixed internal links to reflect domain name changes.</li>
            <li>Minor tweaks to about page.</li>
        </ul>
        <p><strong>29th.</strong></p>
        <ul>
            <li>Updated CNAME.</li>
            <li>Changed domain name from lolcringe.co (why) to ablipintime.co.</li>
        </ul>
        <p><strong>23th.</strong></p>
        <ul>
            <li>Minor edits to README.md.</li>
            <li>Fixed MathJax configurations.</li>
        </ul>
        <p><strong>18th.</strong></p>
        <ul>
            <li>Minor edits to README.md.</li>
        </ul>
        <p><strong>17th.</strong></p>
        <ul>
            <li>Completely deleted some pages.</li>
            <li>Minor edits to about page, robots.txt, and README.</li>
            <li>Updated MathJax configurations.</li>
        </ul>
        <p><strong>9th.</strong></p>
        <ul>
            <li>Changed GitHub link to reflect new URL.</li>
        </ul>
        <p><strong>7th.</strong></p>
        <ul>
            <li>Finished some notes on time complexity.</li>
        </ul>
        <p><strong>3rd.</strong></p>
        <ul>
            <li>Added MathJax.</li>
            <li>Fixed issues with header.</li>
            <li>Created some notes on data structures.</li>
            <li>Fixed dead links.</li>
            <li>Updated edu page.</li>
        </ul>
        <p><strong>2nd.</strong></p>
        <ul>
            <li>Added main pages.</li>
            <li>Updated 404 page.</li>
            <li>Updated CSS files.</li>
            <li>Minor edits and polishes.</li>
        </ul>
        <p><strong>1st.</strong></p>
        <ul>
            <li>Minor changes to Jekyll configurations.</li>
            <li>Updated CSS files.</li>
            <li>Finished about page.</li>
        </ul>
        <h3>November 2021</h3>
        <p><strong>4th.</strong></p>
        <ul>
            <li>Where it all starts.</li>
        </ul>
    </div>
</article>
