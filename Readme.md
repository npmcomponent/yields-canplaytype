*This repository is a mirror of the [component](http://component.io) module [yields/canplaytype](http://github.com/yields/canplaytype). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/yields-canplaytype`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

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
