/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const Dino = () => {
  let model: THREE.Group;
  let rotation: number = 0;
  useEffect(() => {
    //描画
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const sizes = {
      width: document.documentElement.clientWidth,
      height: innerHeight - 160,
    };
    const scene: THREE.Scene = new THREE.Scene();

    //カメラ
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    camera.position.set(0, 0, 2);


    //レンダリング
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    //マウス操作
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false
    controls.minDistance = 1
    controls.maxDistance = 2
    camera.position.set(0, 0, 2);
    controls.update();

    //モデルの読み込み
    const gltfLoader = new GLTFLoader();

    gltfLoader.load("./models/dino.gltf", (gltf) => {
      model = gltf.scene;
      model.scale.set(0.55, 0.55, 0.55);
      model.position.set(1, -0.4, 0)
      model.rotation.set(0, -0.5, -0.1)
      scene.add(model);

      animate()
    });

    //明るさ
    const ambientLight = new THREE.AmbientLight(0xffffff, 2)
    scene.add(ambientLight)

    //レスポンシブ
    const handleResize = () => {
      sizes.width = document.documentElement.clientWidth
      sizes.height = innerHeight - 160

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(window.devicePixelRatio);
    }

    window.addEventListener('resize', handleResize);


    //アニメーション
    const animate = () => {
      requestAnimationFrame(animate)

      model.rotation.y += 0.002
      controls.update();
      renderer.render(scene, camera)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);


  return (
    <>
      <canvas className="relative cursor-pointer" id="canvas"></canvas>
    </>
  );
};

export default Dino;
