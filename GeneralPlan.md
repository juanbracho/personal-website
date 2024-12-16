# Features and Structure for React App

## General Features
1. **Shared Components**:
   - **Header.js**: Shared across all sections, includes navigation and branding.
   - **Footer.js**: Shared across all sections, includes additional site information.
   - **ToggleTheme.js**: Manages mandatory theme switching functionality.
2. **Theme Toggle**:
   - Button to switch between dark and light modes.
   - Predefined color schemes:
     - **Dark Mode** (`:root`).
     - **Light Mode** (`.light-mode`).
3. **Styling**:
   - Global CSS variables for theme colors.
   - Consistent spacing and responsive design for all components.

---

## Page-Specific Structure

### Header
1. **Left Section**:
   - Branding/Title: "Juan Bracho Avila."
   - Subtitle: "Data Analytics Portfolio - Showcasing Bootcamp Projects & Assignments."
2. **Right Section**:
   - Navigation Buttons:
     - **About**
     - **Portfolio**
     - **Education**
     - **Experience**
     - **Contact**
   - **Theme Toggle Button**:
     - For switching between dark and light themes.
3. **Styling**:
   - Hover effects on buttons for interactivity.
   - Consistent spacing for readability.
   - Sticky positioning for consistent visibility during scrolling.

---

### About Page
1. **Hero Section**:
   - **Left Section**:
     - A professional photo or image of the user.
     - Styling includes a rounded border or shadow to give it prominence.
   - **Right Section**:
     - Title: "About Me" in bold, styled with thematic colors.
     - Description: A short paragraph summarizing the user's skills, passion, and purpose of the portfolio.
     - Links:
       - **LinkedIn**: Clickable link styled in the secondary color.
       - **Curriculum Vitae (CV)**: Download button next to the LinkedIn link for accessing the CV.
   - Clear separation between left and right sections with balanced spacing.
2. **About Section**:
   - **Left Column**:
     - Long-form personal story.
   - **Right Column**:
     - Interactive achievement cards with hover effects:
       - Border color changes and elevation on hover.
3. **Skills Section**:
   - **Title**: "My Skills."
   - **Content**:
     - Skill bars with percentages for proficiency.
     - Organized in a responsive layout.
4. **Timeline Section**:
   - **Title**: "My Timeline."
   - **Content**:
     - Chronological entries for career and education.
     - Icons, text details, and hover effects for interactivity.

---

### Experience Page
1. **Title Design**:
   - Dual-layered text effect:
     - **Background Layer**: "MY WORK" in dark gray with low opacity.
     - **Foreground Layer**: "MY EXPERIENCE":
       - "MY" styled in white.
       - "EXPERIENCE" styled in secondary color.
2. **Experience Content**:
   - Lists of experiences:
     - **Role Title**: (e.g., Project Administrator).
     - **Date Range**: (e.g., October 2020 - September 2021).
     - **Organization Name** and **Location**.
     - **Bulleted List of Responsibilities**.
3. **Interactive or Animated Display**:
   - **Card Stack Design**:
     - Cards stacked with a preview of the card below.
     - Cards toggle automatically every few seconds or manually navigated by the user.
   - Each card includes title, date, organization, and responsibilities.
4. **Styling**:
   - Clean and professional layout.
   - Hover effects and smooth animations for interactivity.

---

### Contact Page

#### **Structure**
1. **Main Container**:
   - Two sections: 
     - **Contact Information (Left)**: Displays details for reaching out.
     - **Contact Form (Right)**: Includes interactive fields for user messages.
   - Flexbox layout for horizontal alignment, with responsiveness for stacking on smaller screens.

2. **Left Section (Contact Information)**:
   - **Title**: "Do not hesitate to reach out."
   - **Contact Details**:
     - **Location**: Address displayed with a location pin icon.
     - **Email**: Clickable `mailto` link for direct email.
     - **LinkedIn**: Icon with a link to the profile.
     - **Phone Number**: Clickable for mobile dialing.
     - **Languages**: Icons and list of available languages.

