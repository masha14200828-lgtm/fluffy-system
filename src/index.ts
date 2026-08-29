/**
 * Fluffy System - Marketing Infrastructure Platform
 * Main entry point
 */

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes placeholder
app.get('/api/v1/status', (req, res) => {
  res.json({
    service: 'fluffy-system',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Fluffy System running on port ${PORT}`);
});

export default app;
