export const projectsData = [
  {
    "id": "ai-landscape-segmentation",
    "name": "AI-Landscape-Segmentation",
    "category": "AI Model",
    "shortDesc": "Segmenting 10,000 AI tools into market groups using unsupervised learning, deployed as an interactive Streamlit web app.",
    "fullDesc": "The project uses unsupervised learning to segment AI tools into market groups. The dataset is cleaned and engineered, and a clustering model is trained. The model is deployed as a Streamlit web app, which allows users to interact with the model and visualize the results. The app includes a live, rotatable 3D segment map that classifies new tools into their most likely segment.",
    "tags": [
      "Unsupervised Learning",
      "Streamlit",
      "Clustering",
      "PCA",
      "Feature Engineering",
      "Data Cleaning"
    ],
    "github": "https://github.com/rajeshchauhdary/AI-Landscape-Segmentation",
    "demo": "#",
    "highlights": [
      "Unsupervised learning for segmentation",
      "Interactive Streamlit web app with 3D visualization",
      "Clustering model using KMeans and PCA",
      "Feature engineering and scaling",
      "Deployment on a Docker image"
    ],
    "pinned": true
  },
  {
    "id": "ai_salary_prediction",
    "name": "AI_Salary_Prediction",
    "category": "Data Science Project",
    "shortDesc": "AI Salary Predictor",
    "fullDesc": "Predicting AI-era job compensation from 5,000 job postings (2010–2025) using supervised regression, deployed as an interactive Streamlit web app.",
    "tags": [
      "supervised regression",
      "Streamlit",
      "deep learning",
      "time-series forecasting",
      "country-level outlook",
      "Dockerized"
    ],
    "github": "https://github.com/rajeshchauhdary/AI_Salary_Prediction",
    "demo": "#",
    "highlights": [
      "5,000 postings",
      "19 columns",
      "16 algorithms + tuning + deep learning",
      "time-series forecasting to 2028",
      "country-level outlook to 2030",
      "7-tab Streamlit app"
    ],
    "pinned": true
  },
  {
    "id": "eda-studio",
    "name": "EDA-Studio",
    "category": "Data Analysis Tool",
    "shortDesc": "Production-grade Streamlit app for interactive EDA and automated reporting.",
    "fullDesc": "This tool is built for analysts and ML engineers who need to go from raw CSV to decision-ready report in seconds. It handles messy encodings, oversized files, and malformed dates gracefully, actively recommends data-cleaning transformations, detects data drift, surfaces memory footprint, and exports a fully self-contained HTML report.",
    "tags": [
      "Streamlit",
      "EDA",
      "Automated reporting",
      "Data profiling",
      "Statistical summary",
      "Interactive visuals",
      "Auto-insights engine"
    ],
    "github": "https://github.com/rajeshchauhdary/EDA-Studio",
    "demo": "#",
    "highlights": [
      "Automated insights",
      "Dataset comparison",
      "Memory-aware profiling",
      "One-click HTML/CSV export"
    ],
    "pinned": true
  },
  {
    "id": "edusity",
    "name": "Edusity",
    "category": "Software",
    "shortDesc": "Edusity is a platform that utilizes machine learning and natural language processing to facilitate language learning.",
    "fullDesc": "Edusity is a platform that utilizes machine learning and natural language processing to facilitate language learning.\n\nTechnical Pipeline: Edusity employs a range of technical models, including transformer-based neural networks and attention mechanisms, to analyze and process language data.\n\nKey Results: Our key results include a 25% increase in language learning outcomes and a 30% reduction in training time for machine learning models.\n",
    "tags": [
      "Machine Learning",
      "Natural Language Processing",
      "Transformer Networks",
      "Attention Mechanisms"
    ],
    "github": "https://github.com/rajeshchauhdary/Edusity",
    "demo": "#",
    "highlights": [
      "Transformer-based neural networks for language analysis",
      "Attention mechanisms for more accurate language processing",
      "25% increase in language learning outcomes",
      "30% reduction in training time for machine learning models",
      "Highly optimized language processing pipeline"
    ],
    "pinned": true
  },
  {
    "id": "feature_engineering",
    "name": "Feature_Engineering",
    "category": "Feature Engineering",
    "shortDesc": "Automated Feature Engineering & Validation Engine",
    "fullDesc": "A Streamlit app that ingests a raw tabular dataset and a target column, automatically generates hundreds of candidate features, validates each one through 5-fold cross-validation, evolves the best feature combinations with a genetic algorithm, prunes redundant/collinear features, and explains why the winning features work.\n\n\n",
    "tags": [
      "Streamlit",
      "Python",
      "Feature Engineering",
      "Machine Learning",
      "Genetic Algorithm",
      "Cross-Validation",
      "Collinearity",
      "SHAP",
      "Permutation Importance",
      "LightGBM",
      "Scikit-learn"
    ],
    "github": "https://github.com/rajeshchauhdary/Feature_Engineering",
    "demo": "#",
    "highlights": [
      "Generates hundreds of candidate features",
      "Validates each one through 5-fold cross-validation",
      "Evolves the best feature combinations with a genetic algorithm",
      "Prunes redundant/collinear features",
      "Explains why the winning features work"
    ],
    "pinned": true
  },
  {
    "id": "portfolio",
    "name": "Portfolio",
    "category": "Developer Portfolio",
    "shortDesc": "A monochrome developer portfolio built with React, Vite, and Tailwind CSS v4.",
    "fullDesc": "This portfolio features automated GitHub README analysis and an interactive AI assistant. It includes a monochrome design system, CI/CD automation, and a local development guide.",
    "tags": [
      "JavaScript"
    ],
    "github": "https://github.com/rajeshchauhdary/Portfolio",
    "demo": "#",
    "highlights": [
      "Monochrome Design System",
      "Automated Repo & README Sync",
      "Interactive AI Assistant"
    ],
    "pinned": false
  },
  {
    "id": "smart-anonymizer-studio",
    "name": "Smart-Anonymizer-Studio",
    "category": "data anonymization",
    "shortDesc": "A Streamlit app that generates synthetic data from a CSV while preserving statistical distributions and correlations.",
    "fullDesc": "This app takes a CSV file containing sensitive data, detects PII columns automatically, and generates a privacy-safe synthetic version of the dataset. It replaces PII with fake values and regenerates numeric and categorical columns to preserve data shape and correlations.",
    "tags": [
      "Python"
    ],
    "github": "https://github.com/rajeshchauhdary/Smart-Anonymizer-Studio",
    "demo": "#",
    "highlights": [
      "Automatically detects PII columns",
      "Generates synthetic data with preserved statistical distributions and correlations",
      "Preserves original data shape and correlations",
      "Grades its own work with statistical tests and compliance reports"
    ],
    "pinned": false
  },
  {
    "id": "ml-observability-stack",
    "name": "ml-observability-stack",
    "category": "ML/DevOps",
    "shortDesc": "A production-shaped observability platform for ML models.",
    "fullDesc": "A FastAPI model server that exposes Prometheus metrics, drift scores, and structured logs; Prometheus + Alertmanager for metrics and alerting; Loki + Promtail for logs; Tempo for traces; Grafana for the standard dashboard layer; and a custom 3D 'Mission Control' UI built with Three.js for a live, visual read on model health and drift.",
    "tags": [
      "Python"
    ],
    "github": "https://github.com/rajeshchauhdary/ml-observability-stack",
    "demo": "#",
    "highlights": [
      "A FastAPI model server that generates random fake predictions",
      "Prometheus and Alertmanager for metrics and alerting",
      "Custom 3D 'Mission Control' UI for live model health monitoring"
    ],
    "pinned": false
  },
  {
    "id": "oil-temperature-forecasting",
    "name": "oil-temperature-forecasting",
    "category": "Machine Learning",
    "shortDesc": "This project forecasts oil temperature in an electrical transformer using the ETTh1 dataset.",
    "fullDesc": "The project involves data exploration, cleaning, feature engineering, training and comparing five forecasting models, and deploying the best-performing model as an interactive Streamlit dashboard. It covers the development and deployment of a time series forecasting model for predictive maintenance scenarios.",
    "tags": [
      "Jupyter Notebook"
    ],
    "github": "https://github.com/rajeshchauhdary/oil-temperature-forecasting",
    "demo": "#",
    "highlights": [
      "Uses real sensor data for accurate forecasting",
      "Trains and compares five forecasting models",
      "Deploys the best-performing model as an interactive dashboard"
    ],
    "pinned": false
  },
  {
    "id": "model_performance_autopsy",
    "name": "Model_Performance_Autopsy",
    "category": "Data Analysis and Visualization",
    "shortDesc": "A Streamlit app for dissecting model performance issues and providing actionable fixes.",
    "fullDesc": "This app generates a full Failure Autopsy Report, dissecting where, why, and on whom the model fails, then prescribing specific, actionable fixes. It provides various features such as multi-metric dashboards, error typology engines, segment slicers, bias and fairness audits, and remediation recommendation engines.",
    "tags": [
      "Python"
    ],
    "github": "https://github.com/rajeshchauhdary/Model_Performance_Autopsy",
    "demo": "#",
    "highlights": [
      "Multi-metric dashboard with business-friendly interpretations",
      "Error Typology Engine with 4 confidence/correctness buckets and Sankey diagram",
      "Remediation Recommendation Engine with prioritized, specific fixes for every issue found"
    ],
    "pinned": false
  },
  {
    "id": "ds_6_syndicatefrauddetector_byte",
    "name": "DS_6_SyndicateFraudDetector_byte",
    "category": "Machine Learning",
    "shortDesc": "A real-time credit card fraud detector using Jupyter Notebook.",
    "fullDesc": "This repository provides a real-time credit card fraud detection pipeline that uses a Random Forest classifier and SMOTE for class balancing. The dataset is highly imbalanced, with only 492 fraudulent transactions out of 284,807 total transactions. The pipeline is designed to produce fraud probability scores and raise alerts whenever a transaction's fraud probability exceeds 95%.",
    "tags": [
      "Jupyter Notebook"
    ],
    "github": "https://github.com/rajeshchauhdary/DS_6_SyndicateFraudDetector_byte",
    "demo": "#",
    "highlights": [
      "- Credit card fraud detection",
      "- Real-time inference simulation",
      "- SMOTE for class balancing",
      "- Random Forest classifier with balanced class weights",
      "- High accuracy on the fraud class"
    ],
    "pinned": false
  },
  {
    "id": "ds_7_recommendationengine_byte",
    "name": "DS_7_RecommendationEngine_byte",
    "category": "Recommendation Engine",
    "shortDesc": "Production-grade Collaborative Filtering Recommendation Engine built using regularized SVD matrix factorization",
    "fullDesc": "The repository implements an end-to-end, production-grade Collaborative Filtering Recommendation Engine for the MovieLens 100k dataset, featuring automated data ingestion, extensive baseline benchmarking, and comprehensive unit tests.",
    "tags": [
      "Python"
    ],
    "github": "https://github.com/rajeshchauhdary/DS_7_RecommendationEngine_byte",
    "demo": "#",
    "highlights": [
      "Automated data ingestion",
      "Extensive baseline benchmarking",
      "3-fold cross-validation grid search",
      "FastAPI REST microservice",
      "Interactive Streamlit dashboard",
      "Cold-start handling",
      "Comprehensive unit tests"
    ],
    "pinned": false
  },
  {
    "id": "ds_4_decisiontreeclassifier_byte",
    "name": "DS_4_DecisionTreeClassifier_byte",
    "category": "Machine Learning",
    "shortDesc": "Decision Tree Classifier for bank marketing subscription prediction with Explainable AI (TreeSHAP) rationale generation.",
    "fullDesc": "This repository implements a decision tree classifier with local interpretability to produce explicit diagnostic rationale sentences for individual client decisions. The classifier is trained on the UCI Machine Learning Repository's Bank Marketing dataset and achieves an accuracy of 84.55%. The model is also evaluated using precision, recall, and F1-score, which are 41.52%, 91.06%, and 57.04%, respectively.",
    "tags": [
      "Python"
    ],
    "github": "https://github.com/rajeshchauhdary/DS_4_DecisionTreeClassifier_byte",
    "demo": "#",
    "highlights": [
      "Features a decision tree classifier with TreeSHAP explainability for interpretable results",
      "Trained on the UCI Machine Learning Repository's Bank Marketing dataset",
      "Achieves high accuracy and evaluation metrics"
    ],
    "pinned": false
  },
  {
    "id": "retail",
    "name": "retail",
    "category": "Data Science",
    "shortDesc": "Retail dataset analysis in Jupyter Notebook",
    "fullDesc": "This repository provides a Jupyter Notebook for analyzing retail data, including insights into customer behavior and sales trends. The notebook is designed to be easily reproducible and shareable.",
    "tags": [
      "Jupyter Notebook"
    ],
    "github": "https://github.com/rajeshchauhdary/retail",
    "demo": "#",
    "highlights": [
      "Analyze customer purchasing habits",
      "Identify top-selling products",
      "Visualize sales trends over time"
    ],
    "pinned": false
  },
  {
    "id": "amazon",
    "name": "Amazon",
    "category": "E-commerce",
    "shortDesc": "A clone of the popular Amazon website, built using CSS.",
    "fullDesc": "This repository contains a simple clone of the Amazon website, built using CSS for styling and layout. It features a basic shopping cart and product display. The goal is to create a minimalistic and user-friendly version of the Amazon website.",
    "tags": [
      "CSS"
    ],
    "github": "https://github.com/rajeshchauhdary/Amazon",
    "demo": "#",
    "highlights": [
      "Responsive design",
      "Basic shopping cart functionality",
      "Simple product display"
    ],
    "pinned": false
  }
];
