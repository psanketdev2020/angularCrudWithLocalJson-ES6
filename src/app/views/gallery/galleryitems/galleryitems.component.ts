import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { galleyItems } from 'src/app/appModal/galleryitems';

export interface Gallery {
  id: number;
  imgUrl: string;
  title: string;
  dec : string;
}

@Component({
  selector: 'app-galleryitems',
  templateUrl: './galleryitems.component.html',
  styleUrls: ['./galleryitems.component.css'],
})
export class GalleryitemsComponent implements OnInit {
  galleryItem: Gallery[] = [];
  selectedItem: any;
  currentId: number = 0;
  constructor(private gallery: galleyItems, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.galleryItem = this.gallery.galleryData;
    this.activeRoute.params.subscribe((param: Params) => {
      this.currentId = param['id'];
    });
      // this.selectedItem = this.galleryItem[this.currentId - 1];
  }
}
