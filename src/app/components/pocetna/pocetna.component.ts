import { Component } from '@angular/core';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css'],
})
export class PocetnaComponent {
  icons = [
    { name: 'Udarno', imageUrl: 'assets/news-report.png' },
    { name: 'Najnovije', imageUrl: 'assets/news-report.png' },
    { name: 'Dnevne', imageUrl: 'assets/news-report.png' },
  ];

  news = [
    {
      title: 'Trump ne odustaje od Grenlanda i Panamskog kanala',
      author: 'Mirza Šabanović',
      date: 'May 2, 2024',
      image: 'assets/trump.jpeg',
      comments: 1,
      likes: 1,
    },
    {
      title: 'BiH propada',
      author: 'Mirza Šabanović',
      date: 'February 15, 2024',
      image: 'assets/vijesti.jpeg',
      comments: 0,
      likes: 2,
    },
    {
      title: 'Euro valuta?"',
      author: 'Mirza Šabanović',
      date: 'February 15, 2024',
      image: 'assets/vijesti1.jpeg',
      comments: 1,
      likes: 1,
    },

    {
      title: 'Slučaj razotkrivnja istine"',
      author: 'Mirza Šabanović',
      date: 'February 15, 2024',
      image: 'assets/vijesti2.jpeg',
      comments: 1,
      likes: 1,
    },
    {
      title: 'Grad Tuzla"',
      author: 'Mirza Šabanović',
      date: 'February 15, 2024',
      image: 'assets/vijesti3.jpeg',
      comments: 1,
      likes: 1,
    },
    {
      title: 'Udarne Vijesti"',
      author: 'Mirza Šabanović',
      date: 'February 15, 2024',
      image: 'assets/vijesti4.jpeg',
      comments: 1,
      likes: 1,
    },
    {
      title: 'Budžet Sarajeva za 2024 godinu?"',
      author: 'Mirza Šabanović',
      date: 'February 15, 2024',
      image: 'assets/vijesti5.jpg',
      comments: 1,
      likes: 1,
    },
  ];

  selectedNews: any = null;

  openModal(item: any) {
    this.selectedNews = item;
  }

  closeModal() {
    this.selectedNews = null;
  }

  deleteNews(item: any) {
    this.news = this.news.filter((newsItem) => newsItem !== item);
    this.closeModal();
  }
}
