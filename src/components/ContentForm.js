import React, { useState } from 'react';
import { generateContent } from '../api';

const ContentForm = () => {
  const [prompt, setPrompt] = useState('');
  const [type, setType] = useState('article de blog');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = await generateContent(prompt, type);
    setResult(content);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Entrez un sujet"
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="article de blog">Article de blog</option>
          <option value="histoire courte">Histoire courte</option>
          <option value="script de vidéo">Script de vidéo</option>
        </select>
        <button type="submit">Générer</button>
      </form>
      {result && (
        <div>
          <h2>Résultat</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default ContentForm;
