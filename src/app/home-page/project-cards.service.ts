import { Injectable } from '@angular/core';
import { card } from './cards.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectCardsService {

  cards:card[]=[
    new card('To Do List','https://www.incimages.com/uploaded_files/image/1920x1080/getty_514914078_200013332000928076_167571.jpg','A Project created to hold List of your Task.','to_do_list'),
    new card('To Do List','https://www.incimages.com/uploaded_files/image/1920x1080/getty_514914078_200013332000928076_167571.jpg','A Project created to hold List of your Task.','to_do_list'),
    new card('To Do List','https://www.incimages.com/uploaded_files/image/1920x1080/getty_514914078_200013332000928076_167571.jpg','A Project created to hold List of your Task.','to_do_list'),
  ]
}
