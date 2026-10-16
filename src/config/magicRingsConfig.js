/**
 * MagicRings Background Configuration
 * 
 * You can customize all visual and interactive settings of the MagicRings
 * background behind the 3D character model here.
 * 
 * Location: src/config/magicRingsConfig.js
 */

export const magicRingsConfig = {
  // Colors (as shown in your Portal preset)
  color: "#6cedec",       // Color of the innermost ring (Cyan / Teal)
  colorTwo: "#1116eb",    // Color of the outermost ring (Deep Blue)

  // Ring Geometry & Appearance
  ringCount: 3,           // Number of rings (1 to 12)
  lineThickness: 2,       // Thickness of the rings in px
  glow: 1,                // Glow intensity (0 to 3)
  baseRadius: 0.31,       // Innermost ring radius as share of container
  radiusStep: 0.2,        // Spacing between neighboring rings
  expansion: 0.1,         // How far rings drift outward while glowing
  taper: 1.5,             // How quickly outer rings shorten into side arcs

  // Motion & Animation
  motion: "pulse",        // 'pulse' | 'ripple' | 'breathe'
  speed: 2,               // Animation speed (0 freezes animation)
  rotation: 0,            // Pattern rotation angle in degrees
  spin: 0,                // Arc spin around center
  tilt: 0,                // 3D tilt angle in degrees (-80 to 80)

  // Optical & Shader Effects
  dispersion: 0,          // Rainbow prism effect (0 to 1)
  grain: 0,               // Film grain effect (0 to 1)
  opacity: 1,             // Master opacity (0 to 1)
  theme: "dark",          // 'dark' | 'light'

  // Interaction & Physics
  followMouse: false,     // Whether rings drift toward cursor
  mouseInfluence: 0.2,    // Drift strength if followMouse is true
  hoverScale: 1.2,        // Scale multiplier on hover
  hoverIntensity: 1,      // Brightness & thickness increase on hover
  parallax: 0.05,         // Depth parallax tilt on cursor movement
  clickBurst: true,       // Emits an expanding burst wave on click
  intro: true,            // Animated intro when mounting
};

export default magicRingsConfig;
