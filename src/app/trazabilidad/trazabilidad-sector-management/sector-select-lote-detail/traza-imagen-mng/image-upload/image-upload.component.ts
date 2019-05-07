import { Component, OnInit } from '@angular/core';
import { ImageUploadServiceService } from '../service/image-upload-service/image-upload-service.service';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../../../../services/global-service/global.service';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  selectedFile: File = null;

  constructor(private httpClient: HttpClient,
              private globalService: GlobalService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
      console.log( event);
      this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {

      const fd = new FormData();
      fd.append('imagen', this.selectedFile.name);

      // this.globalService.getServerAndPort
      this.httpClient.post<FormData>( 'http://localhost:3051' + '/lotes/3/imagen-upload' , fd)
        .subscribe( res => {
            console.log(res);
        });

  }


}
