const mulberry32 = (seed) => {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
};

const randomInRange = (random, [min, max]) => min + random() * (max - min);

const formatValue = (value, precision) => Number(value.toFixed(precision));

export const generateFloatingShapes = ({
  count,
  seed = 1,
  topRange = [0, 80],
  leftRange = [0, 80],
  widthRange = [10, 35],
  heightRange = [10, 35],
  delayStep = 0.5,
  precision = 4,
}) => {
  const random = mulberry32(seed);

  return Array.from({ length: count }, (_, index) => ({
    top: `${formatValue(randomInRange(random, topRange), precision)}%`,
    left: `${formatValue(randomInRange(random, leftRange), precision)}%`,
    width: `${formatValue(randomInRange(random, widthRange), precision)}px`,
    height: `${formatValue(randomInRange(random, heightRange), precision)}px`,
    animationDelay: `${formatValue(index * delayStep, 2)}s`,
  }));
};

export default generateFloatingShapes;