
import React, { useEffect, useRef } from 'react';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.THREE || !mountRef.current) return;

    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new window.THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: false, // Disable antialias for better performance
      powerPreference: "low-power" // Use low power mode
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio
    mountRef.current.appendChild(renderer.domElement);

    // Reduce number of objects for better performance
    const cubes: any[] = [];
    const cubeGeometry = new window.THREE.BoxGeometry(0.3, 0.3, 0.3); // Smaller cubes
    
    // Reduce cube count from 20 to 8
    for (let i = 0; i < 8; i++) {
      const cubeMaterial = new window.THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
        transparent: true,
        opacity: 0.4 // Reduced opacity
      });
      
      const cube = new window.THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(cube);
      cubes.push(cube);
    }

    // Reduce particle count for better performance
    const particleGeometry = new window.THREE.BufferGeometry();
    const particleCount = 300; // Reduced from 1000
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 30;
    }
    
    particleGeometry.setAttribute('position', new window.THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new window.THREE.PointsMaterial({
      color: 0x00ff00,
      size: 0.05, // Smaller particles
      transparent: true,
      opacity: 0.6
    });
    
    const particles = new window.THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 12;

    let animationId: number;

    // Optimized animation with reduced frequency
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Slower rotation for better performance
      cubes.forEach((cube, index) => {
        cube.rotation.x += 0.002 + index * 0.0005;
        cube.rotation.y += 0.002 + index * 0.0005;
        cube.position.y += Math.sin(Date.now() * 0.0005 + index) * 0.001;
      });

      // Slower particle rotation
      particles.rotation.x += 0.0002;
      particles.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Clean up geometries and materials
      cubeGeometry.dispose();
      particleGeometry.dispose();
      cubes.forEach(cube => {
        cube.material.dispose();
      });
      particles.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} id="three-container" />;
};

export default ThreeScene;
