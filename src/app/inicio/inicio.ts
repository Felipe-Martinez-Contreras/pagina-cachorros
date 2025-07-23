import { CommonModule } from '@angular/common';
import { Component, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


export interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})



export class Inicio implements OnInit, OnDestroy {
  // Configuración del carrusel
  autoplay = true;
  autoplayInterval = 8000;
  infinite = true;
constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  // Señales para el estado del carrusel
  currentIndex = signal(0);
  isPlaying = signal(false);
  
  private autoplayTimer?: number;

  // Imágenes del carrusel - Usando assets locales
  images = signal<CarouselImage[]>([
    {
      src: 'cachorro.png',
      alt: 'Imagen destacada 1',
      title: 'Innovación y Tecnología',
      description: 'Descubre las últimas tendencias tecnológicas que están transformando el mundo'
    },
    {
      src: 'cachorros.jpg',
      alt: 'Imagen destacada 2',
      title: 'Diseño Creativo',
      description: 'Soluciones creativas que inspiran y conectan con tu audiencia'
    },
    {
      src: 'image.png',
      alt: 'Imagen destacada 3',
      title: 'Experiencia de Usuario',
      description: 'Creamos experiencias digitales memorables y efectivas'
    },
    {
      src: 'assets/images/carousel/slide-4.jpg',
      alt: 'Imagen destacada 4',
      title: 'Resultados Garantizados',
      description: 'Nuestro compromiso es entregar resultados que superen tus expectativas'
    },
    {
      src: 'assets/images/carousel/slide-5.jpg',
      alt: 'Imagen destacada 5',
      title: 'Equipo Profesional',
      description: 'Un equipo de expertos dedicados a hacer realidad tus proyectos'
    }
  ]);

  // Computed para la posición del carrusel
  translateX = computed(() => {
    return `${-(this.currentIndex() * 100)}%`;
  });

  ngOnInit() {
    if (this.autoplay) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  nextSlide() {
    const current = this.currentIndex();
    const max = this.images().length - 1;
    
    console.log('Next slide - Current:', current, 'Max:', max);
    
    if (current < max) {
      this.currentIndex.set(current + 1);
    } else if (this.infinite) {
      this.currentIndex.set(0);
    }
    
    console.log('New index:', this.currentIndex());
  }

  previousSlide() {
    const current = this.currentIndex();
    const max = this.images().length - 1;
    
    console.log('Previous slide - Current:', current, 'Max:', max);
    
    if (current > 0) {
      this.currentIndex.set(current - 1);
    } else if (this.infinite) {
      this.currentIndex.set(max);
    }
    
    console.log('New index:', this.currentIndex());
  }

  goToSlide(index: number) {
    console.log('Go to slide:', index);
    if (index >= 0 && index < this.images().length) {
      this.currentIndex.set(index);
    }
    console.log('New index:', this.currentIndex());
  }

  startAutoplay() {
  if (isPlatformBrowser(this.platformId)) {
    if (this.autoplay && !this.isPlaying()) {
      this.isPlaying.set(true);
      this.autoplayTimer = window.setInterval(() => {
        this.nextSlide();
      }, this.autoplayInterval);
    }
  }
}


  stopAutoplay() {
  if (isPlatformBrowser(this.platformId)) {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = undefined;
      this.isPlaying.set(false);
    }
  }
}


  onImageLoad() {
    console.log('Imagen cargada exitosamente');
  }

  onImageError(event: Event) {
    console.error('Error al cargar imagen:', event);
    const img = event.target as HTMLImageElement;
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
  }
}