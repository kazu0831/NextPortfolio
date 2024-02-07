"use client";

import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Dino = () => {
  let model: THREE.Group;
  useEffect(() => {
    //描画設定（公式ドキュメント参照）
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const sizes = {
      width: document.documentElement.clientWidth,
      height: innerHeight,
    };
    const scene: THREE.Scene = new THREE.Scene();
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    camera.position.set(0, 0, 2);
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    //モデルの読み込み
    const gltfLoader = new GLTFLoader();

    gltfLoader.load("./models/scene.gltf", (gltf) => {
      model = gltf.scene;
      model.scale.set(1, 1, 1);
      console.log(model);
      scene.add(model);
    });

    //アニメーション設定
    const tick = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();
  }, []);
  return (
    <>
      <canvas id="canvas"></canvas>
    </>
  );
};

export default Dino;
