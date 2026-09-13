Name of the project: DevStack.

DevStack is a responsive React application where users can explore different web development technologies and build their own custom technology stack.

 Technologies Used

- React
- JavaScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- JSON Data

 Features

 1. Explore Technologies:

 Users can explore different technologies with useful information such as:

- Technology name
- Category
- Description
- Difficulty
- Rating
- Badge
- Icon

 2. Build Your Own Stack:
Users can add technologies to the **Your Stack** section.

- Selected technologies are displayed separately.
- The same technology cannot be added twice.
- The Add button changes after a technology is selected.

 3. Remove Technologies:
Users can manage their stack easily.

- Remove a single technology
- Remove all technologies at once
- View the total number of selected technologies

 React Questions

# 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript.

It makes React components easier to write and understand.

# 2. What is the difference between props and state?
Props are used to pass data from a parent component to a child component.State is used to store and update data inside a component.
# 3. What does the useState hook do, and where did you use it in this project?
useState is used to store data that can change while the application is running.In this project, I used useState to store the selected technologies.
# 4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect is used to perform tasks after a component renders, such as loading data from an API or JSON file.
# 5. Why does every item in a .map() list need a unique key prop?
A unique key helps React identify each item in a list.
It helps React update the correct item efficiently when something changes.
# 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition.
In this project, I used it in the Your Stack section.
# 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent component sends data to a child component using props.
A child can send information back to the parent by calling a function passed through props.
