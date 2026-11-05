CELLARTGEN WEBSITE + SAME-STYLE ADMIN PANEL
===========================================

This package is based on the existing Cellartgen website supplied by the user.
It includes the refreshed green/gold admin layout, animated login, dashboard,
Home Page Sections editor, Pages, Products/Our Expertise, Media, Enquiries,
and Website Settings screens.

INSTALLATION (Windows / VS Code)
1. Extract the ZIP.
2. Open the Cellartgen folder in VS Code.
3. Copy .env.example and rename the copy to .env.
4. Fill in your own MongoDB connection string, ADMIN_USERNAME and ADMIN_PASSWORD.
   Do not share the .env file or upload it to GitHub.
5. Open Terminal in the Cellartgen folder and run:
      npm install
      npm start
6. Open the website: http://localhost:5001
7. Open Admin Panel: http://localhost:5001/admin

CMS NOTES
- The first server start creates draft records for the homepage sections in the
  MongoDB `pages` collection if matching section records do not already exist.
- In Home Sections, edit each section record. Keep Page Key as index.html.
- CSS Selector identifies the exact text/image element to update, e.g.
  #homeHeroHeading or #homeHeroDescription.
- Set Status to Published and click Save Changes to publish the change.
- For other pages, set Page Key to the exact page filename, e.g. about.html,
  contact.html, careers.html, or patented-apis.html.
- Image uploads are stored as image data in MongoDB; limit is 1.2 MB per image.
- Public website pages load published CMS overrides through js/live-cms.js.

IMPORTANT
This CMS updates content for elements selected by CSS selector. Complex layouts,
repeating product cards, navigation structures, and every visual section's full
layout are not automatically rebuilt by a single text field. For those, the
individual page template still defines the layout and needs a matching editor
field/selector mapping. Verify each page on localhost before publishing live.
