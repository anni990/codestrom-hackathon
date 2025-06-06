
import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    const createRain = () => {
      for (let i = 0; i < columns; i++) {
        const drop = document.createElement('div');
        drop.className = 'matrix-char';
        drop.style.left = `${i * 20}px`;
        drop.style.animationDelay = `${Math.random() * 20}s`;
        drop.style.animationDuration = `${10 + Math.random() * 20}s`;
        drop.textContent = characters[Math.floor(Math.random() * characters.length)];
        container.appendChild(drop);
      }
    };

    createRain();

    // Add floating code snippets
    const codeSnippets = [
      'function hack() {',
      '  return "code";',
      '}',
      'const vibe = true;',
      'if (coding) {',
      '  console.log("⚡");',
      '}',
      'npm run build',
      'git commit -m "🚀"',
      '// Let\'s code!',
      '<div>HTML</div>',
      'SELECT * FROM winners;',
      'async function win() {'
    ];

    const createCodeSnippets = () => {
      for (let i = 0; i < 15; i++) {
        const snippet = document.createElement('div');
        snippet.className = 'code-snippet animate-float';
        snippet.style.left = `${Math.random() * 100}%`;
        snippet.style.top = `${Math.random() * 100}%`;
        snippet.style.animationDelay = `${Math.random() * 6}s`;
        snippet.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        container.appendChild(snippet);
      }
    };

    createCodeSnippets();

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="matrix-rain" />;
};

export default MatrixRain;
