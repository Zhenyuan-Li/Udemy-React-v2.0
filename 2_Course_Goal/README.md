# Demo 2: Course Goal (Styling in React)

## Traditional using CSS

- Each CSS file is in global scope (available in entire project).
- The naming might clash when the project involves many developers. (Even with BEM)

## 1) Inline style

- Highest priority, could override accidentally. Not recommended in most scenario
- **CourseInput.js Line74-78**

## 2) Modify the className

- Good approach but still not fix the global issues
- Sometimes code might get messy
- **CourseInput.js Line80-84**

## 3) Styled-Components

- Used by many company, css in js, dynamic and easy to modify
- Styling mixed with component logic is not neat for somebody
- **CourseInput.js Styling:L8-33, usage:L86-92**;
- **Button.js L3-29**;

## 4) CSS Modules

- Best option personally, but need to configure ahead, luckily create-react-app already did that
- Add .module to css file name; import styles from .module.css.; use styles.className at target
- **CourseInput.js**;
- **Button.js**;
