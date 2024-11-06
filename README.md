Here are the differences between the branch `04-navbar` and the branch `03-product-card`:

1. **src/App.jsx**
   ```diff
   - import React from 'react'
   + import React, {useState} from 'react'

   + const handleNavButtonClick = () => {
   +   setNavBarOpen(!isNavbarOpened);
   + }
   +
   + const [isNavbarOpened, setNavBarOpen] = useState(false);

   + onClick={handleNavButtonClick}

   - <div className="collapse navbar-collapse" id="navbarNav">
   + <div className={`collapse navbar-collapse ${isNavbarOpened ? "show" : ""  }`} id="navbarNav">
   ```
