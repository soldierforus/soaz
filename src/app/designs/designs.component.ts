import { Component, OnInit } from '@angular/core';
import { ToSlugPipe } from '../to-slug.pipe';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css'],
  standalone: true,
  imports:[ToSlugPipe]
})
export class DesignsComponent implements OnInit {
  designs: 
    {
      name: string,
      category: string,
    }[]
   =[
    {
        name: 'Paradigm Shift',
        category: 'Other'
    },
    {
        name: 'Standout',
        category: 'Portfolio'
    },
    {
        name: 'Inverse',
        category: 'Business'
    },
    {
        name: 'Hyperbolic',
        category: 'Anything'
    },
    {
        name: 'Visualize',
        category: 'Business'
    },
    {
        name: 'Relativity',
        category: 'Business'
    },
    {
        name: 'Indivisible',
        category: 'Personal'
    },
    {
        name: 'Landscape',
        category: 'Other'
    },
    {
        name: 'Transit',
        category: 'Anything'
    },
    {
        name: 'Massively',
        category: 'Other'
    },
    {
        name: 'Hypothesis',
        category: 'Business'
    },
    {
        name: 'Cascade',
        category: 'Business'
    },
    {
        name: 'Vortex',
        category: 'Anything'
    },
    {
        name: 'Multiverse',
        category: 'Portfolio'
    },
    {
        name: 'Ethereal',
        category: 'Personal'
    },
    {
        name: 'Altitude',
        category: 'Business'
    },
    {
        name: 'Formula',
        category: 'Business'
    },
    {
        name: 'Dimension',
        category: 'Personal'
    },
    {
        name: 'Atmosphere',
        category: 'Business'
    },
    {
        name: 'Story',
        category: 'Anything'
    },
    {
        name: 'Telemetry',
        category: 'Business'
    },
    {
        name: 'Forty',
        category: 'Business'
    },
    {
        name: 'Editorial',
        category: 'Other'
    },
    {
        name: 'Faction',
        category: 'Other'
    },
    {
        name: 'Slate',
        category: 'Anything'
    },
    {
        name: 'Phantom',
        category: 'Anything'
    },
    {
        name: 'Polymorph',
        category: 'Other'
    },
    {
        name: 'Stellar',
        category: 'Anything'
    },
    {
        name: 'Hologram',
        category: 'Anything'
    },
    {
        name: 'Hyperspace',
        category: 'Anything'
    },
    {
        name: 'Reflex',
        category: 'Anything'
    },
    {
        name: 'Prototype',
        category: 'Business'
    },
    {
        name: 'Locus',
        category: 'Anything'
    },
    {
        name: 'Solid State',
        category: 'Anything'
    },
    {
        name: 'Lens',
        category: 'Portfolio'
    },
    {
        name: 'Split Screen',
        category: 'Anything'
    },
    {
        name: 'Tactile',
        category: 'Anything'
    },
    {
        name: 'Future Imperfect',
        category: 'Other'
    },
    {
        name: 'Magnetic',
        category: 'Anything'
    },
    {
        name: 'Fractal',
        category: 'Anything'
    },
    {
        name: 'Elemental',
        category: 'Business'
    },
    {
        name: 'Cogent',
        category: 'Business'
    },
    {
        name: 'Spectral',
        category: 'Anything'
    },
    {
        name: 'Construct',
        category: 'Anything'
    },
    {
        name: 'Optics',
        category: 'Anything'
    },
    {
        name: 'Exponent',
        category: 'Business'
    },
    {
        name: 'Archetype',
        category: 'Business'
    },
    {
        name: 'Eventually',
        category: 'Other'
    },
    {
        name: 'Photon',
        category: 'Anything'
    },
    {
        name: 'Scalar',
        category: 'Business'
    },
    {
        name: 'Strata',
        category: 'Personal'
    },
    {
        name: 'Catalyst',
        category: 'Anything'
    },
    {
        name: 'Threshold',
        category: 'Anything'
    },
    {
        name: 'Highlights',
        category: 'Personal'
    },
    {
        name: 'Big Picture',
        category: 'Portfolio'
    },
    {
        name: 'Frequency',
        category: 'Business'
    },
    {
        name: 'Gravity',
        category: 'Business'
    },
    {
        name: 'Landed',
        category: 'Business'
    },
    {
      name: 'Elevation',
      category: 'Anything'
  },
  {
      name: 'Drift',
      category: 'Business'
  },
  {
      name: 'Read Only',
      category: 'Personal'
  },
  {
      name: 'Alpha',
      category: 'Anything'
  },
  {
      name: 'Telephasic',
      category: 'Anything'
  },
  {
      name: 'Latitude',
      category: 'Business'
  },
  {
      name: 'Twenty',
      category: 'Business'
  },
  {
      name: 'Momentum',
      category: 'Business'
  },
  {
      name: 'Iconic',
      category: 'Business'
  },
  {
      name: 'Parallelism',
      category: 'Portfolio'
  },
  {
      name: 'Helios',
      category: 'Anything'
  },
  {
      name: 'Directive',
      category: 'Anything'
  },
  {
      name: 'Prologue',
      category: 'Personal'
  },
  {
      name: 'Zenith',
      category: 'Business'
  },
  {
      name: 'Escape Velocity',
      category: 'Anything'
  },
  {
      name: 'Apex',
      category: 'Business'
  },
  {
      name: 'Tessellate',
      category: 'Anything'
  },
  {
      name: 'Astral',
      category: 'Personal'
  },
  {
      name: 'ZeroFour',
      category: 'Business'
  },
  {
      name: 'Wide Angle',
      category: 'Anything'
  },
  {
      name: 'Strongly Typed',
      category: 'Anything'
  },
  {
      name: 'TXT',
      category: 'Business'
  },
  {
      name: 'Concentric',
      category: 'Business'
  },
  {
      name: 'Dopetrope',
      category: 'Anything'
  },
  {
      name: 'Layered',
      category: 'Anything'
  },
  {
      name: 'Striped',
      category: 'Personal'
  },
  {
      name: 'Axiom',
      category: 'Business'
  },
  {
      name: 'Arcana',
      category: 'Business'
  },
  {
      name: 'Aerial',
      category: 'Personal'
  },
  {
      name: 'Verti',
      category: 'Anything'
  },
  {
      name: 'Venue',
      category: 'Business'
  },
  {
      name: 'Polaris',
      category: 'Anything'
  },
  {
      name: 'Miniport',
      category: 'Personal'
  }
]

  constructor() { }

  ngOnInit() {
  }

}
