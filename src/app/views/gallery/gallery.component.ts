import { Component, OnInit } from '@angular/core';
import { galleyItems } from '../../appModal/galleryitems';

export interface Gallery {
  id: number;
  imgUrl: string;
  title: string;
  dec : string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  galleryItem: Gallery[] = [];
  constructor(private gallery: galleyItems) {}

  ngOnInit(): void {
    this.galleryItem = this.gallery.galleryData;
  }
}
