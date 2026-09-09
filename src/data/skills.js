export const skillCategories = [
  { id: "all",         label: "All Technologies" },
  { id: "ds",          label: "Data Science" },
  { id: "ml",          label: "Machine Learning" },
  { id: "ai",          label: "AI / RAG / NLP" },
  { id: "programming", label: "Programming" },
  { id: "web",         label: "Web & Deployment" },
  { id: "tools",       label: "Tools & Databases" }
];

export const skills = [
  // Programming
  { name: "Python",     category: "programming", level: "Advanced",     icon: "Code2",      tag: "Primary Language",        url: "https://www.python.org" },
  { name: "C / C++",   category: "programming", level: "Proficient",   icon: "Cpu",        tag: "Algorithms & DSA",        url: "https://isocpp.org" },
  { name: "Java",       category: "programming", level: "Intermediate", icon: "FileCode",   tag: "OOP & Architecture",      url: "https://www.java.com" },
  { name: "SQL",        category: "programming", level: "Proficient",   icon: "Database",   tag: "Querying & Relational",   url: "https://www.w3schools.com/sql" },
  { name: "JavaScript", category: "programming", level: "Proficient",   icon: "Code",       tag: "Full-Stack Dev",          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },

  // Data Science
  { name: "NumPy",       category: "ds", level: "Advanced",   icon: "Binary",    tag: "Vectorized Operations",      url: "https://numpy.org" },
  { name: "Pandas",      category: "ds", level: "Advanced",   icon: "Table",     tag: "Data Wrangling & Cleaning",  url: "https://pandas.pydata.org" },
  { name: "Matplotlib",  category: "ds", level: "Proficient", icon: "LineChart", tag: "Statistical Plotting",       url: "https://matplotlib.org" },
  { name: "Seaborn",     category: "ds", level: "Proficient", icon: "PieChart",  tag: "High-level Data Viz",        url: "https://seaborn.pydata.org" },
  { name: "Scikit-Learn",category: "ds", level: "Advanced",   icon: "Sparkles",  tag: "ML Modeling",                url: "https://scikit-learn.org" },

  // Machine Learning
  { name: "Regression Models",      category: "ml", level: "Advanced",   icon: "TrendingUp", tag: "Linear, Ridge, Lasso",       url: "https://scikit-learn.org/stable/modules/linear_model.html" },
  { name: "Classification",         category: "ml", level: "Advanced",   icon: "Network",    tag: "KNN, Tree, Logistic",        url: "https://scikit-learn.org/stable/supervised_learning.html" },
  { name: "Feature Engineering",    category: "ml", level: "Advanced",   icon: "Layers",     tag: "Scaling, Encoders, PCA",     url: "https://scikit-learn.org/stable/modules/preprocessing.html" },
  { name: "Model Evaluation",       category: "ml", level: "Advanced",   icon: "CheckCircle2",tag: "ROC-AUC, F1, RMSE",        url: "https://scikit-learn.org/stable/modules/model_evaluation.html" },
  { name: "Time Series Analysis",   category: "ml", level: "Proficient", icon: "Activity",   tag: "Sales & Demand Trends",      url: "https://github.com/Sandip-0/sales-forecasting" },
  { name: "Recommendation Systems", category: "ml", level: "Proficient", icon: "Share2",     tag: "Content & Collaborative",   url: "https://github.com/Sandip-0/movie-recommendation-system" },

  // AI / RAG / NLP
  { name: "LangChain",        category: "ai", level: "Proficient", icon: "GitMerge",    tag: "LLM Orchestration",    url: "https://python.langchain.com" },
  { name: "Mistral AI",       category: "ai", level: "Proficient", icon: "Brain",       tag: "Inference & Generation",url: "https://mistral.ai" },
  { name: "RAG Architecture", category: "ai", level: "Advanced",   icon: "Workflow",    tag: "Document Q&A Pipelines",url: "https://github.com/Sandip-0/InsightForge-RAG" },
  { name: "Text Embeddings",  category: "ai", level: "Proficient", icon: "Fingerprint", tag: "Dense Vector Search",  url: "https://huggingface.co/docs/transformers/en/model_doc/bert" },
  { name: "Chroma Vector DB", category: "ai", level: "Proficient", icon: "Box",         tag: "Vector Indexing",      url: "https://www.trychroma.com" },
  { name: "Multi-Agent AI",   category: "ai", level: "Proficient", icon: "Mic",         tag: "Agent Systems",        url: "https://github.com/Sandip-0/arxiv-research-agent" },

  // Web & Full-Stack
  { name: "React.js",       category: "web", level: "Proficient", icon: "Atom",       tag: "Interactive Frontends",url: "https://react.dev" },
  { name: "Tailwind CSS",   category: "web", level: "Advanced",   icon: "Palette",    tag: "Modern UI Design",     url: "https://tailwindcss.com" },
  { name: "Streamlit",      category: "web", level: "Advanced",   icon: "MonitorPlay",tag: "Interactive ML Apps",  url: "https://streamlit.io" },
  { name: "Node.js",        category: "web", level: "Intermediate",icon: "Server",    tag: "REST API Services",    url: "https://nodejs.org" },
  { name: "HTML5 / CSS3",   category: "web", level: "Advanced",   icon: "Layout",     tag: "Semantic Markup",      url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },

  // Tools & DB
  { name: "PostgreSQL",        category: "tools", level: "Proficient", icon: "DatabaseZap", tag: "RDBMS Management",  url: "https://www.postgresql.org" },
  { name: "Git & GitHub",      category: "tools", level: "Advanced",   icon: "GitBranch",   tag: "Version Control",   url: "https://github.com/Sandip-0" },
  { name: "Vercel",            category: "tools", level: "Proficient", icon: "Cloud",       tag: "App Hosting",       url: "https://vercel.com" },
  { name: "Jupyter Notebooks", category: "tools", level: "Advanced",   icon: "Terminal",    tag: "Exploratory Coding",url: "https://jupyter.org" }
];
