import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
    projects = [
    {
      title: 'Shika Land Project',
      description: 'A full-stack property listing system with booking and admin management.',
      tech: ['Angular', 'NestJS', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/miguelkimdavis/ShikaLand',
    },
    {
      title: 'To-Do List App',
      description: 'A simple and interactive task management app built with Angular. Users can add, mark complete, and delete tasks with a user-friendly interface.',
      tech: ['Angular'],
      github: 'https://github.com/miguelkimdavis/To-Do-List',
      liveDemo: 'https://to-do-list-ten-blond-13.vercel.app/'
    },
    {
      title: 'Task Manager',
      description: 'A task tracking system that allows users to create, edit, view, and delete tasks with priority and status management.',
      tech: ['Angular'],
      github: 'https://github.com/miguelkimdavis/task-manager',
      liveDemo: 'https://task-manager-bay-two.vercel.app/'
    },
    {
      title: 'SpaceX Clone',
      description: 'A responsive multi-page website inspired by SpaceX, showcasing missions, launches, and reusable UI components.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/miguelkimdavis/Space-X-Clone',
      liveDemo: 'https://miguelkimdavis.github.io/Space-X-Clone/'
    },
    {
      title: 'Professional Website Clone',
      description: 'A responsive marketing website clone with a modern UI and rich features like pricing plans, testimonials, FAQs, and a demo booking option.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/miguelkimdavis/professional-website-clone',
      liveDemo: 'https://miguelkimdavis.github.io/professional-website-clone/'
    },

  ];
}
