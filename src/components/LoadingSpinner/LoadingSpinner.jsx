// src/components/LoadingSpinner/LoadingSpinner.jsx
import './LoadingSpinner.module.css'; // Приклад імпорту стилів

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
