export interface AsteroidData {
  label: string;
  description: string;
  size: number;
  speed: number;
  distanceFromSun: number;
  texture: string;
  position?: [number, number, number];
}

const ADDITIVE_SCALE = 1.0;

export const asteroidData: AsteroidData[] = [
  {
    label: 'Apophis',
    size: 0.34 + ADDITIVE_SCALE,
    speed: 0.002 + Math.random() * 0.001,
    distanceFromSun: 1.1,
    description:
      'Apophis is a near-Earth asteroid that has a chance of impacting Earth in 2029.',
    texture: '/assets/apophis.jpg',
  },
  {
    label: 'Ryugu',
    size: 0.896 + ADDITIVE_SCALE,
    speed: 0.0025 + Math.random() * 0.001,
    distanceFromSun: 1.5,
    description:
      'Ryugu is a carbon-rich asteroid that was visited by the Hayabusa2 spacecraft.',
    texture: '/assets/ryugu.jpg',
  },
  {
    label: 'Bennu',
    size: 0.482 + ADDITIVE_SCALE,
    speed: 0.002 + Math.random() * 0.001,
    distanceFromSun: 1.6,
    description:
      "Bennu is a near-Earth asteroid that is the target of NASA's OSIRIS-REx mission.",
    texture: '/assets/bennu.jpg',
  },
  {
    label: 'Didymos',
    size: 0.78 + ADDITIVE_SCALE,
    speed: 0.0015 + Math.random() * 0.001,
    distanceFromSun: 2.2,
    description:
      'Didymos is a binary asteroid system with a larger primary and a smaller secondary.',
    texture: '/assets/didymos.jpg',
  },
  {
    label: 'Braille',
    size: 2.155 + ADDITIVE_SCALE,
    speed: 0.003 + Math.random() * 0.001,
    distanceFromSun: 2.5,
    description:
      'Braille is a small asteroid named after the inventor of the Braille system.',
    texture: '/assets/braille.jpg',
  },
  {
    label: 'Annefrank',
    size: 4.8 + ADDITIVE_SCALE,
    speed: 0.002 + Math.random() * 0.001,
    distanceFromSun: 3.0,
    description:
      'Anne Frank is an asteroid named after the Jewish girl who became an emblem of the Holocaust.',
    texture: '/assets/anne_frank.jpg',
  },
];
