LCP Bible:
Hero image is the largest content to load.

TTFB - Back end infrastructure (early parts of the waterfall)
Priority - the easiest - client - just switching the order
Priority on an Asset
Slow Render

Tools:
- Speed Curve
- Page Speed Insight
- Google Search Console
- Google Analytics
- Lighthouse

Spikes:
- Spike 1: Looking at the waterfall and deep diving on how EU TT works

- Spike 2: Priority

- Spike 3: TTFB

- Spike 4: Priority on an Asset:
Can we load the image straight away? - would we move this metric. Impacts on FID?

The current waterfall:

Show blurred low res hero image 
Download JS
Lazy load the image
Now the site is ready :D Good experience for user
High res image - LCP is finished

Ideal:
Show blurred low res hero image 
High res image - LCP is finished
Download JS
Now the site is ready

Spike 5: Priority on an Asset:
Pre-load. Force the browser to download an image that it doesn't think it needs yet. 
Even though it's not in the page


How to decide which to implement?
- Maintenance - Devs may not understand why. Simplify.
- Least effort and most impact

Refinements: 
- Do small Spikes and continue
