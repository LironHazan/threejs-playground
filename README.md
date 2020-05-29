Experimenting three.js

TBD:
- add typescript!

run: `npm run dev`

// Good post: http://www.blrice.net/blog/2016/02/27/gentle-intro-to-webgl/

webGL rendering pipline:

```
------[Javascript]------
          ||
          ||
----------\/-----------
GPU                     
     / Buffers /
         ||
         \/
    / Attributes /
         ||
         \/
     [Vertex Shader]
         ||
         \/
    [Fragment Shader]
--------  || -----------
          \/
    Browser's Canvas
```





- Anything that is rendered to the browser must be contained inside a THREE.Scene instance.
- A mesh is a collection of vertices, edges and faces that defines the shape of a polyhedral object.


