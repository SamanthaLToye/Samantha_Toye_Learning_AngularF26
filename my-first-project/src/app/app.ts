import { Component } from '@angular/core';
import { collection } from './shared/collection';
import { CollectionList } from './Components/collection-list/collection-list';
import { RouterOutlet} from '@angular/router';

@Component({
  imports: [RouterOutlet, CollectionList],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class AppComponent {
  //create array with 6 instances of my collection
  collection: collection[] = [
    {
      id: 1,
      name: 'Babe Ruth & Lou Gerhig Card',
      category: 'Trading Card',
      value: 7000.0,
      condition: 'Mint',
    },
    {
      id: 2,
      name: 'Star Wars Figure',
      category: 'Figure',
      value: 125.0,
      condition: 'Near Mint',
    },
    {
      id: 3,
      name: 'Detroit Tigers Signed Ball',
      category: 'Collectible',
      value: 175.0,
      condition: 'Near Mint',
    },
    {
      id: 4,
      name: 'Charizard Model Display',
      category: 'Figure',
      value: 100.0,
    },
    {
      id: 5,
      name: 'Comic Book Superman Issue 15',
      category: 'Collectible',
      value: 45.0,
      condition: 'Near Mint',
    },
    {
      id: 6,
      name: 'Michael Jordan Baseball Card',
      category: 'Trading Card',
      value: 50.0,
      condition: 'Near Mint',
    },
    {
      id: 7,
      name: 'Superman Action Figure',
      category: 'Figure',
      value: 89.0,
    },
  ];
}
