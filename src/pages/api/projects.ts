import type { NextApiRequest, NextApiResponse } from 'next'

import ProjectData from '../../types/Project'

export default (req: NextApiRequest, res: NextApiResponse<ProjectData[]>) => {
  res.status(200).json([
    {
      title: 'Yet another markdown editor',
      description:
        'Markdown editor with a preview. Responsive, dark/light mode support, lightweight.',
      image: 'yamde.png',
      link: 'https://www.npmjs.com/package/yamde',
      repository: 'https://github.com/AdrianApan/yamde',
    },
    {
      title: 'Highlighter prototype',
      description:
        'Interactive document/text highlighter proof of concept build with React.',
      image: 'highlighter_prototype.png',
      link: 'https://adrianapan.github.io/highlighter-prototype/',
      repository: 'https://github.com/AdrianApan/highlighter-prototype',
    },
    {
      title: 'NPM dependency graph',
      description:
        'Node module dependency graph search and visualiser build with React.',
      image: 'npm_deps_graph.png',
      link: 'https://adrianapan.github.io/npm-dependency-graph/',
      repository: 'https://github.com/AdrianApan/npm-dependency-graph',
    },
    {
      title: 'Mars weather insight',
      description: "Mars weather insight webapp built with NASA's InSight API.",
      image: 'mars_weather.png',
      link: 'https://adrianapan.github.io/mars-weather-insight/',
      repository: 'https://github.com/AdrianApan/mars-weather-insight',
    },
    {
      title: 'Machine learning templates',
      description:
        'Machine learning templates and course notes written in Python.',
      image: 'ml_templates.png',
      link: 'https://github.com/AdrianApan/machine-learning-templates',
      repository: 'https://github.com/AdrianApan/machine-learning-templates',
    },
    {
      title: 'Censtats',
      description:
        'US census data aggregation project. Built with Node and Express.',
      image: 'censtats.png',
      link: 'https://search.censtats.com/',
      repository: null,
    },
  ])
}
