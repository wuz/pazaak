/**
 * A functional observable library for JS
 *
 */


const pazaak = (fn) => {
  let ref;
  return {
    subscribe: (observer) => {
      ref = fn(observer);
      return {
        unsubscribe: ref,
      };
    },
  };
};

const of = (...items) =>
  pazaak((observer) => {
    items.forEach((item) => {
      observer.next(item);
    });
    observer.complete();
    return () => {};
  });

function Pazaak() {}

Pazaak.prototype.pazaak = pazaak;
Pazaak.prototype.of = of;

module.exports = new Pazaak();
