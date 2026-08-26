export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & RAG" },
  { id: "ml", label: "ML & Data Science" },
  { id: "web", label: "Software & Web" }
];

export const projects = [
  {
    id: "insightforge-rag",
    title: "InsightForge — AI-Powered RAG Document & Website Assistant",
    tagline: "Context-Aware Retrieval-Augmented Generation Engine",
    category: "ai",
    featured: true,
    badge: "Flagship AI Project",
    techStack: ["Python", "LangChain", "ChromaDB", "Mistral AI", "Streamlit", "RAG"],
    overview: "A Retrieval-Augmented Generation (RAG) application that allows users to upload PDF documents or provide website URLs and ask questions about their content.",
    bulletPoints: [
      "Developed a Retrieval-Augmented Generation (RAG) application that allows users to upload PDF documents or provide website URLs and ask questions about their content.",
      "Implemented document loading, text chunking, Mistral AI embeddings, and semantic retrieval using ChromaDB to provide relevant context for LLM-based responses.",
      "Integrated conversation history and query rewriting to improve retrieval for contextual follow-up questions, with an interactive Streamlit interface for real-time document-based Q&A."
    ],
    problemSolved: "Standard LLMs suffer from hallucination and lack private document context. InsightForge overcomes this by injecting vectorized context chunks dynamically at query time.",
    keyMetrics: [
      { label: "Vector DB", value: "ChromaDB" },
      { label: "LLM Model", value: "Mistral AI" },
      { label: "Pipeline", value: "LangChain RAG" },
      { label: "Interface", value: "Streamlit Cloud" }
    ],
    githubUrl: "https://github.com/Sandip-0/InsightForge-RAG",
    liveUrl: "https://insightforge-sandip.streamlit.app",
    color: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "#06b6d4"
  },
  {
    id: "credit-risk-prediction",
    title: "Enterprise Commercial Credit Risk & Solvability Predictor",
    tagline: "ML Risk Scoring & Solvability Classifier with XGBoost",
    category: "ml",
    featured: true,
    badge: "Enterprise ML",
    techStack: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Streamlit", "Matplotlib"],
    overview: "An end-to-end machine learning classification system to predict business credit risk and solvability using financial, operational, compliance, workforce, banking, and social-media features.",
    bulletPoints: [
      "Developed an end-to-end machine learning classification system to predict business credit risk and solvability using financial, operational, compliance, workforce, banking, and social-media features.",
      "Built and integrated an XGBoost classification model with preprocessing and feature-scaling pipelines for real-time prediction.",
      "Developed an interactive Streamlit dashboard featuring exploratory data analysis, feature-distribution visualizations, and real-time business risk assessment.",
      "Implemented model inference using serialized model, scaler, and feature artifacts, ensuring consistency between training and production predictions.",
      "Deployed the application on Streamlit Community Cloud for live demonstration and accessibility."
    ],
    problemSolved: "Automates manual underwriting through real-time solvability scoring and risk classification with transparent feature-scaling pipelines.",
    keyMetrics: [
      { label: "Classifier", value: "XGBoost & Scikit" },
      { label: "Data Pipeline", value: "Feature Scaling" },
      { label: "Deployment", value: "Streamlit Cloud" },
      { label: "Inference", value: "Serialized Model" }
    ],
    githubUrl: "https://github.com/Sandip-0/credit-risk-prediction",
    liveUrl: "https://credit-risk-prediction-sandip0.streamlit.app",
    color: "from-emerald-500/20 via-blue-500/10 to-transparent",
    accentColor: "#10b981"
  },
  {
    id: "sales-forecasting",
    title: "Sales Demand & Time Series Forecaster",
    tagline: "Predictive Demand Modeling & Trend Analysis",
    category: "ml",
    featured: false,
    badge: "Time Series",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Streamlit"],
    overview: "A statistical and machine learning pipeline that models seasonality, historical purchasing trends, and promotional factors to project future retail sales demand.",
    problemSolved: "Enables proactive inventory management and demand planning through accurate multi-period projections and trend decomposition.",
    keyMetrics: [
      { label: "Domain", value: "Time Series" },
      { label: "Deployment", value: "Live Streamlit" },
      { label: "Analysis", value: "Seasonality & Trends" }
    ],
    githubUrl: "https://github.com/Sandip-0/sales-forecasting",
    liveUrl: "https://sales-forecasting-sandip.streamlit.app",
    color: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "#f59e0b"
  },
  {
    id: "heart-disease",
    title: "Heart Disease Diagnostic Classifier",
    tagline: "Clinical Risk Biomarker Predictor",
    category: "ml",
    featured: false,
    badge: "Healthcare ML",
    techStack: ["Python", "K-Nearest Neighbors", "Scikit-Learn", "Streamlit", "Pandas"],
    overview: "A clinical diagnostic assistance web application that evaluates patient biomarkers (cholesterol, blood pressure, ECG, heart rate) to predict cardiovascular disease likelihood using a tuned KNN model.",
    problemSolved: "Provides fast, non-invasive risk stratification to support preliminary clinical decision-making.",
    keyMetrics: [
      { label: "Model", value: "KNN Classifier" },
      { label: "Deployment", value: "Live Streamlit" },
      { label: "Domain", value: "Biomedical Data" }
    ],
    githubUrl: "https://github.com/Sandip-0/HeartDisease",
    liveUrl: "https://heartdisease-oddtvumlsrygkewyk2ghpf.streamlit.app",
    color: "from-rose-500/20 via-red-500/10 to-transparent",
    accentColor: "#f43f5e"
  },
  {
    id: "emotion-classification",
    title: "Emotion NLP Classification System",
    tagline: "Text Sentiment & Nuance Classifier",
    category: "ml",
    featured: false,
    badge: "NLP",
    techStack: ["Python", "NLP", "Scikit-Learn", "Streamlit", "Text Preprocessing"],
    overview: "An NLP pipeline trained to detect fine-grained human emotional tones in unstructured text inputs with probability distributions across emotional categories.",
    problemSolved: "Extracts real-time emotional sentiment from customer messages, reviews, and interactive chatbot feedback.",
    keyMetrics: [
      { label: "Technique", value: "NLP & Tokenization" },
      { label: "Deployment", value: "Live Streamlit" },
      { label: "Output", value: "Multi-class Confidence" }
    ],
    githubUrl: "https://github.com/Sandip-0/EmotionClassification",
    liveUrl: "https://emotionclassification-sandip.streamlit.app",
    color: "from-violet-500/20 via-purple-500/10 to-transparent",
    accentColor: "#8b5cf6"
  },
  {
    id: "customer-churn",
    title: "Customer Churn & Purchase Predictor",
    tagline: "User Retention & Purchase Propensity Modeling",
    category: "ml",
    featured: false,
    badge: "Retention ML",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Feature Engineering"],
    overview: "End-to-end customer behavioral modeling analyzing engagement frequency, usage metrics, and subscription attributes to predict churn probability and purchase timing.",
    problemSolved: "Enables proactive retention strategies by flagging at-risk customers before churn occurs.",
    keyMetrics: [
      { label: "Focus", value: "Retention Analytics" },
      { label: "Algorithms", value: "Tree & Classification" },
      { label: "Deliverable", value: "Jupyter & Model Pipeline" }
    ],
    githubUrl: "https://github.com/Sandip-0/Customer-Churn-Prediction",
    liveUrl: null,
    color: "from-blue-500/20 via-cyan-500/10 to-transparent",
    accentColor: "#3b82f6"
  },
  {
    id: "movie-recsys",
    title: "Movie Recommendation Engine",
    tagline: "Content & Collaborative Filtering RecSys",
    category: "ml",
    featured: false,
    badge: "Recommender",
    techStack: ["Python", "Cosine Similarity", "Pandas", "Scikit-Learn", "Jupyter"],
    overview: "A personalized movie recommendation system leveraging vector similarity matrices on metadata, genres, and user rating histories.",
    problemSolved: "Overcomes choice paralysis by generating high-relevance movie suggestions based on latent item attributes.",
    keyMetrics: [
      { label: "Approach", value: "Cosine Similarity Matrix" },
      { label: "Dataset", value: "Movie Metadata" },
      { label: "Type", value: "Content-Based RecSys" }
    ],
    githubUrl: "https://github.com/Sandip-0/movie-recommendation-system",
    liveUrl: null,
    color: "from-indigo-500/20 via-violet-500/10 to-transparent",
    accentColor: "#6366f1"
  },
  {
    id: "netflix-data-viz",
    title: "Netflix Global Catalog EDA & Visualization",
    tagline: "Statistical Streaming Trends Analysis",
    category: "ml",
    featured: false,
    badge: "Data Storytelling",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    overview: "In-depth exploratory data analysis uncovering global content distributions, release year densities, duration distributions, and country-level production patterns on Netflix.",
    problemSolved: "Extracts actionable content-strategy patterns from large categorical and temporal dataset collections.",
    keyMetrics: [
      { label: "Tools", value: "Pandas & Seaborn" },
      { label: "Visualizations", value: "Distributions & Heatmaps" },
      { label: "Focus", value: "Data Storytelling" }
    ],
    githubUrl: "https://github.com/Sandip-0/Netflix_data_visualization",
    liveUrl: null,
    color: "from-red-500/20 via-rose-500/10 to-transparent",
    accentColor: "#ef4444"
  },
  {
    id: "alex-ai",
    title: "Alex / Jarvis-AI Conversational Assistant",
    tagline: "Speech Recognition & Automated Task Assistant",
    category: "ai",
    featured: false,
    badge: "Assistant AI",
    techStack: ["JavaScript", "Python", "Speech Recognition", "Vercel"],
    overview: "An intelligent conversational interface and desktop helper capable of processing spoken voice commands, performing quick automated lookups, and answering user queries.",
    problemSolved: "Demonstrates speech-to-intent parsing and seamless human-computer voice interaction.",
    keyMetrics: [
      { label: "Input", value: "Voice & Speech" },
      { label: "Deployment", value: "Live Vercel App" },
      { label: "Role", value: "Automation Assistant" }
    ],
    githubUrl: "https://github.com/Sandip-0/ai",
    liveUrl: "https://alex-ebon.vercel.app",
    color: "from-cyan-500/20 via-teal-500/10 to-transparent",
    accentColor: "#14b8a6"
  },
  {
    id: "newspulse",
    title: "NewsPulse Real-Time Aggregator",
    tagline: "Categorized Global News Discovery Portal",
    category: "web",
    featured: false,
    badge: "Web App",
    techStack: ["React", "JavaScript", "News API", "Bootstrap", "Vercel"],
    overview: "A dynamic real-time news application delivering categorized global headlines (Technology, Business, Science, Sports) with infinite paging and search filters.",
    problemSolved: "Streamlines headline consumption by aggregating diverse news sources into an uncluttered, fast-loading feed.",
    keyMetrics: [
      { label: "Frontend", value: "React" },
      { label: "Deployment", value: "Live Vercel" },
      { label: "Data Source", value: "REST API Feed" }
    ],
    githubUrl: "https://github.com/Sandip-0/newsapp",
    liveUrl: "https://newsapp-one-nu.vercel.app",
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "#3b82f6"
  }
];
