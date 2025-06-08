import React, { useEffect, useRef, useMemo } from 'react';

const MatrixRain: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const characters = useMemo(() => '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン', []);
  const codeSnippets = useMemo(() => [
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
  ], []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const columns = Math.floor(window.innerWidth / 20);
    const rainDrops = new Array(columns).fill(null).map((_, i) => ({
      left: `${i * 20}px`,
      delay: `${Math.random() * 20}s`,
      duration: `${10 + Math.random() * 20}s`,
      char: characters[Math.floor(Math.random() * characters.length)]
    }));

    const snippets = new Array(15).fill(null).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 6}s`,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
    }));

    const fragment = document.createDocumentFragment();

    // Create rain drops
    rainDrops.forEach(drop => {
      const element = document.createElement('div');
      element.className = 'matrix-char';
      element.style.left = drop.left;
      element.style.animationDelay = drop.delay;
      element.style.animationDuration = drop.duration;
      element.textContent = drop.char;
      fragment.appendChild(element);
    });

    // Create code snippets
    snippets.forEach(snippet => {
      const element = document.createElement('div');
      element.className = 'code-snippet animate-float';
      element.style.left = snippet.left;
      element.style.top = snippet.top;
      element.style.animationDelay = snippet.delay;
      element.textContent = snippet.text;
      fragment.appendChild(element);
    });

    container.appendChild(fragment);

    const handleResize = () => {
      if (container) {
        container.innerHTML = '';
        const newColumns = Math.floor(window.innerWidth / 20);
        const newRainDrops = new Array(newColumns).fill(null).map((_, i) => ({
          left: `${i * 20}px`,
          delay: `${Math.random() * 20}s`,
          duration: `${10 + Math.random() * 20}s`,
          char: characters[Math.floor(Math.random() * characters.length)]
        }));

        const newFragment = document.createDocumentFragment();
        newRainDrops.forEach(drop => {
          const element = document.createElement('div');
          element.className = 'matrix-char';
          element.style.left = drop.left;
          element.style.animationDelay = drop.delay;
          element.style.animationDuration = drop.duration;
          element.textContent = drop.char;
          newFragment.appendChild(element);
        });

        container.appendChild(newFragment);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [characters, codeSnippets]);

  return <div ref={containerRef} className="matrix-rain" />;
};

export default MatrixRain;
