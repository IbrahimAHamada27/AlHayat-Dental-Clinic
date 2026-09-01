import {
  Component,
  input,
  signal,
  ElementRef,
  viewChild,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-before-after-slider',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './before-after-slider.component.html',
  styleUrls: ['./before-after-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeforeAfterSliderComponent {
  beforeImage = input.required<string>();
  afterImage = input.required<string>();
  beforeLabel = input<string>('قبل العلاج');
  afterLabel = input<string>('بعد العلاج');
  altText = input<string>('مقارنة النتيجة السريرية قبل وبعد العلاج');

  containerRef = viewChild<ElementRef<HTMLElement>>('sliderContainer');

  sliderPosition = signal<number>(50);
  isDragging = signal<boolean>(false);

  onPointerDown(event: PointerEvent): void {
    this.isDragging.set(true);
    this.updatePositionFromPointer(event);
    (event.target as HTMLElement).setPointerCapture?.(event.pointerId);
  }

  onPointerMove(event: PointerEvent): void {
    if (this.isDragging()) {
      this.updatePositionFromPointer(event);
    }
  }

  onPointerUp(event: PointerEvent): void {
    if (this.isDragging()) {
      this.isDragging.set(false);
      (event.target as HTMLElement).releasePointerCapture?.(event.pointerId);
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    const current = this.sliderPosition();
    const step = 5;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        this.sliderPosition.set(Math.max(0, current - step));
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        this.sliderPosition.set(Math.min(100, current + step));
        break;
      case 'Home':
        event.preventDefault();
        this.sliderPosition.set(0);
        break;
      case 'End':
        event.preventDefault();
        this.sliderPosition.set(100);
        break;
    }
  }

  private updatePositionFromPointer(event: PointerEvent): void {
    const container = this.containerRef()?.nativeElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    this.sliderPosition.set(percentage);
  }
}
