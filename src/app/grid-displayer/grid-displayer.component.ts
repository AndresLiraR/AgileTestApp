import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator/paginator';
import { catchError } from 'rxjs/internal/operators/catchError';
import { PhotosGridLoaderService } from '../services/photos-grid-loader.service';

@Component({
  selector: 'grid-displayer',
  templateUrl: './grid-displayer.component.html',
  styleUrls: ['./grid-displayer.component.scss'],
})
export class GridDisplayerComponent implements OnInit {
  ImagesData: any;
  imagesDataGrid: any;
  pagesLenght: number = 0;
  pageSize: number = 0;
  showFlag = false;
  selectedImageIndex = -1;
  imageObject: Array<object> = [];
  constructor(private PhotosGridLoaderService: PhotosGridLoaderService) {
    this.PhotosGridLoaderService.gridPhotosPaginationFirst().subscribe(
      (resp: any) => {
        this.ImagesData = resp;
        this.pagesLenght = resp.pageCount;
        this.pageSize = resp.pictures.length;
        this.imagesDataGrid = this.ImagesData.pictures;
        this.imagesDataGrid.forEach((element: any) => {
          this.imageObject.push({ image: element.cropped_picture });
        });
      },
      (err) => catchError
    );
  }

  ngOnInit(): void {}

  closeDisplayer() {
    this.selectedImageIndex = -1;
    this.showFlag = false;
  }
  displayPhoto(index: number) {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  onChangePage(event: PageEvent) {
    const currentPage = +event.pageIndex + 1;
    this.PhotosGridLoaderService.gridPhotosPagination(currentPage).subscribe(
      (resp: any) => {
        this.imagesDataGrid = resp.pictures;
      },
      (err) => catchError
    );
  }

  ngOnDestroy(): void {}
}
