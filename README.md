# University of Regina Computer Science Students' Society Website

![UR CSSS Website Hero](![alt text](<Screenshot 2025-08-22 at 15.22.34.png>)) 

The official website for the University of Regina Computer Science Students' Society (CSSS). Built with a modern, responsive tech stack, this site serves as a central hub for students to find information on events, connect with the executive team, and discover resources.

**Live Site:** [**https://ur-csss.vercel.app**](https://ur-csss.vercel.app) 

---

## ✨ Features

*   **Multi-Page Architecture:** A fast, client-side routed application built with React Router.
*   **Fully Responsive Design:** A mobile-first approach ensures a seamless experience on all devices, from phones to desktops.
*   **Dynamic Animations:** Interactive elements with scroll-triggered animations provide a polished and modern user experience.
*   **AI-Powered Chatbot:** An integrated assistant, powered by the Google Gemini API, to answer user questions about the CSSS.
*   **AI Project Idea Generator:** A creative tool to help students brainstorm for the URHacks hackathon.
*   **Legacy Archive:** A dedicated page to honor the history and contributions of past executive teams.
*   **Component-Based & Maintainable:** Built with a clean, component-based architecture and organized data structure for easy updates.

## 🚀 Tech Stack

*   **Framework:** [React](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **AI Integration:** [Google Gemini API](https://ai.google.dev/)
*   **Deployment:** [Vercel](https://vercel.com/)

---

## 🛠️ Run Locally

**Prerequisites:** [Node.js](https://nodejs.org/)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ur-csss-website.git
    cd ur-csss-website
    ```

2.  **Install dependencies:**
    This project contains a dependency that requires a legacy flag to resolve version conflicts.
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Set up environment variables:**
    *   Create a new file in the root of the project named `.env.local`.
    *   Add your Google Gemini API key to this file:
      ```
      GEMINI_API_KEY=your_api_key_here
      ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

##  deployment

This project is deployed on **Vercel** and is configured for automatic deployments. Every push to the `main` branch will trigger a new production build.