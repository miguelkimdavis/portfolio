import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
    technicalSkills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'NestJS',
    'Python',
    'MySQL',
    'Git & GitHub'
  ];

  personalSkills: string[] = [
    'Leadership',
    'Communication',
    'Problem Solving',
    'Teamwork',
    'Time Management',
    'Adaptability'
  ];
}
