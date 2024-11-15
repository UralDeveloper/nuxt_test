// pages/api/projects.js

export default async function handler(req, res) {
    try {
      const response = await fetch('https://alexandr.pw/wp-json/wp/v2/projects');
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при запросе к API' });
    }
  }
  