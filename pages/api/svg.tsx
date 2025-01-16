import { ImageResponse } from '@vercel/og'
import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'
import satori from 'satori'

export default async function handler(req, res) {

  const svg = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <style>
    .list-item {
      cursor: pointer;
      font-family: Arial, sans-serif;
      font-size: 20px;
      fill: #000;
    }
    .image-item {
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    /* When hovering over a list item, show the corresponding image */
    #item1:hover + #image1,
    #item2:hover + #image2,
    #item3:hover + #image3 {
      opacity: 1;
    }
    /* Optional: Smooth transition when moving the mouse away */
    #image1,
    #image2,
    #image3 {
      transition: opacity 0.5s ease;
    }
  </style>
  
  <!-- List Items and Corresponding Images -->
  <!-- Item 1 and Image 1 -->
  <text id="item1" class="list-item" x="20" y="50">Item 1</text>
  <image id="image1" class="image-item" href="https://picsum.photos/seed/1/480/300" x="300" y="20" width="480" height="300"/>
  
  <!-- Item 2 and Image 2 -->
  <text id="item2" class="list-item" x="20" y="100">Item 2</text>
  <image id="image2" class="image-item" href="https://picsum.photos/seed/2/480/300" x="300" y="20" width="480" height="300"/>
  
  <!-- Item 3 and Image 3 -->
  <text id="item3" class="list-item" x="20" y="150">Item 3</text>
  <image id="image3" class="image-item" href="https://picsum.photos/seed/3/480/300" x="300" y="20" width="480" height="300"/>
</svg>
`

  res.setHeader('Content-Type', 'image/svg+xml;charset=UTF-8')
  res.setHeader('Content-Length', svg.length.toString())
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Max-Age', '3600')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Api-Version')
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=3600')
  res.setHeader('Pragma', 'no-cache')
  res.end(svg)
}
