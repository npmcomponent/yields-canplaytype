
# canplaytype

  Audio canplaytype douchebaggery removed

## Installation

    $ component install yields/canplaytype

## API

#### canplaytype([type])

the type is defaulted to `audio/mpeg;`.

```javascript
canplaytype();
// > maybe

// no window.Audio
canplaytype();
// > false

// cannot play the given type
canplaytype('foo');
// > false
```

## License

  MIT
