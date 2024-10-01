"use client";

import {ChangeEventHandler} from "react";

export const LiveThemingControls = () => {
  // ${pixels ? 'px' : ''}`

  const handleColorChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    document.documentElement.style.setProperty(
      `--${event.target.name}`,
      `${event.target.value}`
    );
  }

  return (
    <div>
      <div>
        <label htmlFor="bg-color">Background color</label>
        <input type="color" name="bg-color" className="block order border-neutral-200" onChange={handleColorChange}/>
      </div>
      <div>
        <label htmlFor="text-color">Text color</label>
        <input type="color" name="text-color" className="block border border-neutral-200" onChange={handleColorChange}/>
      </div>
      <div>
        <label htmlFor="font-family">Font family</label>
        <input type="text" name="font-family" className="border border-neutral-200"/>
      </div>
      <div>
        <label htmlFor="font-size">Base font size</label>
        <input type="text" name="font-size" className="border border-neutral-200"/>
      </div>
      <div>
        <label htmlFor="line-height">Base line height</label>
        <input type="text" name="line-height" className="border border-neutral-200"/>
      </div>
    </div>
  );
}