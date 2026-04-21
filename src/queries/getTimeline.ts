import { TimelineItem } from '../types';

const timeline: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Sapien One AI',
    title: 'Software Development Intern',
    techStack: 'Java, Python, REST APIs, AI-powered backends',
    summaryPoints: [
      'Contributing to backend development for AI-powered solutions within the Algo8 AI ecosystem.',
      'Building REST APIs, optimizing queries, and improving code quality using industry standards.',
      'Participating in testing, debugging, and deployment activities in an agile environment.',
    ],
    dateRange: 'Nov 2025 – Apr 2026',
  },
  {
    timelineType: 'education',
    name: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    title: 'B.Tech in Computer Science and Engineering (CGPA: 7.6)',
    techStack: '',
    summaryPoints: [
      'Relevant coursework: Artificial Intelligence, Machine Learning, Data Structures, DBMS, Operating Systems.',
    ],
    dateRange: 'Expected July 2027',
  },
  {
    timelineType: 'education',
    name: 'Little Flower School, Gorakhpur',
    title: 'Senior Secondary (Class XII)',
    techStack: '',
    summaryPoints: [],
    dateRange: 'May 2023',
  },
  {
    timelineType: 'education',
    name: 'Little Flower School, Gorakhpur',
    title: 'High School (Class X)',
    techStack: '',
    summaryPoints: [],
    dateRange: 'May 2021',
  },
];

export async function getTimeline(): Promise<TimelineItem[]> {
  return Promise.resolve(timeline);
}
