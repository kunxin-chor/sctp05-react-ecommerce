Here are the differences between the branch `05-useEffect` and the branch `04-navbar`:

1. **src/App.jsx**
   ```diff
   - import React, {useState} from 'react'
   + import React, {useState, useEffect} from 'react'

   + const [isNavbarOpened, setNavBarOpen] = useState(false);

   + useEffect(() => {
   +   const syncNavbar = () => {
   +     if (window.innerWidth >= 992) {
   +       setNavBarOpen(true);
   +     } else {
   +       setNavBarOpen(false);
   +     }
   +   }
   +   window.addEventListener("resize", syncNavbar);
   +   return () => {
   +     window.removeEventListener("resize", syncNavbar);
   +   }
   + }, []);  // the effect function is only run once when the component is mounted

   - const [isNavbarOpened, setNavBarOpen] = useState(false);
   ```
