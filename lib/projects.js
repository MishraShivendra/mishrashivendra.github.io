export const projects = [
  {
    slug: "u-root",
    title: "u-root Open Source Contribution",
    subtitle: "Go-based rootfs & bootloader toolkit",
    description:
      "Contributed to the u-root/u-root project by implementing command-line tools for MD5, SHA1, SHA256, and checksum computation.",
    highlights: [
      "Implemented md5sum, shasum, cksum utilities in Go",
      "Merged as PR #906 into upstream repository",
    ],
    tech: ["Go", "Linux", "Open Source"],
    githubUrl: "https://github.com/u-root/u-root/pull/906",
  },

  {
    slug: "stats-library",
    title: "Stats Math Library Contribution",
    subtitle: "Distance algorithms in Go",
    description:
      "Extended third-party statistics library by implementing multiple distance algorithms with test coverage.",
    highlights: [
      "Implemented Euclidean, Manhattan, Minkowski, Chebyshev distances",
      "Added table-driven tests",
    ],
    tech: ["Go", "Algorithms"],
    githubUrl: "https://github.com/montanaflynn/stats/pull/35",
  },

  {
    slug: "vsh-hash",
    title: "VSH Hash Function (Rust)",
    subtitle: "Cryptographic hash experimentation",
    description:
      "Implemented a basic version of the VSH cryptographic hash function in Rust.",
    highlights: ["RustCrypto contribution (draft PR #495)"],
    tech: ["Rust", "Cryptography"],
    githubUrl: "https://github.com/RustCrypto/hashes/pull/495",
  },
{
  slug: "robotic-ml",
  title: "Robotic Environment Data Analysis",
  subtitle: "M.Tech Thesis · Robotics · Machine Learning",
  description:
    "Research project focused on robotic sensor data acquisition and machine-learning-based environment classification.",
  highlights: [
  "Developed embedded drivers for ARM7 and Atmega2560 (I2C, ADC, EEPROM, PWM, UART).",
  "Integrated and debugged multiple thermal imaging sensors (D6T-44L) via I2C switches (PCA9545).",
  "Performed FFT-based signal analysis on microphone data using MATLAB.",
  "Implemented UART-based communication with ZigBee (XBEE) wireless modules.",
  "Implemented distance metrics and K-Means clustering in C/C++.",
  "Published results in Springer conference proceedings.",
],

  tech: ["C", "C++", "MATLAB", "Machine Learning", "Embedded Systems"],

  githubUrl: "https://github.com/MishraShivendra/post_grad_proj", // if public
  publicationUrl:
    "https://link.springer.com/chapter/10.1007/978-81-322-2202-6_44",
  demoVideo: "https://www.youtube.com/embed/videoseries?list=PLA-0j0MQ0v7bxLkZh7yKlj0hj9K3uTqxM",
  demoUrl: "https://www.youtube.com/playlist?list=PLA-0j0MQ0v7bxLkZh7yKlj0hj9K3uTqxM",
},

  {
    slug: "stellar-docs",
    title: "Stellar Go Documentation",
    subtitle: "Payment network OSS",
    description:
      "Contributed documentation fixes to Stellar’s Go SDK, removing deprecated Go.list references.",
    highlights: ["Merged PR #4328"],
    tech: ["Go", "Documentation"],
    githubUrl: "https://github.com/stellar/go/commit/9a2f0980ba9ed3a3d693319128c40f15cce776a7",
  },

  {
    slug: "bitcoin-natpmp",
    title: "Bitcoin NAT-PMP Support",
    subtitle: "Networking enhancement",
    description:
      "Draft implementation to support NAT-PMP in Bitcoin Core.",
    highlights: ["PR #15717"],
    tech: ["C++", "Networking"],
    githubUrl: "https://github.com/bitcoin/bitcoin/pull/15717",
  },

  {
  slug: "server-room-automation",
  title: "Server Room Automation",
  subtitle: "IoT-based monitoring and automation system",
  description:
    "End-to-end automation and monitoring system for server rooms using sensors, embedded controllers, and backend services.",
  highlights: [
    "Designed sensor-based monitoring for temperature, motion, and power",
    "Implemented alerting and automation logic",
    "Integrated hardware, firmware, and backend services",
  ],
  tech: ["Embedded Systems", "IoT", "C/C++", "Linux", "Sensors"],
  githubUrl: "https://github.com/MishraShivendra/node_mcu_control_temperature",
  demoVideo: "https://www.youtube.com/embed/NXFKr1k28os",
}


  
];
