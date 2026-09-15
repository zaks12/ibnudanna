export type ProjectCategory =
  | 'Building Construction'
  | 'Civil Engineering'
  | 'Infrastructure'
  | 'Renovation';

export interface ProjectDetail {
  overview: string;
  scope: string[];
  location: string;
  status: string;
  gallery: string[];
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  detail: ProjectDetail;
}

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'Building Construction',
  'Civil Engineering',
  'Infrastructure',
  'Renovation',
];

export const projects: Project[] = [
  {
    id: 'modern-commercial-development',
    title: 'Modern Commercial Development',
    category: 'Building Construction',
    description: 'A multi-storey commercial structure with contemporary architectural design.',
    image:
      'https://images.pexels.com/photos/13094084/pexels-photo-13094084.jpeg?auto=compress&cs=tinysrgb&w=1200',
    detail: {
      overview:
        'A representative project concept for a multi-storey commercial building, illustrating the approach to structural design, material coordination, and phased construction delivery for modern business environments.',
      scope: [
        'Foundation and structural framework',
        'Facade and glazing installation',
        'Interior fit-out and finishing',
        'Mechanical and electrical coordination',
      ],
      location: 'To be confirmed',
      status: 'Demo / Representative Entry',
      gallery: [
        'https://images.pexels.com/photos/13094084/pexels-photo-13094084.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/33628380/pexels-photo-33628380.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/11654556/pexels-photo-11654556.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
  },
  {
    id: 'residential-building-project',
    title: 'Residential Building Project',
    category: 'Building Construction',
    description: 'Residential development with attention to structural integrity and finish quality.',
    image:
      'https://images.pexels.com/photos/39151690/pexels-photo-39151690.jpeg?auto=compress&cs=tinysrgb&w=1200',
    detail: {
      overview:
        'A representative residential construction concept demonstrating the approach to residential builds — from foundation work through to structural completion and finishing, with a focus on durability and liveability.',
      scope: [
        'Site preparation and foundation',
        'Structural framing and masonry',
        'Roofing and waterproofing',
        'Internal partitions and finishing',
      ],
      location: 'To be confirmed',
      status: 'Demo / Representative Entry',
      gallery: [
        'https://images.pexels.com/photos/39151690/pexels-photo-39151690.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/39494026/pexels-photo-39494026.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/39151698/pexels-photo-39151698.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
  },
  {
    id: 'urban-infrastructure-works',
    title: 'Urban Infrastructure Works',
    category: 'Infrastructure',
    description: 'Infrastructure project supporting road, drainage, and utility network development.',
    image:
      'https://images.pexels.com/photos/33125632/pexels-photo-33125632.jpeg?auto=compress&cs=tinysrgb&w=1200',
    detail: {
      overview:
        'A representative infrastructure concept covering road construction, drainage systems, and utility coordination, illustrating the approach to large-scale public infrastructure delivery.',
      scope: [
        'Roadway construction and surfacing',
        'Drainage and stormwater systems',
        'Utility installation and coordination',
        'Site reinstatement and landscaping',
      ],
      location: 'To be confirmed',
      status: 'Demo / Representative Entry',
      gallery: [
        'https://images.pexels.com/photos/33125632/pexels-photo-33125632.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/33563535/pexels-photo-33563535.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/34635214/pexels-photo-34635214.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
  },
  {
    id: 'contemporary-office-complex',
    title: 'Contemporary Office Complex',
    category: 'Building Construction',
    description: 'A modern office complex featuring glass facade and structural steel elements.',
    image:
      'https://images.pexels.com/photos/532562/pexels-photo-532562.jpeg?auto=compress&cs=tinysrgb&w=1200',
    detail: {
      overview:
        'A representative concept for a contemporary office complex, showcasing the approach to modern commercial architecture — combining structural steel, glazing systems, and coordinated interior delivery.',
      scope: [
        'Structural steel erection',
        'Curtain wall and glazing',
        'Core and vertical circulation',
        'Interior fit-out and MEP coordination',
      ],
      location: 'To be confirmed',
      status: 'Demo / Representative Entry',
      gallery: [
        'https://images.pexels.com/photos/532562/pexels-photo-532562.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/11861957/pexels-photo-11861957.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/14708805/pexels-photo-14708805.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
  },
  {
    id: 'community-development-project',
    title: 'Community Development Project',
    category: 'Civil Engineering',
    description: 'Civil engineering works supporting community infrastructure and public facilities.',
    image:
      'https://images.pexels.com/photos/32777399/pexels-photo-32777399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    detail: {
      overview:
        'A representative civil engineering concept for community-focused infrastructure, illustrating the approach to public-facing construction — from structural works through to site completion and handover.',
      scope: [
        'Structural concrete and reinforcement',
        'Access roads and pathways',
        'Utility connections',
        'Site works and finishing',
      ],
      location: 'To be confirmed',
      status: 'Demo / Representative Entry',
      gallery: [
        'https://images.pexels.com/photos/32777399/pexels-photo-32777399.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/19102483/pexels-photo-19102483.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/19513851/pexels-photo-19513851.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
  },
  {
    id: 'building-renovation-upgrade',
    title: 'Building Renovation & Upgrade',
    category: 'Renovation',
    description: 'Renovation and refurbishment of an existing structure with modern upgrades.',
    image:
      'https://images.pexels.com/photos/36035072/pexels-photo-36035072.jpeg?auto=compress&cs=tinysrgb&w=1200',
    detail: {
      overview:
        'A representative renovation concept demonstrating the approach to upgrading existing structures — preserving structural integrity while modernising functionality, finishes, and building systems.',
      scope: [
        'Structural assessment and repair',
        'Interior demolition and reconfiguration',
        'Modernised finishes and fittings',
        'Mechanical and electrical upgrades',
      ],
      location: 'To be confirmed',
      status: 'Demo / Representative Entry',
      gallery: [
        'https://images.pexels.com/photos/36035072/pexels-photo-36035072.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/23358344/pexels-photo-23358344.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4817843/pexels-photo-4817843.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
  },
];
