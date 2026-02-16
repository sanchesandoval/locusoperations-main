
## Summary
Update the website metadata in `index.html` to remove all references to "Lovable" and ensure the SEO description, social media tags, and branding are consistent with Locus. This will help search engines like Google update their cache with the correct information (replacing the old "AI front desk assistant" text).

## Proposed Changes

### 1. `index.html` Cleanup
- **Update Author**: Change `<meta name="author" content="Lovable" />` to `<meta name="author" content="Locus" />`.
- **Update Social Tags**: Remove the `@Lovable` twitter handle and update Open Graph (OG) image URLs to point to a local asset if appropriate, or simply clean up the tags.
- **Remove TODO Comments**: Clean up the "TODO" comments left over from the project template.
- **Standardize Metadata**: Ensure the description "Turn your ad spend into predictable revenue growth." is used consistently across both standard meta tags and social tags (OG/Twitter).

### 2. Branding Alignment
- Ensure all meta titles use "Locus - AI Revenue Ops" or "Locus OS" as preferred in project memory.

## Technical Details
- **SEO Description**: The reason Google shows "AI front desk assistant" is due to historical indexing. By updating these tags and ensuring the site is published, we send the "correct" data to Google's crawlers.
- **Favicon**: The favicon in the code is already set to a custom image. If search results still show the Lovable icon, it is a caching issue on Google's side.
- **Social Images**: The current OG/Twitter image URLs point to a temporary Lovable preview. While these work, they are less professional than hosting a dedicated social sharing image. I will update them to use the main logo or a generic representative image from the project assets.

### Verification Steps
1. Review the updated `index.html` source code.
2. After implementing, you MUST click **Update** in the Publish dialog to push these changes to your live site.
3. Use a tool like the "Google Search Console" or simply wait for Google to re-crawl the site (this can take several days or even weeks for the cache and favicon to update globally).
