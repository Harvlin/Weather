// src/components/ErrorMessage.jsx
import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => (
    <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6 rounded-lg
                  flex items-center space-x-3">
        <AlertCircle className="text-red-500" />
        <p className="text-red-700">{message}</p>
    </div>
);

export default ErrorMessage;