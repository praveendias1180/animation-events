# Animation Events

The animationstart event is fired when a CSS Animation has started. If there is an animation-delay, this event will fire once the delay period has expired. A negative delay will cause the event to fire with an elapsedTime equal to the absolute value of the delay (and, correspondingly, the animation will begin playing at that time index into the sequence).

https://developer.mozilla.org/en-US/docs/Web/API/Element/animationstart_event

```
addEventListener('animationstart', (event) => {});

onanimationstart = (event) => { };
```

# Live Demo

https://praveendias1180.github.io/animation-events/