Here are the lines in each file that are different between the `05-useEffect` and `06-routing` branches:

1. **package-lock.json**
   - Added `wouter` package.
   - Added dependencies: `mitt`, `regexparam`, `use-sync-external-store`.

2. **package.json**
   - Added `wouter` package.

3. **src/App.jsx**
   - Removed imports for `useState` and `useEffect`.
   - Removed Navbar state and synchronization logic.
   - Added imports for `HomePage`, `ProductPage`, `RegisterPage`, `Navbar`, and `Footer`.
   - Added routing using `wouter`.

4. **src/Footer.jsx** (New File)
   - Created a footer component.

5. **src/HomePage.jsx** (New File)
   - Created a home page component with header and product cards.

6. **src/Navbar.jsx** (New File)
   - Created a navbar component with routing links.

7. **src/ProductPage.jsx** (New File)
   - Created a product page component.

8. **src/RegisterPage.jsx** (New File)
   - Created a register page component.