3. **Right Section (Contact Form)**:
   - **Form Fields**:
     - **Your Name**: Single-line input.
     - **Your Email**: Single-line input with real-time validation.
     - **Subject**: Single-line input.
     - **Message**: Multi-line text area.
   - **Submit Button**:
     - Interactive button with animation (e.g., "sending" spinner or visual indicator).

---

#### **Features**
1. **Interactive Form**:
   - Real-time validation for email and required fields.
   - Prevent submission until all required fields are filled and valid.

2. **Submit Feedback**:
   - Success message or animation displayed after submission.
   - Error message if submission fails.
   - "Reset Form" option to clear fields.

3. **Responsive Design**:
   - Two-column layout on large screens.
   - Stacked layout for smaller screens.

4. **Dynamic Icons**:
   - Icons for contact methods (location pin, envelope, phone, LinkedIn).

5. **Theme Integration**:
   - Full compatibility with dark and light modes.
   - Hover and active state styling for different themes.

6. **Interactive Submit Button**:
   - Hover effects (e.g., color change, shadow).
   - Click animations (e.g., spinner or pulse effect during submission).

7. **Accessibility**:
   - Proper `aria` labels for fields and buttons.
   - Keyboard navigation with focus indicators.

---

#### **Styling**
1. **Main Container**:
   - Flexbox or grid for layout alignment.
   - Padding and spacing for clarity.

2. **Left Section (Contact Information)**:
   - Consistent font sizes and weights for labels and details.
   - Align icons and text horizontally for a clean appearance.
   - Hover effects for clickable elements like email and LinkedIn links.

3. **Right Section (Contact Form)**:
   - Input Fields:
     - Rounded corners, padding, and shadows.
     - Border color changes on hover and focus.
   - Submit Button:
     - Color change on hover.
     - Loading spinner or subtle animation on click.

4. **General Design**:
   - Smooth CSS transitions for interactions.
   - Sufficient contrast for readability in both themes.

---

### Portfolio Page

#### Projects Carousel

##### **Structure**
1. **Main Container**:
   - Section with the class `projects-carousel`.
   - Contains a title ("Projects") and a horizontally scrollable container.

2. **Scrollable Container**:
   - Class: `projects-carousel__container`.
   - Flexbox layout for horizontally aligned project cards.
   - Includes individual project cards.

3. **Project Cards**:
   - Each card has:
     - Thumbnail image: Clickable to open a GitHub link.
     - Project name displayed below the thumbnail.

---

##### **Features**
1. **Hover Effects**:
   - Thumbnail scales up slightly when hovered for visual feedback.

2. **Interactivity**:
   - Clicking on a thumbnail opens the corresponding GitHub repository in a new tab.

3. **Responsiveness**:
   - Scrollable container adjusts dynamically to fit different screen sizes.

4. **Styling**:
   - Clean, modern design with rounded corners and shadows.
   - Subtle animations on hover for thumbnails.

---

### Assignments Carousel

##### **Structure**
1. **Main Container**:
   - Section with the class `assignments-carousel`.
   - Contains a title ("Assignments") and a horizontally scrollable container.

2. **Scrollable Container**:
   - Flexbox layout for horizontally aligned assignment cards.
   - Includes scroll buttons (left and right) for manual navigation.

3. **Assignment Cards**:
   - Each card has:
     - Thumbnail image: Clickable to open a GitHub link.
     - Assignment name displayed below the thumbnail.

4. **Scroll Buttons**:
   - Positioned on the left and right of the container.
   - Enable smooth scrolling through the carousel.

---

#### Education Section

##### **Structure**
1. **Title**:
   - Multi-layered design:
     - **Background Span**: "STUDIES" in a subtle gray.
     - **Foreground Span**: "EDUCATION" in the secondary theme color.

2. **Content Grid**:
   - 5 responsive divs in a grid layout.
   - Images on top with hover effects; grayscale by default, regaining color on hover.
   - Professional descriptions and divider line separating text from images.