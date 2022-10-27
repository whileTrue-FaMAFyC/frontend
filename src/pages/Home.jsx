import React, {Component} from "react";
import {createRoot} from "react-dom/client";
import {Stage, Layer, Image} from "react-konva";
import useImage from "use-image";

const LionImage = () => {
  const [image] = useImage("https://konvajs.org/assets/lion.png");
  return
  (
    <head>
      <script src="https://unpkg.com/konva@8.3.13/konva.min.js"></script>
      <meta charset="utf-8" />
      <title>Konva Linear Easing Demo</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #f0f0f0;
        }
      </style>
    </head>
    <body>
      <div id="container"></div>
      <script>
        var width = window.innerWidth;
        var height = window.innerHeight;

        var stage = new Konva.Stage({
          container: 'container',
          width: width,
          height: height,
        });

        var layer = new Konva.Layer();

        var rect = new Konva.Rect({
          x: 50,
          y: 20,
          width: 100,
          height: 50,
          fill: 'green',
          stroke: 'black',
          strokeWidth: 2,
          opacity: 0.2,
        });

        layer.add(rect);
        stage.add(layer);

        // the tween has to be created after the node has been added to the layer
        var tween = new Konva.Tween({
          node: rect,
          duration: 1,
          x: 140,
          y: 90,
          fill: 'red',
          rotation: Math.PI * 2,
          opacity: 1,
          strokeWidth: 6,
          scaleX: 1.5,
        });

        // start tween after 2 seconds
        setTimeout(function () {
          tween.play();
        }, 2000);
      </script>
    </body>
  )
};

const Home = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <LionImage />
      </Layer>
    </Stage>
  );
};

// const Home = () => {
//   return <div data-testid='home'>You are home</div>;
// };
export default Home;
