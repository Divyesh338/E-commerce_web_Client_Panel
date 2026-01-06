import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements AfterViewInit {
  @ViewChildren('commonSection') sections!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    gsap.from('header', {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: 'power1.out',
    });

    gsap.from(
      this.sections.map((s) => s.nativeElement),
      {
        opacity: 0,
        y: 100,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power1.out',
      }
    );

    this.sections.forEach((section) => {
      this.imageHoverAnimation(section.nativeElement);
    });
  }

  private imageHoverAnimation(section: HTMLElement): void {
    const overlay = section.querySelector('.image-overLay') as HTMLElement;
    const button = section.querySelector('.btn a') as HTMLElement;

    section.addEventListener('mouseenter', () => {
      gsap.to(overlay, {
        y: '100%',
        duration: 0.8,
        ease: 'power1.inOut',
      });

      gsap.to(button, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
      });
    });

    section.addEventListener('mouseleave', () => {
      gsap.to(overlay, {
        y: '0%',
        duration: 0.8,
        ease: 'power1.inOut',
      });

      gsap.to(button, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
      });
    });
  }
}
