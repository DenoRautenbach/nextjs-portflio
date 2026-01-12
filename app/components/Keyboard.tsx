'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { SplitText } from 'gsap/SplitText';
import Magnet from './Magnet';
import Projectslayout from './ProjectsLayout';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Observer, SplitText);
}

// Individual Section Components
const Keyboard = () => (
    <div className="">
        <input id="dark" type="checkbox" />
            <div className="wrapper">
            <div className="keyboard">
            <div className="left">
                <div className="top">
                <div className="glow small">
                    <p>ESC</p>
                </div>
                <div className="fn-keys">
                    <div className="group glow small">
                    <p>F1</p>
                    <p>F2</p>
                    <p>F3</p>
                    <p>F4</p>
                    </div>
                    <div className="group glow small">
                    <p>F5</p>
                    <p>F6</p>
                    <p>F7</p>
                    <p>F8</p>
                    </div>
                    <div className="group glow small">
                    <p>F9</p>
                    <p>F10</p>
                    <p>F11</p>
                    <p>F12</p>
                    </div>
                </div>
                </div>
                <div className="main glow">
                <div className="row small">
                    <p>` ~</p>
                    <p>1 !</p>
                    <p>2 @</p>
                    <p>3 #</p>
                    <p>4 $</p>
                    <p>5 %</p>
                    <p>6 ^</p>
                    <p>7 &</p>
                    <p>8 *</p>
                    <p>9 (</p>
                    <p>0 )</p>
                    <p>- _</p>
                    <p>= +</p>
                    <p style={{ flexGrow: 20 }}>⟵</p>
                </div>
                <div className="row">
                    <p style={{ flexGrow: 20 }}>⇆</p>
                    <p>Q</p>
                    <p>W</p>
                    <p>E</p>
                    <p>R</p>
                    <p>T</p>
                    <p>Y</p>
                    <p>U</p>
                    <p>I</p>
                    <p>O</p>
                    <p>P</p>
                    <p>[</p>
                    <p>]</p>
                    <p style={{ flexGrow: 20 }}>\ |</p>
                </div>
                <div className="row">
                    <p style={{ flexGrow: 20 }}>🠿</p>
                    <p>A</p>
                    <p>S</p>
                    <p>D</p>
                    <p>F</p>
                    <p>G</p>
                    <p>H</p>
                    <p>J</p>
                    <p>K</p>
                    <p>L</p>
                    <p>; :</p>
                    {/* <p>' "</p> */}
                    <p style={{ flexGrow: 30 }}>⮐</p>
                </div>
                <div className="row">
                    <p style={{ flexGrow: 20 }}>🠽</p>
                    <p>Z</p>
                    <p>X</p>
                    <p>C</p>
                    <p>V</p>
                    <p>B</p>
                    <p>N</p>
                    <p>M</p>
                    <p>, &lt;</p>
                    <p>. &gt;</p>
                    <p>/ ?</p>
                    <p style={{ flexGrow: 30 }}>🠽</p>
                </div>
                <div className="row small">
                    <p>Ctrl</p>
                    <p>⊞</p>
                    <p>Alt</p>
                    <p style={{ flexGrow: 25 }}></p>
                    <p>Alt</p>
                    <p>⊞</p>
                    <p>Fn</p>
                    <p>Ctrl</p>
                </div>
                </div>
            </div>
            <div className="right">
                <div className="top small">
                <div className="row glow">
                    <p className="small">PrtSc</p>
                    <p className="small">ScrLk</p>
                    <p className="small">Pause</p>
                </div>
                <div className="group glow">
                    <div className="row">
                    <p className="small">Ins</p>
                    <p className="small">Home</p>
                    <p className="small">PgUp</p>
                    </div>
                    <div className="row">
                    <p className="small">Del</p>
                    <p className="small">End</p>
                    <p className="small">PgDn</p>
                    </div>
                </div>
                </div>
                <div className="arrows">
                <div className="group">
                    <div className="row" style={{ justifyContent: 'center' }}>
                    <div className="glow" style={{ paddingBottom: '.5em' }}>
                        <p>🡩</p>
                    </div>
                    </div>
                    <div className="row glow">
                    <p>🡨</p>
                    <p>🡫</p>
                    <p>🡪</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
    </div>
  );

export default Keyboard;