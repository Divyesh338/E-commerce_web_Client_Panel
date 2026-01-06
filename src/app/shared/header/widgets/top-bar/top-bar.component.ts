import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements AfterViewInit {
  private lastScroll = 0;

  ngAfterViewInit(): void {
    const topbar = document.querySelector('.topbar-wrapper') as HTMLElement;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      // 1️⃣ Change color when scrolling down a little
      if (currentScroll > 50) {
        topbar.classList.add('topbar-dark');
      } else {
        topbar.classList.remove('topbar-dark');
      }

      // 2️⃣ Hide on scroll down
      if (currentScroll > this.lastScroll && currentScroll > 150) {
        gsap.to(topbar, {
          y: '-100%',
          duration: 0.4,
          ease: 'power2.out',
        });
      }

      // 3️⃣ Show on scroll up
      if (currentScroll < this.lastScroll) {
        gsap.to(topbar, {
          y: '0%',
          duration: 0.4,
          ease: 'power2.out',
        });
      }

      this.lastScroll = currentScroll;
    });
  }
}
