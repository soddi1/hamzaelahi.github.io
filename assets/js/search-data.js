// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/hamzaelahi.github.io/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hamzaelahi.github.io/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "You can also download a PDF version using the button above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hamzaelahi.github.io/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/hamzaelahi.github.io/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/hamzaelahi.github.io/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-distributed-key-value-store-raft",
          title: 'Distributed Key-Value Store (RAFT)',
          description: "A fault-tolerant distributed key-value store using the Raft consensus algorithm, with WAL-based crash recovery.",
          section: "Projects",handler: () => {
              window.location.href = "/hamzaelahi.github.io/projects/1_project/";
            },},{id: "projects-chat-server-summarizer",
          title: 'Chat Server Summarizer',
          description: "A backend service that ingests messages from Discord, Slack, and Telegram in real time and generates on-demand AI summaries.",
          section: "Projects",handler: () => {
              window.location.href = "/hamzaelahi.github.io/projects/2_project/";
            },},{id: "projects-scholarrag",
          title: 'ScholarRAG',
          description: "A hybrid Retrieval-Augmented Generation (RAG) system for research Q&amp;A using FAISS-indexed academic papers with optional live Wikipedia retrieval.",
          section: "Projects",handler: () => {
              window.location.href = "/hamzaelahi.github.io/projects/3_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
