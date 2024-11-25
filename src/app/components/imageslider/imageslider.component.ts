import { Component, Input, OnInit } from '@angular/core';

export interface SlideInterface {
  url: string;
  title: string;
}

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.scss'],
})
export class ImagesliderComponent implements OnInit {
  @Input() slides: SlideInterface[] = [];

  currentIndex: number = 0;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  getCurrentSlideUrl() {
    console.log(this.slides[this.currentIndex].url);
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
}
