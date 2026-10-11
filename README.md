# DevStack — Build Your Technology Stack

DevStack is a responsive web application that helps users explore web development technologies and build a custom technology stack. Users can browse technology cards, select tools, and manage their selections in the Your Stack section.

## Live Website

🌐 [Visit DevStack](https://eloquent-sable-8cc848.netlify.app)



## Main Features

- **Explore Technologies:** Browse technologies with names, icons, descriptions, categories, difficulty levels, ratings, and badges.
- **Build a Custom Stack:** Add technologies to the Your Stack section.
- **Duplicate Prevention:** Each technology can only be selected once.
- **Selection Feedback:** Selected technologies display a disabled “Added to Stack” button.
- **Manage Selections:** Remove individual technologies or clear the entire stack.
- **Live Selection Count:** View the total number of selected technologies.
- **Toast Notifications:** Receive feedback when adding or removing technologies.
- **Loading State:** A loading indicator appears while technology data is being fetched.
- **Responsive Layout:** Explore technology cards and manage your stack on different screen sizes.

## Technology Stack

| Technology | Purpose |
|------------|---------|
| React | Component-based user interface |
| TypeScript | Type checking and application logic |
| Vite | Development server and production build |
| Tailwind CSS | Responsive styling |
| DaisyUI | UI components |
| React Icons | Interface icons |
| React Toastify | Toast notifications |
| Netlify | Hosting |

## Dependencies

### Application Dependencies

- `react` and `react-dom` — UI components and rendering
- `tailwindcss` — Utility-first styling
- `@tailwindcss/vite` — Tailwind integration with Vite
- `react-icons` — Icons
- `react-toastify` — Toast notifications

### Development Dependencies

- `vite` — Development and build tools
- `@vitejs/plugin-react` — React integration with Vite
- `typescript` — Type checking
- `daisyui` — UI component library
- `oxlint` — Code linting
- `@types/react` and `@types/react-dom` — React type definitions
- `@types/node` — Node.js type definitions

## Run Locally

### 1. Prerequisites

Install a current Node.js LTS release and npm.

### 2. Clone the Repository

```bash
git clone https://github.com/jstashin/devStack.git
cd devStack
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Environment Variables

No environment variables or API keys are required for the current implementation.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Run TypeScript checks and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Data and State Management

- Technology data is fetched from `public/data.json`.
- React's `use()` API reads the data promise inside a Suspense boundary.
- React's `useState` manages the selected technologies.
- Props and callback functions connect the technology cards and stack panel.

Selections are stored in memory and reset when the page is refreshed.

## Deployment

The application is hosted on Netlify.

To deploy your own copy:

1. Import the repository into Netlify.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. Deploy the project.

## Relevant Links

- [Live Website](https://eloquent-sable-8cc848.netlify.app)
- [GitHub Repository](https://github.com/jstashin/devStack)
- [Developer GitHub](https://github.com/jstashin)
