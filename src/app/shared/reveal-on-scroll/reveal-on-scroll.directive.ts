import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  inject,
  input
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type RevealFrom = 'up' | 'left' | 'right' | 'scale';

@Directive({
  selector: '[srReveal]'
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  readonly revealFrom = input<RevealFrom>('up', { alias: 'srRevealFrom' });
  readonly revealDelay = input<string | number | null>(null, { alias: 'srRevealDelay' });

  @HostBinding('class.sr-reveal') protected readonly hasRevealClass = true;
  @HostBinding('class.sr-reveal--ready') protected isReady = false;
  @HostBinding('class.sr-reveal--visible') protected isVisible = false;

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);

  private observer?: IntersectionObserver;

  @HostBinding('attr.data-reveal-from')
  protected get dataRevealFrom(): RevealFrom {
    return this.revealFrom();
  }

  @HostBinding('style.--sr-reveal-delay')
  protected get revealDelayStyle(): string | null {
    const delay = this.revealDelay();

    if (delay === null || delay === undefined || delay === '') {
      return null;
    }

    return typeof delay === 'number' ? `${delay}ms` : delay;
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.reveal();
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof window.IntersectionObserver !== 'function') {
      this.reveal();
      return;
    }

    this.isReady = true;

    this.ngZone.runOutsideAngular(() => {
      this.observer = new window.IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }

            this.ngZone.run(() => this.reveal());
            this.observer?.disconnect();
            this.observer = undefined;
            break;
          }
        },
        {
          threshold: 0.18,
          rootMargin: '0px 0px -10% 0px'
        }
      );

      this.observer.observe(this.elementRef.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private reveal(): void {
    this.isReady = true;
    this.isVisible = true;
  }
}
