(function (global) {
  const Life = function () {
    return true;
  };

  const Universe = function () {
    return true;
  };

  const Everything = function () {
    return true;
  };

  function getAnswerTo() {
    var _life;
    var _universe;
    var _everything;

    for (const arg of arguments) {
      if (arg.name === 'Life') {
        _life = arg();
      } else if (arg.name === 'Universe') {
        _universe = arg();
      } else if (arg.name === 'Everything') {
        _everything = arg();
      }
    }

    if (_life && _universe && _everything) {
      return 42;
    }

    throw new Error('Wait another 7.5 million years.');
  }

  // main class
  const GetTheAnswerToLifeTheUniverseAndEverything = function () {
    return getAnswerTo(Life, Universe, Everything);
  };

  GetTheAnswerToLifeTheUniverseAndEverything.prototype = {};
  global.GetTheAnswerToLifeTheUniverseAndEverything = GetTheAnswerToLifeTheUniverseAndEverything;
}(window));
