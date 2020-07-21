import { useState, useEffect } from 'react';

export default function useDraggable(el) {
  let active = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  useEffect(() => {
    function dragStart(e) {
      if (e.type === 'touchstart') {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target) {
        active = true;
      }
    }
    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;
      active = false;
    }

    function drag(e) {
      if (active) {
        e.preventDefault();

        if (e.type === 'touchmove') {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, el);
      }
    }
    function setTranslate(xPos, yPos, el) {
      el.current.style.transform =
        'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
    }

    el.current.addEventListener('touchstart', dragStart, false);
    el.current.addEventListener('touchend', dragEnd, false);
    el.current.addEventListener('touchmove', drag, false);

    el.current.addEventListener('mousedown', dragStart, false);
    el.current.addEventListener('mouseup', dragEnd, false);
    el.current.addEventListener('mousemove', drag, false);
  });
}
