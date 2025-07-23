import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HistoriaEvent {
  year: number;
  title: string;
  description: string;
  icon?: string;
}

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historia.html',
  styleUrl: './historia.css'
})
export class Historia {

  historiaEvents: HistoriaEvent[] = [
    {
      year: 1985,
      title: 'Fundación del Club',
      description: 'Nace Club Deportivo Los Cachorros en el corazón de Sagrada Familia, con el sueño de formar jóvenes talentos y representar con orgullo a nuestra comuna.'
    },
    {
      year: 1992,
      title: 'Primer Campeonato Local',
      description: 'Conquistamos nuestro primer título en el campeonato comunal, marcando el inicio de una era dorada para el club.'
    },
    {
      year: 1998,
      title: 'Construcción del Estadio',
      description: 'Se inaugura nuestro estadio municipal, convirtiéndose en la casa de Los Cachorros y el centro deportivo de la comuna.'
    },
    {
      year: 2005,
      title: 'Ascenso a Segunda División',
      description: 'Logramos el histórico ascenso a la Segunda División del fútbol chileno, cumpliendo el sueño de toda una generación.'
    },
    {
      year: 2012,
      title: 'Academia de Formación',
      description: 'Creamos nuestra academia de fútbol juvenil, fortaleciendo nuestro compromiso con el desarrollo de talentos locales.'
    },
    {
      year: 2018,
      title: 'Centenario de la Comuna',
      description: 'Participamos activamente en la celebración del centenario de Sagrada Familia, reafirmando nuestro vínculo con la comunidad.'
    },
    {
      year: 2023,
      title: 'Modernización Integral',
      description: 'Iniciamos un proceso de modernización del club, incorporando nuevas tecnologías y metodologías de entrenamiento.'
    }
  ];

  clubStats = [
    { number: '39', label: 'Años de Historia' },
    { number: '15', label: 'Títulos Ganados' },
    { number: '200+', label: 'Jugadores Formados' },
    { number: '3000+', label: 'Socios Activos' }
  ];

  clubValues = [
    {
      icon: '⚽',
      title: 'Pasión',
      description: 'Vivimos cada partido con la intensidad y el amor que caracteriza a Los Cachorros'
    },
    {
      icon: '🤝',
      title: 'Unidad',
      description: 'Somos una gran familia que trabaja junta por los objetivos del club'
    },
    {
      icon: '🏆',
      title: 'Excelencia',
      description: 'Buscamos la mejora continua en cada aspecto deportivo y formativo'
    },
    {
      icon: '❤️',
      title: 'Compromiso',
      description: 'Con nuestra comuna, nuestros jugadores y nuestra afición'
    }
  ];
}
