export const projectsData = [
  {
    "id": "ai-landscape-segmentation",
    "name": "AI-Landscape-Segmentation",
    "category": "Computer Vision",
    "shortDesc": "Segmenting 10,000 AI tools into market groups using unsupervised learning",
    "fullDesc": "A complete, end-to-end data science project: segmenting a catalog of 10,000 AI tools into market groups using unsupervised learning, deployed as an interactive Streamlit web app (with a live, rotatable 3D segment map) that classifies new tools into their most likely segment.\n\nDiscovered segments, projected via PCA (2D and interactive 3D versions ship live in the app).\n\nWhy unsupervised learning for this dataset?\n\nA statistical noise-floor test compares the expected spread of group means under pure random chance against the actual spread of Popularity_Votes across categories. They're statistically indistinguishable — Popularity_Votes has no learnable relationship with any other column.\n\nRather than force a predictive model onto data with no real signal, this project pivots to a genuinely useful unsupervised segmentation task — grouping AI tools by their actual attributes, directly useful for catalog browsing, competitive landscape mapping, or a “which tool fits my needs” recommender.\n\n\n\n\n",
    "tags": [
      "Python",
      "Streamlit",
      "Unsupervised Learning",
      "PCA",
      "Data Preprocessing",
      "Clustering",
      "Data Visualization",
      "Web App Development"
    ],
    "github": "https://github.com/rajeshchauhdary/AI-Landscape-Segmentation",
    "demo": "#",
    "highlights": [
      "Unsupervised segmentation of 10,000 AI tools using PCA",
      "Interactive 3D segment map for visualizing results",
      "Streamlit web app for classifying new tools into segments",
      "Automated data quality checks and feature engineering",
      "Useful for catalog browsing, competitive landscape mapping, or recommender systems"
    ],
    "pinned": true
  },
  {
    "id": "ai_salary_prediction",
    "name": "AI_Salary_Prediction",
    "category": "Data Science",
    "shortDesc": "Predicting AI-era job compensation from 5,000 job postings",
    "fullDesc": "A complete, end-to-end data science project: predicting AI-era job compensation from 5,000 job postings (2010–2025) using supervised regression, deployed as an interactive Streamlit web app — complete with a live prediction form, a 19-model comparison lab, a deep-learning benchmark, time-series salary forecasting to 2028, and a rotatable **live 3D prediction surface**.\n\nAt a glance: 5,000 postings · 19 columns · 16 algorithms + tuning + deep learning · time-series forecasting to 2028 · country-level outlook to 2030 · 7-tab Streamlit app · Dockerized.\n\n<p align=\"center\"><img src=\"images/16_3d_relationship.png\" width=\"48%\" /><img src=\"images/18_model_comparison.png\" width=\"48%\" /></p>\n<p align=\"center\"><em>Left: 3D relationship between AI intensity, automation risk, and salary. Right: leaderboard across all 19 model candidates (both interactive and live in the app).</em></p>",
    "tags": [
      "Streamlit",
      "Supervised Regression",
      "Deep Learning",
      "Time-Series Forecasting",
      "Country-Level Outlook"
    ],
    "github": "https://github.com/rajeshchauhdary/AI_Salary_Prediction",
    "demo": "#",
    "highlights": [
      "Supervised regression using 19 columns",
      "Deep-learning benchmark",
      "Time-series salary forecasting to 2028",
      "Country-level outlook to 2030",
      "Rotatable live 3D prediction surface",
      "7-tab Streamlit app"
    ],
    "pinned": true
  },
  {
    "id": "eda-studio",
    "name": "EDA-Studio",
    "category": "Data Science",
    "shortDesc": "Interactive EDA and automated reporting studio",
    "fullDesc": "A production-grade, single-page Streamlit application that ingests CSV files and produces a comprehensive, interactive Exploratory Data Analysis (EDA) report — complete with automated insights, dataset comparison (drift detection), memory-aware profiling, and one-click HTML/CSV export.\n\nThis tool is built for analysts and ML engineers who need to go from **raw CSV → decision-ready report** in seconds, without spinning up a notebook. It differentiates itself from typical EDA scripts through operational maturity:\n\n* Handles messy encodings, oversized files, and malformed dates gracefully\n* Actively recommends (and can apply) data-cleaning transformations\n* Detects data drift between two dataset versions (Production vs. Test, Month 1 vs. Month 2)\n* Surfaces memory footprint before it becomes a browser-crashing problem\n* Exports a fully self-contained, offline-readable HTML report",
    "tags": [
      "Streamlit",
      "EDA",
      "Automated reporting",
      "Data science",
      "Data analysis",
      "Machine learning",
      "Python"
    ],
    "github": "https://github.com/rajeshchauhdary/EDA-Studio",
    "demo": "#",
    "highlights": [
      "Interactive EDA report",
      "Automated insights",
      "Drift detection",
      "Memory-aware profiling",
      "One-click HTML/CSV export"
    ],
    "pinned": true
  },
  {
    "id": "edusity",
    "name": "Edusity",
    "category": "Language Learning",
    "shortDesc": "Platform for language learning",
    "fullDesc": "Edusity is a platform for language learning. Edusity uses a technical pipeline that utilizes a machine learning based algorithm to learn the language through AI and ML. Edusity provides a practical outcome of being able to learn a language in a short span of time, making it a very effective tool for language learning. \n\n The technical pipeline of Edusity consists of natural language processing, computer vision, and machine learning. The platform uses a computer vision system to analyze the user\\'s speech and text input, and then uses machine learning algorithms to learn the language. The platform also uses natural language processing to analyze the user\\'s input and provide feedback.",
    "tags": [
      "Language Learning",
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "AI",
      "Language Analysis"
    ],
    "github": "https://github.com/rajeshchauhdary/Edusity",
    "demo": "#",
    "highlights": [
      "Machine learning based algorithm",
      "Natural Language Processing",
      "Computer Vision",
      "AI and ML",
      "Language Learning",
      "Speech Analysis"
    ],
    "pinned": true
  },
  {
    "id": "feature_engineering",
    "name": "Feature_Engineering",
    "category": "Feature Engineering",
    "shortDesc": "Automated Feature Engineering & Validation Engine",
    "fullDesc": "A Streamlit app that ingests a raw tabular dataset and a target column, automatically generates hundreds of candidate features, validates each one through 5-fold cross-validation, evolves the best feature combinations with a genetic algorithm, prunes redundant/collinear features, and explains why the winning features work.",
    "tags": [
      "Streamlit",
      "Feature Engineering",
      "Machine Learning",
      "Genetic Algorithm",
      "SHAP"
    ],
    "github": "https://github.com/rajeshchauhdary/Feature_Engineering",
    "demo": "#",
    "highlights": [
      "Automated feature generation",
      "5-fold cross-validation",
      "Genetic algorithm for feature evolution",
      "Feature explanation using SHAP or permutation importance"
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
