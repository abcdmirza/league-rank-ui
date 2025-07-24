import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-rank',
  imports: [CommonModule],
  templateUrl: './league-rank.component.html',
  styleUrl: './league-rank.component.css',
   standalone: true
})
export class LeagueRankComponent implements OnInit {
  timer: string = '';
  topPlayers = [
    { rank: 1, name: 'PlayerOne', trophies: 1520, avatar: 'assets/avatar/avatar1.png', isYou: false },
    { rank: 2, name: 'PlayerTwo', trophies: 1420, avatar: 'assets/avatar/avatar2.png', isYou: false },
    { rank: 3, name: 'PlayerThree', trophies: 1380, avatar: 'assets/avatar/avatar3.png', isYou: false },
    { rank: 4, name: 'PlayerFour', trophies: 1300, avatar: 'assets/avatar/avatar4.png', isYou: false },
    { rank: 5, name: 'You', trophies: 1270, avatar: 'assets/avatar/avatar5.png', isYou: true },
    { rank: 6, name: 'PlayerSix', trophies: 1200, avatar: 'assets/avatar/avatar6.png', isYou: false },
    { rank: 7, name: 'PlayerSeven', trophies: 1100, avatar: 'assets/avatar/avatar7.png', isYou: false },
    { rank: 8, name: 'PlayerEight', trophies: 1050, avatar: 'assets/avatar/avatar8.png', isYou: false },
  ];

  ngOnInit(): void {
    this.startTimer(3 * 60 * 60); // 3 hours in seconds
  }

  startTimer(duration: number) {
    setInterval(() => {
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor((duration % 3600) / 60);
      const seconds = duration % 60;
      this.timer = `${this.pad(hours)}h ${this.pad(minutes)}m ${this.pad(seconds)}s`;
      duration--;
    }, 1000);
  }

  pad(num: number): string {
    return num.toString().padStart(2, '0');
  }
}


