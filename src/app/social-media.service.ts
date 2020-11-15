import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {
  socialMedia: any[] = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/apocalypse_suite/',
      description: '@apocalypse_suite',
      icon: '../../../assets/images/social/005-instagram.svg'
    },
    {
      name: 'Telegram',
      link: 'https://t.me/apocalypse_suite',
      description: '@apocalypse_suite',
      icon: '../../../assets/images/social/003-telegram.svg'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/kateryna-mitchenko/',
      description: 'Kateryna Mitchenko',
      icon: '../../../assets/images/social/002-linkedin.svg'
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/catherine.mitchenko/',
      description: 'Kateryna Mitchenko',
      icon: '../../../assets/images/social/004-facebook.svg'
    },
    {
      name: 'GitHub',
      link: 'https://github.com/apocalypse-suite',
      description: '@apocalypse-suite',
      icon: '../../../assets/images/social/001-github.svg'
    }
  ];

  constructor() {
  }
  getData(): any[]{
    return this.socialMedia;
  }
}
