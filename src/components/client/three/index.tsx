"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Fastfood = () => {
  const model = useRef<THREE.Group>();
  const mixer = useRef<THREE.AnimationMixer>();
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const sizes = {
      width: document.body.clientWidth,
      height: innerHeight,
    };
    const scene: THREE.Scene = new THREE.Scene();

    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );

    camera.position.set(-1.5, 0.7, 5);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const gltfLoader = new GLTFLoader();

    gltfLoader.load("./models/food.gltf", (gltf) => {
      model.current = gltf.scene;
      model.current.scale.set(1, 1, 1);
      scene.add(model.current);

      mixer.current = new THREE.AnimationMixer(model.current);
      const clips = gltf.animations;

      clips.forEach(function (clip) {
        const action = mixer.current?.clipAction(clip);
        action?.play();
      });
    });

    const ambient = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambient);

    const point = new THREE.PointLight(0xffffff, 2, 100);
    scene.add(point);

    const handleResize = () => {
      sizes.width = document.documentElement.clientWidth;
      sizes.height = innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener("resize", handleResize);

    const tick = () => {
      if (model.current) {
        model.current.rotation.y += 0.002;
      }
      renderer.render(scene, camera);

      if (mixer.current) {
        mixer.current.update(0.025);
      }

      requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <canvas id="canvas"></canvas>
    </>
  );
};

export default Fastfood;
