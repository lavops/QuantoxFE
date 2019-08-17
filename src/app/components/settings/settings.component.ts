import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  public updateUser = {
    name : null,
    bio : null,
    isPrivate: false,
    password : null,
    password_confirmation: null,
    image : ''
  };

  public error = null;

  constructor(
    private Jarwis: JarwisService,
    private router: Router
  ) { }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      console.log(event.target.files[0]);
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.updateUser.image = event.target.result;
      };
    }
  }

  onSubmit() {
    // console.log(this.updateUser)
    this.Jarwis.updateProfile(this.updateUser).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  ngOnInit() {
    this.Jarwis.getSettingsData().subscribe(
      data => this.handleResponseGetSettingsData(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    // console.log(data);
    this.router.navigateByUrl('/profile');
  }

  handleResponseGetSettingsData(data) {
    // console.log(data);
    this.updateUser.name = data.name;
    this.updateUser.bio = data.bio;
    this.updateUser.isPrivate = data.isPrivate;
    this.updateUser.image = data.imgURL;
  }

  handleError(error) {
    this.error = error.error.error;
  }


}
