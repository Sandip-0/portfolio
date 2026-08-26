export const skillCategories = [
  {
    id: "all",
    label: "All Technologies"
  },
  {
    id: "ds",
    label: "Data Science"
  },
  {
    id: "ml",
    label: "Machine Learning"
  },
  {
    id: "ai",
    label: "AI / RAG / NLP"
  },
  {
    id: "programming",
    label: "Programming"
  },
  {
    id: "web",
    label: "Web & Deployment"
  },
  {
    id: "tools",
    label: "Tools & Databases"
  }
];

export const skills = [
  // Programming
  { name: "Python", category: "programming", level: "Advanced", icon: "Code2", tag: "Primary Language" },
  { name: "C / C++", category: "programming", level: "Proficient", icon: "Cpu", tag: "Algorithms & DSA" },
  { name: "Java", category: "programming", level: "Intermediate", icon: "FileCode", tag: "OOP & Architecture" },
  { name: "SQL", category: "programming", level: "Proficient", icon: "Database", tag: "Querying & Relational" },
  { name: "JavaScript", category: "programming", level: "Proficient", icon: "Code", tag: "Full-Stack Dev" },

  // Data Science
  { name: "NumPy", category: "ds", level: "Advanced", icon: "Binary", tag: "Vectorized Operations" },
  { name: "Pandas", category: "ds", level: "Advanced", icon: "Table", tag: "Data Wrangling & Cleaning" },
  { name: "Matplotlib", category: "ds", level: "Proficient", icon: "LineChart", tag: "Statistical Plotting" },
  { name: "Seaborn", category: "ds", level: "Proficient", icon: "PieChart", tag: "High-level Data Viz" },
  { name: "Scikit-Learn", category: "ds", level: "Advanced", icon: "Sparkles", tag: "ML Modeling" },

  // Machine Learning
  { name: "Regression Models", category: "ml", level: "Advanced", icon: "TrendingUp", tag: "Linear, Ridge, Lasso" },
  { name: "Classification", category: "ml", level: "Advanced", icon: "Network", tag: "KNN, Tree, Logistic" },
  { name: "Feature Engineering", category: "ml", level: "Advanced", icon: "Layers", tag: "Scaling, Encoders, PCA" },
  { name: "Model Evaluation", category: "ml", level: "Advanced", icon: "CheckCircle2", tag: "ROC-AUC, F1, RMSE" },
  { name: "Time Series Analysis", category: "ml", level: "Proficient", icon: "Activity", tag: "Sales & Demand Trends" },
  { name: "Recommendation Systems", category: "ml", level: "Proficient", icon: "Share2", tag: "Content & Collaborative" },

  // AI / RAG / NLP
  { name: "LangChain", category: "ai", level: "Proficient", icon: "GitMerge", tag: "LLM Orchestration" },
  { name: "Mistral AI", category: "ai", level: "Proficient", icon: "Brain", tag: "Inference & Generation" },
  { name: "RAG Architecture", category: "ai", level: "Advanced", icon: "Workflow", tag: "Document Q&A Pipelines" },
  { name: "Text Embeddings", category: "ai", level: "Proficient", icon: "Fingerprint", tag: "Dense Vector Search" },
  { name: "Chroma Vector DB", category: "ai", level: "Proficient", icon: "Box", tag: "Vector Indexing" },
  { name: "Speech Recognition", category: "ai", level: "Proficient", icon: "Mic", tag: "Audio Assistant AI" },

  // Web & Full-Stack
  { name: "React.js", category: "web", level: "Proficient", icon: "Atom", tag: "Interactive Frontends" },
  { name: "Tailwind CSS", category: "web", level: "Advanced", icon: "Palette", tag: "Modern UI Design" },
  { name: "Streamlit", category: "web", level: "Advanced", icon: "MonitorPlay", tag: "Interactive ML Apps" },
  { name: "Node.js & Express", category: "web", level: "Intermediate", icon: "Server", tag: "REST API Services" },
  { name: "HTML5 / CSS3", category: "web", level: "Advanced", icon: "Layout", tag: "Semantic Markup" },

  // Tools & DB
  { name: "PostgreSQL & MySQL", category: "tools", level: "Proficient", icon: "DatabaseZap", tag: "RDBMS Management" },
  { name: "MongoDB", category: "tools", level: "Intermediate", icon: "Boxes", tag: "NoSQL Collections" },
  { name: "Git & GitHub", category: "tools", level: "Advanced", icon: "GitBranch", tag: "Version Control" },
  { name: "Vercel", category: "tools", level: "Proficient", icon: "Cloud", tag: "App Hosting" },
  { name: "Jupyter Notebooks", category: "tools", level: "Advanced", icon: "Terminal", tag: "Exploratory Coding" }
];
