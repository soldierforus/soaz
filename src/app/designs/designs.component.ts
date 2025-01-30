import { Component, OnInit } from '@angular/core';
import { ToSlugPipe } from '../to-slug.pipe';
import { ActivatedRoute } from '@angular/router';

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
      package: string
    }[]
   =[
    {
        name: 'Paradigm Shift',
        category: 'Other',
        package: 'Basic'
    },
    {
        name: 'Standout',
        category: 'Portfolio',
        package: 'Standard/Pro'
    },
    {
        name: 'Inverse',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Hyperbolic',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Visualize',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Relativity',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Indivisible',
        category: 'Personal',
        package: 'Standard/Pro'
    },
    {
        name: 'Landscape',
        category: 'Other',
        package: 'Standard/Pro'
    },
    {
        name: 'Transit',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Massively',
        category: 'Other',
        package: 'Basic'
    },
    {
        name: 'Hypothesis',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Cascade',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Vortex',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Multiverse',
        category: 'Portfolio',
        package: 'Basic'
    },
    {
        name: 'Ethereal',
        category: 'Personal',
        package: 'Basic'
    },
    {
        name: 'Altitude',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Formula',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Dimension',
        category: 'Personal',
        package: 'Basic'
    },
    {
        name: 'Atmosphere',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Story',
        category: 'Anything',
        package: 'Basic'
    },
    {
        name: 'Telemetry',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Forty',
        category: 'Business',
        package: 'Basic'
    },
    {
        name: 'Editorial',
        category: 'Other',
        package: 'Basic'
    },
    {
        name: 'Faction',
        category: 'Other',
        package: 'Standard/Pro'
    },
    {
        name: 'Slate',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Phantom',
        category: 'Anything',
        package: 'Basic'
    },
    {
        name: 'Polymorph',
        category: 'Other',
        package: 'Standard/Pro'
    },
    {
        name: 'Stellar',
        category: 'Anything',
        package: 'Basic'
    },
    {
        name: 'Hologram',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Hyperspace',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Reflex',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Prototype',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Locus',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Solid State',
        category: 'Anything',
        package: 'Basic'
    },
    {
        name: 'Lens',
        category: 'Portfolio',
        package: 'Basic'
    },
    {
        name: 'Split Screen',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Tactile',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Future Imperfect',
        category: 'Other',
        package: 'Basic'
    },
    {
        name: 'Magnetic',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Fractal',
        category: 'Anything',
        package: 'Basic'
    },
    {
        name: 'Elemental',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Cogent',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Spectral',
        category: 'Anything',
        package: 'Basic'
    },
    {
        name: 'Construct',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Optics',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Exponent',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Archetype',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Eventually',
        category: 'Other',
        package: 'Basic'
    },
    {
        name: 'Photon',
        category: 'Anything',
        package: 'Basic'
    },
    {
        name: 'Scalar',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Strata',
        category: 'Personal',
        package: 'Basic'
    },
    {
        name: 'Catalyst',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Threshold',
        category: 'Anything',
        package: 'Standard/Pro'
    },
    {
        name: 'Highlights',
        category: 'Personal',
        package: 'Basic'
    },
    {
        name: 'Big Picture',
        category: 'Portfolio',
        package: 'Basic'
    },
    {
        name: 'Frequency',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Gravity',
        category: 'Business',
        package: 'Standard/Pro'
    },
    {
        name: 'Landed',
        category: 'Business',
        package: 'Basic'
    },
    {
        name: 'Elevation',
        category: 'Anything',
        package: 'Standard/Pro'
    },
  {
      name: 'Drift',
      category: 'Business',
      package: 'Standard/Pro'
  },
  {
      name: 'Read Only',
      category: 'Personal',
      package: 'Basic'
  },
  {
      name: 'Alpha',
      category: 'Anything',
      package: 'Basic'
  },
  {
      name: 'Telephasic',
      category: 'Anything',
      package: 'Basic'
  },
  {
      name: 'Latitude',
      category: 'Business',
      package: ''
  },
  {
      name: 'Twenty',
      category: 'Business',
      package: 'Basic'
  },
  {
      name: 'Momentum',
      category: 'Business',
      package: 'Standard/Pro'
  },
  {
      name: 'Iconic',
      category: 'Business',
      package: 'Standard/Pro'
  },
  {
      name: 'Parallelism',
      category: 'Portfolio',
      package: 'Basic'
  },
  {
      name: 'Helios',
      category: 'Anything',
      package: 'Basic'
  },
  {
      name: 'Directive',
      category: 'Anything',
      package: 'Basic'
  },
  {
      name: 'Prologue',
      category: 'Personal',
      package: 'Basic'
  },
  {
      name: 'Zenith',
      category: 'Business',
      package: 'Standard/Pro'
  },
  {
      name: 'Escape Velocity',
      category: 'Anything',
      package: 'Basic'
  },
  {
      name: 'Apex',
      category: 'Business',
      package: 'Standard/Pro'
  },
  {
      name: 'Tessellate',
      category: 'Anything',
      package: 'Basic'
  },
  {
      name: 'Astral',
      category: 'Personal',
      package: 'Basic'
  },
  {
      name: 'ZeroFour',
      category: 'Business',
      package: 'Basic'
  },
  {
      name: 'Wide Angle',
      category: 'Anything',
      package: 'Standard/Pro'
  },
  {
      name: 'Strongly Typed',
      category: 'Anything',
      package: 'Basic'
  },
  {
      name: 'TXT',
      category: 'Business',
      package: 'Basic'
  },
  {
      name: 'Concentric',
      category: 'Business',
      package: 'Standard/Pro'
  },
  {
      name: 'Dopetrope',
      category: 'Anything',
      package: 'Basic'
  },
  {
      name: 'Layered',
      category: 'Anything',
      package: 'Standard/Pro'
  },
  {
      name: 'Striped',
      category: 'Personal',
      package: 'Basic'
  },
  {
      name: 'Axiom',
      category: 'Business',
      package: 'Standard/Pro'
  },
  {
      name: 'Arcana',
      category: 'Business',
      package: 'Standard/Pro'
  },
  {
      name: 'Aerial',
      category: 'Personal',
      package: 'Basic'
  },
  {
      name: 'Verti',
      category: 'Anything',
      package: 'Basic'
  },
  {
      name: 'Venue',
      category: 'Business',
      package: 'Standard/Pro'
  },
  {
      name: 'Polaris',
      category: 'Anything',
      package: 'Standard/Pro'
  },
  {
      name: 'Miniport',
      category: 'Personal',
      package: 'Basic'
  }
    ]

    liveDemo: boolean = false;
  constructor(private route: ActivatedRoute) { 

    if(this.route.snapshot.routeConfig?.path?.includes('live-demo')) {
    this.liveDemo = true;
    }

  }

  ngOnInit() {

  }
}
